<template>
  <div class="table-container">
    <el-table :data="tableList" stripe style="width: 100%">
      <el-table-column prop="id" label="订单ID" min-width="30%"></el-table-column>
      <el-table-column prop="name" label="名称" min-width="26%"></el-table-column>
      <el-table-column prop="price" label="价格" min-width="18%">
        <template slot-scope="{row}">
          <span>￥ {{row.price}}</span>
        </template>
      </el-table-column>
      <el-table-column prop="quantity" label="数量" min-width="12%"></el-table-column>
      <el-table-column
        prop="status"
        label="状态"
        header-align="center"
        align="center"
        min-width="13%"
      >
        <template slot-scope="{row}">
          <el-tag type="danger" v-if="row.status === 1">已取消</el-tag>
          <el-tag type="warning" v-else-if="row.status === 2">进行中</el-tag>
          <el-tag type="success" v-else-if="row.status === 3">已完成</el-tag>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getTableList } from '../../api/dashboard'

export default {
  data() {
    return {
      tableList: []
    }
  },
  created() {
    this.queryTableList()
  },
  methods: {
    async queryTableList() {
      const { data: res } = await getTableList()
      if (res.code !== 200)
        return this.$message.error('获取表格数据失败，请刷新重试~')
      this.tableList = res.data.tableList
    }
  }
}
</script>

<style lang="less" scoped>
</style>
