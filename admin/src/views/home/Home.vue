<template>
  <div class="box">
    <div class="header">
      <header-background :imgSrc='imgSrc' :title='title' :lottery='lottery'></header-background>
    </div>
    <div class="context"> 
      <div class="context_left">
        <div class="item-list" v-for="(item,index) in this.$store.state.article" :key="index">
          <div class="item-box">
            <div class="item-box_img">
              <a>
                <img :src="imgArticle" alt="" class="cover">
              </a>
            </div>
            <div class="item-box_content">
              <h3>
                <a class="item-box_title">{{item.title}}</a>
              </h3>
              <div class="des">{{item.des}}</div>
            </div>
            <div class="item-box_footer">
              <div class="item-box_detailtime">
                <i class="iconfont icongengxinshijian"></i>
                创建时间：{{item.create_at.slice(0,10)}}
              </div>
              <div class="item-box_detailtime">
                <i class="iconfont icongengxinshijian"></i>
                更新时间：{{item.updata_at.slice(0,10)}}
              </div>
              <div class="look-down" >
                <a>
                  <router-link :to="{ name: 'articledetail', params: { id: item.id} }">
                    <a class="btn-preview">
                      <i size="middle" class="iconfont iconneirong">
                    查看具体内容</i>
                    </a>
                  </router-link>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="context_right">
        <personal-info></personal-info>
      </div>
    </div>
  </div>
</template>
<script>
//导入背景与右侧信息
import headerBackground from "components/content/headerBackground/index.vue";
import personalInfo from "components/content/personalInfo/index.vue";
//异步网络请求
import {mapActions} from 'vuex'

export default {
  name:'Home',
  created() {
    this.AllArticle()
  },
  components:{
    headerBackground,
    personalInfo
  },
  data(){
    return{
      imgSrc:require('assets/image/home.jpg'),
      imgArticle:require('assets/image/tupian.jpg'),
      title:'Hi Blog',
      lottery:'你可以很努力 但千万别着急',
      date:'2020-08-10 16:39:15',
      scrollTop:0,
    }
  },
  methods: {
    ...mapActions(["AllArticle"])
  }
}
</script>
<style scoped>
* {
  word-wrap: break-word;
  font-family: 微软雅黑;
  font-size: 13px;
  color: #444;
  outline: none;
}
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
  margin-top: 20px;
  /* border: 1px solid red; */
  width: 1200px;
  display: flex;
  justify-content: center;
}
.context_left{
  width: 750px;
  margin: 0 auto;
  clear: both;
  position: relative;
}
.item-list {
  margin-top: 5px;
}
.item-box {
  position: relative;
  margin:16px 0;
  padding: 16px;
  border-radius: 4px;
  box-shadow: 0 0 16px #ccc;
  overflow: hidden;
  background-color: #fff;
}
.item-box_img {
  width: 130px;
  height: 160px;
  float: left;
}
.cover {
  border-radius: 3px;
}
a img {
  border: none;
  width: 100%;
  height: 100%;
}
.item-box_content {
  float: left;
  color: #999;
  font-size: 12px;
  overflow: hidden;
  margin-left: 20px;
  padding-right: 10px;
}
.item-box_title {
  max-height: 2.6em;
  margin-bottom: 0;
  color: #262626;
  font-size: 15px;
  font-weight: 500;
  line-height: 1.3;
  text-decoration: none;
  text-overflow: ellipsis;
  overflow: hidden;
}
h3 {
  display: block;
}
.item-box_content .des {
  margin: 16px 0;
  color: #787878;
  font-size: 13px;
  width: 300px;
  height: 58px;
  overflow: hidden;
}
.item-box_footer {
  position: relative;
  display: flex;
  flex: 2 0;
  flex-direction: column;
  flex-wrap: wrap;
  padding-left: 16px;
  border-left: 1px solid #e6e6e6;
  padding-top: 30px;
}
.item-box_detailtime {
  margin-bottom: 6px;
  color: #787878;
  font-size: 12px;
}
.iconfont {
  margin-left: 2px;
  margin-right: 2px;
  font-style: normal;
  -webkit-font-smoothing:antialiased;
}
.btn-preview {
  height: 26px;
  line-height: 26px;
  background-color: #fff;
  font-size: 12px;
  border: 1px solid #f1f1f1;
  box-shadow: inset 0 1px 1px rgba(0, 0, 0, .12);
  color: #666;
}
.context_right{
  width: 220px;
  /* border: 1px solid; */
  margin-left: 50px;
}
.article{
  padding: 5px 5px;
  font-size: 14px;
  color: #a3a3a3;
  line-height: 22px;
  text-overflow: -o-ellipsis-lastline;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  -webkit-box-orient: vertical;
}
.article:hover{
  cursor: pointer;
  color: #42b983;
}
.date{
  display: block;
  float: right;
  font-size: 14px;
  color: #a3a3a3;
  margin-bottom: 10px;
}
.next{
  width: 120px;
  height: 40px;
  border: 1px solid #a3a3a3;
  margin-top: 20px;
  float: right;
  margin-bottom: 50px;
  text-align: center;
  line-height: 40px;
  font-weight: bold;
}
.next:hover{
  cursor: pointer;
  background-color:  #42b983;
}
.right_tags h5{
  padding: 20px 0px;
  font-weight: bold;
  color: #808080;
}
.box_tags{
  width: 220px;
  height: 70px;
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
  margin:5px 5px;
}
.right_about{
  width: 220px;
  height: 300px;
  /* border: 1px solid; */
}
.right_about h5{
  padding: 20px 0px;
  font-weight: bold;
  color: #808080;
}
.box_about img{
  width: 80%;
  display: block;
  border-radius: 5px;
  margin-bottom: 20px;
}
.box_about p{
  color: #bfbfbf;
  font-size: 14px;
}
.right_friends h5{
  padding: 20px 0px;
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