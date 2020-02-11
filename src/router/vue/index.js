/*
 * @Description: 
 * @Author: reiki.z
 * @Date: 2020-01-31 13:27:18
 */
export default [
  {
    path: '/vue/responsive',
    name: 'responsive',
    component: resolve => require(['@/views/vue/responsive.vue'], resolve)
  },
  {
    path: '/vue/md',
    name: 'vueMarkdown',
    component: resolve => require(['@/views/vue/markdown.vue'], resolve)
  }
]