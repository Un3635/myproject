<template>
  <div class="color-list">
    <div 
        class="color-item color-wrap" 
        v-for="color in colors" v-dragging="{ item: color, list: colors, group: 'cc' }"
        :key="color.text"
    >
    <span>{{color.text}}</span>
    <div style="margin-left: 100px; color: red;" class="child-wrap">
      <div  class="color-item" v-for="cld in colors" 
       v-dragging="{ item: cld, list: colors, group: 'child' }"
       :key="cld.index"> {{cld.text}}</div>
    </div>
  </div>
</div>
</template>
<script>
export default {
  data () {
    return {
        colors: [{
            text: "Aquamarine",
            child:[
              {
                text: "Aquamarine1",
              },
              {
                text: "Aquamarine2",
              }
            ]
           
        }, {
            text: "Hotpink",
            child:[
              {
                text: "Hotpink1",
              }
            ]
        }, {
            text: "Gold",
             child:[
              {
                text: "Gold1",
              }
            ]
        }, {
            text: "Crimson",
            child:[
              {
                text: "Crimson1",
              }
            ]
        }, {
            text: "Blueviolet",
            child:[
              {
                text: "Blueviolet1",
              }
            ]
        }, {
            text: "Lightblue",
            child:[
              {
                text: "Lightblue1",
              }
            ]
        }]
    }
  },
    mounted () {
    this.$dragging.$on('dragged', ({ value }) => {
      console.log(value.item)
      console.log(value.list)
      console.log(value.otherData)
    })
    this.$dragging.$on('dragend', () => {
 
    })
  }
}
</script>
<style>
.color-wrap {
  position: relative;
  overflow: hidden;
}
.child-wrap {
  /* position: absolute; */
}
</style>
