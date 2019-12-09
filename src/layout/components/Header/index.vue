<template>
  <div class="header_container">
    <div class="header_left center_class">
      <div class="collapse_btn item_class" @click="handleToggle">
        <i class="el-icon-s-fold" v-if="!sideBar.isCollapse"></i>
        <i class="el-icon-s-unfold" v-else></i>
      </div>
      <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item>
          <a href="/">活动管理</a>
        </el-breadcrumb-item>
        <el-breadcrumb-item>活动列表</el-breadcrumb-item>
        <el-breadcrumb-item>活动详情</el-breadcrumb-item>
      </el-breadcrumb>
    </div>
    <div class="header_right center_class">
      <div class="message item_class">
        <i class="el-icon-message-solid"></i>
      </div>
      <div class="full_screen item_class">
        <i class="el-icon-full-screen"></i>
      </div>
      <el-dropdown class="item_class">
        <span class="el-dropdown-link">
          下拉菜单
          <i class="el-icon-arrow-down el-icon--right"></i>
        </span>
        <el-dropdown-menu slot="dropdown">
          <el-dropdown-item>黄金糕</el-dropdown-item>
          <el-dropdown-item>狮子头</el-dropdown-item>
          <el-dropdown-item>螺蛳粉</el-dropdown-item>
        </el-dropdown-menu>
      </el-dropdown>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['sideBar'])
  },
  methods: {
    handleToggle() {
      this.$store.dispatch('app/toggleSidebar')
    }
  }
}
</script>

<style lang="less" scoped>
.header_container {
  height: 100%;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(0, 0, 0, 0.05);
  .header_left {
    display: flex;
    justify-content: flex-start;
    .collapse_btn {
      margin-right: 8px;
      padding-left: 15px;
      padding-right: 15px;
      i[class^='el-icon'] {
        font-size: 22px;
      }
    }
  }
  .header_right {
    padding-right: 15px;
    display: flex;
    justify-content: flex-end;
  }
}

.el-breadcrumb {
  display: flex;
  align-items: center;
}

.item_class {
  height: 100%;
  cursor: pointer;
  padding-left: 10px;
  padding-right: 10px;
  display: flex;
  align-items: center;
  i[class^='el-icon'] {
    font-size: 18px;
    color: #606266;
  }
}

.item_class:not(.collapse_btn):hover {
  background-color: #f6f8f8;
}

.el-dropdown {
  padding: 0;
  .el-dropdown-link {
    height: 100%;
    padding: 0 10px;
    display: flex;
    align-items: center;
  }
}
</style>
