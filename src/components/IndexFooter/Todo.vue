<template>
  <div class="todo-container footer_child">
    <div class="title">
      <div class="radio">
        <i class="el-icon-check"></i>
      </div>
      <input type="text" placeholder="TODO List" />
    </div>
    <ul class="content">
      <li class="item complete">
        <div class="radio">
          <i class="el-icon-check"></i>
        </div>
        <span class="text">吃饭、睡觉</span>
      </li>
      <li class="item">
        <div class="radio">
          <i class="el-icon-check"></i>
        </div>
        <span class="text">sleep sdkfalk</span>
      </li>
      <li class="item">
        <div class="radio">
          <i class="el-icon-check"></i>
        </div>
        <span class="text">吃饭、睡觉</span>
      </li>
      <li class="item">
        <div class="radio">
          <i class="el-icon-check"></i>
        </div>
        <span class="text">吃饭、睡觉</span>
      </li>
    </ul>
    <div class="footer">
      <span class="un-complete">{{ 3 }} items left</span>
      <div class="footer-right">
        <input type="button" value="All" />
        <input type="button" value="Active" />
        <input type="button" value="Completed" />
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.title {
  height: 50px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.06);
}
.radio {
  width: 32px;
  height: 32px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  border: 1px solid #ccc;
  margin-left: 12px;
  margin-right: 18px;
  cursor: pointer;
  i {
    font-size: 27px;
    font-weight: 600;
    color: #67c23a;
  }
}

.content {
  height: calc(100% - 90px);
}

.item {
  height: 44px;
  display: flex;
  align-items: center;
  border-bottom: 1px solid #e6e6e6;
  .radio {
    width: 28px;
    height: 28px;
    margin-left: 15px;
    margin-right: 19px;
    i {
      font-size: 23px;
      font-weight: 400;
    }
  }
  .text {
    font-weight: 600;
  }
}

.complete {
  .text {
    text-decoration: line-through;
    color: #999;
  }
}

.footer {
  height: 40px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  box-shadow: 0 -2px 1px rgba(0, 0, 0, 0.06);
  .un-complete {
    margin-left: 20px;
  }
  .footer-right {
    padding-right: 10px;
    input {
      margin: 0 10px;
      cursor: pointer;
      border: 0 none;
      background-color: transparent;
      outline: none;
    }
  }
}
</style>
