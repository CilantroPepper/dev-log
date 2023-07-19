import{d as r,o as t,c,r as i,R as u,_ as C,k as e,J as l,w as a,a as s,U as p}from"./chunks/framework.c270b6c9.js";const v=r({__name:"tag",props:{level:{}},setup(d){return(n,_)=>(t(),c("div",{class:"tag-root",style:u(`--color: var(--level-${n.level});`)},[i(n.$slots,"default",{},void 0,!0)],4))}});const o=C(v,[["__scopeId","data-v-bee4db95"]]),y=e("h1",{id:"编码规范",tabindex:"-1"},[s("编码规范 "),e("a",{class:"header-anchor",href:"#编码规范","aria-label":'Permalink to "编码规范"'},"​")],-1),h=e("p",null,"本规范适用于CSZC-ToC项目的前端编码守则，请仔细阅读本规范，并且在实际开发中严格遵循。",-1),m=e("p",null,"规范并非复杂化开发流程，而是将编码风格标准化、系统化，防止屎山代码过早出现，并且让每一个接手该项目的人都能轻易理解业务代码。",-1),D=e("p",null,"本章将从文件组织结构、HTML、SCSS、TypeScript、Vue、Git协作等方面介绍ToC的前端编码规范。",-1),A=e("p",null,"在正式开始之前，先对编码规范进行以下阐述：规范分为：",-1),f=e("h2",{id:"文件结构",tabindex:"-1"},[s("文件结构 "),e("a",{class:"header-anchor",href:"#文件结构","aria-label":'Permalink to "文件结构"'},"​")],-1),F=p('<p>页面组件必须放置在 <code>src/views</code> 中，并且必须为每一个独立页面创建与路由路径一致的文件夹然后将里面的 <code>index.vue</code> 作为页面入口组件。</p><p>比如路由 <code>/sys/user</code> 访问的页面，入口组件应放在 <code>src/views/sys/user/index.vue</code>，而路由 <code>/sys/setting</code> 访问的页面，入口组件应放在 <code>src/views/sys/setting/index.vue</code></p><div class="danger custom-block"><p class="custom-block-title">DANGER</p><p>如果组件物理地址放置错误，将导致路由无法按预期访问到！！！</p></div>',3),T=e("p",null,[s("必须将静态图像资源放置在 "),e("code",null,"src/asstes/images"),s(" 的子级下，如果有需要可以在目录下创建子级目录后放置。同时需要注意的是，静态资源不能通过相对路径/绝对路径直接访问，这在下面会详细介绍。")],-1),g=p(`<p>当一个能被路由独立访问的页面拥有自己的子组件时，必须将这些子组件放在页面所在的页面目录下的 <code>components</code> 目录的子级下。如果这些子组件有非常多时，你也可以在页面目录下的 <code>components</code> 目录下创建子目录。</p><p>例如，假设 <code>/record</code> 页面拥有 <code>menu.vue</code> | <code>modal.vue</code> 两个子组件，那么他们之间的目录结构应该是：</p><div class="language-shell"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#FFCB6B;">record</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">--</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">index.vue</span></span>
<span class="line"><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">--</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">components</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">--</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">menu.vue</span></span>
<span class="line"><span style="color:#A6ACCD;">   </span><span style="color:#89DDFF;">|</span><span style="color:#FFCB6B;">--</span><span style="color:#A6ACCD;"> </span><span style="color:#C3E88D;">modal.vue</span></span></code></pre></div>`,3),S=e("blockquote",null,[e("p",null,"持续补充中 ...")],-1),x=JSON.parse('{"title":"编码规范","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"standard.md","filePath":"standard.md"}'),b={name:"standard.md"},k=Object.assign(b,{setup(d){return(n,_)=>(t(),c("div",null,[y,h,m,D,A,e("ul",null,[e("li",null,[l(o,{level:1},{default:a(()=>[s("强制")]),_:1}),s("：必须在编码过程中严格执行的规范，违反被其标记的规则将无法通过Pull Request审核。")]),e("li",null,[l(o,{level:2},{default:a(()=>[s("建议")]),_:1}),s("：强烈建议遵循的规范，但是在遇到一些不得不变通的情况时可以不强制执行。")]),e("li",null,[l(o,{level:3},{default:a(()=>[s("推荐")]),_:1}),s("：推荐遵循的标准，通常是让项目更可读、更健壮、更可维护的规约。")])]),f,e("ol",null,[e("li",null,[l(o,{level:1},{default:a(()=>[s("强制")]),_:1}),s(" 页面组件路径"),F]),e("li",null,[l(o,{level:1},{default:a(()=>[s("强制")]),_:1}),s(" 静态图像资源路径"),T]),e("li",null,[l(o,{level:1},{default:a(()=>[s("强制")]),_:1}),s(" 页面内组件"),g])]),S]))}});export{x as __pageData,k as default};