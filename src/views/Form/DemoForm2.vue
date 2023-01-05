<template>
  <el-button @click="onGet">
    获取接口Get
  </el-button>
  <el-button @click="onPost">
    获取接口Post
  </el-button>
  <br>
  <br>
  <p>get: {{ data.get }}</p>
  <p>post: {{ data.post }}</p>
  
</template>

<script setup lang="ts">
import nodeService from '@/service/node'
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
  get: {},
  post: {}
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
  const value = {
    name: '李四',
    type: 'get'
  }
  nodeService.getUsers(value).then(res => {
    data.get = res;
    console.log(res);
  });
}

const onPost = () => {
  const value = {
    name: '王五',
    type: 'post'
  }
  nodeService.demo(value).then(res => {
    data.post = res;
    console.log(res);
  });
}


</script>

<style scoped>

</style>