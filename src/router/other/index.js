import Vue from 'vue'
import Router from 'vue-router'
import a from '@/components/a'
import b from '@/components/b'
import qe from '@/components/quillEditor';
import  quillEditorCus from '@/components/quillEditorCus';
import ue from '@/components/ue';
import changeT from '@/components/change'
import test from '@/components/change/test'
import awednd from '@/components/change/awednd'
import draggable from '@/components/change/draggable'
import copyDom from '@/components/change/copyDom'

import rightMenu from '@/components/rightMenu/right'
import mousemenu from '@/components/rightMenu/mouseMenu'
import contentext from '@/components/rightMenu/contentext'

import formDesign from '@/components/formDesign/index'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/a',
      name: 'a',
      component: a,
      // alias: '/b'
    },
    {
      path: '/b',
      name: 'b',
      component: b
    },
    {
      path: '/qe',
      name: 'qe',
      component: qe
    },
    {
      path: '/ue',
      name: 'ue',
      component: ue
    },
    {
      path: '/quillEditorCus',
      name: 'quillEditorCus',
      component: quillEditorCus
    },
    {
      path: '/change',
      name: 'changeT',
      component: changeT
    },
    {
      path: '/test',
      name: 'test',
      component: test
    },
    {
      path: '/awednd',
      name: 'awednd',
      component: awednd
    },
    {
      path: '/draggable',
      name: 'draggable',
      component: draggable
      
    },
    {
      path: '/draggableCopy',
      name: 'copyDom',
      component: copyDom
    },


    {
      path: '/menu',
      name: 'rightMenu',
      component: rightMenu
    },
    {
      path: '/mousemenu',
      name: 'mousemenu',
      component: mousemenu
    },
    {
      path: '/contentext',
      name: 'contentext',
      component: contentext
    },
    {
      path: '/formDesign',
      name: 'formDesign',
      component: formDesign
    }
  ]
})
