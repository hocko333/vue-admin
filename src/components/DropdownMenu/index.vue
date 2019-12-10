<template>
  <div class="dropdown-menu-container">
    <el-dropdown class="item_class" placement="bottom-end" trigger="click">
      <span class="el-dropdown-link">
        <span class="username">{{ 'admin' }}</span>
        <img class="avatar" src="../../assets/img/avatar.jpg" />
        <i class="el-icon-arrow-down el-icon--right"></i>
      </span>
      <el-dropdown-menu slot="dropdown" class="dropdown_menu_list">
        <router-link to="/">
          <el-dropdown-item>
            <i class="el-icon-s-home"></i>
            首页
          </el-dropdown-item>
        </router-link>
        <router-link to="/profile">
          <el-dropdown-item>
            <i class="el-icon-user-solid"></i>
            个人中心
          </el-dropdown-item>
        </router-link>
        <el-dropdown-item divided>
          <i class="el-icon-switch-button"></i>
          退出登录
        </el-dropdown-item>
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
      width: 40px;
      height: 40px;
      border-radius: 50%;
      margin-left: 8px;
    }
  }
}

i {
  font-size: 16px;
}
</style>
