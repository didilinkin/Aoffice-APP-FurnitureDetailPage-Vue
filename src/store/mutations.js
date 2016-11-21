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
  // 推入商品信息 测试对象
  let Arr_goodsDetails = [
    {
      title: '两个工位尺寸',
      content: '1200*1200*750'
    },
    {
      title: '蝴蝶架对桌2工作位售价',
      content: '780元'
    },
    {
      title: '蝴蝶架对桌4工作位售价',
      content: '1380元'
    },
    {
      title: '蝴蝶架对桌6工作位售价',
      content: '1980元'
    }
  ]

  // 推入说明 测试对象
  let str_note = {
    content: '工位不自带活动柜，活动柜单个售价160元'
  }


  state.msg = []
  state.msg.push(str_msg) // 推标题

  state.furnitureImg = []
  state.furnitureImg.push(Arr_furnitureImg) // 推商品图片
  
  state.goodsDetails = []
  state.goodsDetails.push(Arr_goodsDetails) // 推商品信息

  state.goodsDetails_note = []
  state.goodsDetails_note.push(str_note) // 推标题
}