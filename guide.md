# 工程指南

本指南旨在介绍CSZC-ToC项目（以下简称ToC）的项目结构和开发指引。

> 本文档适合初次上手ToC项目的新人阅读。

## 项目概述

ToC为计算机学院综测系统中的C端子系统，主要针对的使用群体为**学生**，在整个综测评审过程中，主要用于学生查看信息、填报材料的环节。考虑到B端系统对移动端的适配性较低，ToC更加注重于移动端和桌面端的双端全量支持，也即双端的**响应式布局**。

在此介绍两个重要概念：**WAP端和PC端**：

::: tip
WAP端：窄屏设备，也即移动端，当前配置下默认为屏幕宽度小于800px的设备

PC端：宽屏设备，也即桌面端，当前配置下默认为屏幕宽度大于等于800px的设备
:::

换言之，WAP端和PC端应该实现完全相同的业务，但在表现形式上应针对宽屏和窄屏设备做出不同的兼容。例如：
宽屏设备在横向空间可以容纳更多的分栏，故可以对卡片等组件使用**横向flex**布局，而窄屏设备横向空间不足，在容纳相同的卡片时应该采用**纵向flex**布局。

在[深入响应式布局](#深入响应式布局)中，还会详细介绍响应式布局实现的解决方案，以及ToC现有基本框架的实现实例。

::: warning
特别地，在对WAP端实现完全兼容的情况下，也必须格外注意PC端的使用体验，因为综测系统的特殊性，在很大可能下，用户是通过PC设备访问的。
:::

ToC基于Web构建，用户通过Browser(也就是浏览器)使用ToC。得益于Web技术的飞速发展，现如今已经有非常多开箱即用的技术栈可以帮助我们进行敏捷开发，而基于各方面考虑，ToC的技术选型为：**Vite + Vue3 + TypeScript + SCSS + ElementPlus + Pinia + VueRouter**，下面将会详细介绍各个技术栈如何帮助我们更便捷地构建一个优秀的产品。

1. **Vite**

    Vite是一个现代的前端开发和构建工具，也是Vue3的官方推荐工具链中的构建工具，它开箱即用地提供极速启动服务、热重载技术、TS天然支持等等好处。

    > Vite 官方文档：<https://cn.vitejs.dev/>

2. **Vue3**

    Vue是中文生态中最火爆的Web前端框架，本项目基于Vue3快速构建SPA(Single Page Application 单页应用)。

    > Vue3官方文档：<https://cn.vuejs.org/>

    ::: info
    如果你是第一次接触SPA(单页应用)的概念，请不要被迷惑了，单页是指打包构建完只会有一个HTML文件，而所有页面切换、路由等等的操作都被JavaScript接手了，并不是ToC只有一个页面的意思！ToC借助Vite、Vue和VueRouter的能力实现了非常独特的路由管理机制，后面也会详细介绍ToC独具一格的路由设计。
    :::

    ::: warning
    你应该着重关注Vue3的**组合式API**，这在ToC中大量使用，甚至于我们不会使用任何非组合式API，也就是选项式API不是ToC中的最佳实践！

    特别地，你需要学会如何使用**setup语法糖**，你将会在编码规范中看到setup语法糖是编写Vue组件的第一范式！！

    同样重要的还有**hook**，你应该学会利用Vue的响应式原理编写或使用自定义hook。
    :::

3. **TypeScript**

    ToC全量使用TypeScript！！TS的类型特性将帮助ToC搭建更加健壮且更易维护的模块，任何人为编写的JS都是不被允许的。包括Vue组件在内，ToC所有的模块都基于TypeScript编写。

    > TypeScript参考文档：<https://www.tslang.cn/docs/home.html>

4. **SCSS**

    使用这种CSS扩展语言可以帮助我们减少CSS代码量，你不需要对SCSS掌握的很深入，只需要学会利用其嵌套CSS的特性、SCSS变量的特性即可。剩下的，就是深入原生CSS，着重掌握**flex**布局（纵向或横向）。

    ::: tip
    在ToC中，所有自定义样式的第一范式就是：**使用flex布局**。
    :::

5. **ElementPlus**

    ElementPlus 是基于Vue3构建的优秀的组件库，开箱即用地提供了非常多实用组件，ToC已经对ElementPlus进行了一定的客制化且进行了按需引入优化，开发者只需要按照ElementPlus文档自由使用其组件即可。你也可以在运行项目后进入 `http://localhost:81/s/guide/` 查看组件示例，该部分的源码在 `/src/views/guide/index.vue` 中。

    > ElementPlus官方文档：<https://element-plus.org/zh-CN/component/button.html>

6. **Pinia**

    一个Vue3官方推荐的、非常优雅、深度TS类型支持的Vue3状态库。什么是状态库？你可以理解为放着全局变量的地方，且这些变量是**响应式**的。也就是我们可以非常简便且没有任何负担或者副作用地引用全局状态库里的东西，这在一个对象需要被不同层级的很多组件引用时非常有用，它能保证所有组件的引用值保持同步。

    > Pinia官方文档：<https://pinia.vuejs.org/zh/>

    ::: info
    如果响应式变量这个词比较晦涩难懂，那可以理解为：有一个变量B引用了某个**变量A**，而在另一个地方改变了这个变量A，那么不需要手动更改变量B，变量B的值会自动更新，那么这个**变量A**就是响应式变量。响应式变量的值一旦改变，任何依赖于这个响应式变量的对象都会自动重新计算得到新的值。

    关于响应式，你可以查看Vue3官方文档中的深入阐释。
    :::

7. **VueRouter**

同样是Vue3官方推荐的路由管理库，但是作为关注业务核心的开发人员，你无需过多在意ToC在架构上对VueRouter进行的配置细节，你只需要知道ToC总体上拥有两大路由：TabBar路由和Stack路由，在后面[深入路由管理](#深入路由管理)中，你将会看到对这两个名词最具体的介绍。

> VueRouter官方文档：<https://router.vuejs.org/zh/>

除此之外，ToC还引入了 Animate.css 作为基础的动画库，如果有任何设计需要，也可以直接使用 Animate.css 提供的动画效果。具体使用方法请见官方文档：<https://animate.style/>

## 环境及依赖

### SDK依赖

- Node.js v20.x+
- npm v8.7+

### npm依赖下载

进入项目目录后，终端输入：

```shell
npm install
```

### Dev环境运行

项目目录终端输入：

```shell
npm run dev
```

在Dev运行环境下，Vite提供了非常便捷的热更新功能，即更改代码保存后会立刻反映到运行结果上。

### Production环境打包

项目目录终端输入：

```shell
npm run build
```

### 环境变量

注意到项目目录中有两个 `.env` 文件，它们标识了不同环境下应该引入到项目中的环境变量。这种引入是Vite提供的，无需手动引入，因而如果你想添加额外的环境变量只需在对应环境下的 `.env` 文件进行更改，然后再在 `src/config.ts` 文件中进行全局引用即可。

- `.env.development`：在development环境下会被引入项目
- `.env.production`：在production环境下（打包时）会被引入项目
- `src/config.ts`引用环境变量的方式：可以学习已有的引用：

  ```ts
  export const config = {
    app: {
        // ...
        xxx: import.meta.env.VITE_XXX,
        // ...
    },
    // ...
  } 
  ```

  然后在其他需要引用这个环境变量的地方，就只需要引用 `config.app.xxx`

::: warning
自定义的环境变量必须是 `VITE_` 开头的！！具体细节请参见Vite官方文档
:::

## 项目结构

项目结构树及其重要部分解释

```shell
c-app
├─ .env.development - 开发环境下的环境变量
├─ .env.production  - 生产环境下的环境变量
├─ index.html       - 根主页，可以不管
├─ package.json     - 依赖记录、运行脚本等
├─ public           - 公开静态资源目录，可以不管
├─ src              - 核心资源
│  ├─ apis          - 所有API（接口）调用，目前后端还未给出接口所以是空目录
│  ├─ App.vue       - Vue根组件，可以不管
│  ├─ assets        - 静态资源目录，建议将所有全局静态资源都放在这里
│  │  ├─ images     - 静态图片目录
│  │  └─ styles     - 全局样式目录
│  ├─ components    - 封装的全局组件
│  ├─ config.ts     - 核心配置文件
│  ├─ layouts       - 基础响应式布局目录，业务开发中可以不管
│  ├─ main.ts       - 入口文件，可以不管
│  ├─ tab.ts        - Tab页配置文件
│  ├─ utils         - 外部工具目录
│  │  ├─ assets.ts  - 静态资源管理，所有静态资源都必须通过它来管理访问
│  │  ├─ hooks      - hooks目录
│  │  ├─ init.ts    - 初始化项目的脚本
│  │  ├─ request.ts - 基于Fetch API封装的请求文件，所有API都会基于这个封装文件来进行
│  │  ├─ router.ts  - 路由配置文件
│  │  ├─ storage.ts - 本地缓存管理
│  │  ├─ stores     - 全局状态库目录
│  │  └─ tools.ts   - 工具方法，包含一个非常常用的工具对象：cc
│  ├─ views         - 页面目录，编写业务代码基本集中在这里
└─ vite.config.ts   - Vite配置文件
```

## 静态资源

记住一个核心要义：所有在Vue组件中出现的静态图像资源，都必须放置在 `src/assets/images` 下，并且都必须要经过 `src/utils/assets.ts` 文件的控制来访问。`assets.ts` 管理静态资源的核心是基于Vite的静态资源处理能力，将静态资源的路径作为字符串引入（`import`），于是你可以看到 `assets.ts` 中有这样的代码：

```ts
import vue from '@/assets/images/vue.svg'
import scnuLogo from '@/assets/images/scnu-logo.png'
import notFound from '@/assets/images/notFound.png'
import internalError from '@/assets/images/internal-error.svg'

/** @module 所有的静态图形资源都应该通过这里引用 */
export const assets = {
    vue,
    scnuLogo,
    notFound,
    internalError
}
```

而在需要用到静态资源的地方（例如HTML中的 `<img/>` 标签）就可以这样引用：

```vue
<img :src="assets.scnuLogo" />
```

采用 `assets.ts` 统一管理的方式，首先能获得TS的代码提示支持，引入图像时根据语义可以快速定位图像，同时又能避免因为生产环境下根路径（`base`）的改变带来的副作用（如找不到图像等等）。

::: info
只有在 `index.html` 中唯一一次用到的静态文件，就建议放置在 `public` 目录中，因为只有受到Vue控制的模块才能享受 `assets.ts` 带来的静态资源管理能力。而目前来说，仅仅只有 `favicon` 需要这样处理，故你只能在 `public` 目录看到一张图片。
:::

## 工具方法

ToC已经对几乎所有常用基础功能进行了代码封装，并且被集成到了 `src/utils/tools.ts` 文件中，其导出一个名为 `cc` 的对象。

目前，`cc` 已经包含了：页面切换、全局交互、选择本地文件等基础模块。你将在[CC Tools 文档](/cc-tools)中看到该工具对象的具体用法和介绍。

## 本地缓存

ToC也针对本地缓存封装了一套API，ToC遵循**任何缓存都必须经过JSON序列化**的原则，`src/utils/storage.ts` 提供了这样的一套API。你只需要知道：

- `storage.set` 往缓存里丢东西
- `storage.get` 往缓存里拿东西

其中JSON序列化、反序列化的过程已经被封装好。如果报错，说明操作了不支持JSON序列化的数据。只要从头到尾对本地缓存的操作都采用这个API，那么这个报错几乎不可能出现。

::: tip
最佳实践，在使用 `storage.set` 时需要传入缓存键名，最佳方法不是时时刻刻硬编码写入，而是引用 `config.ts` 中 `storage` 的相应配置，你将在紧接着这一小节看到 `config.ts` 的介绍。
:::

## 全局配置

`src/config.ts` 存放了静态全局配置，静态意味着这些配置在运行过程中不应该被动态改变，故应该是**只读**的。

其中：

- `app` 包含了应用配置，有WAP端的TabBar高度、PC端的Menu宽度、API前缀、根路径、PC端基准屏宽、默认标题栏标题、应用描述等等信息。
- `color` 包含了全局颜色配置，有意思的是ToC在初始化时会将 `color` 中定义的颜色全部嵌入HTML的 `<body></body>` 中，采用了CSS变量的方法，于是你可以在任何Vue组件中使用CSS引用这些颜色，它们的命名规则是：

  ```css
  --GLOBAL-${config.color定义的颜色名，下划线改为中划线}
  ```

  例如：

  ```css
    .root {
        color: var(--GLOBAL-DARK-GREY);
    }
  ```

  这将让 `.root` 的元素文本颜色变为 `config.ts` 中定义的 `DARK_GREY` 的颜色

  然而，如果你使用的是 `SCSS`, 我们有更加好的最佳实践：利用SCSS变量，变量命名与 `cofig.ts` 中的命名一致，例如：

  ```scss
  .root {
    color: $DARK_GREY;
  }
  ```

  你可以在 `src/assets/styles/global.scss` 中看到所有的全局SCSS变量定义。

- `storage` 包含了本地缓存的键名配置，也就是说在使用本地缓存时，你应该将键名都定义在这，而别处都应该从这里引用。

## 深入响应式布局

> 持续补充中

## 深入路由管理

> 持续补充中
