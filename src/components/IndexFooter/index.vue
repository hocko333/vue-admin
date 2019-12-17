<template>
  <div class="index-footer-container">
    <el-row :gutter="15">
      <el-col :xs="24" :sm="24" :lg="11">
        <index-table />
      </el-col>
      <el-col :xs="24" :sm="24" :lg="7">
        <todo />
      </el-col>
      <el-col :xs="24" :sm="24" :lg="6">
        <card />
      </el-col>
    </el-row>
  </div>
</template>

<script>
import IndexTable from './Table'
import Todo from './Todo'
import Card from './Card'

export default {
  components: {
    IndexTable,
    Todo,
    Card
  }
}
</script>

<style lang="less" scoped>
</style>
