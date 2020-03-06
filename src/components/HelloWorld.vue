<template>
  <div class="hello">
    部署成功
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      
    }
  },
  created() {
    let b = BUILD_ENV;
    console.log('BUILD_ENV----', b);
  }
}
</script>

<style scoped>



</style>
