import { defineUserConfig } from "vuepress";

import theme from "./theme.js";

export default defineUserConfig({
  base: "/FFFF/",

  lang: "zh-CN",
  title: "小鸡很方",
  description: "vuepress-theme-hope 的文档演示",
  theme,
  head: [
    ['link', { rel: 'icon', href: '/FFFF/logo.png' }]
  ],
  // 和 PWA 一起启用
  // shouldPrefetch: false,
});
