<template>
  <div class="todo-container footer_child">
    <div class="title">
      <div class="radio" @click="allToggle" :style="{visibility: listState === 2 ? 'hidden' : 'visible'}">
        <i class="el-icon-check" v-if="listState === 1"></i>
      </div>
      <input type="text" placeholder="TODO List" v-model="newTodo" @keydown.enter="add" />
    </div>
    <el-scrollbar>
      <ul class="content">
        <li
          :class="`item ${item.isComplete ? 'complete' : ''}`"
          v-for="item in filtedTableList"
          :key="item.id"
        >
          <div class="radio" @click="complete(item.id)">
            <i class="el-icon-check" v-if="item.isComplete"></i>
          </div>
          <span class="text">{{ item.label }}</span>
          <i class="el-icon-close" @click="remove(item.id)"></i>
        </li>
        <li class="no_todo" v-if="listState === 2">
          Nothing to do...
        </li>
      </ul>
    </el-scrollbar>
    <div class="footer">
      <span class="un-complete">{{ leftLength }} items left</span>
      <div class="footer-right">
        <input
          :class="{list_type: listType === 0}"
          type="button"
          value="All"
          @click="changeListType(0)"
        />
        <input
          :class="{list_type: listType === 1}"
          type="button"
          value="Active"
          @click="changeListType(1)"
        />
        <input
          :class="{list_type: listType === 2}"
          type="button"
          value="Completed"
          @click="changeListType(2)"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
  computed: {
    leftLength() {
      return this.dataList.filter(item => !item.isComplete).length
    },
    filtedTableList() {
      if (this.listType === 2) {
        return this.dataList.filter(item => item.isComplete)
      } else if (this.listType === 1) {
        return this.dataList.filter(item => !item.isComplete)
      } else {
        return this.dataList
      }
    }
  },
  watch: {
    dataList: {
      handler(val) {
        const isAllComplete = this.dataList.every(item => item.isComplete)
        if (this.dataList.length <= 0) {
          this.listState = 2
        } else if (isAllComplete) {
          this.listState = 1
        } else {
          this.listState = null
        }
      },
      deep: true,
      immediate: true
    }
  },
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
      ],
      newTodo: '',
      listType: 0, // 0:all 1:active 2:completed
      listState: null // 1:全都已选 2:数组为空
    }
  },
  methods: {
    add() {
      const str = this.newTodo.trim()
      if (!str) return
      let maxId
      if (this.dataList.length > 0) {
        maxId = this.dataList.sort((a, b) => b.id - a.id)[0].id
      } else {
        maxId = 0
      }
      this.dataList.unshift({
        id: maxId + 1,
        label: this.newTodo,
        isComplete: false
      })
      this.newTodo = ''
    },
    remove(id) {
      const index = this.dataList.findIndex(item => item.id === id)
      this.dataList.splice(index, 1)
    },
    allToggle() {
      const isAllChecked = this.dataList.every(item => item.isComplete)
      if (isAllChecked) {
        this.dataList = this.dataList.map(item => {
          item.isComplete = false
          return item
        })
      } else {
        this.dataList = this.dataList.map(item => {
          item.isComplete = true
          return item
        })
      }
    },
    complete(id) {
      let curItem = this.dataList.find(item => item.id === id)
      curItem.isComplete = !curItem.isComplete
    },
    changeListType(type) {
      this.listType = type
    }
  }
}
</script>

<style lang="less" scoped>
.todo-container {
  user-select: none;
}

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
  height: 300px;
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
      margin: 0 7px;
      cursor: pointer;
      border: 0 none;
      background-color: transparent;
      outline: none;
      border: 1px solid transparent;
      padding: 3px;
      border-radius: 4px;
      transition: border-color 0.3s;
    }
    .list_type {
      border-color: green;
    }
  }
}
</style>
