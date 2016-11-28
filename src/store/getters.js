// 我们需要在 store 的状态上计算衍生出我们要的状态
// 把它想象成 store 的计算属性。 
// Getters 接收 store 的 state 作为第一个参数

// export const msg = state => state.msg
// 测试读取推上msg的数组数据
export const msg = state => state.msg

export const furnitureImg_Arr = state => state.furnitureImg
export const goodsDetails_Arr = state => state.goodsDetails
export const goodsDetails_Note = state => state.goodsDetails_note

export const goodsDetails_Note_show = state => state.goodsDetails_note_show