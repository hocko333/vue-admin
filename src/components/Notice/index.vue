<template>
  <div class="notice-container">
    <div class="message item_class" @click="handleClickNotice">
      <el-badge is-dot>
        <i class="el-icon-message-solid"></i>
      </el-badge>
    </div>
    <el-drawer
      title="我是标题"
      custom-class="notice_drawer"
      :size="size"
      :modal="false"
      :visible.sync="drawer"
      :direction="direction"
      :before-close="handleClose"
      :wrapperClosable="true"
    >
      <span>我来啦!</span>
    </el-drawer>
  </div>
</template>

<script>
export default {
  data() {
    return {
      drawer: false,
      direction: 'rtl',
      size: '22%'
    }
  },
  methods: {
    handleClose(done) {
      this.drawer = false
      done()
    },
    handleClickNotice() {
      this.drawer = !this.drawer
    }
  }
}
</script>

<style lang="less" scoped>
</style>
