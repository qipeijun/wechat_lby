// pages/team-travel/team-travel.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    type:"",
    imgType:"t",
    navArr:["欧洲","美洲","澳洲","中东非洲","日韩","东南亚","海岛","邮轮"],
  },
  setTitle(title){
    wx.setNavigationBarTitle({
      title: title,
    })
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var imgType = "";
    if (options.type == "妙跟团"){
      imgType = "t"
    } else if (options.type == "畅自由"){
      imgType = "p"
    }
    this.setData({imgType})
    this.setTitle(options.type)
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