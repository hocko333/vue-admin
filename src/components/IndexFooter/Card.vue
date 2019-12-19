<template>
  <div class="card-container footer_child">
    <el-image class="bg_img" :src="require('../../assets/img/card-bg.png')"></el-image>
    <div class="card_bot">
      <div class="bot_header">
        <div class="header_avatar_wraper">
          <img :src="require('../../assets/img/avatar.jpg')" />
          <span>程 宽</span>
        </div>
        <p
          class="header_text"
          title="点击复制邮箱地址"
          v-clipboard:copy="email"
          v-clipboard:success="onCopySuccess"
          v-clipboard:error="onCopyError"
        >{{ email }}</p>
      </div>
      <div class="bot_main">
        <div class="item">
          <span>Vue</span>
          <el-progress :percentage="70"></el-progress>
        </div>
        <div class="item">
          <span>JavaScript</span>
          <el-progress :percentage="50"></el-progress>
        </div>
        <div class="item">
          <span>CSS</span>
          <el-progress :percentage="40"></el-progress>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      email: 'chengkuan689@163.com'
    }
  },
  methods: {
    onCopySuccess() {
      this.$message.success({
        message: '复制成功！',
        duration: 1000,
        center: true
      })
    },
    onCopyError() {
      this.$message.error({
        message: '复制失败！',
        duration: 1000,
        center: true
      })
    }
  }
}
</script>

<style lang="less" scoped>
.card-container {
  height: 390px;
  border-radius: 6px;
  overflow: hidden;
  .bg_img {
    width: 100%;
    height: 220px;
  }
}

.card_bot {
  margin-top: -6px;
  height: calc(100% - 220px);
  .bot_header {
    display: flex;
    align-items: center;
    justify-content: space-around;
    height: 40px;
    .header_avatar_wraper {
      width: 70px;
      height: 70px;
      // padding: 8px;
      display: flex;
      align-items: center;
      justify-content: center;
      background-color: #409eff;
      border-radius: 50%;
      cursor: pointer;
      transform: translateY(-30%);
      position: relative;
      img {
        width: 54px;
        height: 54px;
        border-radius: 50%;
        transform-origin: 95% 40%;
        transition: transform 0.3s;
        position: absolute;
        z-index: 2;
      }
      span {
        position: absolute;
        z-index: 1;
        color: #fff;
      }
    }
    .header_text {
      font-size: 20px;
      font-weight: 600;
      color: #4dd9d5;
      cursor: pointer;
    }
  }
  .bot_main {
    height: calc(100% - 40px);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    padding-bottom: 10px;
    .item {
      padding: 0 22px;
      > span {
        font-size: 12px;
      }
    }
  }
}

.header_avatar_wraper:hover img {
  transform: rotateZ(-120deg);
}
</style>

<style lang="less">
.card-container {
  .bg_img img {
    transition: all 0.3s;
  }
  .bg_img:hover img {
    transform: scale(1.14);
    filter: contrast(120%);
  }
}
</style>
