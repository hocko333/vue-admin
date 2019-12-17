<template>
  <div class="panel-container">
    <el-row :gutter="40" class="panel_row">
      <el-col
        :xs="12"
        :sm="12"
        :lg="6"
        class="panel_col"
        v-for="(item, i) in tabInfo"
        :key="item.name"
      >
        <div class="tab_box" @click="handleClickPanel(item.name)">
          <div class="box_left">
            <i :class="'el-icon-' + iconList[i]"></i>
          </div>
          <div class="box_right">
            <p class="name">{{ item.name }}</p>
            <p class="number">
              <count-to :start-val="0" :end-val="item.total-0" :duration="2000" />
            </p>
          </div>
        </div>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { getTabInfo } from '../../api/dashboard'
import bus from '../../utils/bus'
import countTo from 'vue-count-to'

export default {
  components: {
    countTo
  },
  watch: {
    panelName(val) {
      const curList = this.tabInfo.find(item => item.name === val).list
      bus.$emit('getLineData', curList)
    }
  },
  data() {
    return {
      tabInfo: [],
      iconList: ['s-promotion', 's-comment', 's-goods', 's-ticket'],
      panelName: ''
    }
  },
  methods: {
    async queryTabInfo() {
      const { data: res } = await getTabInfo()
      if (res.code !== 200)
        return this.$message.error('获取卡片数据失败，请刷新重试~')
      // 获取卡片数据成功
      this.tabInfo = res.data
      this.panelName = this.tabInfo[0].name
    },
    handleClickPanel(pName) {
      this.panelName = pName
    }
  },
  created() {
    this.queryTabInfo()
  }
}
</script>

<style lang="less" scoped>
.tab_box {
  display: flex;
  height: 108px;
  width: 100%;
  background-color: #fff;
  border-radius: 6px;
  justify-content: space-between;
  align-items: center;
  padding: 0 18px;
  cursor: pointer;
  box-shadow: 0 0 10px #e2e2e2;
  .box_left {
    width: 64px;
    height: 64px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-radius: 6px;
    transition: background-color 0.3s;
    i {
      font-size: 48px;
      transition: color 0.3s;
    }
  }
  .box_right {
    .name {
      margin-bottom: 3px;
      font-size: 16px;
      color: #8b8c8b;
      font-weight: 500;
    }
    .number {
      color: #656565;
      font-size: 20px;
      font-weight: 500;
    }
  }
}

.panel_row {
  min-height: 138px;
}

.panel_col {
  margin-bottom: 30px;
}

.panel_col:nth-of-type(1) .tab_box .box_left i {
  color: #40c9c6;
}

.panel_col:nth-of-type(1) .tab_box:hover .box_left {
  background-color: #40c9c6;
  i {
    color: #fff;
  }
}

.panel_col:nth-of-type(2) .tab_box .box_left i {
  color: #36a3f7;
}

.panel_col:nth-of-type(2) .tab_box:hover .box_left {
  background-color: #36a3f7;
  i {
    color: #fff;
  }
}

.panel_col:nth-of-type(3) .tab_box .box_left i {
  color: #f4516c;
}

.panel_col:nth-of-type(3) .tab_box:hover .box_left {
  background-color: #f4516c;
  i {
    color: #fff;
  }
}

.panel_col:nth-of-type(4) .tab_box .box_left i {
  color: #34bfa3;
}

.panel_col:nth-of-type(4) .tab_box:hover .box_left {
  background-color: #34bfa3;
  i {
    color: #fff;
  }
}
</style>
