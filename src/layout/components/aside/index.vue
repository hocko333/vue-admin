<template>
  <el-aside width="210px">
    <div class="logo_box">
      <img src="../../../assets/img/logo.png" />
      Vue-Admin
    </div>
    <el-menu
      router
      background-color="#304156"
      mode="vertical"
      text-color="#bfcbd9"
      active-text-color="#409EFF"
    >
      <el-menu-item :index="'dashboard'">
        <i class="el-icon-menu"></i>
        首页
      </el-menu-item>
      <side-bar-item v-for="item in menuList" :key="item.path" :item="item" />
    </el-menu>
  </el-aside>
</template>

<script>
import { mapActions } from 'vuex'
import toTree from '@/utils/to-tree'
import SideBarItem from './SideBarItem'

export default {
  components: {
    SideBarItem
  },
  data() {
    return {
      menuList: []
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

.el-menu {
  border-right: 0 none;
}
</style>
