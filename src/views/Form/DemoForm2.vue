<template>
  <el-button @click="onGet">
    获取接口
  </el-button>
  <br>
  <br>
  <p>{{ num }}</p>
</template>

<script setup lang="ts">
import demoService from '@/service/demo'
import {
  ref,
  reactive,
  onMounted,
  onUpdated,
  onUnmounted,
  onBeforeMount,
  onBeforeUpdate,
  onBeforeUnmount
} from 'vue'

import {
  Router
} from 'vue-router'

const num = ref<string>('')

const data = reactive({
  data:{
    name: ''
  }
});

onBeforeMount(() => { // 组件挂载前
  console.log('onBeforeMount')
})

onMounted(() => { // 组件挂载时
  console.log('onMounted')
});

onBeforeUpdate(() => { // 组件更新前
  console.log('onBeforeUpdate')
})

onUpdated(() => { // 组件更新时
  console.log('onUpdated')
})

onBeforeUnmount(() => { // 组件卸载前
  console.log('onBeforeUnmount')
})

onUnmounted(() => { // 组件卸载时
  console.log('onUnmounted')
})



const onGet = () => {
  num.value = '100'
  // demoService.getUsers().then(res => {
  //   data.data = res;
  //   console.log(res);
  // });
}


</script>

<style scoped>

</style>