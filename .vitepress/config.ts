import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "Cream Client",
  description: "Cream Client - Responsive Application",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'CC Tools', link: '/cc-tools' },
      { text: 'useApi Hook', link: '/hooks' }
    ],

    sidebar: [
      {
        text: '文档',
        items: [
          { text: '工程指南', link: '/guide' },
          { text: '编码规范', link: '/standard' },
          { text: 'CC Tools', link: '/cc-tools' },
          { text: 'useApi Hook', link: '/hooks' }
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/CilantroPepper/Cream-Client' }
    ]
  },
  outDir: './docs',

})
