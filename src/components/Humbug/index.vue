<template>
  <div class="humbug-container">
    <div class="collapse_btn item_class" @click="handleToggle">
      <i class="el-icon-s-fold" v-if="!sideBar.isCollapse"></i>
      <i class="el-icon-s-unfold" v-else></i>
    </div>
  </div>
</template>

<script>
import { mapGetters } from 'vuex'

export default {
  computed: {
    ...mapGetters(['sideBar'])
  },
  methods: {
    handleToggle() {
      this.$store.dispatch('app/toggleSidebar')
    }
  }
}
</script>

<style lang="less" scoped>
.collapse_btn {
  margin-right: 8px;
  padding-left: 15px;
  padding-right: 15px;
  i[class^='el-icon'] {
    font-size: 22px;
  }
}
</style>
