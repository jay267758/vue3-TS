<template>
   <div class="header-box">
      <div>
         Vue3 + TS
      </div>
      <div class="header-right">
         <span>欢迎anidm</span>

         <el-dropdown>
            <div style="line-height: 42px;">
               <el-avatar class="icon" :size="34" :src="circleUrl" />
            </div>
            <template #dropdown>
               <el-dropdown-menu>
                  <el-dropdown-item @click="outLogin">退出登录</el-dropdown-item>
               </el-dropdown-menu>
            </template>
         </el-dropdown>
      </div>
   </div>
</template>

<script setup lang="ts">
import { reactive, toRefs } from 'vue';
import {useRouter} from 'vue-router';
import useToken from '@/pinia/token';

const router = useRouter();
const tokenState = useToken();

const state = reactive({
  circleUrl:
    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
})

const { circleUrl } = toRefs(state);

const outLogin = () => {
   let date = new Date();
   //将date设置为过去的时间
   date.setTime(date.getTime()-10000);
   //将ytoken这个cookie删除
   document.cookie="token=; expire="+date.toString();
   tokenState.token = '';
   router.push('/login');
}

</script>


<style lang="scss" scoped>
.header-box {
   display: flex;
   justify-content: space-between;
   .header-right {
      width: 120px;
      font-size: 14px;
      display: flex;
      justify-content: space-between;
      .icon {
         vertical-align: middle;
      }
   }
}
.el-dropdown-menu__item {
   color:red;
}
</style>