<template>
  <el-menu
    active-text-color="#5894D1"
    background-color="#001428"
    text-color="#fff"
    :default-active="activeMenu"
    class="el-menu-vertical-demo"
    router
  >
    <menu-item
      v-for="route in routerList"
      :key="route.path"
      :item="route"
      :base-path="route.path"
    />
    <!-- <el-sub-menu index="1">
      <template #title>
        <el-icon></el-icon>
        <span>Navigator One</span>
      </template>
      <el-sub-menu index="1-1">
        <template #title>item one</template>
        <el-menu-item index="1-1-1">
          item one
        </el-menu-item>
        <el-menu-item index="1-1-2">item two</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="1-2">
        <template #title>Group Two</template>
        <el-menu-item index="1-2-1">item three</el-menu-item>
      </el-sub-menu>
      <el-sub-menu index="1-4">
        <template #title>item four</template>
        <el-menu-item index="1-4-1">item one</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
    <el-menu-item index="2">
      <el-icon></el-icon>
      <span>Navigator Two</span>
    </el-menu-item> -->
  </el-menu>
</template>

<script>
import routes from '@/config'
import { useRoute } from 'vue-router'
import MenuItem from './MenuItem.vue'
import { ref, computed } from 'vue'

export default {
  components: {
    MenuItem
  },
  setup() {
    // const routerList = useRouter().getRoutes();
    const route = useRoute()
    const routerList = routes
    // console.log(routerList) // 获取路由

    // const filterRouter = routerList.getRoutes();
    // const routerList = ref([])

    const activeMenu = computed(() => {
      const { meta, path } = route
      // console.log(meta, path)
      // if (meta?.title) {
      //   return meta.activeMenu
      // }
      return path
    });


    return {
      routerList,
      activeMenu
    }
  },
}
</script>

<style lang="scss" scoped>
.el-menu-vertical-demo {
  border-right: 0;
  margin-top: 40px;
  height: calc(100vh - 40px);
}
// .el-menu-item.is-active {
//   background-color: rgb(88, 148, 209);
//   color: #fff;
// }
</style>