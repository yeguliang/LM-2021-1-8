<template>
  <div class="content-container">
    <header class="content-header">
      <el-link icon="el-icon-edit">
        <router-link
            :to="{ path: '/add'}"
            >
              新建
            </router-link>
      </el-link>
      <el-button type="primary" size="mini" @click="backFirst" class="back-button"
      >返回</el-button>
    </header>
    <!--展示博客-->
    <div v-for="(blog, index) in this.$store.state.personalarticle" :key="'blogs'+index">
      <div class="block">
        <el-card class="content">
          <h4 @click="itemDeatil(blog.id,blog.type)">
            {{blog.title}}
          </h4>
          <br />
          <p>{{ blog.des }}</p>
          <br />
          <div class="me-article-footer">
            <span class="me-article-author">
              <i class="el-icon-user-solid"></i>&nbsp;{{ blog.user_info.name }}
            </span>
            <span class="me-pull-right me-article-count">
              <i class="el-icon-price-tag"></i>&nbsp;{{ blog.type }}
              <i class="el-icon-time"></i>&nbsp;{{ blog.updata_at }}
              <el-link icon="el-icon-delete">
                <div @click="Articledelete(blog.id)"><h5>删除</h5></div>
          </el-link>
            </span>
          </div>
        </el-card>
      </div>
      <br /><br />
    </div>
  </div>
</template>

<script>
//仓库管理
import {mapActions} from 'vuex'
export default {
  name: "Types",
  created() {
      this.lookArticle()
  },
  methods: {
    ...mapActions(["lookArticle","deleteArticle"]),
    //标题对应 详情文章
    itemDeatil(id,type) {
      this.$router.push( {name: 'detail', params: { id: id,type: type}})
    },
    //删除文章
    /* 根据id 删除文章 */
    async Articledelete(id) {
      //console.log(id);  //获取删除的指定id
      const confirmResult = await this.$confirm('此操作将永久删除该文章, 是否继续?', '提示', 
      {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).catch(err => err)
      if(confirmResult !== 'confirm') {
        return this.$message.info('已取消删除')
      }
      //console.log('删除成功');
      this.deleteArticle(id)
    },
    //返回about
    backFirst() {
      this.$router.push('/about')
    }
  }
}
</script>

<style scoped>
.content-container {
  margin-top: 30px;
}
.content-header {
  float: right;
  padding-right: 50px;
}
.block {
  margin-left: 240px;
  margin-right: 240px;
}
.title {
  margin: 2em 0;
  text-align: center;
  letter-spacing: 1em;
}
.count-text {
  text-align: center;
}
.tag-container {
  padding: 0 10px;
}
.item {
  margin: 10px 20px;
}
.blog-item {
  text-align: center;
}
.el-cart_body {
  width: 30px;
  height: 20px;
}
.me-article-count {
  color: #a6a6a6;
  padding-left: 8px;
  font-size: 13px;
}
.content p {
  width: 300px;
  height: 20px;
  overflow: hidden;
}
.me-pull-right {
  float: right;
}
.me-article-author {
  color: #a6a6a6;
  padding-right: 18px;
  font-size: 13px;
}
.back-button {
  margin-left: 20px;
}
</style>

