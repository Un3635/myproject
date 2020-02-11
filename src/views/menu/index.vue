<!--
 * @Description: 
 * @Author: reiki.z
 * @Date: 2019-12-20 16:22:35
 -->
<template>
  <el-menu 
    class="side-menu-wrap"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :default-active="$route.fullPath">
    <el-submenu v-for="(m, index) in menu" :key="'menu_'+index" :index="m.path">
      <template slot="title">
        <i class="el-icon-s-goods"></i>
        <router-link :to="m.path" tag="span" class="text">{{m.text}}</router-link>
      </template>
      <el-menu-item v-for="(mchild, index) in m.children" :key="'menuchild'+index" :index="mchild.path">
        <router-link :to="mchild.path" tag="div">{{mchild.text}}</router-link>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>
<script>
import { Menu } from './data.js';

export default {
  data() {
    return {
      menu: Menu
    }
  },
  created() {
    // console.log(this.$route)
  }
}
</script>
<style lang="scss" scoped>
.text {
  font-size: 20px;
  font-weight: 700;
}
</style>