<template>
  <div class="mavonEditor">
    <mavon-editor class="md" v-html="handbook" :subfield="false" :toolbarsFlag="false" :boxShadow="false" :ishljs="true" />
  </div>
</template>
<script>
import GUID from './html.MD';
export default {
  data() {
    return {
      markdownOption: {
        bold: true, // 粗体
      },
      handbook: GUID
    }
  },
  created() {
    console.log('mk', )
  }
}
</script>