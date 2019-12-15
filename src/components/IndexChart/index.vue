<template>
  <div class="line-chart-container">
    <div class="chart" ref="chartRef"></div>
  </div>
</template>

<script>
import echarts from 'echarts'
require('echarts/theme/macarons')
import resize from '../../mixins/resize'
import bus from '../../utils/bus'

export default {
  mixins: [resize],
  watch: {
    lineData: {
      handler(val) {
        this.setOptions(val)
      },
      deep: true
    }
  },
  data() {
    return {
      chart: null,
      lineData: {
        expectedData: [],
        actualData: [],
        time: []
      }
    }
  },
  methods: {
    initChart() {
      this.chart = echarts.init(this.$refs.chartRef)
    },
    setOptions({ expectedData, actualData, time }) {
      this.chart.setOption({
        xAxis: {
          type: 'category',
          data: time,
          boundaryGap: false,
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#2a88cd'
            }
          }
        },
        grid: {
          left: 10,
          right: 10,
          bottom: 20,
          top: 30,
          containLabel: true
        },
        tooltip: {
          trigger: 'axis',
          axisPointer: {
            type: 'cross'
          },
          padding: [5, 10],
          backgroundColor: 'rgba(50,50,50,0.5)'
        },
        yAxis: {
          type: 'value',
          axisTick: {
            show: false
          },
          axisLine: {
            lineStyle: {
              color: '#2a88cd'
            }
          },
          splitArea: {
            show: true,
            areaStyle: {
              color: ['rgba(100, 100, 100, 0.03)', 'rgba(100, 100, 100, 0)']
            }
          },
          splitLine: {
            lineStyle: {
              color: 'rgba(100, 100, 100, 0.05)'
            }
          }
        },
        legend: {
          data: ['expected', 'actual']
        },
        series: [
          {
            name: 'expected',
            itemStyle: {
              normal: {
                color: '#FF005A',
                lineStyle: {
                  color: '#FF005A',
                  width: 2
                }
              }
            },
            data: expectedData,
            type: 'line',
            smooth: true,
            animationDuration: 2000,
            animationEasing: 'cubicInOut'
          },
          {
            name: 'actual',
            data: actualData,
            type: 'line',
            smooth: true,
            itemStyle: {
              normal: {
                color: '#3888fa',
                lineStyle: {
                  color: '#3888fa',
                  width: 2
                },
                areaStyle: {
                  color: '#f3f8ff'
                }
              }
            },
            animationDuration: 2000,
            animationEasing: 'quadraticOut'
          }
        ]
      })
    },
    setLineData() {
      bus.$on('getLineData', data => {
        this.lineData.expectedData = data.map(item => item.expected)
        this.lineData.actualData = data.map(item => item.actual)
        this.lineData.time = data.map(item => item.time)
      })
    }
  },
  created() {
    this.setLineData()
  },
  mounted() {
    this.$nextTick(() => {
      this.initChart()
    })
  }
}
</script>

<style lang="less" scoped>
.line-chart-container {
  background-color: #fff;
  padding: 20px 20px 0 20px;
  .chart {
    width: 100%;
    height: 400px;
  }
}
</style>
