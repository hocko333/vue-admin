<template>
  <div class="dropdown-menu-container">
    <el-dropdown class="item_class">
      <span class="el-dropdown-link">
        <span class="username">{{ 'admin' }}</span>
        <img class="avatar" src="../../assets/img/logo.png"/>
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item>黄金糕</el-dropdown-item>
        <el-dropdown-item>狮子头</el-dropdown-item>
        <el-dropdown-item>螺蛳粉</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.el-dropdown {
  padding: 0;
  .el-dropdown-link {
    height: 100%;
    padding: 0 10px;
    display: flex;
    align-items: center;
    .avatar {
      width: 32px;
      height: 32px;
      border-radius: 50%;
      margin-left: 8px;
    }
  }
}
</style>
