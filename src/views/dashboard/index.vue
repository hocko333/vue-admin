<template>
  <div class="dashboard-container">
    <panel />
    <line-chart />
    <middle-chart />
    <index-footer />
  </div>
</template>

<script>
import Panel from '../../components/Panel'
import LineChart from '../../components/IndexChart'
import MiddleChart from '../../components/IndexChart/MiddleChart'
import IndexFooter from '../../components/IndexFooter'

export default {
  components: {
    Panel,
    LineChart,
    MiddleChart,
    IndexFooter
  }
}
</script>

<style lang="less" scoped>
</style>
