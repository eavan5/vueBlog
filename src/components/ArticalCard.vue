<template>
  <Row type="flex" justify="space-between" class="code-row-bg">
    <Col :xs="24" :sm="24" :lg="11">
      <div class="box">
        <img src="https://cdn.loli.life/img/20200228090907.png" />
      </div>
    </Col>
  </Row>
</template>

<script>
export default {
  data() {
    return {
      //   img: require(imgURL)
    };
  }
};
</script>

<style lang='less' scoped>
  .ivu-col {
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
</style>