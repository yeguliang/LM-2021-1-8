<template>
  <div class="box">
    <div class="header">
      <header-background :imgSrc='imgSrc' :title='title' :lottery='lottery'></header-background>
    </div>
    <div class="context">
      <div class="context-article">
        <div class="box_tags">
          <div v-for="(item,key) in navs" :key="key" class="top-navs">
            <a
              href="javascript:;"
              @click="itemClick(subscript=key)"
              :type="subscript === key ?'primary':''"
              style="width:100%"
              :class="{'active':(subscript === key ?'primary':'')}"
            >{{item}}</a>
          </div>
        </div>
      <div class="entry-list-wrap">
        <div class="side-hot">
          <div id="postlist" class="home-main index-page" v-for="(item,index) in articlelist" :key="index">
            <li class="post-list">
              <div class="post-info">
                <h2 class="post-title">
                  <router-link
                  :to="{ name: 'detailarticle', params: { id: item.id,type:item.type} }"
                  >
                    {{ item.title }}
                  </router-link>
                </h2>
                <div class="info-des">{{item.des}}</div>
                <div class="info-bottom">
                  <span class="info-author">
                    <i class="iconfont iconyonghu1"></i>
                    <span class="post-username">{{item.user_info.name}}</span>
                  </span>
                  <span class="info-time">
                    <i class="iconfont iconshijian"></i>
                    {{item.updata_at.slice(0,10)}}
                  </span>
                  <span class="info-comment fr"></span>
                  <span class="info-viewnums fr"></span>
                </div>
              </div>
              <div class="post-pic">
                <a class="post-img">
                  <img :src="imgArticle" alt="" class="cover">
                </a>
              </div>
            </li>
          </div>
        </div>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
import headerBackground from "components/content/headerBackground/index.vue";
//网络请求
import {getAllArticle} from 'server/hostApi.js'

import {mapActions} from 'vuex'

export default {
  name:'Host',
  created() {
    this.getAllArticles()
  },
  components:{
    headerBackground
  },
  data(){
    let navs =  ["程序员", "javascript", "Vue", "React", "Node","uniapp","闲谈","git","game"];
    return{
      imgSrc:require('assets/image/host.jpg'),
      title:'Articles',
      lottery:'Here are some Articles',
      navs,
      subscript:0, //默认为第一个nav
      type: ['people','js','VueJs','react', "Node","uniapp","闲谈","git","game"],
      articlelist: {},
      isshow: false,
      imgArticle:require('assets/image/tuqian.jpg'),
    }
  },
  methods: {
    ...mapActions(["getArticle"]),
    //点击列表
    itemClick() {
      this.getAllArticles()
    },
    /* 网络请求 */
    //获取对应项文章列表
    async getAllArticles() {
      let res = await getAllArticle({params:{type:this.type[this.subscript]}})
      //console.log(res);
      this.articlelist = res
    },
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
    width: 100%;
    display: flex;
    align-items: center;
    justify-content:center;
    /* align-items:center; */
  }
  .box_tags{
    /* height: 70px; */
    padding:5px 5px;
    /* border: 1px solid yellow;  */
    overflow: hidden;
    position: absolute;
  }
  .top-navs{
    font-size: 12px;
    color: #fff;
    line-height: 14px;
    padding: 8px 10px;
    float: left;
    margin:5px 5px;
  }
  .entry-list-wrap{
    padding: 10px;
    margin-top: 40px;
    width: 750px;
    min-width: 750px;
    /* border: 1px solid; */
    display: flex;
    flex-direction: column;
    justify-items: center;
  }
  .side-hot {
    margin:20px 0px;
  }
  .home-main {
    margin-bottom:12px;
  }
  li {
    list-style: none;
  }
  .post-info {
    width: 460px;
    height: 165px;
    margin-top: -4px;
    float: left;
    overflow: hidden;
    position: relative;
  }
  .post-list {
    padding: 15px 20px;
    margin-bottom: 15px;
    border: 1px solid #ddd;
    position: relative;
    height: 165px;
    overflow: hidden;
    background: #fff;
    border-radius: 8px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, .03);
  }
  .post-info .post-title {
    max-height: 66px;
    text-align: left;
    padding-bottom: 10px;
    font-size: 18px;
    line-height: 20px;
    font-style: normal;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    border-bottom: 3px solid #f0f0f0;
  }
  .info-des {
    font-size: 14px;
    line-height: 24px;
    margin-top: 12px;
    text-overflow: ellipsis;
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    overflow: hidden;
  }
  .info-bottom {
    float: left;
    width: 100%;
    height: 50px;
    line-height: 50px;
    font-size: 12px;
    position: absolute;
    bottom: 0px;
  }
  .info-author {
    margin-right: 20px;
  }
  .info-time {
    margin: 0;
    padding: 0;
    outline: 0;
    border: 0;
    background: transparent;
    vertical-align: baseline;
    font-size: 100%;
  }
  .post-pic {
    width: 220px;
    height: 165px;
    float: right;
    margin-left: 20px;
    display: block;
    overflow: hidden;
  }
  .post-img {
    line-height: 16px;
    top: 13px;
    margin-bottom: 3px;
    position: absolute;
    z-index: 1;
  }
  a img {
    min-width: 220px;
    width: 100%;
    height: 40%;
    vertical-align: middle;
  }
  .active {
    cursor: pointer;
    color: #409eff;
  }
</style>