import { defineStore } from 'pinia'

interface State {
  count: string
}

const useCount = defineStore('count', {
  state: (): State => ({
    count: '内容'
  }),
  getters: {
    setCount:(state) => {
      return (value: String) => state.count + value;
    }
  }
});

export default useCount;