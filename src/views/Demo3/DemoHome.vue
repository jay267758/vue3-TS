<template>
  <div>
    <p>爷组件</p>
    <el-input
      v-model="age"
      :title="'加油加油，火焰'"
    />
    <br>
    <br>
    <demo-father
      :home-data="data"
    />
  </div>
</template>

<script>
import DemoFather from './DemoFather.vue'
import { reactive, toRefs, provide } from 'vue';
export default {
  components: {
    DemoFather
  },
  setup() {
    let data = reactive({
      data: {
        name: 'props',
        age: 24
      }
    });
    let provideData = reactive({
      name: '张三',
      age: 1234
    });

    // 在setup中，可以进行数据双向绑定。但props不行，props是单向数据流
    provide('provideData', provideData)
    provide('data', data)

    return {
      ...toRefs(provideData),
      ...toRefs(data)
    }
  },
  // provide 给子孙传数据，不会更新数据。想要更新数据可以写在 setup 里
  provide() {
    return {
      HomeName: '李四'
    }
  }
}
</script>