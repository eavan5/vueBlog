<template>
  <div id="app">
    <sidebar-com></sidebar-com>
    <router-view id="rw" />
    <footer>
      <div class="info">
        <!-- <i class="iconfont icon-chuangzuo"></i> -->
        <p>皖ICP备1905415417号</p>
        <p>© 2020 Dreamer-Paul.</p>
      </div>
    </footer>
  </div>
</template>

<script>
import SidebarCom from './components/SidebarCom'
export default {
  components: {
    SidebarCom
  }
}
</script>

<style lang="less">
html,
body,
#app {
  height: 100%;
}
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  background: url("./assets/images/bg1.png") top center fixed;
  footer {
    position: fixed;
    bottom: 0px;
    width: 100%;
    height: 90px;
    background: url("./assets/images/bg2.png") top/contain;
    .info {
      position: absolute;
      bottom: 2px;
      left: 50%;
      transform: translateX(-50%);
      p {
        color: #fff;
        font-size: 12px;
      }
    }
  }
}

#nav {
  padding: 30px;

  a {
    font-weight: bold;
    color: #2c3e50;
    &.router-link-exact-active {
      color: #42b983;
    }
  }
}
</style>
