<template>
  <div class="login">
    <div class="login_wrapper">
      <div class="login_title"><span>Vue-Admin</span> 后台管理系统</div>
      <div class="login_box">
        <div class="box_top">
          <div class="top_left">
            <p class="text_top">Sign up now</p>
            <p class="text_bot">Enter your username and password to log on:</p>
          </div>
          <div class="top_right">
            <i class="el-icon-key"></i>
          </div>
        </div>
        <el-form
          class="box_bot"
          :model="loginForm"
          ref="loginFormRef"
          label-width="80px"
        >
          <el-form-item>
            <el-input
              class="login_input"
              prefix-icon="el-icon-user"
              placeholder="请输入账号"
            />
          </el-form-item>
          <el-form-item>
            <el-input
              class="login_input"
              prefix-icon="el-icon-lock"
              placeholder="请输入密码"
            />
          </el-form-item>
          <el-form-item>
            <el-button type="primary">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loginForm: {}
    }
  }
}
</script>

<style lang="less" scoped>
.login {
  width: 100%;
  height: 100%;
  background: url('../assets/bgimg/loginBg.jpg') no-repeat center center;
  background-size: 100% 100%;
  overflow: hidden;
  position: relative;
  .login_wrapper {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -63%);
    .login_title {
      margin-bottom: 20px;
      text-align: center;
      font-size: 36px;
      color: #ffffff;
      span {
        font-weight: 700;
      }
    }
    .login_box {
      width: 550px;
      height: 363px;
      background-color: #ffffff;
      border-radius: 4px;
    }
  }
}

.box_top {
  height: 116px;
  .top_left {
    float: left;
    padding-left: 20px;
    padding-top: 24px;
    .text_top {
      font-size: 20px;
      color: #333;
      margin-bottom: 10px;
    }
    .text_bot {
      font-size: 16px;
      color: #888;
    }
  }
  .top_right {
    float: right;
    color: #dddddd;
    font-size: 60px;
    height: 100%;
    line-height: 116px;
    padding-right: 40px;
  }
}

.box_bot {
  height: 247px;
  padding: 26px;
  background-color: #eeeeee;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>

<style lang="less">
.login_box {
  .el-input__inner {
    height: 50px;
  }
  .el-button {
    height: 40px;
  }
  .el-form-item__content {
    margin: 0 !important;
  }
  .el-button {
    width: 100%;
  }
}
</style>
