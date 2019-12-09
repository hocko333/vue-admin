<template>
  <div class="header_container">
    <div class="header_left center_class">
      <humbug />
      <bread-crumb />
    </div>
    <div class="header_right center_class">
      <notice />
      <full-screen />
      <dropdown-menu />
    </div>
  </div>
</template>

<script>
import BreadCrumb from '@/components/BreadCrumb'
import Notice from '@/components/Notice'
import FullScreen from '@/components/FullScreen'
import DropdownMenu from '@/components/DropdownMenu'
import Humbug from '@/components/Humbug'

export default {
  components: {
    BreadCrumb,
    Notice,
    FullScreen,
    DropdownMenu,
    Humbug
  }
}
</script>

<style lang="less" scoped>
.header_container {
  height: 100%;
  width: 100%;
  background-color: #fff;
  display: flex;
  justify-content: space-between;
  box-shadow: 0 2px 2px rgba(0, 0, 0, 0.05), 0 1px 0 rgba(0, 0, 0, 0.05);
  .header_left {
    display: flex;
    justify-content: flex-start;
  }
  .header_right {
    padding-right: 15px;
    display: flex;
    justify-content: flex-end;
  }
}
</style>
