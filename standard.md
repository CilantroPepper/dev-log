---
outline: deep
---

# 编码规范

本规范适用于CSZC-ToC项目的前端编码守则，请仔细阅读本规范，并且在实际开发中严格遵循。

规范并非复杂化开发流程，而是将编码风格标准化、系统化，防止屎山代码过早出现，并且让每一个接手该项目的人都能轻易理解业务代码。

本章将从文件组织结构、HTML、SCSS、TypeScript、Vue、Git协作等方面介绍ToC的前端编码规范。

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



