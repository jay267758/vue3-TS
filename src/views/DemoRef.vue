<template>
  <div>
    标题： {{ title }}
  </div>
  <div>
    {{ objectDemo.name }}
  </div>
  <div>
    <el-button type="primary" @click="getTitle">获取title</el-button>
    <el-button @click="getObjectDemo">获取name</el-button>
    <br>
    <p>{{ toRefsName }}</p>
    <input v-model="toRefsName" />

    <br>
    <router-link to="/">Home</router-link>
    <router-link to="/about">About</router-link>
  </div>
  <router-view />
</template>

<script>
import {
  ref,
  toRefs,
  reactive,
  readonly
} from 'vue';
export default {
  setup() {
    // ref 定义字符串，number, boolean, 数组
    // toRefs 解构对象使其具有响应式，使能直接使用对象中的key
    // reactive 定义对象
    // readonly 将响应式数据转为非响应式(只读)
    let obj = { // 原始数据，非响应式(只读)
      Key: 'sss'
    }
    let title = ref('test');
    let arr = ref([12,32,34,23]);
    const objectDemo = reactive({
      name: '李四',
      age: 23
    });

    let readonlyDemo = readonly(objectDemo) //将响应式数据转为非响应式

    const toRefsDemo = reactive({
      toRefsName: '张三',
      age: 24
    });


    const getTitle = () => {
      console.log(title.value);
      console.log(arr.value);
      setTitle();
    }
    const getObjectDemo = () => {
      console.log(objectDemo.name);
      setObjectDemo();
    }

    const setTitle = () => {
      title.value = '修改title';
      console.log(title.value);
    }
    const setObjectDemo = () => {
      objectDemo.name = '王五';
      console.log(objectDemo.name);
    }

    return {
      obj,
      title,
      arr,
      objectDemo,
      getTitle,
      getObjectDemo,
      readonlyDemo,
      setTitle,
      setObjectDemo,
      ...toRefs(toRefsDemo) // 解构对象使其具有响应式
    }
  }
}
</script>