<template>
  <!-- defineProps/defineEmits -->
  <div>
    <p>defineProps(子组件接收父组件值)/defineEmits(调用父组件方法) 方法</p>
    <p>父组件</p>
    <p>子组件传值：{{ name }}</p>
    <br>
    <br>
    <demo-son :data="data" @fterch="onFterch" ref="demoSon" />
  </div>
  <br>
  <div>
    <p>defineExpose(子组件暴露属性)/ ref(父组件获取)</p>
  </div>
</template>

<script setup lang="ts">
import DemoSon from './DemoSon.vue';
import { ref, reactive, onMounted } from 'vue'
interface Data {
  name: string,
  age: number
}

interface Show {
  name: string,
  work: string
}

let name = ref<string>('');
const demoSon = ref();

const data = reactive<Data>({
  name: '王五',
  age: 23
})

const sonData = reactive<Show>({
  name: '王五',
  work: 'IT'
})

const onFterch = ((value: any) => {
  console.log(value)
  name.value = value;
})

onMounted(() => {
  // 获取子组件抛出的值
  console.log(demoSon.value.age)
  console.log(demoSon.value.sonData)
  demoSon.value.show(sonData)
})


// vue3 组件传参
// defineProps(子组件接收父组件值)/defineEmits(调用父组件方法) 方法

// defineExpose(子组件暴露属性)/ ref(父组件获取)

// provide/inject (爷子/父子) Demo3文件有案例

// vuex/pinia

// 事件总线（vue3已废除，用第三方）mitt / tiny-emitter
// https://www.npmjs.com/package/mitt
// https://www.npmjs.com/package/tiny-emitter


</script>

<style scoped>

</style>