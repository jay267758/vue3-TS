interface State {
  token: string,
  name: string,
  num: number
}

const demo = {
  namespaced: true,
  state: {
    token: '',
    name: '测试',
    num: 0
  },
  getters: {

  },
  mutations: {
    SETNUM(state:State, data: number) {
      state.num = data;
    }
  },
  actions: {
    onNum(content: any, data: number) {
      content.commit('SETNUM', data)
    }
  },
  modules: {}
}

export default demo;