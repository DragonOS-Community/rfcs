// vite.config.js 或 vite.config.ts
import { defineConfig } from 'vite';

export default defineConfig({
  server: {
    fs: {
      // 允许访问的目录列表
      allow: [
        // 添加包含 back-to-top.svg 文件的目录
        '/home/baiye/node_modules/@vuepress/plugin-back-to-top/lib/client/styles',
        // 或者，如果你想要允许访问整个 node_modules 目录
        '/home/baiye/node_modules',
        '/home/baiye/node_modules/@vuepress/plugin-back-to-top/lib/client/styles/back-to-top.svg'
      ]
    }
  }
});
