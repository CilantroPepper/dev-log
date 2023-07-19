import{d as _,o as c,c as d,r as u,R as r,_ as h,k as l,J as e,w as o,a as s,U as t}from"./chunks/framework.c270b6c9.js";const C=_({__name:"tag",props:{level:{}},setup(p){return(a,i)=>(c(),d("div",{class:"tag-root",style:r(`--color: var(--level-${a.level});`)},[u(a.$slots,"default",{},void 0,!0)],4))}});const n=h(C,[["__scopeId","data-v-bee4db95"]]),y=l("h1",{id:"编码规范",tabindex:"-1"},[s("编码规范 "),l("a",{class:"header-anchor",href:"#编码规范","aria-label":'Permalink to "编码规范"'},"​")],-1),g=l("p",null,"本规范适用于CSZC-ToC项目的前端编码守则，请仔细阅读本规范，并且在实际开发中严格遵循。",-1),D=l("p",null,"规范并非复杂化开发流程，而是将编码风格标准化、系统化，防止屎山代码过早出现，并且让每一个接手该项目的人都能轻易理解业务代码。",-1),S=l("p",null,"本章将从文件组织结构、HTML、SCSS、TypeScript、Vue、Git协作等方面介绍ToC的前端编码规范。",-1),v=l("p",null,"在正式开始之前，先对编码规范进行以下阐述：规范分为：",-1),F=l("h2",{id:"文件结构",tabindex:"-1"},[s("文件结构 "),l("a",{class:"header-anchor",href:"#文件结构","aria-label":'Permalink to "文件结构"'},"​")],-1),f=t("",3),A=l("p",null,[s("必须将静态图像资源放置在 "),l("code",null,"src/asstes/images"),s(" 的子级下，如果有需要可以在目录下创建子级目录后放置。同时需要注意的是，静态资源不能通过相对路径/绝对路径直接访问，这在下面会详细介绍。")],-1),T=t("",3),m=l("p",null,[s("局部样式文件（CSS/SCSS）必须放在其作用域根目录的 "),l("code",null,"assets"),s(" 文件夹中，例如影响登录界面的 "),l("code",null,"login.scss"),s(" 必须放在 "),l("code",null,"src/views/login/assets"),s(" 目录下。")],-1),b=t("",4),I=l("blockquote",null,[l("p",null,"持续补充中 ...")],-1),x=l("h2",{id:"html",tabindex:"-1"},[s("HTML "),l("a",{class:"header-anchor",href:"#html","aria-label":'Permalink to "HTML"'},"​")],-1),k=l("code",null,"/",-1),P=l("ul",null,[l("li",null,[s("比如："),l("code",null,"<div></div>"),s("，如果是原生标签 "),l("code",null,"<img />"),s(" 这一类的，必须加上 "),l("code",null,"/"),s("，即不可以写成 "),l("code",null,"<img>")])],-1),V=t("",4),B=l("strong",null,"全部小写",-1),E=l("code",null,"-",-1),N=l("code",null,"<el-button></el-button>",-1),R=l("h2",{id:"scss-css",tabindex:"-1"},[s("SCSS/CSS "),l("a",{class:"header-anchor",href:"#scss-css","aria-label":'Permalink to "SCSS/CSS"'},"​")],-1),w=l("code",null,"-",-1),M=l("p",null,[s("比如："),l("code",null,".modal-wrapper")],-1),O=l("strong",null,"小驼峰命名",-1),U=l("p",null,"上述规则适用于局部定义的变量，而ToC预构建定义的全局CSS/SCSS变量全部都是大写。",-1),z=l("ul",null,[l("li",null,[s("正确示例："),l("code",null,".menu-wrapper")]),l("li",null,[s("错误示例："),l("code",null,".menuWrapper"),s("，"),l("code",null,".MenuWrapper"),s("，"),l("code",null,".caidan")])],-1),H=l("ul",null,[l("li",null,"当英文单词过长导致类名过长时，可以适当使用英文缩写。但选用的缩写必须是主流且常见的。"),l("li",null,"如果一个英文单词的缩写无法立刻推断出其本意，那么这个缩写就不应该被使用。"),l("li",null,"宁可保留一个很长的类名，也不可以使用莫名其妙的英文缩写！")],-1),L=l("div",{class:"tip custom-block"},[l("p",{class:"custom-block-title"},"💡最佳实践"),l("p",null,"常见的缩写：button - btn；description - desc")],-1),j=t("",2),q=l("code",null,"margin",-1),X=l("ul",null,[l("li",null,[s("如果想要指定元素内的子元素之间的间隔，最好的方式是父级采用 "),l("code",null,"flex"),s(" 布局后，指定 "),l("code",null,"gap"),s(" 来定义。")]),l("li",null,[l("code",null,"margin"),s(" 只在处理特殊元素或布局时有使用价值。")])],-1),$=l("code",null,"padding",-1),G=l("code",null,"box-sizing",-1),J=l("p",null,[s("防止因为 "),l("code",null,"box-sizing"),s(" 为 "),l("code",null,"content-box"),s(" 时将元素撑大而带来的非预期效果。在通常情况下，"),l("code",null,"border-box"),s(" 是 "),l("code",null,"box-sizing"),s(" 的最佳选择。")],-1),W=l("blockquote",null,[l("p",null,"持续补充中 ...")],-1),Z=l("h2",{id:"typescript",tabindex:"-1"},[s("TypeScript "),l("a",{class:"header-anchor",href:"#typescript","aria-label":'Permalink to "TypeScript"'},"​")],-1),K=l("strong",null,"小驼峰",-1),Q=l("ul",null,[l("li",null,[s("例如："),l("code",null,"passportId"),s("; "),l("code",null,"validCode"),s("; "),l("code",null,"userInfo"),s("; "),l("code",null,"getUserInfo()")])],-1),Y=l("strong",null,"全部大写",-1),ll=l("ul",null,[l("li",null,[s("例如："),l("code",null,"config.ts"),s(" 中定义的 "),l("code",null,"app"),s(" 配置。")])],-1),sl=l("strong",null,"大驼峰",-1),el=l("ul",null,[l("li",null,[s("例如："),l("code",null,"interface UserInfo"),s("; "),l("code",null,"class Response")])],-1),ol=l("strong",null,"禁止使用拼音",-1),nl=t("",2),tl=l("code",null,"useXXX",-1),al=l("ul",null,[l("li",null,[s("例如："),l("code",null,"useSystem"),s("; "),l("code",null,"useApi")])],-1),cl=l("code",null,"any",-1),dl=t("",2),pl=l("strong",null,"两层",-1),il=l("strong",null,"类型定义",-1),_l=l("code",null,"Record",-1),ul=l("code",null,"Partial",-1),rl=l("code",null,"Omit",-1),hl=l("code",null,"Pick",-1),Cl=l("code",null,"Readonly",-1),Dl=JSON.parse('{"title":"编码规范","description":"","frontmatter":{"outline":"deep"},"headers":[],"relativePath":"standard.md","filePath":"standard.md"}'),yl={name:"standard.md"},Sl=Object.assign(yl,{setup(p){return(a,i)=>(c(),d("div",null,[y,g,D,S,v,l("ul",null,[l("li",null,[e(n,{level:1},{default:o(()=>[s("强制")]),_:1}),s("：必须在编码过程中严格执行的规范，违反被其标记的规则将无法通过Pull Request审核。")]),l("li",null,[e(n,{level:2},{default:o(()=>[s("建议")]),_:1}),s("：强烈建议遵循的规范，但是在遇到一些不得不变通的情况时可以不强制执行。")]),l("li",null,[e(n,{level:3},{default:o(()=>[s("推荐")]),_:1}),s("：推荐遵循的标准，通常是让项目更可读、更健壮、更可维护的规约。")])]),F,l("ol",null,[l("li",null,[e(n,{level:1},{default:o(()=>[s("强制")]),_:1}),s(" 页面组件路径"),f]),l("li",null,[e(n,{level:1},{default:o(()=>[s("强制")]),_:1}),s(" 静态图像资源路径"),A]),l("li",null,[e(n,{level:1},{default:o(()=>[s("强制")]),_:1}),s(" 页面内组件"),T]),l("li",null,[e(n,{level:1},{default:o(()=>[s("强制")]),_:1}),s(" 局部样式文件"),m]),l("li",null,[e(n,{level:1},{default:o(()=>[s("强制")]),_:1}),s(" 文件命名"),b])]),I,x,l("ol",null,[l("li",null,[e(n,{level:1},{default:o(()=>[s("强制")]),_:1}),s("：任何标签必须闭合（必须有 "),k,s("）"),P]),l("li",null,[e(n,{level:2},{default:o(()=>[s("建议")]),_:1}),s("：去除不必要的标签后缀。"),V]),l("li",null,[e(n,{level:2},{default:o(()=>[s("建议")]),_:1}),s("：标签"),B,s("，使用 "),E,s(" 连接两个单词，如："),N])]),R,l("ol",null,[l("li",null,[e(n,{level:1},{default:o(()=>[s("强制")]),_:1}),s("：CSS类名全部小写，使用 "),w,s(" 连接两个单词"),M]),l("li",null,[e(n,{level:1},{default:o(()=>[s("强制")]),_:1}),s("：CSS变量名全部使用小写，SCSS变量名使用"),O,U]),l("li",null,[e(n,{level:1},{default:o(()=>[s("强制")]),_:1}),s("：CSS类命名必须是指明用途的有意义的英文单词组合，不可以使用拼音！"),z]),l("li",null,[e(n,{level:1},{default:o(()=>[s("强制")]),_:1}),s("：禁止使用不常见的英文缩写。"),H,L]),l("li",null,[e(n,{level:1},{default:o(()=>[s("强制")]),_:1}),s("：全量使用flex布局"),j]),l("li",null,[e(n,{level:2},{default:o(()=>[s("建议")]),_:1}),s("：不指定不对称的 "),q,X]),l("li",null,[e(n,{level:2},{default:o(()=>[s("建议")]),_:1}),s("：指定 "),$,s(" 的同时指定 "),G,J])]),W,Z,l("ol",null,[l("li",null,[e(n,{level:1},{default:o(()=>[s("强制")]),_:1}),s("：局部变量、对象、方法采用"),K,s("命名"),Q]),l("li",null,[e(n,{level:1},{default:o(()=>[s("强制")]),_:1}),s("：全局变量、全局对象、枚举类型使用"),Y,s("命名"),ll]),l("li",null,[e(n,{level:1},{default:o(()=>[s("强制")]),_:1}),s("：类（class）、接口（interface）使用"),sl,s("命名。"),el]),l("li",null,[e(n,{level:1},{default:o(()=>[s("强制")]),_:1}),s("：任何命名都要使用指明用途的有意义的英文单词组合，"),ol,s("！！"),nl]),l("li",null,[e(n,{level:1},{default:o(()=>[s("强制")]),_:1}),s("：hook的命名必须是 "),tl,s(" 的小驼峰。"),al]),l("li",null,[e(n,{level:2},{default:o(()=>[s("建议")]),_:1}),s("：不允许使用 "),cl,s(" 作为变量类型定义"),dl]),l("li",null,[e(n,{level:2},{default:o(()=>[s("建议")]),_:1}),s("：任何作用域嵌套超过"),pl,s("的方法、变量、对象等都必须为其增加"),il,s("。")]),l("li",null,[e(n,{level:3},{default:o(()=>[s("推荐")]),_:1}),s("：推荐使用如 "),_l,s("; "),ul,s("; "),rl,s("; "),hl,s("; "),Cl,s(" 这一类TypeScript自带的类型。")])])]))}});export{Dl as __pageData,Sl as default};