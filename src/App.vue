<template>
  <div id="app">
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
@import url('./style/1px.css');
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
</style>
