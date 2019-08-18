import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    userData: [
      {
          id: 1,
          name: 'Takuya Tejima',
          description: '東南アジアで働くエンジニアです。'
      },
      {
          id: 2,
          name: 'Yohei Noda',
          description: 'アウトドア・フットサルが興味のエンジニアです。'
      }
    ]
  },
  mutations: {
    addUser (state, user){
      state.userData.push(user);
    }
  },
  actions: {

  }
})
