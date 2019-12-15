<template>
  <div class="dashboard-container">
    <panel />
    <line-chart />
    <middle-chart />
  </div>
</template>

<script>
import Panel from '../../components/Panel'
import LineChart from '../../components/IndexChart'
import MiddleChart from '../../components/IndexChart/MiddleChart'

export default {
  components: {
    Panel,
    LineChart,
    MiddleChart
  }
}
</script>

<style lang="less" scoped>
</style>
