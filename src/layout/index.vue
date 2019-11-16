<template>
  <el-container>
    <Aside />
    <el-container>
      <Header />
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
</style>
