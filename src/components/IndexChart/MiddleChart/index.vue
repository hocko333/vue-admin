<template>
  <div class="middle-chart-container">
    <el-row :gutter="25">
      <el-col :xs="24" :sm="24" :lg="8">
        <radar-chart />
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <pie-chart />
      </el-col>
      <el-col :xs="24" :sm="24" :lg="8">
        <bar-chart />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import RadarChart from './RadarChart'
import PieChart from './PieChart'
import BarChart from './BarChart'

export default {
  components: {
    RadarChart,
    PieChart,
    BarChart
  }
}
</script>

<style lang="less" scoped>
.middle-chart-container {
  margin-top: 30px;
}
</style>

<style lang="less">
.child_chart {
  background-color: #fff;
  overflow: hidden;
  border-radius: 4px;
  padding: 16px 16px 0;
  margin-bottom: 30px;
}
</style>
