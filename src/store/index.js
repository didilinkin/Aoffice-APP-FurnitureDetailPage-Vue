import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)
// 状态树
const state = {
  msg: [{ title: '空标题' }],
  furnitureImg: [],
  goodsDetails: [],
  goodsDetails_note: [{ content: '空内容' }],
  goodsDetails_note_show: [{ judgeShow: '' }]
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
