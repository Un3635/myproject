// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'


Vue.config.productionTip = false

// element
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

// drag
import VueDND from 'awe-dnd';

// 引入makrdown插件
import mavonEditor from 'mavon-editor'
import 'mavon-editor/dist/css/index.css'

const components = [
  ElementUI,
  VueDND,
  mavonEditor
]
components.forEach( component => {
  Vue.use(component);
})

import rightMenu from "rightMenu";
Vue.use(rightMenu);

import mouseMenu from 'vue-mouse-menu'
Vue.use(mouseMenu)

import VueContextMenu from 'vue-contextmenu'
Vue.use(VueContextMenu)


import './assets/style/globnal.scss';

import VueQuillEditor from 'vue-quill-editor'

// require styles
import 'quill/dist/quill.core.css'
import 'quill/dist/quill.snow.css'
import 'quill/dist/quill.bubble.css'

import showdown from 'showdown'
Vue.prototype.md2html = (md)=> {
  let converter = new showdown.Converter()
  let text = md.toString()
  let html = converter.makeHtml(text)
  return html
}

import extend from 'extend';

var data = {
  info: {
    name: 'zhu',
    age: '18',
    child: {
      level: 1222,
      id: 0
    }
  }
}
// var data1 = extend(true, {}, data)

// data.info.name = '122222';
// data.info.child.id = '122222';
// console.log(data1, data);
Vue.use(VueQuillEditor)

import './utils/inheritance/index';
/* eslint-disable no-new */
var modelApp = new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>',
  // data: {
  //   message: 'zu'
  // }
})
