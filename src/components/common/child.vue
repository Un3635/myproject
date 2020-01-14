<template>
  <div class="childWrap">
    <div @click="change" class="valueStyle">child: {{value}}</div>
    <transition>
      <span :key="name" class="childname">child: {{name}}</span>
    </transition>
    <!-- <a-com :tag="1"></a-com> -->
  </div>
</template>
<script>
// import ACom from '../a';

export default {
  // components: {ACom},
  props: {
    value: {
      type: String,
      default: '12'

    },
    msg: {
      type: String,
      default: ''
    },
    name: {
      default: () => ''
    }
  },
  watch: {
     name: {
       handler(nv) {
         console.log(nv, 'watchwatch');
       },
       immediate: true
     }
  },
  methods: {
    change() {
      // console.log(this.name);
      // this.name = '12';
      // this.$emit('update:name', 'reiki.z')
      // this.$emit('change')
      this.$emit('input', 'reiki.z');
    }
  },
  mounted() {
    console.log('mounted')
  },
  created() {
    console.log(this.name, 'created');
  }
}
</script>
<style lang="scss" scoped>
.childWrap {
  .valueStyle {
  color: red;
  }
  .childname {
    color: blue;
  }
}

</style>
