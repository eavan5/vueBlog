<template>
  <div class="home">
    <div class="top">
      <img src="../assets/images/face.jpg" />
      <div class="info">
        <p>ForPad</p>
        <p class="tip">博客只是风景,心态才是灵魂</p>
      </div>
    </div>
    <div class="bottom">
      <div class="item" @click="goTo(item.cid)" v-for="item in articleData" :key="item.cid">
        <img :src="item.bigImg" alt />
        <div class="title">{{item.title}}</div>
      </div>
      <!-- <Col :sm="24" :lg="11">Col</Col> -->
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
// import HelloWorld from '@/components/HelloWorld.vue'

export default {
  async created() {
    const res = await this.$axios.get("/api/blogs/getList");
    console.log(res);
    if (res.data.state === 0) {
      this.articleData = res.data.data;
    }
  },
  methods: {
    goTo(id) {
      this.$router.push(`/article?articleId=${id}`);
    }
  },
  data() {
    return {
      articleData: []
    };
  },
  name: "Home"
};
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
      transition: 0.5s;

      &:hover {
        transform: translateY(-0.5em);
        box-shadow: rgba(0, 0, 0, 0.2) 0 1px 5px 0px;
      }
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
    text-align: center;
    display: grid;
    grid-template-columns: repeat(auto-fill, 350px);
    grid-template-rows: repeat(auto-fill, 200px);
    grid-row-gap: 20px;
    grid-column-gap: 30px;
    justify-content: center;

    .item {
      line-height: 200px;
      height: 200px;
      font-weight: bold;
      overflow: hidden;
      position: relative;
      border-radius: 15px;
      img {
        width: 100%;
        height: 100%;
      }
      .title {
        color: #000;
        position: absolute;
        height: 40px;
        background-color: rgba(0, 0, 0, 0.5);
        z-index: 999;
        bottom: 0;
        width: 100%;
        line-height: 40px;
        color: #fff;
        font-size: 16px;
      }
    }
    .item:first-of-type {
      background: #ef342a;
    }
    .item:nth-of-type(2) {
      background: #00a0a0;
    }
    .item:nth-of-type(3) {
      background: #a0a0ff;
    }
    .item:nth-of-type(4) {
      background: #00a0a0;
    }
    .item:nth-of-type(5) {
      background: #a0a0ff;
    }
    .item:nth-of-type(6) {
      background: #a0a0ff;
    }
    .item:nth-of-type(7) {
      background: #a0a0ff;
    }
  }
}
</style>
