<template>
  <div class="pages home-wrap">
    <div class="top-part">
      <div class="title-box">
        <h3 class="title">我的微场景</h3>
        <p class="title-info">
          通过酷炫的【 <span class="info-bold">微场景应用</span> 】展示我的简历
        </p>
        <x-button class="tolink" type="primary">点击查看</x-button>
      </div>

      <!-- <div class="title-box">
        <div class="iconfont iconicon-test"></div>
        <h3 class="title">我的微场景
          <span class="title-info">my micro resume</span>
        </h3>
        <p class="tolink">点击查看 >></p>
      </div> -->
      <div class="icon-back iconfont iconappworksheet"></div>
      <canvas class="ani" id="anicanvas"></canvas>
    </div>
    <div class="main">
      <div class="charts" style="width: 100%" id="container"></div>
    </div>
  </div>
</template>

<script>
import { XButton } from 'vux'
import Wave from "../../utils/wave"

export default {
  components: {
    XButton
  },
  data() {
    return {
      
    }
  },
  beforeRouteLeave(to, from, next) {
    Wave.clear();   //清除波浪动画
    next();
  },
  created() {

  },
  mounted() {
    Wave.render("anicanvas", { height: 60 });    //启动波浪动画   离开页面时需要清除动画
    this.setCharts();
  },
  methods: {
    setCharts() {   // 图表初始化函数
      let options = this.getOptions();
      this.$Highcharts.chart('container', options);
    },
    getOptions() {
      let options = {
        chart: {
          type: 'packedbubble',
          height: '100%'
        },
        title: {
          text: '我的技术统计'
        },
        tooltip: {
          useHTML: true,
          pointFormat: '<b>{point.name}:</b> {point.y}m CO<sub>2</sub>'
        },
        legend: {
          enabled: false
        },
        credits: {
          enabled: false //不显示LOGO
        },
        plotOptions: {
          packedbubble: {
            minSize: '30%',
            maxSize: '120%',
            zMin: 0,
            zMax: 1000,
            layoutAlgorithm: {
              gravitationalConstant: 0.05,
              splitSeries: true,
              seriesInteraction: false,
              dragBetweenSeries: true,
              parentNodeLimit: true
            },
            dataLabels: {
              enabled: true,
              format: '{point.name}',
              filter: {
                property: 'y',
                operator: '>',
                value: 10
              },
              style: {
                color: 'black',
                textOutline: 'none',
                fontWeight: 'normal'
              }
            }
          }
        },
        series: [{
          name: 'Vue',
          data: [{
            name: 'Germany',
            value: 767.1
          }, {
            name: 'Croatia',
            value: 20.7
          },
          {
            name: "Belgium",
            value: 97.2
          }]
        },{
          name: '小程序',
          data: [{
            name: "Senegal",
            value: 8.2
          },
          {
            name: "Cameroon",
            value: 9.2
          },
          {
            name: "Zimbabwe",
            value: 13.1
          }]
        },{
          name: 'Hae',
          data: [{
            name: "El Salvador",
            value: 7.2
          },
          {
            name: "Uruguay",
            value: 8.1
          },
          {
            name: "Bolivia",
            value: 17.8
          }]
        }]
      }
      return options;
    }
  }
}
</script>

<style lang='less' scoped>

.home-wrap{
  background: #F5F5F5;
  .top-part{
    width: 100%;
    height: 3.5rem;
    display: flex;
    align-items: flex-end;
    background: #3bc7c6;
    background: linear-gradient(145deg, #3dcaff, #3bc7c6);
    position: relative;
    overflow: hidden;
    .title-box{
      width: 100%;
      position: absolute;
      top: 0.6rem;
      left: 0;
      text-align: center;
      .title{
        font-size: 0.56rem;
        color: #fff;
        font-weight: 700;
      }
      .title-info{
        color: #fff;
        font-size: 0.26rem;
        margin: 0.1rem 0 0.3rem;
      }
      .info-bold{
        font-weight: bold;
      }
      .tolink{
        display: block;
        width: 1.8rem;
        height: 0.6rem;
        font-size: 0.24rem;
        color: #ff8300;
        background: #fff;
        line-height: 0.6rem;
        &::after{
          display: none;
        }
      }
    }
    .icon-back{
      position: absolute;
      top: -0.8rem;
      right: -0.8rem;
      font-size: 3.1rem;
      color: #fff;
      opacity: 0.1;
      transform: rotate(90deg);
    }
    .ani{
      opacity: 0.6;
    }
  }
  .main{
    width: 7.1rem;
    height: 5rem;
    background: #fff;
    margin: 0.2rem auto 0;
  }
}

</style>