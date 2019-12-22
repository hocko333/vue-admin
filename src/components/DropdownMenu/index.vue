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
        <a href="https://github.com/hocko333/vue-admin" target="_blank" rel="noopener noreferrer">
          <el-dropdown-item>
            <i class="el-icon-s-flag"></i>
            项目地址
          </el-dropdown-item>
        </a>
        <el-dropdown-item divided @click.native="handleLogOut">
          <i class="el-icon-switch-button"></i>
          退出登录
        </el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
import { logOut } from '../../api/user'
import { removeToken } from '../../utils/token'

export default {
  methods: {
    handleLogOut() {
      this.$confirm('您将要退出系统，跳转到登录页面，是否继续？', '退出登录', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      })
        .then(() => {
          // 确定退出
          this.logOutYes()
        })
        .catch(() => {})
    },
    async logOutYes() {
      const { data: res } = await logOut()
      if (res.code - 0 !== 200)
        return this.$message.error('退出失败，请刷新重试~')
      // 退出成功 跳转到登录页
      this.$message.success({
        message: '已退出系统，将为您跳转到登录页面',
        duration: 2000,
        onClose: () => {
          removeToken()
          this.$router.push('/login')
        }
      })
    }
  }
}
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
