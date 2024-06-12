import { defineClientConfig } from "vuepress/client";
import { useHintContainers } from "/home/baiye/node_modules/vuepress-plugin-md-enhance/lib/client/composables/useHintContainers.js";
import "/home/baiye/node_modules/vuepress-plugin-md-enhance/lib/client/styles/hint/index.scss";

export default defineClientConfig({
  enhance: ({ app }) => {

  },
  setup: () => {
useHintContainers();
  }
});
