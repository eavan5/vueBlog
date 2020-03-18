<template>
  <div class="nav">
    <!-- 首页 -->
    <div class="bar" @click="toHome">
      <i class="iconfont icon-shouye"></i>
    </div>
    <!-- 说说 -->
    <div class="bar" @click="toTalk">
      <i class="iconfont icon-xiaoxi"></i>
    </div>
    <!-- 电影 -->
    <div class="bar">
      <i class="iconfont icon-dianyingpiao"></i>
    </div>
    <!-- 帮助 -->
    <div class="bar">
      <i class="iconfont icon-bangzhu"></i>
    </div>
    <!-- 搜索 -->
    <div class="bar">
      <i class="iconfont icon-sousuo"></i>
    </div>
    <div class="bar">
      <!-- 设置 -->
      <i class="iconfont icon-shezhi"></i>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    toHome () {
      this.$router.push('/')
    },
    toTalk () {
      this.$router.push({ name: 'Talk' })
    }
  }
}
</script>

<style lang='less' scoped>
.nav {
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  color: #ffaf00;
  display: flex;
  text-align: center;
  flex-direction: column;
  justify-content: center;
  transition: bottom 0.3s;
  background: rgba(255, 255, 255, 0.5);
  width: 4vw;
  //   background-color: #999;
  z-index: 999;
  .bar {
    height: 50px;
    i {
      font-size: 30px;
      font-weight: 600;
    }
  }
}
</style>
