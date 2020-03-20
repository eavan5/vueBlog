<template>
  <div class="article">
    <div class="bigImg">
      <img :src="content.bigImg" alt />
    </div>
    <div class="title">{{content.title}}</div>
    <div class="content">{{content.text}}</div>
    <div class="time">{{$dayjs(content.createdTime).format('YYYY-DD-MM')}}</div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      content: { title: "", bigImg: "", text: "", createdTime: "" }
    };
  },
  async created() {
    console.log(this.$route.query.articleId);

    const res = await this.$axios("/api/blogs/getdetail", {
      params: { articleId: this.$route.query.articleId }
    });
    console.log(res);
    if (res.data.state === 0) {
      this.content = res.data.data;
    }
  }
};
</script>

<style lang='less' scoped>
.article {
  width: 900px;
  margin: 0 auto;
  padding: 50px 10px;
  color: #67492e;
  .bigImg {
    text-align: center;
    img {
      border-radius: 10px;
      width: 100%;
    }
  }
  .title {
    font-size: 20px;
    text-align: left;
    font-weight: 500;
    // padding: 10px 0 10px 10px;
    padding-left: 20px;
    border-left: 3px solid #ffb03a;
    margin-top: 30px;
  }
  .content {
    margin-top: 20px;
    font-size: 18px;
    text-align: left;
    text-indent: 2em;
    line-height: 30px;
  }
  .time {
    text-align: right;
  }
}
</style>