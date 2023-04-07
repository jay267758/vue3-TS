import { defineStore } from 'pinia'

interface State {
  token: string | null;
}

const useToken = defineStore('token', {
  state: (): State => ({
    token: ''
  }),
  getters: {
    setToken: (state) => {
      return (value: string) => state.token = value; 
    }
  }
});

export default useToken;