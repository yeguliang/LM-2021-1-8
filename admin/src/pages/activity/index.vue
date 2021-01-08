<template>
  <div class="activity-page">
    <div class="page-head">
      选择地区：
      <el-select v-model="selected" placeholder="请选择">
        <el-option
          v-for="item in options"
          :key="item.label+'xue3'"
          :label="item.value"
          :value="item.label"
        ></el-option>
      </el-select>
    </div>
    <el-row>
      <el-col :span="8" v-for="(o, index) in 10" :key="o+index" class="activity-box">
        <el-card :body-style="{ padding: '0px' }" shadow="hover">
          <img
            src="https://shadow.elemecdn.com/app/element/hamburger.9cf7b091-55e9-11e9-a976-7f4d0b07eef6.png"
            class="image"
          />
          <div style="padding: 14px;">
            <div class="des-box">
              <h3 class="title">机器学习</h3>
              <div class="des">vue是上手最快的前端框架！</div>
            </div>
            <div class="bottom clearfix">
              <span slot="label" style="float:left;line-height: 30px;">
                <i class="el-icon-location-outline"></i> 上海
              </span>
              <time
                class="time"
                style="float:left;margin-left:20px;line-height: 30px;"
              >开始时间：{{ currentDate }}</time>
              <el-button style="float:right;line-height: 30px;" type="text" class="button">报名参加</el-button>
            </div>
          </div>
        </el-card>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import address from "@/utils/address.js";
import moment from "moment";
export default {
  // 组件名称
  name: "demo",
  // 组件参数 接收来自父组件的数据
  props: {},
  // 局部注册的组件
  components: {},
  // 组件状态值
  data() {
    let currentDate = moment(new Date()).format("YYYY-MM-DD hh:mm:ss");
    let add_ = JSON.parse(JSON.stringify(address));
    // console.log("=>currentDate", currentDate);
    return {
      currentDate,
      options: add_,
      selected: "10",
    };
  },
  // 计算属性
  computed: {},
  // 侦听器
  watch: {},
  // 组件方法
  methods: {},
  // 以下是生命周期钩子   注：没用到的钩子请自行删除
  /**
   * 在实例初始化之后，组件属性计算之前，如data属性等
   */
  beforeCreate() {},
  /**
   * 组件实例创建完成，属性已绑定，但DOM还未生成，$ el属性还不存在
   */
  created() {},
  /**
   * 在挂载开始之前被调用：相关的 render 函数首次被调用。
   */
  beforeMount() {},
  /**
   * el 被新创建的 vm.$ el 替换，并挂载到实例上去之后调用该钩子。
   * 如果 root 实例挂载了一个文档内元素，当 mounted 被调用时 vm.$ el 也在文档内。
   */
  mounted() {},
  /**
   * 数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
   * 你可以在这个钩子中进一步地更改状态，这不会触发附加的重渲染过程。
   */
  beforeUpdate() {},
  /**
   * 由于数据更改导致的虚拟 DOM 重新渲染和打补丁，在这之后会调用该钩子。
   * 当这个钩子被调用时，组件 DOM 已经更新，所以你现在可以执行依赖于 DOM 的操作。
   */
  updated() {},
  /**
   * keep-alive 组件激活时调用。 仅针对keep-alive 组件有效
   */
  activated() {},
  /**
   * keep-alive 组件停用时调用。 仅针对keep-alive 组件有效
   */
  deactivated() {},
  /**
   * 实例销毁之前调用。在这一步，实例仍然完全可用。
   */
  beforeDestroy() {},
  /**
   * Vue 实例销毁后调用。调用后，Vue 实例指示的所有东西都会解绑定，
   * 所有的事件监听器会被移除，所有的子实例也会被销毁。
   */
  destroyed() {},
};
</script> 

<style lang='less' scoped>
@import url("./index.less");
</style>
