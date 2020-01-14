<template>
<quill-editor ref="editor" v-model="content" :options="editorOption">
  <div id="toolbar" slot="toolbar">
    <select class="ql-size">
          <option value="small">小</option>
          <option selected>常规</option>
          <option value="large">大</option>
          <option value="huge">特大</option>
        </select>
    <button type="button" class="ql-bold"></button>
    <button type="button" class="ql-italic"></button>
    <button type="button" class="ql-underline"></button>
    <select class="ql-color"></select>
    <button type="button" class="ql-image"></button>
    <button type="button" class="ql-list" value="ordered"></button>
    <button type="button" class="ql-list" value="bullet"></button>
    <select class="ql-align"></select>
    <!-- 自定义控件 -->
    <button  @click="addMyBlot">自定义按钮</button>
  </div>
</quill-editor>
</template>

<script>
import { Quill } from 'vue-quill-editor';
// 拿到内嵌
const Embed = Quill.import('blots/embed');

class myBlot extends Embed {
  static blotName = 'myblot';
  static tagName = 'myblot';
  static create(value) {
    const node = super.create(value);
    console.log(value)
    node.innerHTML = value;
    node.setAttribute('id', value);
    return node;
  }
}
// 注册
Quill.register(myBlot);

export default {
  data() {
    return {
      content: '',
      editorOption: {
        placeholder: '请输入文本...',
        modules: {
          toolbar: '#toolbar',
        },
      },
    }
  },
  methods: {
    // vue-quill的小bug
    // 虽然是双向绑定，但不能直接改content，ql-editor的innerHTML，不然blot的value会变为true
    setContent(innerHTML) {
      setTimeout(() => {
        const quill = this.$refs['editor'].quill;
        quill.container.querySelector('.ql-editor').innerHTML = innerHTML
      })
    },
    addMyBlot() {
      const quill = this.$refs['editor'].quill;
      console.log(quill)
      quill.insertEmbed(quill.index, 'myblot', 'balabala。。。');
    }
  }
}

</script>