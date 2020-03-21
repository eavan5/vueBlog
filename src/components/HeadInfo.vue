<template>
  <div class="head">
      <div class="one">
      <slot></slot>
      </div>
      <div class="two">{{title}}</div>
      <div class="three">{{describe}}</div>
    </div>
</template>

<script>
export default {
  props: ['title', 'describe']
}
</script>

<style lang='less' scoped>
.head {
    padding-top: 50px;
    padding-bottom: 20px;
    .one {
    //   margin-top: 50px;
    }
    .two {
      font-size: 35px;
      font-weight: 300;
      margin-top: 10px;
    }
    .three {
      font-size: 18px;
      margin: 5px;
    }
  }
 
</style>
