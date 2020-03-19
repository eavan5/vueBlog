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
        <div class="item">1</div>
        <div class="item">2</div>
        <div class="item">2</div>
        <div class="item">2</div>
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
  width: 900px;
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
      margin-top: 40px;
      text-align:center;
      display: grid;
      grid-template-columns: repeat(auto-fill, 350px) ;
      grid-template-rows: repeat(auto-fill, 200px);
      grid-row-gap: 20px;
      grid-column-gap: 30px;
      justify-content:center;
      
      .item{
            line-height: 200px;
            font-weight: bold;
        }
        .item:first-of-type{
            background:#ef342a
        }
        .item:nth-of-type(2){
            background:#00a0a0;
        }
        .item:nth-of-type(3){
            background:#a0a0ff;
        }
        .item:nth-of-type(4){
            background:#00a0a0;
        }
        .item:nth-of-type(5){
            background:#a0a0ff;
        }
        .item:nth-of-type(6){
            background:#a0a0ff;
        }
        .item:nth-of-type(7){
            background:#a0a0ff;
        }
  }
}
</style>
