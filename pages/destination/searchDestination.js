// pages/destination/searchDestination.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    selectIndex:0
  },
  clickItem: function(e) {
    console.log(e)
    let query = e.currentTarget.dataset.type
    this.setData({
      selectIndex: query
    })
  }
})