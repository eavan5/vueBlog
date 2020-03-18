<template>
  <div class="home">
    <div class="top">
      <img src="https://cdn.loli.life/img/20200228092035.png" />
      <div class="info">
        <p>ForPad</p>
        <p class="tip">博客只是风景,心态才是灵魂</p>
      </div>
    </div>
    <div class="bottom">
      <Row type="flex" justify="space-between" class="code-row-bg">
        <Col :xs="24" :sm="24" :lg="11">
          <div class="box">
            <img src="https://cdn.loli.life/img/20200228090907.png" />
          </div>
        </Col>
        <Col :xs="24" :sm="24" :lg="11">
          <div class="box">
            <img src="https://cdn.loli.life/img/20200308203825.png" />
          </div>
        </Col>
        <Col :xs="24" :sm="24" :lg="11">
          <div class="box">
            <img src="https://cdn.loli.life/img/20200228090907.png" />
          </div>
        </Col>

        <!-- <Col :sm="24" :lg="11">Col</Col> -->
      </Row>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  data () {
    return {}
  },
  name: 'Home'
}
</script>

<style lang="less" scoped>
.home {
  height: 100%;
  margin: 0 auto;
  width: 60%;
  padding: 30px 50px;
  // background-color: #666;
  .top {
    img {
      border-radius: 66%;
      max-height: 144px;
    }
    .info {
      p {
        font-size: 20px;
        color: rgba(0, 0, 0, 0.5);
      }
      .tip {
        font-size: 16px;
      }
    }
  }
  .bottom {
    margin-top: 20px;
    .ivu-col {
      background-color: yellow;
      height: 13vw;
      margin-bottom: 20px;
      overflow: hidden;
      .box {
        overflow: hidden;
        img {
          max-width: 100%;
          max-height: 500px;
          border-radius: 10px;
          transition: box-shadow 0.3s;
        }
      }
    }
  }
}
</style>
