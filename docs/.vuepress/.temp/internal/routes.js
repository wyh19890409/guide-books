export const redirects = JSON.parse("{}")

export const routes = Object.fromEntries([
  ["/", { loader: () => import(/* webpackChunkName: "index.html" */"E:/guide-books/docs/.vuepress/.temp/pages/index.html.js"), meta: {"title":"Home"} }],
  ["/%E5%85%AC%E5%8E%95%E3%80%81%E4%B8%AD%E8%BD%AC%E7%AB%99%E5%B7%A1%E6%9F%A5/%E5%85%AC%E5%8E%95%E3%80%81%E4%B8%AD%E8%BD%AC%E7%AB%99%E5%B7%A1%E6%9F%A5.html", { loader: () => import(/* webpackChunkName: "公厕、中转站巡查_公厕、中转站巡查.html" */"E:/guide-books/docs/.vuepress/.temp/pages/公厕、中转站巡查/公厕、中转站巡查.html.js"), meta: {"title":"公厕、中转站巡查"} }],
  ["/%E6%88%B7%E5%A4%96%E5%B9%BF%E5%91%8A/%E6%88%B7%E5%A4%96%E5%B9%BF%E5%91%8A.html", { loader: () => import(/* webpackChunkName: "户外广告_户外广告.html" */"E:/guide-books/docs/.vuepress/.temp/pages/户外广告/户外广告.html.js"), meta: {"title":"户外广告"} }],
  ["/404.html", { loader: () => import(/* webpackChunkName: "404.html" */"E:/guide-books/docs/.vuepress/.temp/pages/404.html.js"), meta: {"title":""} }],
]);
