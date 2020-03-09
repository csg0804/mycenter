<template>
  <div class="pages works-wrap">
    <div class="top-part">
      <h3 class="title"></h3>
    </div>
    <ul class="works-list">
      <li class="work scale-1px-top scale-1px-bottom"></li>
      <li class="work scale-1px-top scale-1px-bottom"></li>
      <li class="work scale-1px-top scale-1px-bottom"></li>
      <li class="work scale-1px-top scale-1px-bottom"></li>
    </ul>
  </div>
</template>

<script>
export default {
  components: {},
  data() {
    return {

    }
  },
  methods: {}
}
</script>

<style lang='less' scoped>

.works-wrap{
  background: #F5F5F5;
  .top-part{
    width: 100%;
    height: 2.6rem;
    font-size: 0.3rem;
    color: #fff;
    font-weight: 700;
    padding: 0.4rem 0.4rem;
    background: #373841;
    box-sizing: border-box;
  }
  .works-list{
    margin-top: 0.2rem;
    .work{
      width: 100%;
      height: 3rem;
      background: #fff;
      margin-bottom: 0.2rem;
    }
  }
}

</style>