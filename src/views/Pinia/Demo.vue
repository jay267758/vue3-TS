<template>
  <div>
    <p>state值: {{ demoStore.pinia }}</p>
    <br>
    <br>
    <p>demo-getters: {{ calculationNum }}</p>
    <p>count-getters: {{ count }}</p>
    <br>
    <br>
    <div>
      <p>通过action调用相应方法使num为1</p>
      <el-button @click="onOnly">
        加一
      </el-button>
      <el-button @click="onReset">
        重置
      </el-button>
      <el-button @click="onSetUp">
        $patch设置num值为: 666
      </el-button>
      <p>state.num值: {{ demoStore.num }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import useDemo from '@/pinia/demo'

const demoStore = useDemo()

const calculationNum =  demoStore.calculationNum(6)
const count =  demoStore.setCount()

const onOnly = () => {
  demoStore.onDemo(1)
}

const onReset = () => {
  demoStore.$reset() // 重置store中的所有state属性
}

const onSetUp = () => {
  demoStore.$patch({
    num: 666
  }) // 设置store中的state属性
}

// $reset() // 重置store中的所有state属性
// $patch() // 设置store中的state属性
// $state() // 替换store中的state属性

</script>

<style scoped>

</style>