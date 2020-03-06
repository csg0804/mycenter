<template>
  <div class="nav-wrap scale-1px-top">
    <ul class="nav-list">
      <li class="nav-item" :class="{'active':curnav==item.id}" v-for="(item, index) in navlist" :key="index">
        <span class="iconfont" :class="item.icon"></span>
        <router-link class="title" :to="item.path" @click.native="navFun(item)">{{item.title}}</router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {
      curnav: 1,
      navlist: [
        { id: 1, title: "首页", icon: "iconhome1", path: "/" },
        { id: 2, title: "作品", icon: "iconappworksheet", path: "/works" },
        { id: 3, title: "我的", icon: "icongerenzhongxin", path: "/my" }
      ]
    }
  },
  methods: {
    navFun(item) {
      this.curnav = item.id;
    }
  }
}
</script>

<style lang='less' scoped>

.nav-wrap{
  width: 100%;
  height: 0.98rem;
  background: #fff;
  position: absolute;
  bottom: 0;
  left: 0;
  .nav-list{
    display: flex;
    height: 100%;
    .nav-item{
      flex: 1;
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      .iconfont{
        font-size: 0.44rem;
        color: #999;
        margin: 0.05rem 0 0.05rem;
      }
      .title{
        font-size: 0.24rem;
        color: #999;
        text-decoration: none;
        &:hover, &:active, &:visited, &:link,a:focus{
          background: none;
          outline:none;
          text-decoration: none;
          -webkit-tap-highlight-color: transparent;
        }
      }
    }
    .active{
      .iconfont, .title{
        color: #3296fa;
      }
    }
  }
}

</style>