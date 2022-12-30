<template>
  <div>
    <p>vue3 + Store</p>
    <p>{{ store.state.demo.name }}</p>
    <p>{{ storeNum }}</p>
    <br>
    <br>
    <el-button @click="setNum">
      加一
    </el-button>
    <br>
    <br>
    <el-card class="box-card">
      <template #header>
        <div class="card-header">
          <span>Card name</span>
          <el-button class="button" text>Operation button</el-button>
        </div>
      </template>
      <div v-for="o in 4" :key="o" class="text item">{{ 'List item ' + o }}</div>
    </el-card>
  </div>
</template>

<script lang="ts">
import { computed } from 'vue-demi';
import { useStore } from 'vuex'
import { ref, onBeforeUnmount } from 'vue'

export default {
  setup() {
    let num = ref(0)
    let store = useStore();
    // console.log(store.state)

    let storeNum = computed(() => {
      return store.state.demo.num
    });

    const setNum = () => {
      num.value = num.value + 1
      // console.log(num.value)
      store.dispatch('demo/onNum', num)
    }

    onBeforeUnmount(() => { // 组件卸载前
      store.dispatch('demo/onNum', 0)
      console.log('onBeforeUnmount')
    })

    return {
      store,
      storeNum,
      setNum
    }
  }
}
</script>