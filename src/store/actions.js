// Action 跟 mutation 类似
// Mutation 修改状态，action 则提交（一个或多个） mutation
// Action 可以随意包含异步操作。
import Vue from 'vue'
import * as types from './mutations'

// 临时测试使用
export const addState = ({ commit }) => commit('addState')


// 此处应执行异步交互 获取接口数据 并且保存
// export const addState = ({dispatch, state}) => {
//     // Vue.http.jsonp('http://你的url')
//     //     .then(function(response){
//     //         dispatch(你的mutation类型, response);
//     //     });
// }