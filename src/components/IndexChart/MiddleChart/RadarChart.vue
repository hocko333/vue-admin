<template>
  <div class="radar-container child_chart">
    <div class="chart" ref="chartRef"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
import resize from '../../../mixins/resize'

export default {
  mixins: [resize],
  data() {
    return {
      chart: null
    }
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.chartRef, 'macarons')
      this.chart.setOption({
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            // 坐标轴指示器，坐标轴触发有效
            type: 'shadow' // 默认为直线，可选为：'line' | 'shadow'
          }
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: ['预算分配', '实际开销', '预期']
        },
        radar: {
          radius: '66%',
          center: ['50%', '42%'],
          splitNumber: 8,
          splitArea: {
            areaStyle: {
              color: 'rgba(127,95,132,.3)',
              opacity: 1,
              shadowBlur: 45,
              shadowColor: 'rgba(0,0,0,.5)',
              shadowOffsetX: 0,
              shadowOffsetY: 15
            }
          },
          indicator: [
            { name: '销售', max: 10000 },
            { name: '管理', max: 20000 },
            { name: '信息技术', max: 20000 },
            { name: '客服', max: 20000 },
            { name: '研发', max: 20000 },
            { name: '市场', max: 20000 }
          ]
        },
        series: [
          {
            type: 'radar',
            symbolSize: 0,
            areaStyle: {
              normal: {
                shadowBlur: 13,
                shadowColor: 'rgba(0,0,0,.2)',
                shadowOffsetX: 0,
                shadowOffsetY: 10,
                opacity: 0.7
              }
            },
            data: [
              {
                value: [7300, 15000, 15800, 9500, 9000, 16900],
                name: '预算分配'
              },
              {
                value: [5000, 10400, 15800, 17000, 9200, 18100],
                name: '实际开销'
              },
              {
                value: [5500, 11000, 12000, 15000, 12000, 12000],
                name: '预期'
              }
            ]
          }
        ]
      })
    }
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  }
}
</script>

<style lang="less" scoped>
.chart {
  height: 300px;
}
</style>
