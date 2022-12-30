<template>
  <div class="common-layout">
    <el-container>
      <el-aside class="aside">
        <div class="icon">
          VUE3 + TS
        </div>
        <LayoutMenu />
      </el-aside>
      <el-container style="height: 100vh;;overflow:auto;">
        <el-header style="height: 40px;line-height: 40px;background-color: #ccc;">
          <MenuHeader />
        </el-header>
        <MenuContent />
        <!-- <el-footer style="height: 30px; background-color: greenyellow;">Footer</el-footer> -->
      </el-container>
    </el-container>
  </div>
</template>
<script lang="ts">
import LayoutMenu from './LayoutMenu.vue';
import MenuHeader from './MenuHeader.vue';
import MenuContent from './MenuContent.vue';
export default {
  components: {
    LayoutMenu,
    MenuHeader,
    MenuContent
  }
}
</script>
<style lang="scss" scoped>
  .common-layout {
    widows: 100%;
    height: 100%;
    .aside {
      position: relative;
      width: 200px;
    }
    .icon {
      position: fixed;
      top: 0;
      left: 0;
      width: 200px;
      height: 40px;
      line-height: 40px;
      text-align: center;
      color: #fff;
      background-color: #001428;
      z-index: 9999;
    }
  }
</style>

