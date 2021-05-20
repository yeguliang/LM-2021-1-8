<template>
  <div class="userinfo">
    <hr>
    <div class="right_tags"> 
      <h5>FEATURED TAGS</h5>
      <div class="box_tags">
        <span class="featured_tags" v-for="item of 8" :key="item">程序员</span>
      </div>
    </div>
    <hr>
    <div class="right_about">
      <h5>ABOUT ME</h5>
      <div class="box_about">
        <img ref="study" :src="imgSrcAvatar">
        <p>好好学习,努力工作!</p>
      </div>
    </div>
    <hr>
    <div class="right_friends">
      <h5>FRIENDS</h5>
      <ul>
        <li><a href="#">LM的微博</a></li>
        <li><a href="#">LM的bilibili</a></li>
      </ul>
    </div>
  </div>
</template>
<script>
/* 网络请求 */
import { mapActions } from 'vuex';

export default {
  created() {
    this.lookArticle() 
  },
  data(){
    return{
      imgSrcAvatar:require('assets/image/touxiang.jpg')
    }
  },
  methods: {
    ...mapActions(["lookArticle"]),
    
  }
}
</script>
<style scoped>
  .right_tags h5{
    padding: 15px 0px;
    font-weight: bold;
    color: #808080;
  }
  .box_tags{
    width: 220px;
    padding:5px 5px;
    /* border: 1px solid; */
    overflow: hidden;
  }
  .featured_tags{
    border: 1px solid #a3a3a3;
    border-radius: 20px;
    font-size: 12px;
    color: #a3a3a3;
    line-height: 14px;
    padding: 5px 5px;
    float: left;
    margin:3px 5px;
  }
  .right_about h5{
    padding: 15px 0px;
    font-weight: bold;
    color: #808080;
  }
  .box_about img{
    width: 80%;
    display: block;
    border-radius: 5px;
    margin-bottom: 15px;
  }
  .box_about p{
    color: #bfbfbf;
    font-size: 14px;
    margin-bottom: 3px;
  }
  .right_friends h5{
    padding: 15px 0px;
    font-weight: bold;
    color: #808080;
  }
  .right_friends ul li a{
    color: #bfbfbf;
    font-size: 14px;
  }
  ul li{
    list-style: none;
  }
  a{
    text-decoration: none;
  }
</style>