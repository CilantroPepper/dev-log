---
outline: deep
---

# 编码规范

本规范适用于Cream Client Responsive App的前端编码守则，请仔细阅读本规范，并且在实际开发中严格遵循。

规范并非复杂化开发流程，而是将编码风格标准化、系统化，防止屎山代码过早出现，并且让每一个接手该项目的人都能轻易理解业务代码。

本章将从文件组织结构、HTML、SCSS、TypeScript、Vue、Git协作等方面介绍CC的前端编码规范。

在正式开始之前，先对编码规范进行以下阐述：规范分为：

<script setup>
import Tag from './components/Tag.vue'
</script>

- <Tag :level="1">强制</Tag>：必须在编码过程中严格执行的规范，违反被其标记的规则将无法通过Pull Request审核。
- <Tag :level="2">建议</Tag>：强烈建议遵循的规范，但是在遇到一些不得不变通的情况时可以不强制执行。
- <Tag :level="3">推荐</Tag>：推荐遵循的标准，通常是让项目更可读、更健壮、更可维护的规约。

## 文件结构

1. <Tag :level="1">强制</Tag> 页面组件路径

    页面组件必须放置在 `src/views` 中，并且必须为每一个独立页面创建与路由路径一致的文件夹然后将里面的 `index.vue` 作为页面入口组件。

    比如路由 `/sys/user` 访问的页面，入口组件应放在 `src/views/sys/user/index.vue`，而路由 `/sys/setting` 访问的页面，入口组件应放在 `src/views/sys/setting/index.vue`

    ::: danger
    如果组件物理地址放置错误，将导致路由无法按预期访问到！！！
    :::

2. <Tag :level="1">强制</Tag> 静态图像资源路径

    必须将静态图像资源放置在 `src/asstes/images` 的子级下，如果有需要可以在目录下创建子级目录后放置。同时需要注意的是，静态资源不能通过相对路径/绝对路径直接访问，这在下面会详细介绍。

3. <Tag :level="1">强制</Tag> 页面内组件

    当一个能被路由独立访问的页面拥有自己的子组件时，必须将这些子组件放在页面所在的页面目录下的 `components` 目录的子级下。如果这些子组件有非常多时，你也可以在页面目录下的 `components` 目录下创建子目录。

    例如，假设 `/record` 页面拥有 `menu.vue` | `modal.vue` 两个子组件，那么他们之间的目录结构应该是：

    ```shell
    record
    |-- index.vue
    |-- components
       |-- menu.vue
       |-- modal.vue
    ```

4. <Tag :level="1">强制</Tag> 局部样式文件

    局部样式文件（CSS/SCSS）必须放在其作用域根目录的 `assets` 文件夹中，例如影响登录界面的 `login.scss` 必须放在 `src/views/login/assets` 目录下。

5. <Tag :level="1">强制</Tag> 文件命名

    禁止拼音、拼音缩写命名！请全部使用能表达文件用途的英文命名。针对不同的文件类型，有不同的规范区别：

    - Vue文件：普通组件采用**小驼峰**的方式命名，全局组件采用**大驼峰**的方式命名
    - TypeScript文件：采用**小驼峰**的方式命名
    - SCSS、CSS文件：采用**小驼峰**的方式命名
    - 文件夹：采用中划线 `-` 连接命名

    下面给出几个最佳实践的例子：

    - 目录 `src/layouts/not-found`
    - TS文件 `src/utils/errorHandler.ts`
    - Vue局部组件 `loginModal.vue`
    - Vue全局组件 `Loading.vue`
    - SCSS文件 `loginModal.scss`

> 持续补充中 ...

## HTML

1. <Tag :level="1">强制</Tag>：任何标签必须闭合（必须有 `/`）

   - 比如：`<div></div>`，如果是原生标签 `<img />` 这一类的，必须加上 `/`，即不可以写成 `<img>`
  
2. <Tag :level="2">建议</Tag>：去除不必要的标签后缀。

    - Vue组件中，如果是带 `slot` 的组件，则写成：

     ```vue
     <el-button>插槽内容</el-button>
     ```

    - 如果是不带 `slot` 的组件，则应该舍弃不必要的标签后缀：

    ```vue{5}
    <!-- 不建议的写法 -->
    <el-input></el-input>

    <!-- 建议的写法 -->
    <el-input />
    ```

3. <Tag :level="2">建议</Tag>：标签**全部小写**，使用 `-` 连接两个单词，如：`<el-button></el-button>`

4. <Tag :level="2">建议</Tag>：使用 `<img />` 标签来实现背景图片，而不是在 `CSS` 中使用 `background-image` 属性

   - 因为 `<img />` 标签在语义上更加可读且易于维护和自定义扩展，你只需要将父节点设置成 `position: relative`，然后将子节点（`<img />`）设置为 `position: absolute`，然后指定其宽度和高度都为 `100%` 就可以实现背景图片的效果
   - 你可以同时设置 `object-fit` 和 `object-position` 来对图片做一些剪裁/居中处理。

   ::: tip
   子绝父相！！
   :::

## SCSS/CSS

1. <Tag :level="1">强制</Tag>：CSS类名全部小写，使用 `-` 连接两个单词

   比如：`.modal-wrapper`

2. <Tag :level="1">强制</Tag>：CSS变量名全部使用小写，SCSS变量名使用**小驼峰命名**

   上述规则适用于局部定义的变量，而CC预构建定义的全局CSS/SCSS变量全部都是大写。

3. <Tag :level="1">强制</Tag>：CSS类命名必须是指明用途的有意义的英文单词组合，不可以使用拼音！

   - 正确示例：`.menu-wrapper`
   - 错误示例：`.menuWrapper`，`.MenuWrapper`，`.caidan`

4. <Tag :level="1">强制</Tag>：禁止使用不常见的英文缩写。

   - 当英文单词过长导致类名过长时，可以适当使用英文缩写。但选用的缩写必须是主流且常见的。
   - 如果一个英文单词的缩写无法立刻推断出其本意，那么这个缩写就不应该被使用。
   - 宁可保留一个很长的类名，也不可以使用莫名其妙的英文缩写！

   ::: tip :bulb:最佳实践
   常见的缩写：button - btn；description - desc
   :::

5. <Tag :level="1">强制</Tag>：全量使用flex布局，不使用float布局。

   当你显式地指定一个元素的布局方式时，必须使用 `flex` 布局。你可以使用 `flex-direction` 改变其 `flex` 的方向。

   ::: tip :bulb:最佳实践
   将一个元素中的子元素水平+垂直居中：父元素采用 `flex` 布局，同时指定 `align-items: center` 和 `justify-content: center`
   :::

6. <Tag :level="1">强制</Tag>：不使用ID选择器。

   使用类名选择器、自定义属性选择器、伪类选择器等等。

7. <Tag :level="1">强制</Tag>：单位使用 `rem`，不使用 `px` | `em` 。

   CC已经在根节点指定了：`1rem == 10px`，所以 `16px` 与 `1.6rem` 等价，也就是 `rem` 是 `px * 0.1`。

8. <Tag :level="2">建议</Tag>：不指定不对称的 `margin`

   - 如果想要指定元素内的子元素之间的间隔，最好的方式是父级采用 `flex` 布局后，指定 `gap` 来定义。
   - `margin` 只在处理特殊元素或布局时有使用价值。

9. <Tag :level="2">建议</Tag>：指定 `padding` 的同时指定 `box-sizing`

   防止因为 `box-sizing` 为 `content-box` 时将元素撑大而带来的非预期效果。在通常情况下，`border-box` 是 `box-sizing` 的最佳选择。

## TypeScript

1. <Tag :level="1">强制</Tag>：局部变量、对象、方法采用**小驼峰**命名

   - 例如：`passportId`; `validCode`; `userInfo`; `getUserInfo()`

2. <Tag :level="1">强制</Tag>：全局变量、全局对象、枚举类型使用**全部大写**命名

   - 例如：`config.ts` 中定义的 `app` 配置。

3. <Tag :level="1">强制</Tag>：类（class）、接口（interface）使用**大驼峰**命名。

   - 例如：`interface UserInfo`; `class Response`

4. <Tag :level="1">强制</Tag>：任何命名都要使用指明用途的有意义的英文单词组合，**禁止使用拼音**！！

   - 正确示例：`userInfo`; `records`
   - 错误示例：`psb`（职称评审系统后台对“评审表”的定义），``

   ::: info
   你可能会好奇，CC Tools的命名 `cc` 并不是一个符合规范的名字。这是因为，`cc` 作为一个**全局工具类**，里面的工具方法使用率极高，从减少记忆量和代码书写量的角度出发可以接受CC Tools 的命名。

   这样的约定是有约束代价的，就是所有人都必须知道 `cc` 是工具类，这需要依靠全局提示和约束定义。所以除了这个个例外，其他命名禁止采用类似的“偷懒”的方法。

   但请注意，CC Tools内部方法的命名也严格遵循命名规范。
   :::

5. <Tag :level="1">强制</Tag>：hook的命名必须是 `useXXX` 的小驼峰。

   - 例如：`useSystem`; `useApi`

6. <Tag :level="1">强制</Tag>：不允许使用 `var` 来定义变量，请用 `let` 替代。

7. <Tag :level="1">强制</Tag>：能用 `const` 替代 `let` 的对象绝对使用 `const`

8. <Tag :level="2">建议</Tag>；使用 `forEach` | `map` | `reduce` 等增强型循环替代传统循环

9. <Tag :level="2">建议</Tag>：使用 `for const item of xx` | `for const i in xx` 替代传统循环

10. <Tag :level="2">建议</Tag>：不允许使用 `any` 作为变量类型定义

   但是你可以使用类似下面的语句：

   ```ts
   const userInfo: UserInfo = Object.assign(userInfo, storage.get<UserInfo>(config.storage.USER_INFO)) as any
   ```

11. <Tag :level="2">建议</Tag>：任何作用域嵌套超过**两层**的方法、变量、对象等都必须为其增加**类型定义**。

12. <Tag :level="2">建议</Tag>：`Promise` 写成 `async/await` 风格。

13. <Tag :level="3">推荐</Tag>：推荐使用如 `Record`; `Partial`; `Omit`; `Pick`; `Readonly` 这一类TypeScript自带的类型。

14. <Tag :level="3">推荐</Tag>：使用 `Object` 的 `assign` | `entries` | `keys` 等方法快速遍历对象内属性。
