import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/home';
import HTML from './html/index';

Vue.use(Router);
export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        ...HTML
      ]
      // components: {
      //   home: Home,
      //   html: HTML
      // },
    },
    // ...HTML
  ]
})