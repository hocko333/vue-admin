<template>
  <div class="full-screen-container">
    <div class="full_screen item_class" @click="handleClick">
      <i :class="isFullScreen ? 'el-icon-aim' : 'el-icon-full-screen'"></i>
    </div>
  </div>
</template>

<script>
import screenFull from 'screenfull'

export default {
  data() {
    return {
      isFullScreen: false
    }
  },
  mounted() {
    this.init()
  },
  beforeDestroy() {
    this.destroy()
  },
  methods: {
    handleClick() {
      if (!screenFull.isEnabled) {
        this.$message.warning('抱歉，您的浏览器不支持全屏功能~')
        return
      }
      screenFull.toggle()
    },
    change() {
      this.isFullScreen = screenFull.isFullscreen
    },
    init() {
      if (screenFull.isEnabled) {
        screenFull.on('change', this.change)
      }
    },
    destroy() {
      if (screenFull.isEnabled) {
        screenFull.off('change', this.change)
      }
    }
  }
}
</script>

<style lang="less" scoped>
</style>
