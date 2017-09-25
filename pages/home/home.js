// pages/home/home.js

var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
  
  },
  getBannerList(){
    wx.request({
      url: app.globalData.baseURL+"/mvc/mobile/index/bannerList",
      method:"POST",
      data:{
        position: 2,
        pageName: '首页',
        platform: '焦点轮播图'
      },
      success:function(res){
          console.log(res.data)
      },
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    // this.getBannerList()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {
  
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {
  
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {
  
  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {
  
  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
  
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {
  
  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {
  
  }
})