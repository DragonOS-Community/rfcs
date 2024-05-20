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
      copyCode: {},//复制
      searchPro: true,//搜索
      watermark:true,//水印
      comment: {
        // 选择一个评论服务
        provider: "Waline",

        // 服务选项
        serverURL: "...", // your serverURL
      },//
      prismjs: {
        light: "ateliersulphurpool-light",
        dark: "atom-dark",
      },
    },
    //隐藏打印
    print: false,
    //全屏
    fullscreen: true,
    //纯净模式
    pure: true,
    //导航栏
    navbar: [
      {
        text: "指南",
        link: "/zh/guide/README.md",
        icon: "lightbulb",
        // 仅在 `/zh/guide/` 激活
        activeMatch: "^/zh/guide/$",
      },
      { text: "配置", link: "/zh/config/README.md", icon: "config" },
      {
        text: "常见问题",
        link: "/zh/faq.md",
        icon: "circle-question",
        // 会在 `/zh/faq` 开头的路径激活
        // 所以当你前往 `/zh/faq/xxx.html` 时也会激活
        activeMatch: "^/zh/faq",
      },
    ],
    //侧边栏
    sidebar: [
      {
        text: "指南",
        link: "/zh/guide/README.md",
        icon: "lightbulb",
        // 仅在 `/zh/guide/` 激活
        activeMatch: "^/zh/guide/$",
      },
      { text: "配置", link: "/zh/config/README.md", icon: "config" },
      {
        text: "常见问题",
        link: "/zh/faq.md",
        icon: "circle-question",
        // 会在 `/zh/faq` 开头的路径激活
        // 所以当你前往 `/zh/faq/xxx.html` 时也会激活
        activeMatch: "^/zh/faq",
      },
    ],
//页脚
      footer: "",
    


  }),
});
