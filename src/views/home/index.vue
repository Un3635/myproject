<template>
  <div class="home-wrap">
    <my-menu />
     <div>
      <transition name="router-fade" mode="out-in">
        <!-- <keep-alive>
            <router-view v-if="$route.meta.keepAlive"></router-view>
        </keep-alive> -->
      </transition>
      <transition name="router-fade" mode="out-in">
        <router-view></router-view>
      </transition>
    </div>
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