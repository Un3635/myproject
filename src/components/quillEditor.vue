
<template>
    <div class="edit_container">
        <quill-editor 
            v-model="content" 
            ref="myQuillEditor" 
            :options="quillOption" 
            @blur="onEditorBlur($event)" @focus="onEditorFocus($event)"
            @change="onEditorChange($event)">
        </quill-editor>
        <img src="/static/Wrath.png">
    </div>
</template>
<script>
import { quillEditor } from "vue-quill-editor"; //调用编辑器

import quillConfig from './quill-config.js'
import 'quill/dist/quill.core.css';
import 'quill/dist/quill.snow.css';
import 'quill/dist/quill.bubble.css';
export default {
    components: {
        quillEditor
    },
    data() {
        return {
            content: '<p><img src="/static/Wrath.png"></p>',
            quillOption: quillConfig,

        }
    },
     mounted(){
      quillConfig.initButton();
    },
    methods: {
        onEditorReady(editor) { // 准备编辑器
 
        },
        onEditorBlur(){}, // 失去焦点事件
        onEditorFocus(){}, // 获得焦点事件
        onEditorChange(){}, // 内容改变事件
    },
    computed: {
        editor() {
            console.log(this.$refs.myQuillEditor.quill,'22')
            return this.$refs.myQuillEditor.quill;
        },
    }
}
</script>
<style lang="css">
.ql-editor {
  height: 400px;
}
</style>
