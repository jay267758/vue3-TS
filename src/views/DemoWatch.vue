<template>
  <div>
    <input v-model="data.title" />
    <p>{{ computedData }}</p>
  </div>
</template>
<script>
import {
  reactive,
  toRefs,
  computed,
  watch,
  watchEffect
} from 'vue';
export default {
  // watch 默认第一次加载时不触发，用于监听整个数据
  // watchEffect 第一次加载时触发，用于监听数据中的某个值
  // vue3中生命周期  beforeCreate和 created 替换成 setup , 其他的加上了 on
 
  setup(props) { // props接收父组件传来的值
    let data = reactive({
      name: '历史',
      data: {
        title: '老师'
      }
    });

    let computedData = computed(() => {
      return data.name + data.data.title;
    })

    watch(
      () => data.data.title, // data深度监听(直接写数据就深度监听)。具体某个值 () => data.name,
      (newValue, oldValue) => {
        console.log(newValue, oldValue);
        console.log(data);
      }
    );
    
    watchEffect(() => {
      console.log(data.data.title);
      console.log(props)
    });

    return {
      ...toRefs(data),
      computedData,
    }
  }
}
</script>