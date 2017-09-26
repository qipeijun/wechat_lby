// pages/home/home.js

var app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    priceIndex:0,
    addressIndex:0,

    addressWidth:1000,  // 目的地 宽度

    testarr:['￥0-￥299','￥299-￥499','￥499-￥699','￥699-￥999'],
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
  setAddressWidth(){
    var self = this;
    wx.createSelectorQuery().selectAll('.address-list .address-item').boundingClientRect(function (rects) {
      var width = 0;
      rects.forEach(function (rect) {
        rect.id      // 节点的ID
        rect.dataset // 节点的dataset
        rect.left    // 节点的左边界坐标
        rect.right   // 节点的右边界坐标
        rect.top     // 节点的上边界坐标
        rect.bottom  // 节点的下边界坐标
        rect.width   // 节点的宽度
        rect.height  // 节点的高度
        width += rect.width;
      })

      self.setData({
        addressWidth:Math.ceil(width)
      })
    }).exec()
  },
  addressChange(e){
     this.setData({
       addressIndex: e.currentTarget.dataset.index
     })
  },
  priceChange(e){
    this.setData({
      priceIndex:e.currentTarget.dataset.index
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
    this.setAddressWidth();
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