<template>
  <div id="app">
    <!-- <img src="./assets/logo.png"> -->
    <!-- app.vue -->
    <router-view></router-view>
    <!-- <router-view name="home"></router-view> -->
    <!-- <router-link to="/a">aaaa</router-link>
    <router-link to="/b">bbbb</router-link>
    <hr/><hr/>
    <router-link to="/qe">vue-quill-editor</router-link>
    <router-link to="/quillEditorCus">vue-quill-editor-cus</router-link>
    <router-link to="/ue">vue</router-link>
    <router-link to="/change">交换位置</router-link>
    <router-link to="/test">交换位置2</router-link>
    <router-link to="/awednd">awednd</router-link>
    <router-link to="/draggable">draggable</router-link>
    <router-link to="/draggableCopy">copy</router-link>
    <hr/> <hr/>
    <router-link to="/menu">右击菜单</router-link>
    <router-link to="/mousemenu">右击菜单-mousemenu</router-link>
    <router-link to="/contentext">右击菜单-contentext</router-link>
    <hr/><hr/>
    <router-link to="/formDesign">表单拖拽</router-link>
    <button @click="btnClick">跳转</button>
    <div class="inlineBlockWrap">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
    <p>1234567</p>
    <p>wordI do it</p>
    <p>http://this<wbr>.is<wbr>.a<wbr>.really<wbr>.long<wbr>.example<wbr>.com/With<wbr>/deeper<wbr>/level<wbr>/pages<wbr>/deeper<wbr>/level<wbr>/pages<wbr>/deeper<wbr>/level<wbr>/pages<wbr>/deeper<wbr>/level<wbr>/pages<wbr>/deeper<wbr>/level<wbr>/pages</p>

    <p>http://this.is.a.really.long.example.com/With/deeper/level/pages/deeper/level/pages/deeper/level/pages/deeper/level/pages/deeper/level/pages</p>

    <div>
      <h1>水果 - template</h1>
      <ul>
        <template v-for="fruit of fruitArr">
          <li :key="fruit.id">{{fruit.label}}{{fruit.value}}</li>
        </template>
      </ul>

      <h1>当前时间</h1>
      <p>{{now1}}</p>
      <p>{{now2()}}</p>
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'App',
  data() {
    return {
      fruitArr: [
        {
          id: 1,
          label: '苹果',
          value: 'apple'
        },
        {
          id: 2,
          label: '香蕉',
          value: 'banana'
        },
        {
          id: 3,
          label: '梨',
          value: 'pear'
        }
      ]
    }
  },
  computed: {
    now1() {
      return Date.now()
    }
  },
  methods: {
    now2() {
      return Date.now()
    },
    btnClick() {
      // this.$router.push(`/a/${0}`);

      this.$router.push({
        path: '/a',
        query: {
          id: 0
        }
      })
    }
  },
  created() {
    // let data = {
    //   name: 2,
    //   map: {
    //     age: 17
    //   }
    // }
    // let obj = {...data};
    // obj.name = 3;
    // obj.map.age = 18;

    // console.log(data, obj, '数据污染');
    console.log('app.vue => created');
  },
  // mounted() {
  //   console.log('app.vue=>mounted');
  // },
  // updated() {
  //   //只要有字段更新就会调用
  //   console.log('app.vue=>updated');
  // },
  // activated() {
  //   console.log('app.vue=>activated');
  // }
  
}
</script>

<style lang="scss" scoped>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
}
.inlineBlockWrap {
  font-size: 0px;
  div {
    display: inline-block;
    font-size: 16px;
    &:nth-of-type(1) {
      background: red;
    }
    &:nth-of-type(3) {
      background:green;
    }
    &:nth-of-type(1) {
      background: black;
    }
  }
}
</style>
