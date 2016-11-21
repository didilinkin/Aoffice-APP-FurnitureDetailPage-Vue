// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation

// 将JSON内容放入store
export const addState = state => {
  // 推入标题 测试对象
  let str_msg = {
    title: '数据填充成功'
  }
  // 推入商品图片 测试对象
  let Arr_furnitureImg = [
    { furnitureImgUrl: './dist/picChairDetail1-1@2x.png' },
    { furnitureImgUrl: './dist/picChairDetail1-2@2x.png' },
    { furnitureImgUrl: './dist/picChairDetail1-3@2x.png' },
    { furnitureImgUrl: './dist/picChairDetail1-4@2x.png' }
  ]


  state.msg = []
  state.msg.push(str_msg) // 推标题

  state.furnitureImg = []
  state.furnitureImg.push(Arr_furnitureImg) // 推商品图片
}