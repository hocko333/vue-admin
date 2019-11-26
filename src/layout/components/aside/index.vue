<template>
  <el-aside width="200px">
    <div class="logo_box">
      <img src="../../../assets/img/logo.png">
      Vue-Admin
    </div>
  </el-aside>
</template>

<script>
export default {
}
</script>

<style lang="less" scoped>
.el-aside {
  height: 100%;
  background-color: #304156;
  .logo_box {
    display: flex;
    align-items: center;
    height: 50px;
    padding-left: 30px;
    background-color: #2b2f3a;
    font-size: 14px;
    font-weight: 700;
    color: #fff;
    img {
      width: 32px;
      height: 32px;
      margin-right: 16px;
    }
  }
}
</style>
