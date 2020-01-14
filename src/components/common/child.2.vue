<template>
  <div>
    child2
  </div>
</template>
<script>
export default {
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

