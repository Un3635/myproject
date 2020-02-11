<!--
 * @Description: 
 * @Author: reiki.z
 * @Date: 2019-12-20 14:51:04
 -->
<template>
  <div class="home-wrap">
    <my-menu />
    <router-view></router-view>
     <!-- <div>
      <transition name="router-fade" mode="out-in">
        {{$route.path}}
        
      </transition>
    </div> -->
  </div>
</template>
<script>
import MyMenu from '../menu/index';
export default {
  name: '',
  components: {MyMenu},
  // created() {
  //   console.log('home home')
  // }
}
</script>
<style lang="scss" scoped>
.home-wrap {
  display: flex;
  .side-menu-wrap {
    flex: 0 0 300px;
  }
  .side-grid-wrap {
    flex: 1
  }
}

</style>