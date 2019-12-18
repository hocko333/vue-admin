<template>
  <div class="card-container footer_child">
    <el-image class="bg_img" :src="require('../../assets/img/card-bg.png')"></el-image>
    <div class="card_bot">
      <div class="bot_header">
        <div class="header_avatar_wraper">
          <img :src="require('../../assets/img/avatar.jpg')" />
        </div>
        <p class="header_text">Vue Admin</p>
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
export default {}
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
      display: flex;
      align-items: center;
      justify-content: center;
      padding: 8px;
      background-color: #fff;
      border-radius: 50%;
      cursor: pointer;
      transform: translateY(-30%);
      img {
        width: 54px;
        height: 54px;
        border-radius: 50%;
        transform-origin: 95% 40%;
        transition: transform .3s;
      }
    }
    .header_text {
      font-size: 20px;
      font-weight: 600;
      color: aqua;
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
  transform: rotateZ(-110deg);
}
</style>

<style lang="less">
.card-container {
  .bg_img img {
    transition: all .3s;
  }
  .bg_img:hover img {
    transform: scale(1.14);
    filter: contrast(120%);
  }
}
</style>
