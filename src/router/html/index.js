/*
 * @Description: 
 * @Author: reiki.z
 * @Date: 2019-12-20 15:29:10
 */

export default [
  {
    path: '/html/md',
    name: 'htmlMD',
    component: resolve => require(['@/views/html/markdown'], resolve),
  },
  {
    path: '/html/uncommon',
    name: 'uncommon',
    component: resolve => require(['@/views/html/uncommon'], resolve),
  },
]