<!--
 * @Description: 
 * @Author: reiki.z
 * @Date: 2020-01-31 14:08:23
 -->
<template>
  <div class="mavonEditor">
    <mavon-editor class="md" v-html="handbook" :subfield="false" :toolbarsFlag="false" :boxShadow="false" :ishljs="true" />
  </div>
</template>
<script>
import MARKDOWN from './index.MD';
export default {
  data() {
    return {
      markdownOption: {
        bold: true, // 粗体
      },
      handbook: MARKDOWN
    }
  },
  created() {
    console.log('mk', )
  }
}
</script>