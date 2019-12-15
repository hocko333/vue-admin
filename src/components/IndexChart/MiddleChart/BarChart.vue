<template>
  <div class="bar-container child_chart">
    <div class="chart" ref="chartRef"></div>
  </div>
</template>

<script>
import echarts from 'echarts'

export default {
  methods: {
    initChart() {
      const chart = echarts.init(this.$refs.chartRef)
      chart.setOption({
        xAxis: {
          type: 'category',
          data: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
        },
        yAxis: {
          type: 'value'
        },
        series: [
          {
            data: [120, 200, 150, 80, 70, 110, 130],
            type: 'bar'
          }
        ]
      })
    }
  },
  mounted() {
    this.initChart()
  }
}
</script>

<style lang="less" scoped>
.chart {
  height: 300px;
}
</style>
