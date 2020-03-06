
<template>
  <div class="layuot-wrap">
    <router-view></router-view>
    <nav-page></nav-page>
  </div>
</template>

<script>
import NavPage from "./NavPage"

export default {
  components: {
    NavPage
  },
  data() {
    return {

    }
  },
  methods: {}
}
</script>

<style lang='less' scoped>

.layuot-wrap{
  width: 100%;
  height: 100%;
  padding-bottom: 0.98rem;
  box-sizing: border-box;
  .pages{
    width: 100%;
    height: 100%;
  }
}

</style>