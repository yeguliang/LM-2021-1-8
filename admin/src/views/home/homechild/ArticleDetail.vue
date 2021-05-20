<template>
	<div class = "article-review">
			<div class = "review-title">
        <a href="javascript:;" @click="backHome"><i class="el-icon-back"></i></a>
        <h2>{{ articles.title }}</h2>
        </div>
			<div class = "review-tags">
				<h4>用户：</h4>
				<span>{{ articles.user_info.name }}</span> 
			</div>
			<div class = "review-abstract">
				<h4>内容：</h4>
				<span>{{ articles.des }}</span> 
			</div>
			<div class = "review-date">
				<h4>创建时间：</h4>
				<span>{{ articles.create_at.slice(0,10) }}</span> 
			</div>
		</div>
</template>
<script>
import {mapActions} from 'vuex'
export default {
  name: "ArticleDetail",
  created() {
    const payload = {
      blogId:this.$route.params.id,
      type:''
    }
    if(payload.blogId) {
      this.getArticle(payload);
      //console.log(this.$store.state.ruleForm);
      this.articles = this.$store.state.ruleForm
    }
  },
  data() {
    return {
      articles: {}
    };
  },
  methods: {
    ...mapActions(["getArticle"]),
    backHome() {
      this.$router.push('/home')
    },
  }
};
</script>
<style lang = "less">
	.article-review{
		box-sizing: border-box;
		padding: 20px;
		color: #404040;
		line-height: 1.8;
		width: 80%;
		margin: 20px auto 0;
		box-shadow: 0 0 1px rgba(0,0,0,0.8);
		border-radius: 2px;
	}
  .el-icon-back {
    float: left;
    font-size: 30px;
  }
	.review-tags{
		h4{
			display: inline-block;
		}
		span{
			margin-right: 10px;
		}
	}
	.review-abstract,.review-content,.review-date{
		margin-top: 10px;
	}
	.review-abstract h4,.review-date h4{
		display: inline-block;
	}
	.review-title{
		margin-top: 10px;
		text-align: center;
	}
	.review-content {
		li{
			margin-left: 15px;
		}
		hr{
			margin: 15px 0;
			height: 0;
			border: 0;
			border-top: 1px solid #ccc;
		}
		img{
			max-width: 100%;
		}
	}
	@media screen and(max-width: 767px){
		.article-review{
			margin-top: 10px;
			padding: 10px;
			width: 100%;
			pre{
				box-sizing: border-box;
			}
		}
	}
</style>