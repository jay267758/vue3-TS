<template>
  <!-- emit -->
  <div>
    <p>子组件</p>
    <p>父组件传的值：{{ data.name }}</p>
    <br>
    <br>
    <el-button @click="onClock">
      向父组件传值
    </el-button>
  </div>
</template>

<script setup lang="ts">
import {
  ref,
  reactive,
} from 'vue'

interface Show {
  name: string,
  work: string
}

defineProps({
  data: {
    type: Object,
    required: true
  }
});

const age = ref<number>(18);
const sonData = reactive({
  sonName: '张三',
  sonAge: '16'
})

const emit = defineEmits(['fterch']);

const onClock = (() => {
  emit('fterch', '赵六')
})


const show = ((value: Show) => {
  console.log(value)
});

defineExpose({
  age,
  sonData,
  show
})

</script>

<style scoped>

</style>