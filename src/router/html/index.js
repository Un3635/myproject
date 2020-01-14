// import Menu from '@/views/home/menu'
export default [
  {
    path: '/html',
    name: 'html',
    component: resolve => require(['@/views/html'], resolve),
    children: [
      // { path: '', component:  resolve => require(['@/views/html'], resolve) },
      {
        path: 'uncommon',
        name: 'uncommon',
        component: resolve => require(['@/views/html/uncommon'], resolve),
      },
      {
        path: 'md',
        name: 'htmlMD',
        component: resolve => require(['@/views/html/markdown'], resolve),
      }
    ]
  }
]