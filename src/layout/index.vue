<template>
  <el-container>
    <Aside />
    <el-container>
      <el-header height="50px">
        <Header />
      </el-header>
      <el-main>
        <AppMain />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { AppMain, Aside, Header } from './components'

export default {
  components: {
    AppMain,
    Aside,
    Header
  }
}
</script>

<style lang="less" scoped>
.el-container {
  height: 100%;
  .el-header {
    padding: 0;
  }
}
</style>
