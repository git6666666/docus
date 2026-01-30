// docusaurus.config.js
// @ts-check

// @ts-check
import {themes as prismThemes} from 'prism-react-renderer';

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'My Minimal Blog',
  tagline: 'Markdown-first, minimal, fast.',
  //favicon: 'img/favicon.ico',

  // 生产部署域名：Cloudflare Pages 给你的 *.pages.dev 或自定义域名
  // url + baseUrl 用于生成正确的资源路径与路由。[3](https://docusaurus.org.cn/docs/api/themes)
  url: 'https://jeky.pages.dev',
  baseUrl: '/',

  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',

  presets: [
    [
      '@docusaurus/preset-classic',
      {
        // 关闭 docs（本项目只做博客）[2](https://docusaurus.io/docs/api/themes/@docusaurus/theme-classic/)
        docs: false,

        // Blog-only 模式：让博客挂在根路由 / 上 [2](https://docusaurus.io/docs/api/themes/@docusaurus/theme-classic/)
        blog: {
          routeBasePath: '/',
          showReadingTime: false,
          blogSidebarCount: 0, // 0 = 不显示侧边栏（更极简）[2](https://docusaurus.io/docs/api/themes/@docusaurus/theme-classic/)
          postsPerPage: 'ALL',
          blogListComponent: '@site/src', // 关键：自定义列表页
        },

        
      },
    ],
  ],

  themeConfig: {
    // 极简导航：只显示标题；你也可以把 items 清空
    navbar: {
      title: 'Blog',
      items: [],
    },

    footer: {
      style: 'dark',
      links: [],
      copyright: `© ${new Date().getFullYear()} My Minimal Blog`,
    },
  },
};

export default config;
