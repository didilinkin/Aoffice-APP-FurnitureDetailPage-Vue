// 更改 Vuex 的 store 中的状态的唯一方法是提交 mutation

// increment (state, n) { state.count += n }
export const addState = (state,res) => {
  let msg = {
    title: res.msg 
  }

  // 判断注释是否为空
  if (res.goodsDetails_note=="") {
    let note_show = {
      judgeShow: false
    }
    state.goodsDetails_note_show = []
    state.goodsDetails_note_show.push(note_show)
  }else{
    let note_show = {
      judgeShow: true
    }
    state.goodsDetails_note_show = []
    state.goodsDetails_note_show.push(note_show)
  }

  const note = {
    content: res.goodsDetails_note
  }
  
  state.msg = []
  state.goodsDetails_note = []
  state.msg.push(msg) // 推标题
  state.goodsDetails_note.push(note) // 推注意事项
  state.goodsDetails.push(res.goodsDetails) // 推商品细节
  

  // state.furnitureImg.push(res.furnitureImg) // 推家具图片(本地图片资源)
  // 服务器端需要将 图片相对路径改为绝对路径 ，此处需要拼接字符串
  // 推入商品图片 测试对象
  let Arr_furnitureImg = [
    { furnitureImgUrl: res.imgServerUrl + res.furnitureImg[0].furnitureImgUrl },
    { furnitureImgUrl: res.imgServerUrl + res.furnitureImg[1].furnitureImgUrl },
    { furnitureImgUrl: res.imgServerUrl + res.furnitureImg[2].furnitureImgUrl },
    { furnitureImgUrl: res.imgServerUrl + res.furnitureImg[3].furnitureImgUrl }
  ]
  state.furnitureImg.push(Arr_furnitureImg)
}