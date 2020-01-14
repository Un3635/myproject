<template>
  <el-menu 
    class="side-menu-wrap"
    background-color="#545c64"
    text-color="#fff"
    active-text-color="#ffd04b"
    :default-active="$route.fullPath">
    <el-submenu index="/HTML">
      <template slot="title">
        <i class="el-icon-link"></i>
        <router-link to="/html" tag="span">HTML</router-link>
      </template>
      <el-menu-item index="/html/uncommon">
       <a href="/html/uncommon">不常见</a>
        <router-link to="/html/uncommon" tag="span">不常见</router-link>
      </el-menu-item>
      <el-menu-item index="/html/md">
        <router-link to="/html/md" tag="span">htmlMd</router-link>
      </el-menu-item>
    </el-submenu>
  </el-menu>
</template>
<script>
export default {
  created() {
    // console.log(this.$route)
  }
}
</script>
