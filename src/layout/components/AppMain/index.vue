<template>
  <transition name="fade-transform" mode="out-in">
    <router-view></router-view>
  </transition>
</template>

<script>
export default {}
</script>

<style lang="less" scoped>
.fade-transform-leave-active,
.fade-transform-enter-active {
  transition: all 0.3s;
}

.fade-transform-enter {
  opacity: 0;
  transform: translateX(-30px);
}

.fade-transform-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
