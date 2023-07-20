[[TOC]]

# `useApi` Hook 文档

ToC汲取已有项目经验，基于业务逻辑封装了一些非常方便且强大的Hooks，本文档将介绍ToC封装的 `useApi` Hook的使用方法和场景。

如果你对Hooks还不是那么了解，你可以将其理解为某些从具体逻辑操作中抽离出的逻辑“组件”，特别的是，这些“组件”不提供任何传统意义上的组件功能，而仅仅是逻辑的封装。而得益于Vue3的细粒度的hooks，ToC封装的hooks不仅仅可以在组件中使用，ToC提供的hooks能用在任何场景。

::: info
ToC的Hooks设计时灵感有很大一部分来自React，你可以看到在使用上很有React风格但又能发挥Vue3细粒度优势的Hook。
:::

- `useApi` 用于代理api，是ToC最重要的Hook
- **禁止直接调用api，所有api调用都必须通过 `useApi` 的代理！！**

## 设计理念

api调用是一个数据层的异步调用，而通常其返回数据会被视图层外显。为了将数据加载到视图层，传统的加载方式是：

- 定义一个响应式变量
- 在组件 `mounted` 阶段调用api，等待其执行结束，将返回值赋值给响应式变量
- 执行开始前显示加载，执行结束（无论成功还是失败）关闭显示。

不难看出，这一套流程是每一个api调用都必须经历的阶段，也就是在逻辑上是**可复用的**。于是，ToC将这套流程从组件中抽离出来，加以优化改造成一个hook。

## 定义

- 形式化定义

    ```ts
    type AsyncFunction<T, K> = (p?: K) => Promise<T>
    type ApiHook<T, K> = [Ref<T | undefined>, AsyncFunction<T, K>]

    function useApi<T, K = CommonRequest>(api: AsyncFunction<T, K>, loading?: boolean, loadingText?: string): ApiHook<T, K> 
    ```

- 说人话版
  - 传入参数：
    |参数位置|类型|必需|默认值|说明|
    |:-:|:-:|:-:|:-:|:-:|
    |0|`<T, K>(p?: K) => Promise<T>`|是|/|一个返回 `Promise` 的方法，需要传入在 `src/apis` 目录下定义的api方法|
    |1|`boolean`|否|true|是否显示加载|
    |2|`boolean`|否|''|显示什么加载文字|
  - 返回值：一个含有**两个元素的数组**，下面是数组中的元素类型
    |位置|类型|说明|
    |:-:|:-:|:-:|
    |0|`Ref<T>`|响应式变量|
    |1|`(p?: K) => Promise<T>`|加载响应式变量的异步方法|

    > 说明：这里的 `T` | `K` 由引元的**第一个参数**决定（二者保持一致的对应）。

## 使用

### 在某个组件的 `setup` 中，直接引用

```ts
const [captcha, setCaptcha] = useApi<CaptchaResult>(userApi.getPicCaptcha)
// ...
const handler = {
    /** 处理组件上的某个点击事件 */
    onClickCaptcha() {
        /** 刷新图形验证码 */
        setCaptcha()
    },
    // ...
}
```

::: tip :bulb:最佳实践
使用 `ES6` 的解构语法接收 `useApi` 的返回值。这很React！！
:::

- 第一个参数就是响应式变量，可以在视图中直接使用，或在 `setup` 中的其他地方以 `xx.value` 的形式访问。
- 第二个参数是更新响应式变量，调用时需要传入想要传递给api方法的参数

### API方法的入参规约

API方法的入参要么是 `undefined` 要么是继承自 `CommonRequest` 的对象。下面是 `CommonRequest` 的定义：

```ts
interface CommonRequest {
    [k: string]: string | number
}
```

其实，`CommonRequest` 等价于 `Record<string, string | number>`，说白了就是一个属性值都为 `string` 或 `number` 的对象。

你将不会在ToC的api调用层看到任何高于 `CommonRequest` 的入参类型定义，ToC将接口约束这一层交给了更高层！！而hook层提供**泛型**来支持类型约束，所以**任何视图层的api调用都必须通过 `useApi` 的代理**。

即使hook层提供类型约束支持，但也仅仅严格要求使用者明确响应式变量的类型，而对于api调用方法的入参约束并不强制显式指定，因为不是所有接口都有必要严格指定一个类型约束，一味地要求严格的类型约束将加大开发者的**心智负担**，让代码变得**很重**。

相反的，`useApi` 提供了一种弹性的方式，开发者可以在视图层的 `type.ts` 中定义相关api调用入参类型约束，然后将其显式传入 `useApi` 的类型参数的**第二个参数**中。

::: tip
`useApi` 中：

第一个类型参数指定响应式变量的类型，是必须明确指定的

第二个类型参数指定api调用方法的入参类型，默认退化为 `CommonRequest`，可选地传入。
:::

::: warning
请注意，如果你显式传入了第二个类型参数，那么其必须继承自 `CommonRequest`！！

如：

```ts
export interface SomeRequestType extends CommonRequest {
    // ...
}
```

`useApi` 返回值中的数组第一个元素是响应式对象，第二个元素是响应式对象的更改函数。

当你想要更改第一个元素的响应式对象的值时，你可以直接调用第二个元素的更改函数，其封装了加载、异步获取、错误处理、响应式对象赋值的一系列操作。
:::

::: tip
即使第二个函数的执行结果是一个 `Promise`，并会将响应式变量的**新值**回调，你还是不应该利用它来再更改第一个元素的响应式对象，因为其值已经是最新状态了，再次更改没有任何意义！

只有在你想获得类似Vue3中 `watch` 钩子的效果时，你才应该使用该 `Promise` 回调的值。（下面第二节会给出实际的例子）
:::

### 在非组件中使用

Vue3对Hooks的细粒度支持使我们可以在非组件环境中也使用hooks，说白了就是，`useApi` 可以用在任何你想用的地方。下面是 `init.ts` 中的实例：

```ts
const [basicConfig, setBasicConfig] = useApi(sysApi.getSysBaseList<BasicConfig>) 
setBasicConfig().then(() => {
    system.setBasicConfig(basicConfig.value)
})
```

这个例子还反映了上一节所说的，利用响应式对象更改函数执行后的 `Promise` 回调来达到 `watch` 的效果，也就是说，你可以利用其回调来完成一些**副作用影响**。

### 延申

`useApi` Hook提供的思路应该被用在更多的地方，当许多组件拥有非常庞大、笨重、冗余的逻辑操作时，封装类似的Hook可以极大提高代码质量。

使用了 `useApi` 之后，`setup` 中的任何异步数据初始化都无需使用 `onMounted` 钩子了，你只需要非常简单地调用设置响应式对象的方法（还记得吗？`useApi` 返回值的第二个元素）来完成初始化。

相似的，如果有任何其他非api调用获取但依然需要异步完成的初始化操作，你可以为该视图编写自定义的hooks来完成初始化工作。
