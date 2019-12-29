<template>
  <div>
    <el-card>
      <div class="text-box">
        <i class="el-icon-s-opportunity"></i>
        <span>点击按钮可查看本管理系统的基本操作</span>
      </div>
      <el-button type="primary" @click.prevent.stop="openGuide">打开引导</el-button>
    </el-card>
  </div>
</template>

<script>
import Driver from 'driver.js'
import 'driver.js/dist/driver.min.css'
import steps from './steps'

export default {
  data() {
    return {
      driver: null
    }
  },
  mounted() {
    this.driver = new Driver({
      nextBtnText: '下一步',
      prevBtnText: '上一步',
      closeBtnText: '关闭',
      doneBtnText: '完成',
      padding: 6
    })
  },
  methods: {
    openGuide() {
      this.driver.defineSteps(steps)
      this.driver.start()
    }
  }
}
</script>

<style lang="less" scoped>
.text-box {
  margin-bottom: 20px;
  i {
    color: orange;
    margin-right: 8px;
    font-size: 16px;
  }
  span {
    font-size: 14px;
  }
}
</style>
