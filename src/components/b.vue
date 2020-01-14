<template>
  <div>
    <!-- <button @click="$router.go(-1)" class="linkBtn">从b跳转到A</button> -->
    <div class="wrap">
      <!-- <img  class="img-wrap" src="/static/4.png" alt=""> -->
      <div class="div-wrap">
        <ul class="ul-wrap">
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
          <li>1</li>
        </ul>
     </div>
      
    </div>
  </div>
 
</template>
<script>
export default {
  name: 'b',
   beforeDestroy(){
    //  this.showTag = false;
    // this.node.selectItems = [];
    // this.node.selections = [];
    console.log('beforeDestroy');
  },
  destroyed() {
    console.log('destroyed');
  },
}
</script>
<style lang="scss" scoped>
.linkBtn {
  color: yellow;
}
.wrap {
  position: relative;
  width: 300px;
  height: 400px;
  border: 1px solid #ccc;
  .img-wrap {
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0px;
    top: 0px;
    z-index: -1;
  }
  .div-wrap {
    width: 100%;
    height: 100%;
    overflow: auto;
    // background: url("/static/4.png") no-repeat 100% 100%;
    // background-size: cover;
    .ul-wrap {
      width: 80%;
      height: 100%;
      overflow: hidden;
       background: url("/static/4.png") no-repeat fixed 0% 0%;
    background-size: 300px 400px;
      li {
        color:#fff;
        background: black;
        line-height: 40px;
      }
    }
  }
 
 
}
</style>
