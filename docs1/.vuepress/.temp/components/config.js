import { defineClientConfig } from "vuepress/client";
import { hasGlobalComponent } from "/home/baiye/node_modules/@vuepress/helper/lib/client/index.js";

import { useScriptTag } from "/home/baiye/node_modules/@vueuse/core/index.mjs";
import { useStyleTag } from "/home/baiye/node_modules/@vueuse/core/index.mjs";
import Badge from "/home/baiye/node_modules/vuepress-plugin-components/lib/client/components/Badge.js";
import FontIcon from "/home/baiye/node_modules/vuepress-plugin-components/lib/client/components/FontIcon.js";

import "/home/baiye/node_modules/vuepress-plugin-components/lib/client/styles/sr-only.scss";

export default defineClientConfig({
  enhance: ({ app }) => {
    if(!hasGlobalComponent("Badge")) app.component("Badge", Badge);
    if(!hasGlobalComponent("FontIcon")) app.component("FontIcon", FontIcon);
    
  },
  setup: () => {
    useScriptTag(`/base/my/font-icon/resource.js`);
    useStyleTag(`\
@import url("https://example/my/fonr-icon/resouce.css");
`);
    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/solid.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

    useScriptTag(
  `https://cdn.jsdelivr.net/npm/@fortawesome/fontawesome-free@6/js/fontawesome.min.js`,
  () => {},
  { attrs: { "data-auto-replace-svg": "nest" } }
);

  },
  rootComponents: [

  ],
});
