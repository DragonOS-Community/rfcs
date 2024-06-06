import { defineUserConfig } from "vuepress";
import { hopeTheme } from "vuepress-theme-hope";
export default defineUserConfig({
  base: "/",

  lang: "zh-CN",
  title: "The DragonOS RFC Book",
  description: "vuepress-theme-hope 的博客演示",
 
  theme: hopeTheme({
    
    darkmode: "switch",//深色模式
     /* 关键词: "iconify", "fontawesome", "fontawesome-with-brands"*/
    iconAssets: [
      "/base/my/font-icon/resource.js",
      "https://example/my/fonr-icon/resouce.css",
      "fontawesome",
    ],
    //高亮
    plugins: {
      copyCode: {},//复制
      searchPro: true,//搜索
      watermark:false,//水印
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
    print: true,
    //全屏
    fullscreen: true,
    //纯净模式
    pure: true,
    //导航栏
    navbar: [
      
    ],
    
      footer: "",
      
   
  }),
});
