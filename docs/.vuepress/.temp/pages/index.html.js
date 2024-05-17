import comp from "E:/guide-books/docs/.vuepress/.temp/pages/index.html.vue"
const data = JSON.parse("{\"path\":\"/\",\"title\":\"Home\",\"lang\":\"en-US\",\"frontmatter\":{\"home\":true,\"title\":\"Home\",\"heroImage\":\"/images/闪电.png\",\"actions\":[{\"text\":\"公厕、中转站巡查\",\"link\":\"/公厕、中转站巡查/公厕、中转站巡查.md\",\"type\":\"secondary\"},{\"text\":\"户外广告\",\"link\":\"/户外广告/户外广告.md\",\"type\":\"secondary\"}]},\"headers\":[],\"git\":{},\"filePathRelative\":\"README.md\"}")
export { comp, data }

if (import.meta.webpackHot) {
  import.meta.webpackHot.accept()
  if (__VUE_HMR_RUNTIME__.updatePageData) {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  }
}

if (import.meta.hot) {
  import.meta.hot.accept(({ data }) => {
    __VUE_HMR_RUNTIME__.updatePageData(data)
  })
}
