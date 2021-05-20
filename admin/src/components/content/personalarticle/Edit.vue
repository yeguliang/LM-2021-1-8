<template>
  <div>
    <div class="m-content">
      <el-form
        :model="articles"
        :rules="rules"
        ref="ruleForm"
        label-width="100px"
        class="demo-ruleForm"
      >
        <el-form-item label="标题" prop="title">
          <el-input v-model="articles.title"></el-input>
        </el-form-item>

        <el-form-item label="分类" prop="type">
          <el-select v-model="articles.type">
            <el-option
                    v-for="item in types"
                    :key="item.label"
                    :label="item.label"
                    :value="item.label">
                  </el-option>
          </el-select>
        </el-form-item>

        <el-form-item label="内容" prop="des">
          <mavon-editor v-model="articles.des"></mavon-editor>
        </el-form-item>

        <el-form-item>
          <el-button
          type="primary" 
          @click="save"
            >完成编辑</el-button>
          <el-button type="primary" @click="backDeatil"
            >返回</el-button>
        </el-form-item>
      </el-form>
    </div>
  </div>
</template>

<script>
import {mavonEditor} from 'mavon-editor';
import {mapActions} from 'vuex'
export default {
  name: "BlogEdit",
  created() {
    const payload = {
      blogId:this.$route.params.id,
      type:this.$route.params.type
    }
    if(payload.blogId) {
      this.getArticle(payload);
      this.articles = this.$store.state.ruleForm
    }
  },
  components: {
    mavonEditor
  },
  data() {
    return {
      saveLoading: false,
      types: [{
          label: 'html'
        }, {
          label: 'css'
        }, {
          label: 'js'
        }, {
          label: 'react'
        }, {
          label: 'VueJs'
        }, {
          label: 'java'
        }, {
          label: 'mysql'
        }, {
          label: 'Node'
        }, {
          label: 'uniapp'
        }, {
          label: 'git'
        }, {
          label: 'people'
        }, {
          label: 'game'
        },{
          label: '其它'
        }, {
          label: '书籍'
        }, {
          label: 'admin'
        }, {
          label: 'server'
        }, {
          label: '工具'
        }, {
          label: '智能'
        }, {
          label: 'code'
        }],
      articles: {},
      rules: {
        title: [
          { required: true, message: "请输入标题", trigger: "blur" },
          {
            min: 3,
            max: 25,
            message: "长度在 3 到 25 个字符",
            trigger: "blur",
          },
        ],
        types: [{ required: true, message: "请选择分类", trigger: "blur" }],
        content: [{ trequired: true, message: "请输入内容", trigger: "blur" }],
      },
      fileReader: new FileReader(),
    };
  },
  methods: {
    ...mapActions(["getArticle","updateArticle"]),
    //编辑
    save() {
      this.saveLoading = true;
      this.$refs.ruleForm.validate((valid) => {
        if (valid) {
          this.saveLoading = false;
          const info = {
            id:this.ruleForm.id,
            title:this.ruleForm.title,
            type:this.ruleForm.type,
            des:this.ruleForm.des
          }
          this.updateArticle(info)
          // /* 提示信息 */
          return this.$message.success('更新文章成功')
        } else {
          console.log("error submit!!");
          return false;
        }
      });
    },
    //返回
    backDeatil() {
      this.$router.push({name:'detail',params:{id:this.$route.params.id,type:this.$route.params.type}})
    }
  },
};
</script>

<style scoped>
.m-content {
  margin: 0 auto;
  text-align: center;
}
</style>