import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/FFFF/",

  lang: "zh-CN",
  title: "小鸡很方",
  // description: "vuepress-theme-hope 的文档演示",
  description: "小鸡的个人网站🎈",
  theme,
  head: [
    ['link', { rel: 'icon', href: '/logo.png' }]
  ],
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
