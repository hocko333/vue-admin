<template>
  <el-container>
    <Aside />
    <el-container>
      <el-header>Header</el-header>
      <el-main>
        <AppMain />
      </el-main>
    </el-container>
  </el-container>
</template>

<script>
import { AppMain, Aside } from './components'

export default {
  components: {
    AppMain,
    Aside
  }
}
</script>

<style lang="less" scoped>
</style>
