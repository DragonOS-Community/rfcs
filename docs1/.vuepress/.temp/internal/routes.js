export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/Introduction.html", { loader: () => import(/* webpackChunkName: "Introduction.html" */"/home/baiye/rfcs-9/docs1/.vuepress/.temp/pages/Introduction.html.js"), meta: {"t":"Rust RFCs - RFC Book - Active RFC List"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"/home/baiye/rfcs-9/docs1/.vuepress/.temp/pages/404.html.js"), meta: {"t":""} }],
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"/home/baiye/rfcs-9/docs1/.vuepress/.temp/pages/index.html.js"), meta: {"t":""} }],
]);

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updateRoutes) {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
  }
  if (__VUE_HMR_RUNTIME__.updateRedirects) {
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ routes, redirects }) => {
    __VUE_HMR_RUNTIME__.updateRoutes(routes)
    __VUE_HMR_RUNTIME__.updateRedirects(redirects)
  })
}
