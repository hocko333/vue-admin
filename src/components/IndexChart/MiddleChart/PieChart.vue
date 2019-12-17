<template>
  <div class="pie-container child_chart">
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
          trigger: 'item',
          formatter: '{a} <br/>{b} : {c} ({d}%)'
        },
        legend: {
          left: 'center',
          bottom: '10',
          data: ['直接访问', '邮件营销', '联盟广告', '视频广告', '搜索引擎']
        },
        series: [
          {
            name: '访问来源',
            type: 'pie',
            radius: [10, 95],
            center: ['50%', '38%'],
            data: [
              { value: 335, name: '直接访问' },
              { value: 210, name: '邮件营销' },
              { value: 154, name: '联盟广告' },
              { value: 105, name: '视频广告' },
              { value: 70, name: '搜索引擎' }
            ].sort((a, b) => b.value - a.value),
            roseType: 'radius',
            animationType: 'scale',
            animationEasing: 'elasticOut',
            animationDuration: 2600,
            animationDelay: idx => Math.random() * 200
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
