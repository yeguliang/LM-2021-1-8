<template>
  <div class="box">
    <div class="header">
      <header-background :imgSrc='imgSrc' :title='title' :lottery='lottery'></header-background>
    </div>
    <div class="context"> 
      <div class="context_left">
        <h3>关于我</h3>
        <p>hi，一个喜欢记录东西的陌生人，希望通过这个博客结识更多志同道合的朋友。</p>
        <h3>我创建的文章</h3>
        <a href="javascript:;" @click="lookArticles" class="look-article">查看</a>
        <h3>联系方式</h3>
        <p>邮箱：{{email}}</p>
        <p>扫描下方的二维码，加我为朋友吧</p>
        <img :src="imgSrc_qr_code" alt="" style="border:1px solid #F58800;margin-top:20px">
      </div>
      <div class="context_right">
        <personal-info></personal-info>
      </div>
    </div>
  </div>
</template>

<script>
//引入头部导航和个人信息
import headerBackground from "components/content/headerBackground/index.vue";
import personalInfo from "components/content/personalInfo/index.vue";
import Context from "utils/Context.js";

import {mapActions} from 'vuex'

export default {
  name:'about',
  created() {
    this.email = this.$store.state.userinfo.name
    this.lookArticle() 
  },
  components:{
    headerBackground,
    personalInfo
  },
  data(){
    return{
      imgSrc:require('assets/image/about.jpg'),
      title:'About',
      lottery:"Hi,this is Personal'blog",
      email:'',
      imgSrc_qr_code:require('assets/image/QRcode.jpg')
    }
  },
  methods:{
    ...mapActions(["lookArticle"]),
    //个人创建的文章
    lookArticles() {
      this.$router.push('/first')
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
  .context_left{
    width: 750px;
    /* border: 1px solid; */
  }
  .context_left h3{
    padding:5px 10px;
  }
  .context_left p{
    padding:5px 10px;
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