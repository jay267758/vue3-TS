<template>
  <el-button type="primary" @click="onGet">
    获取接口
  </el-button>
  <p>{{ data.data.name }}</p>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="date" label="Date" width="180" />
    <el-table-column prop="name" label="Name" width="180" />
    <el-table-column prop="address" label="Address" />
  </el-table>
</template>

<script setup lang="ts">
import demoService from '@/service/demo';
import { ref, reactive } from 'vue'

interface Data {
  name: string,
  age: number
}

const data = reactive({
  data:{
    name: ''
  }
})

const tableData = [
  {
    date: '2016-05-03',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-02',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-04',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    date: '2016-05-01',
    name: 'Tom',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

const onGet = () => {
  demoService.demo().then(res => {
    data.data = res;
    console.log(res);
  });
}

</script>

<style scoped>

</style>