import Vue from 'vue'
import Vuex from 'vuex'
import * as getters from './getters'
import * as actions from './actions'
import * as mutations from './mutations'

Vue.use(Vuex)
// 状态树
const state = {
  msg: [
    {
      title: '空标题'
    }
  ],
  furnitureImg: [
      // { furnitureImgUrl: './dist/picChairDetail1-1@2x.png' },
      // { furnitureImgUrl: './dist/picChairDetail1-2@2x.png' },
      // { furnitureImgUrl: './dist/picChairDetail1-3@2x.png' },
      // { furnitureImgUrl: './dist/picChairDetail1-4@2x.png' }
  ]
  // goodsDetails: [
  //   {
  //     title: '两个工位尺寸',
  //     content: '1200*1200*750'
  //   },
  //   {
  //     title: '蝴蝶架对桌2工作位售价',
  //     content: '780元'
  //   },
  //   {
  //     title: '蝴蝶架对桌4工作位售价',
  //     content: '1380元'
  //   },
  //   {
  //     title: '蝴蝶架对桌6工作位售价',
  //     content: '1980元'
  //   }
  // ],
  // goodsDetails_note: '工位不自带活动柜，活动柜单个售价160元'
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
