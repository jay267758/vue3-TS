<template>
  <div>
    <p>组合式 Api加 TS</p>
    <p>{{ title }}</p>
    <button @click="setName('张三')">改变name为 张三</button>
    <p>名称：{{ name }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, ref } from 'vue';

interface User {
  name: string,
  age: number|string,
  setName(name: string): void,
  getName(): string
}

export default defineComponent({ // 
  setup() {

    let title = ref<string|number>("vue3 + TS")

    // reactive 第一种编写模式
    // let user:User = reactive({
    //   name: '李四',
    //   age: 24,
    //   setName(name: string) {
    //     this.name = name;
    //   },
    //   getName() {
    //     return this.name;
    //   }
    // });

    // // reactive 第二种编写模式
    let user = reactive<User>({
      name: '李四',
      age: 24,
      setName(name: string) {
        this.name = name;
      },
      getName() {
        return this.name;
      }
    });

    // reactive 第三种编写模式
    // let user = reactive({
    //   name: '李四',
    //   age: 24,
    //   setName(name: string) {
    //     this.name = name;
    //   },
    //   getName() {
    //     return this.name;
    //   }
    // }) as User;

    return {
      title,
      ...toRefs(user)
    }
  }
})
</script>