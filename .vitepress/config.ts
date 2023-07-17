import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  title: "CSZC - ToC",
  description: "SCNU Computer School Comprehensive Evaluation System - ToC Subsystem",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: 'CC Tools', link: '/cc-tools' }
    ],

    sidebar: [
      {
        text: '文档',
        items: [
          { text: '工程指南', link: '/guide' },
          { text: '编码规范', link: '/standard' },
        ]
      }
    ],

    socialLinks: [
      { icon: 'github', link: 'https://github.com/CilantroPepper/CSZC-ToC' }
    ]
  },
  outDir: './docs'
})
