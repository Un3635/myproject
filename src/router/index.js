/*
 * @Description: 
 * @Author: reiki.z
 * @Date: 2019-02-25 12:23:44
 */
import Vue from 'vue'
import Router from 'vue-router'

import Home from '../views/home';
import HTML from './html/index';
import VueC from './vue/index';

Vue.use(Router);
export default new Router({
  // mode: 'history',
  routes: [
    {
      path: '/',
      redirect: '/html/md'
    },
    {
      path: '/home',
      name: 'home',
      component: Home,
      children: [
        ...HTML,
        ...VueC
        
      ]
      // components: {
      //   home: Home,
      //   html: HTML
      // },
    },
    // ...HTML
  ]
})