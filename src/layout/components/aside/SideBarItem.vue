<template>
  <fragment>
    <template v-if="!item.children">
      <el-menu-item :index="item.path">
        <i class="el-icon-menu"></i>
        <span slot="title">{{ item.name }}</span>
      </el-menu-item>
    </template>
    <el-submenu v-else :index="item.path">
      <template slot="title">
        <i class="el-icon-menu"></i>
        <span slot="title">{{ item.name }}</span>
      </template>
      <sidebar-item v-for="child in item.children" :key="child.path" :item="child"></sidebar-item>
    </el-submenu>
  </fragment>
</template>

<script>
export default {
  name: 'SidebarItem',
  props: {
    item: {
      type: Object,
      required: true
    }
  },
  data() {
    return {
      childItem: null
    }
  },
  methods: {}
}
</script>
