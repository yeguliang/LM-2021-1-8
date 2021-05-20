<template>
  <div class="box">
    <div class="context"> 
      <div class="context_left">
        <div>
          <h2>时事博客</h2>
          <hr>
          <div class="context-item">
            <p>社会</p>
            <h4>公立大学注定不公平</h4>
            <ul><li><router-link :to="{ path: '/current/itemFirst'}">高校学生难就业问题</router-link></li>
              <li><router-link :to="{ path: '/current/itemSecond'}">广告集团招生计划是“炒作”还是“宣传”</router-link></li>
            </ul>
          </div>
          <p>观点</p>
          <h4>擅长公关的金正恩是一个好产品经理？</h4>
          <ul><li><router-link :to="{ path: '/current/itemThree'}">30+的女性好找工作吗？</router-link></li>
              <li><router-link :to="{ path: '/current/itemFour'}">春节如何面对亲戚安排的“相亲”</router-link></li>
          </ul>
          </div>
        <div>
          <h2>健康养生</h2>
        <hr>
        <div class="context-item">
          <p>健康</p>
          <h4>养胃技巧</h4>
          <ul><li><router-link :to="{ path: '/current/itemFive'}">早饭是必要吃的？</router-link></li>
              <li><router-link :to="{ path: '/current/itemSix'}">早上十件事，让你少生病</router-link></li>
          </ul>
        </div>
        <p>食疗养生</p>
        <h4>吃生姜的益处</h4>
        <ul><li><router-link :to="{ path: '/current/itemSeven'}">哪种豆类营养最强</router-link></li>
            <li><router-link :to="{ path: '/current/itemEight'}">香肠肉松包</router-link></li>
        </ul>
        </div>
        </div>
      <div class="context_right">
        <personal-info></personal-info>
      </div>
    </div>
  </div>
</template>
<script>
import personalInfo from "components/content/personalInfo/index.vue";
export default {
  name:'CurrentChild',
  components:{
    personalInfo
  },
  props: ['time'],
  data(){
    return{
    }
  },
  methods: {
  }
}
</script>
<style scoped>
.box{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
  .context{
    /* border: 1px solid red; */
    width: 1200px;
    display: flex;
    justify-content: center;
  }
  .context_left{
    width: 750px;
    /* border: 1px solid; */
  }
  .context-item {
    padding-top: 10px;
  }
  .context_left h2{
    padding: 5px 0px;
    color: #666;
  }
  .context_left p{
    font-size: 14px;
    padding:10px 3px;
  }
  .context_left ul {
    padding: 8px 20px;
    color: #666;
  }
  .context_left ul li {
    margin: 10px 0px;
  }
  .context_left ul li:hover{
    cursor: pointer;
    color: #409eff;
  }
  .context_left .look-article {
    margin-left: 10px;
    font-size: 20px;
    color: #409eff;
  }
  .context_right{
    width: 220px;
    /* border: 1px solid; */
    margin-left: 50px;
  }
</style>