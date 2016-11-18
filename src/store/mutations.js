// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation

// 增量
export const increment = state => {
  state.count++
  state.history.push('increment')
}

// 减量
export const decrement = state => {
  state.count--
  state.history.push('decrement')
}
