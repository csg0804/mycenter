<template>
  <div class="pages home-wrap">
    <div class="charts" style="width: 100%" id="container"></div>
    <!-- <v-chart class="charts" prevent-render @on-render="renderChart"></v-chart> -->
    <!-- <div style='float:left;width:100px;height:100px;background: #fff;'>
      <x-circle
        :percent="percent"
        :stroke-width="15"
        :trail-width="15"
        :stroke-color="['#36D1DC', '#5B86E5']"
        trail-color="#ececec">
        <span style="color:#36D1DC">{{ percent }}%</span>
      </x-circle>
    </div>
    <div style='float:left;width:100px;height:100px;background: #fff;'>
      <x-circle
        :percent="percent1"
        :stroke-width="15"
        :trail-width="15"
        :stroke-color="['#01a65a', '#932bb6']"
        trail-color="#ececec">
        <span style="color:#36D1DC">{{ percent1 }}%</span>
      </x-circle>
    </div> -->
    <!-- <div class="charts-box">
      <v-chart class="charts" prevent-render @on-render="renderChart"></v-chart>
    </div>
    <div class="charts-box">
      <v-chart class="charts" prevent-render @on-render="renderChart1"></v-chart>
    </div>
    <div class="charts-box">
      <v-chart class="charts" prevent-render @on-render="renderChart2"></v-chart>
    </div>
    <div class="charts-box">
      <v-chart class="charts" prevent-render @on-render="renderChart3"></v-chart>
    </div> -->
  </div>
</template>

<script>
import { VChart, XCircle } from 'vux'

export default {
  components: {
    VChart,
    XCircle
  },
  data() {
    return {
      percent: 80,
      percent1: 60,
      screenWidth: document.body.clientWidth, // 屏幕尺寸
    }
  },
  created() {

  },
  mounted() {
    this.setCharts();
  },
  methods: {
    renderChart ({ chart }) {
      // 背景色： 
      // 圆圈颜色  #01c0ef，  #01a65a,  #f56954,  #932bb6 


      const data = [ { x: '1', y: 85 } ]
      chart.source(data, {
        y: {
          max: 100,
          min: 0
        }
      })
      chart.axis(false)
      chart.tooltip(false)
      chart.coord('polar', {
        transposed: true,
        innerRadius: 0.8,
        radius: 0.65
      })
      chart.guide().arc({
        start: [ 0, 0 ],
        end: [ 1, 99.98 ],
        top: false,
        style: {
          lineWidth: 20,
          stroke: '#eee'
        }
      })
      chart.guide().text({
        position: [ '50%', '50%' ],
        content: '85%',
        style: {
          fontSize: 24,
          fill: '#01c0ef'
        }
      })
      chart.interval()
        .position('x*y')
        .color('#01c0ef')
        .size(20)
        .animate({
          appear: {
            duration: 1200,
            easing: 'cubicIn'
          }
        })
        chart.changeSize(this.screenWidth/2)
      chart.render()
    },
    renderChart1 ({ chart }) {
      // 背景色： 
      // 圆圈颜色  #01c0ef，  #01a65a,  #f56954,  #932bb6 


      const data = [ { x: '1', y: 85 } ]
      chart.source(data, {
        y: {
          max: 100,
          min: 0
        }
      })
      chart.axis(false)
      chart.tooltip(false)
      chart.coord('polar', {
        transposed: true,
        innerRadius: 0.8,
        radius: 0.65
      })
      chart.guide().arc({
        start: [ 0, 0 ],
        end: [ 1, 99.98 ],
        top: false,
        style: {
          lineWidth: 20,
          stroke: '#eee'
        }
      })
      chart.guide().text({
        position: [ '50%', '50%' ],
        content: '85%',
        style: {
          fontSize: 24,
          fill: '#01c0ef'
        }
      })
      chart.interval()
        .position('x*y')
        .color('#01a65a')
        .size(20)
        .animate({
          appear: {
            duration: 1200,
            easing: 'cubicIn'
          }
        })
      chart.changeSize(this.screenWidth/2);
      chart.render()
    },
    renderChart2 ({ chart }) {
      // 背景色： 
      // 圆圈颜色  #01c0ef，  #01a65a,  #f56954,  #932bb6 


      const data = [ { x: '1', y: 85 } ]
      chart.source(data, {
        y: {
          max: 100,
          min: 0
        }
      })
      chart.axis(false)
      chart.tooltip(false)
      chart.coord('polar', {
        transposed: true,
        innerRadius: 0.8,
        radius: 0.65
      })
      chart.guide().arc({
        start: [ 0, 0 ],
        end: [ 1, 99.98 ],
        top: false,
        style: {
          lineWidth: 20,
          stroke: '#eee'
        }
      })
      chart.guide().text({
        position: [ '50%', '50%' ],
        content: '85%',
        style: {
          fontSize: 24,
          fill: '#01c0ef'
        }
      })
      chart.interval()
        .position('x*y')
        .color('#f56954')
        .size(20)
        .animate({
          appear: {
            duration: 1200,
            easing: 'cubicIn'
          }
        })
        chart.changeSize(this.screenWidth/2)
      chart.render()
    },
    renderChart3 ({ chart }) {
      // 背景色： 
      // 圆圈颜色  #01c0ef，  #01a65a,  #f56954,  #932bb6 


      const data = [ { x: '1', y: 85 } ]
      chart.source(data, {
        y: {
          max: 100,
          min: 0
        }
      })
      chart.axis(false)
      chart.tooltip(false)
      chart.coord('polar', {
        transposed: true,
        innerRadius: 0.8,
        radius: 0.65
      })
      chart.guide().arc({
        start: [ 0, 0 ],
        end: [ 1, 99.98 ],
        top: false,
        style: {
          lineWidth: 20,
          stroke: '#eee'
        }
      })
      chart.guide().text({
        position: [ '50%', '50%' ],
        content: '85%',
        style: {
          fontSize: 24,
          fill: '#01c0ef'
        }
      })
      chart.interval()
        .position('x*y')
        .color('#932bb6')
        .size(20)
        .animate({
          appear: {
            duration: 1200,
            easing: 'cubicIn'
          }
        })
        chart.changeSize(this.screenWidth/2)
      chart.render()
    },

    setCharts() {
      // let options = this.lineOptions();
      let options = this.getOptions();
      

        // 图表初始化函数
        this.$Highcharts.chart('container', options);
    },
    lineOptions() {
      let options = {
          chart: {
              type: 'bar'                          //指定图表的类型，默认是折线图（line）
          },
          title: {
              text: '我的第一个图表'                 // 标题
          },
          xAxis: {
              categories: ['苹果', '香蕉', '橙子']   // x 轴分类
          },
          yAxis: {
              title: {
                  text: '吃水果个数'                // y 轴标题
              }
          },
          series: [{                              // 数据列
              name: '小明',                        // 数据列名
              data: [1, 0, 4]                     // 数据
          }, {
              name: '小红',
              data: [5, 7, 3]
          }]
      };
      return options;
    },
    getOptions() {
      let options = {
        chart: {
          type: 'packedbubble',
          height: '100%'
        },
        title: {
          text: '2014 年世界各地碳排放量'
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
          name: '欧洲',
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
          name: '非洲',
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
          name: '大洋洲',
          data: [{
            name: "Australia",
            value: 409.4
          },
          {
            name: "New Zealand",
            value: 34.1
          },
          {
            name: "Papua New Guinea",
            value: 7.1
          }]
        },{
          name: '北美洲',
          data: [{
            name: "Costa Rica",
            value: 7.6
          },
          {
            name: "Honduras",
            value: 8.4
          },
          {
            name: "Jamaica",
            value: 8.3
          }]
        },{
          name: '南美洲',
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
        },{
          name: '亚洲',
          data: [{
            name: "Nepal",
            value: 306.5
          },
          {
            name: "Georgia",
            value: 6.5
          },
          {
            name: "Brunei Darussalam",
            value: 7.4
          },
          {
            name: "Kyrgyzstan",
            value: 7.4
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
  .charts-box{
    float: left;
    // width: 170px;
  }
  .charts{
    // width: 100%;
  }
}

</style>