<template>
  <div class="nav-wrap scale-1px-top">
    <ul class="nav-list">
      <li class="nav-item" :class="{'active':curnav==item.id}" v-for="(item, index) in navlist" :key="index">
        <router-link class="links" :to="item.path" @click.native="navFun(item)">
          <span class="iconfont" :class="item.icon"></span>
          <span class="title">{{item.title}}</span>
        </router-link>
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
        { id: 2, title: "项目", icon: "iconappworksheet", path: "/works" },
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
      justify-content: center;
      .links{
        width: 1.1rem;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        &:hover, &:active, &:visited, &:link,a:focus{
          background: none;
          outline:none;
          text-decoration: none;
          -webkit-tap-highlight-color: transparent;
        }
        .iconfont{
          font-size: 0.44rem;
          color: #999;
          margin: 0.05rem 0 0.05rem;
        }
        .title{
          font-size: 0.24rem;
          color: #999;
          text-decoration: none;
        }
      }
    }
    .active{
      .links{
        .iconfont, .title{
          color: #3296fa;
        }
      }
    }
  }
}

</style>