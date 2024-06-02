import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "博客演示",
  description: "vuepress-theme-hope 的博客演示",
 
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
      "/",
      "/demo/",
      {
        text: "博文",
        icon: "pen-to-square",
        prefix: "/posts/",
        children: [
          {
            text: "苹果",
            icon: "pen-to-square",
            prefix: "apple/",
            children: [
              { text: "苹果1", icon: "pen-to-square", link: "1" },
              { text: "苹果2", icon: "pen-to-square", link: "2" },
              "3",
              "4",
            ],
          },
          {
            text: "香蕉",
            icon: "pen-to-square",
            prefix: "banana/",
            children: [
              {
                text: "香蕉 1",
                icon: "pen-to-square",
                link: "1",
              },
              {
                text: "香蕉 2",
                icon: "pen-to-square",
                link: "2",
              },
              "3",
              "4",
            ],
          },
          { text: "樱桃", icon: "pen-to-square", link: "cherry" },
          { text: "火龙果", icon: "pen-to-square", link: "dragonfruit" },
          "tomato",
          "strawberry",
        ],
      },
      {
        text: "V2 文档",
        icon: "book",
        link: "https://theme-hope.vuejs.press/zh/",
      },
    ],
    //侧边栏
    /*sidebar: [
    "",
    {
      text: "如何使用",
      icon: "laptop-code",
      prefix: "demo/",
      link: "demo/",
      children: "structure",
    },
    {
      text: "文章",
      icon: "book",
      prefix: "posts/",
      children: "structure",
    },
    {
      text: "幻灯片",
      icon: "person-chalkboard",
      link: "https://plugin-md-enhance.vuejs.press/zh/guide/content/revealjs/demo.html",
    },
    "intro",
  ],*/
//页脚
      footer: "",
      
   
  }),
});
