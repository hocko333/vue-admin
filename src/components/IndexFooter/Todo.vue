<template>
  <div class="todo-container footer_child">
    <div class="title">
      <div class="radio">
        <i class="el-icon-check"></i>
      </div>
      <input type="text" placeholder="TODO List" />
    </div>
    <ul class="content">
      <li
        :class="`item ${item.isComplete ? 'complete' : ''}`"
        v-for="item in dataList"
        :key="item.id"
      >
        <div class="radio">
          <i class="el-icon-check" v-if="item.isComplete"></i>
        </div>
        <span class="text">{{ item.label }}</span>
        <i class="el-icon-close"></i>
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
export default {
  data() {
    return {
      dataList: [
        {
          id: 5,
          label: '吃饭',
          isComplete: true
        },
        {
          id: 4,
          label: 'sleep',
          isComplete: true
        },
        {
          id: 3,
          label: '打豆豆',
          isComplete: false
        },
        {
          id: 2,
          label: '打dota',
          isComplete: true
        },
        {
          id: 1,
          label: '玩泥巴',
          isComplete: false
        }
      ]
    }
  },
  methods: {}
}
</script>

<style lang="less" scoped>
.title {
  height: 50px;
  display: flex;
  align-items: center;
  box-shadow: 0 2px 1px rgba(0, 0, 0, 0.06);
  input {
    background: none;
    outline: none;
    border: none;
    font-size: 24px;
    font-weight: 600;
  }
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
    transition: all 0.3s;
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
      display: none;
    }
  }
  .text {
    flex: 1;
    font-weight: 600;
    color: #4d4d4d;
  }
  > i {
    font-size: 26px;
    font-weight: 600;
    color: #cc9a9a;
    cursor: pointer;
    margin: 0 10px;
    display: none;
  }
}

.item:hover > i {
  display: block;
}

.complete {
  .radio {
    i {
      display: block;
    }
  }
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
