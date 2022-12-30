<template>
  <el-sub-menu v-if="props.item.children && props.item.children.length" :index="props.item.path">
    <template #title>
      <el-icon><location /></el-icon>
      <span>{{ props.item.meta?.title }}</span>
    </template>
    <menu-item
      v-for="route in props.item.children"
      :key="route.path"
      :item="route"
      :base-path="route.path"
    />
  </el-sub-menu>
  <el-menu-item v-else-if="!props.item.meta?.hidden" :index="props.item.path">
    <!-- <span>{{ props.item.name }}</span> -->
    <template #title>
        <el-icon></el-icon>
        <router-link class="menu-a" :to="{name: props.item.name}">
          <span>{{ props.item.meta?.title }}</span>
        </router-link>
      </template>
  </el-menu-item>
</template>

<script lang="ts" setup>
import {
  Document,
  Menu as IconMenu,
  Location,
  Setting,
} from '@element-plus/icons-vue'
import { RouteRecordRaw } from "vue-router"
import { PropType, computed } from 'vue'

const props = defineProps({
  item: {
    type: Object as PropType<RouteRecordRaw>,
    required: true
  },
  isCollapse: {
    type: Boolean,
    default: false
  },
  isFirstLevel: {
    type: Boolean,
    default: true
  },
  // basePath: {
  //   type: String,
  //   default: ""
  // }
})




</script>

<style lang="scss" scoped>
.menu-a {
  text-decoration: none;
  color: #fff;
}
.el-menu-item.is-active {
  background-color: rgb(88, 148, 209);
  color: #fff;
}
</style>