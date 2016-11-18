// Action 跟 mutation 类似
// Mutation 修改状态，action 则提交（一个或多个） mutation
// Action 可以随意包含异步操作。

export const increment = ({ commit }) => commit('increment')
export const decrement = ({ commit }) => commit('decrement')