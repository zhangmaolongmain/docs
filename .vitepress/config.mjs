import { defineConfig } from 'vitepress'

// https://vitepress.dev/reference/site-config
export default defineConfig({
  base: "/docs/",
  title: "zhangmaolong Note",
  description: "A VitePress Site",
  themeConfig: {
    // https://vitepress.dev/reference/default-theme-config
    nav: [
      { text: '主页', link: '/' },
      { text: '服务端', link: '/md/服务端/README.md' },
      // { text: '数据库', link: '/markdown-examples' },
      // { text: 'BUG收集', link: '/markdown-examples' },
    ],

    sidebar: [
      {
        text: '服务端',
        items: [
          { text: '最佳实践', link: '/md/服务端/Java/最佳实践/最佳实践.md' },
        ]
      }
    ],

    footer:{
      copyright: "版权所有 © 2024 张茂龙"
    },

    socialLinks: [
      { icon: 'github', link: 'https://github.com/zhangmaolongmain' }
    ]
  }
})
