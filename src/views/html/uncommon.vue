<template>
  <div>
    <h2>去除浮动</h2>
    <div class="pDiv clearfix">
        <div class="name "></div>
        <div class="name "></div>
        <div class="name "></div>
        <div class="name "></div>
    </div>
    <div class="test"></div>
    <form action="">
      <div>
        <label for="name">name</label>
      
        <input type="text" name="name" value="输入姓名" id="name">
      </div>
      <h2>label 联动 for 与 id 自定义属性的设置</h2>
      <div>
        <label for="male">男</label>
        <input type="radio" name="sex" id="male">
        <label for="female">女</label>
        <input type="radio" name="sex" id="female">
      </div>

      <h2>html5 特殊标签的使用</h2>
      <div>wbr: 在换行的时候，强制某些字母一起换行</div>
      <div>pre: 保留页面上空格和空行</div>
      <div>progress:
        <progress value="22" max="100"></progress>  
      </div>
    <div>
      mark:
      <p>Do not forget to buy <mark>milk</mark> today.</p>
    </div>
    <div>
      embed:
      <embed src="" type="">
    </div>
    <div>
      ruby, rp:
      <ruby>
          漢 <rp>(</rp><rt>han</rt><rp>)</rp>
          字 <rp>(</rp><rt>zi</rt><rp>)</rp>
        </ruby>
    </div>
    
  </form>
  </div>
  
</template>

<style lang="scss" scoped>
  /* ul > li:first-of-type:after {
    content: "zhu";
  }
  ul > li:nth-of-type(2)::after {
    content: "zhu123";
  } */
  .name {
    float: left;
    /* display: inline-block; */
    width: 100px;
    height: 60px;
    border: 1px solid #ddd;
  }
  .clearfix:after {
    content: "";
    display: block;
    clear: both;
  }
  .clearfix{
    *zoom: 1;
  }
  .test {
    width: 80px;
    height: 90px;
    border: 1px solid red;
  }
 

</style> 