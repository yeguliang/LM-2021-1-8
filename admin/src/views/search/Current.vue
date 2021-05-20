<template>
  <div class="box">
     <div class="header">
      <header-background :imgSrc='imgSrc' :title='title' :lottery='lottery'>
      </header-background>
    </div>
    <div class="context"> 
      <current-child></current-child>
    </div>
  </div>
</template>

<script>
import headerBackground from "components/content/headerBackground/index.vue";
import CurrentChild from './currentchild/CurrentChild.vue'
export default {
  name:'Current',
  components:{
    headerBackground,
    CurrentChild
  },
  data(){
    return{
      imgSrc:require('assets/image/search.jpg'),
      title:'Current',
      lottery:"Here is Current Blog",
      value:'',
      time:''
    }
  },
  methods: {
    
  }
}
</script>

<style  scoped>
  .box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .header{
    /* border: 1px solid red; */
    height: 400px;
    width: 100%;
  }
  .context{
    margin-top: 60px;
    /* border: 1px solid red; */
    width: 1200px;
    display: flex;
    justify-content: center;
  }
</style>