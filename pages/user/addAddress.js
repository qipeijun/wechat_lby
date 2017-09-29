// pages/user/addAddress.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectRegion: '请选择所在地区'
  
  },
  selectRegion: function(e) {
    console.log(e)
    this.setData({
      selectRegion: e.detail.value[0] + e.detail.value[1] + e.detail.value[2]
    })
  }
})