<template>
  <div id="app">
    <img src="./assets/logo.png">
    <router-view/>
  </div>
</template>

<script>
export default {
  name: 'App'
}
</script>

<style>
@import url('./style/reset.less');
html, body{
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
  font-size: 50px;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -webkit-overflow-scrolling:touch;
}
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  width: 100%;
  height: 100%;
  font-size: 0.32rem;
}
::-webkit-scrollbar{
  width: 2px;
  height: 2px;
  display: none;
}
::-webkit-scrollbar-thumb{
  border-radius: 5px;
  background: #a9a9aa;
}

/********* loading样式 **********/
.weui-loading_toast .weui-toast{
  width: 1.6rem;
  height: 1.6rem;
  min-height: 1.6rem !important;
  .weui-loading{
    width: 0.64rem;
    height: 0.64rem;
    margin-top: 0.48rem;
  }
}

/******** toast弹框样式 ********/
.vux-toast{
  .weui-toast__content{
    font-size: 0.28rem;
  }
}

/******** popup-picker样式 ********/
.vux-popup-picker{
  .vux-popup-header-right{
    color: #FD6934;
  }
}

/******** popover样式 ********/
.vux-popover.v-transfer-dom{
  width: 4.5rem !important;
  left: 1.1rem !important;
  font-size: 0.26rem;
  line-height: 0.36rem;
  padding: 0.15rem;
  background: #fd6934;
  box-sizing: border-box;
  .vux-popover-arrow-down{
    left: 10%;
    border-top: 5px solid #fd6934;
  }
}
</style>
