<template>
 <div class="row">
  <div class="col-md-12">
      <right-menu :pop-items="popItems" :mouse="mousePosition" width="300px" height="400px"
                  boxShadow="2px 2px 2px #617C58" background="#8BB381" color="#eee" borderRadius="10px"
                  @ListItemClick="list_item_click">
       
          <textarea class="form-control" rows="5" slot="below"></textarea>
      </right-menu>

         <div>
           <button class="btn btn-default" @click="pop($event)">
             点击 弹出
           </button>
         </div>
  </div>
 </div>
</template>

<script>
    export default{
        data(){
          return {
            //右键的弹出菜单
            popItems:[
              {
                class:'fa fa-wrench',
                txt:'处理异常'
              },
              {
                class:'fa fa-check',
                txt:'已解决'
              },
              {
                class:'fa fa-ban',
                txt:'已忽略'
              }
            ],
            mousePosition:['close'],
          }
        },
        methods: {
          pop(e){
            let self = this;
            let btn = e.toElement;
            let x, y;
            if(self.mousePosition[0] !== 'close'){
              self.mousePosition = ['close'];
            }
            else {
              x = btn.offsetLeft + btn.offsetWidth;
              y = btn.offsetTop + btn.offsetHeight;
              self.mousePosition = [x, y]
            }
          },
          list_item_click(it){
            switch (it){
              case 0:
                alert('第一项被点击');
                    break;
              case 1:
                alert('第二项被点击');
                    break;
            }
          }
        }
      }
</script>