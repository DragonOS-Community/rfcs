import { defineUserConfig } from "vuepress";
import theme from "./theme.js";
import { hopeTheme } from "vuepress-theme-hope";

export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "博客演示！！！",
  description: "vuepress-theme-hope 的博客演示",

// 和 PWA 一起启用
// shouldPrefetch: false,
 
  theme: hopeTheme({
    darkmode: "switch",//深色模式
     // 关键词: "iconify", "fontawesome", "fontawesome-with-brands"
    iconAssets: [
      "/base/my/font-icon/resource.js",
      "https://example/my/fonr-icon/resouce.css",
      "fontawesome",
    ],
    //高亮
    plugins: {
      prismjs: {
        light: "ateliersulphurpool-light",
        dark: "atom-dark",
      },
    },
    //隐藏打印
    print: false,
    //全屏
    fullscreen: true,
  }),
});
