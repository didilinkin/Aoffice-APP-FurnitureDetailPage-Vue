import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)
// 状态树
const state = {
  msg: "升降舒适办公椅",
  furnitureImg: [
      {
          furnitureImgUrl: './dist/picChairDetail1-1@2x.png'
      },
      {
          furnitureImgUrl: './dist/picChairDetail1-2@2x.png'
      },
      {
          furnitureImgUrl: './dist/picChairDetail1-3@2x.png'
      },
      {
          furnitureImgUrl: './dist/picChairDetail1-4@2x.png'
      }
  ]
}

const store = new Vuex.Store({
  state,
  getters,
  actions,
  mutations
})

if (module.hot) {
  module.hot.accept([
    './getters',
    './actions',
    './mutations'
  ], () => {
    store.hotUpdate({
      getters: require('./getters'),
      actions: require('./actions'),
      mutations: require('./mutations')
    })
  })
}

export default store
