// Action 跟 mutation 类似
// Mutation 修改状态，action 则提交（一个或多个） mutation
// Action 可以随意包含异步操作。
import Vue from 'vue'
import axios from 'axios' 
import * as types from './mutations'

// 临时测试使用
// export const addState = ({ commit }) => commit('addState')


// 此处应执行异步交互 获取接口数据 并且保存
// export const addState = ({dispatch, state}) => {
//     // Vue.http.jsonp('http://你的url')
//     //     .then(function(response){
//     //         dispatch(你的mutation类型, response);
//     //     });
// }
export const addState = ({commit}) => {
    // 测试交互请求(可以获取到数据)
    axios.post('./data.json', {
        code: 'es011'
    })
    .then(function (response) {
        // var get_msg = response.data.msg 拿到标题
        let get_data = response.data
        commit('addState',get_data)
        // commit('gotData', await getData())
    })
    .catch(function (error) {
        console.log(error);
    });
    // commit
}