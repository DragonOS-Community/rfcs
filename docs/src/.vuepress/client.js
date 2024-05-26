import { defineClientConfig } from "vuepress/client";
import { defineConfig, searchForWorkspaceRoot } from 'vite'

export default defineConfig({
    enhance({ app, router, siteData }) {},
    setup() {},
    rootComponents: [],
  server: {
    fs: {
      allow: [
        // search up for workspace root
        searchForWorkspaceRoot(process.cwd()),
        // your custom rules
        '/path/to/custom/allow_directory',
        '/path/to/custom/allow_file.demo',
      ],
    },
  },
})
