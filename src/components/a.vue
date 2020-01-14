<template>
  <div class="hello">
    {{tag}} {{typeof tag}}
   <div v-if="tag==='0'">
     <div @click="$router.push('/b')">跳转到b</div>
    <button @click="test">测试</button>
    <child-template v-model="name" v-bind="msg1" :key="msg1.name" class="child"></child-template>
   </div>
   <div v-if="tag==='1'">子组件调用父组件</div>
   <ul>
     <li>
       <label for="male">
         男
         <input type="radio" name="sex" id="male"/>
       </label>
       <label for="female">
         女
         <input type="radio" name="sex" id="female"/>
       </label>
     </li>
     <li>
       <label for="name">姓名</label>
         <input type="text" name="name" id="name">
       
     </li>
   </ul>
   <span><img src="ffff" alt="323"></span>
  </div>
    
</template>

<script>
import childTemplate from './common/child';
export default {
  
  components: { childTemplate },
  data () {
    return {
      name: 'reiki',
      msg: 'Welcome to Your Vue.js App',
      msg1: {'name': 12}
    }
  },
  props: {
    tag: {
      default: '0'
    }
  },
  methods: {
    test() {
      this.msg1.name = 'rk' + Math.random() * 100;
    }
  },
  created() {
     param = 0
    var param = 1;
    if(param) {
      var param = 3;
      (() => {
        var param = 4;
         console.log(param, 'bibao')
      })()
      console.log(param)
    }
  //  let param = 2
    console.log(this.$route, '1222', param);

    class mm  {
      constructor() {
        // this.name = 'zhu'
        console.log(arguments)
        let [a,b, ...c] = arguments;
         console.log(a,b, c, arguments)
        // return new mm()
      }
      static get() {
        console.log(12)
      }
    }
    // mm.name = '12'
    console.log(new mm("1", "18"))
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="css" scoped>
.valueStyle {
  color: #42b983;
}
.childWrap >>> .valueStyle {
  color:yellow;
}
</style>
