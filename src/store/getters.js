// 我们需要在 store 的状态上计算衍生出我们要的状态
// 把它想象成 store 的计算属性。 
// Getters 接收 store 的 state 作为第一个参数

export const msg = state => state.msg
export const furnitureImg_Arr = state => state.furnitureImg