<template>
  <div>
    <vuedraggable class="wrapper" v-model="data">
    <transition-group tag="div">
      <div v-for="(item, index) in data" :key="'parent'+index" class="item">
        <p>{{item.buttonName.value}}</p>
        <vuedraggable class="wrapper" v-model="item.buttonName.sub_button">
          <transition-group tag="div">
            <div style="margin-left: 100px; color: red;"  
                v-for="(cld, idx) in item.buttonName.sub_button" :key="'child'+idx"> 
                {{cld.buttonName.value}}</div>
          </transition-group>
        </vuedraggable>
      </div>
      
    </transition-group>
  </vuedraggable>
  <div @click="add">添加</div>
  <button @click="deleteM">删除</button>
  </div>
</template>
<script>
import vuedraggable from 'vuedraggable';

export default {
  name: 'HelloWorld',
  components: {vuedraggable},
  props: {
  },
  data() {
    // return {
    //   list: [1,2,34,4,54,5]
    // }
    return {
         data: [
          {
              buttonName: {
                value: '菜单',
                type: 'input',
                icon: 'icon iconfont icon-biaoti icon-blue',
                sub_button: [
                 {
                   buttonName: {
                      value: '1菜单',
                      type: 'input',
                      icon: 'icon iconfont icon-biaoti icon-blue',
                   }
                   
                  },
                  {
                   buttonName: {
                      value: '菜单',
                      type: 'input',
                      icon: 'icon iconfont icon-biaoti icon-blue',
                   }
                   
                  }
                ]
              
              },
            },
            {
              buttonName: {
                value: '菜单1',
                type: 'input',
                icon: 'icon iconfont icon-biaoti icon-blue',
                sub_button: [
                 {
                   buttonName: {
                      value: '1菜单11',
                      type: 'input',
                      icon: 'icon iconfont icon-biaoti icon-blue',
                   }
                   
                  }
                ]
              
              },
            }
        ], // data 没有值时，自定义数据中没有label, content的字段
    }
  },
  updated() {
    console.log(this.data)

  },
  
  methods: {
     deleteM() {
      // 删除主菜单
     
     this.data.splice(1, 1);
      // if(!this.model.data) return;
      // if( !this.isClickMenu ) {
      //   this.mode.data.splice(this.menuIndex, 1);
      // } else {
      //   // 删除子菜单
      //   let key = this.mode.props.child.key;
      //   let submenu = this.model.data[this.menuIndex][this.label][key];
      //   submenu.splice(this.subMenuIndex, 1);
      // }
      //  console.log(this.da);
    },
    add() {
      this.data[0].buttonName.sub_button.push(
         {
              buttonName: {
                value: '1',
                type: 'input',
                icon: 'icon iconfont icon-biaoti icon-blue',
              }
         }
      )
      return;
      this.data.push({
              buttonName: {
                value: '菜单',
                type: 'input',
                icon: 'icon iconfont icon-biaoti icon-blue',
                sub_button: [
                 {
                   buttonName: {
                      value: '1菜单',
                      type: 'input',
                      icon: 'icon iconfont icon-biaoti icon-blue',
                   }
                   
                  },
                  {
                   buttonName: {
                      value: '菜单',
                      type: 'input',
                      icon: 'icon iconfont icon-biaoti icon-blue',
                   }
                   
                  },
                  {
                   buttonName: {
                      value: '1',
                      type: 'input',
                      icon: 'icon iconfont icon-biaoti icon-blue',
                   }
                   
                  },
                ]
              
              },
            },) 
    }
  }
}
</script>
<style scoped>

</style>