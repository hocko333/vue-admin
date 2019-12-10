<template>
  <el-aside :width="sideBar.isCollapse ? '64px' : '210px'">
    <router-link to="/">
      <div class="logo_box">
        <img src="../../../assets/img/logo.png" />
        Vue-Admin
      </div>
    </router-link>
    <el-scrollbar wrap-class="scrollbar-wrapper">
      <el-menu
        router
        class="left_menu"
        mode="vertical"
        text-color="#bfcbd9"
        active-text-color="#409EFF"
        :default-active="defaultActive"
        :unique-opened="true"
        :collapse="sideBar.isCollapse"
      >
        <el-menu-item :index="'/dashboard'">
          <i class="el-icon-menu"></i>
          <span slot="title">首页</span>
        </el-menu-item>
        <side-bar-item v-for="item in menuList" :key="item.path" :item="item" />
      </el-menu>
    </el-scrollbar>
  </el-aside>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'
import toTree from '@/utils/to-tree'
import SideBarItem from './SideBarItem'

export default {
  computed: {
    ...mapGetters(['sideBar'])
  },
  watch: {
    $route: {
      handler(val) {
        this.defaultActive = val.path.replace('/index', '')
      },
      deep: true,
      immediate: true
    }
  },
  components: {
    SideBarItem
  },
  data() {
    return {
      menuList: [],
      defaultActive: '/dashboard'
    }
  },
  methods: {
    ...mapActions(['user/getMenuList']),
    async getMenu() {
      const { data: res } = await this['user/getMenuList']()
      const treeObj = toTree(res)
      const treeList = this.treeObjToList(treeObj)
      this.menuList = treeList
      console.log(treeList)
    },
    treeObjToList(obj) {
      let treeList = []
      for (const key in obj) {
        treeList.push(obj[key])
      }
      return treeList
    }
  },
  created() {
    this.getMenu()
  }
}
</script>

<style lang="less" scoped>
.el-aside {
  height: 100%;
  overflow: hidden;
  background-color: #304156;
  transition: width 0.3s;
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

.el-menu {
  border-right: 0 none;
}

.el-scrollbar {
  height: calc(100% - 50px);
}
</style>

<style lang="less">
.scrollbar-wrapper {
  overflow-x: hidden !important;
}

.el-menu {
  background-color: #304156 !important;
}

.el-submenu {
  .el-menu {
    background-color: #1f2d3d !important;
    // .el-menu-item {
    //   background-color: #fff !important;
    // }
  }
}

.el-menu-item:hover {
  background-color: #263445 !important;
}

.el-menu-item:focus {
  background-color: transparent !important;
}

.el-submenu__title:hover {
  background-color: #263445 !important;
}

.left_menu:not(.el-menu--collapse) {
  width: 210px;
}
</style>
