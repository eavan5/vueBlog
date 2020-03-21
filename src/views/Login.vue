<template>
  <div class="login">
    <div class="logo">
      <svg
        t="1584696462925"
        class="icon"
        viewBox="0 0 1024 1024"
        version="1.1"
        xmlns="http://www.w3.org/2000/svg"
        p-id="39983"
        id="mx_n_1584696462925"
        width="180"
        height="180"
        data-spm-anchor-id="a313x.7781069.0.i50"
      >
        <path
          d="M427.52 588.8l-61.44-30.72c-5.12-2.56-10.24-2.56-15.36 0L289.28 588.8c-10.24 5.12-25.6-2.56-23.04-15.36l10.24-69.12c0-5.12 0-10.24-5.12-12.8l-51.2-48.64c-10.24-10.24-5.12-25.6 7.68-28.16l69.12-10.24c5.12 0 10.24-5.12 12.8-7.68l30.72-64c5.12-12.8 23.04-12.8 28.16 0l30.72 61.44c2.56 5.12 7.68 7.68 12.8 7.68l69.12 10.24c12.8 2.56 17.92 17.92 10.24 25.6L442.88 486.4c-2.56 2.56-5.12 7.68-5.12 12.8l12.8 69.12c2.56 15.36-10.24 25.6-23.04 20.48z"
          fill="#40C4FF"
          p-id="39984"
          data-spm-anchor-id="a313x.7781069.0.i44"
          class
        />
        <path
          d="M870.4 153.6H140.8c-25.6 0-46.08 20.48-46.08 46.08v499.2c0 25.6 20.48 46.08 46.08 46.08h202.24v87.04H232.96c-17.92 0-33.28 15.36-33.28 33.28S215.04 896 232.96 896h545.28c17.92 0 33.28-15.36 33.28-33.28 0-17.92-15.36-33.28-33.28-33.28h-110.08V742.4H870.4c25.6 0 46.08-20.48 46.08-46.08V199.68c0-25.6-20.48-46.08-46.08-46.08z m-2.56 542.72H143.36V202.24h721.92v494.08h2.56z"
          p-id="39985"
          data-spm-anchor-id="a313x.7781069.0.i46"
          class
          fill="#FFD740"
        />
        <path
          d="M757.76 391.68h-250.88c-15.36 0-25.6-10.24-25.6-25.6s10.24-25.6 25.6-25.6h250.88c15.36 0 25.6 10.24 25.6 25.6s-12.8 25.6-25.6 25.6zM757.76 496.64h-174.08c-15.36 0-25.6-10.24-25.6-25.6s10.24-25.6 25.6-25.6h174.08c15.36 0 25.6 10.24 25.6 25.6s-12.8 25.6-25.6 25.6zM757.76 593.92h-174.08c-15.36 0-25.6-10.24-25.6-25.6s10.24-25.6 25.6-25.6h174.08c15.36 0 25.6 10.24 25.6 25.6s-12.8 25.6-25.6 25.6z"
          fill="#40C4FF"
          p-id="39986"
          data-spm-anchor-id="a313x.7781069.0.i45"
          class="selected"
        />
      </svg>
      <p class="top">登录</p>
      <p class="bottom">岂能尽如人意，但求无愧我心！</p>
    </div>
    <div class="loginForm">
      <div class="box one">
        <div class="left">
          <i class="iconfont icon-icon-user"></i>
        </div>
        <input type="text" placeholder="用户名" />
      </div>
      <div class="box two">
        <div class="left">
          <i class="iconfont icon-mima"></i>
        </div>
        <input type="text" placeholder="密码" />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  methods: {
    handleSubmit (name) {
      this.$refs[name].validate(valid => {
        if (valid) {
          this.$Message.success('Success!')
        } else {
          this.$Message.error('Fail!')
        }
      })
    },
    handleReset (name) {
      this.$refs[name].resetFields()
    }
  }
}
</script>

<style lang='less' scoped>
.login {
  position: relative;
  width: 900px;
  margin: 0 auto;
  .logo{
    padding-top: 50px;
    text-align: center;
    .top{
      font-size: 40px;
      font-weight: 300;
    }
    .bottom{
      font-size: 16px;
    }
  }
  .loginForm {
    height: 400px;
    width: 600px;
    position: absolute;
    left: 50%;
    top: 400px;
    transform: translateX(-50%);
    // background-color: #fff;
    padding: 30px 50px;
    .box {
      position: relative;
    }
    input {
      padding: 10px 90px;
      border-radius: 20px;
      outline: none;
      border: none;
      background-color: #ffb03a;
      color: #fff;
      height: 60px;
      width: 500px;
      font-size: 20px;
      font-weight: 700;
    }
    input::placeholder {
      color: #fff;
    }
    .left {
      position: absolute;
      height: 60px;
      background-color: #dd9800;
      border-radius: 20px;
      width: 60px;
      line-height: 60px;
      i {
        color: #fff;
        font-size: 30px;
      }
    }
    .one {
      margin-bottom: 50px;
    }
  }
}
</style>
