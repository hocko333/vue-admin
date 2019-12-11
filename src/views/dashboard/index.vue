<template>
  <div class="dashboard-container">
    <panel />
    <line-chart />
  </div>
</template>

<script>
import Panel from '../../components/Panel'
import LineChart from '../../components/LineChart'

export default {
  components: {
    Panel,
    LineChart
  }
}
</script>

<style lang="less" scoped>
</style>
