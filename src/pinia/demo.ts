import { defineStore } from 'pinia'
import useCount from '@/store/count'

const countStore = useCount()

interface State{
  pinia: string,
  num: number
}

const useDemo = defineStore('demo', {
  state: (): State => ({
    pinia: '测试Pinia',
    num: 0
  }),
  getters: {
    calculationNum: (state) => {
      return (num: number) => state.num + num;
    },
    // 调用其他的Store值
    setCount: (state) => {
      return () => state.pinia + countStore.count
    }
  },
  actions: { // 操作state/调用异步接口
    onDemo(num: number) {
      this.num++
    }
  }
});

export default useDemo