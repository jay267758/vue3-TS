<template>
  <div>
    <p>父组件</p>
    <p>爷传：{{ HomeName }}</p>

    <br>
    <p>父组件setup传</p>
    <p>{{ provideData.age }}</p>
    <p>
      <el-input v-model="provideData.age" />
    </p>
    <br>
    <br>
    <p>
      props传
      {{ propsData }}
    </p>
    <DemoInject />
  </div>
</template>

<script>
import DemoInject from './DemoInject.vue'
import { computed, inject } from 'vue';
export default {
  components: {
    DemoInject
  },
  //  inject 接收爷父传过来的数据
  inject: ['HomeName'],

  props: {
    homeData: Object
  },

  setup(props) {
    console.log(props.homeData.name);
    const pro = computed(() => {
      console.log(props.name);
      return props.name;
    })
    let propsData = props;
    let provideData = inject('provideData');
    let data = inject('data');

    return {
      pro,
      propsData,
      data,
      provideData
    }
  },
  mounted() {
    console.log(this.provideData);
    console.log(this.data);
  },
  // provide 给子孙传数据，不会更新数据。想要更新数据可以写在 setup 里
  provide() {
    return {
      FatherName: '王五'
    }
  }
}
</script>