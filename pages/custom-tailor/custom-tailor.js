// pages/custom-tailor/custom-tailor.js

// const tool = require("../../common/js/public.js")

import { formatDateTime } from "../../common/js/public.js"

Page({

  /**
   * 页面的初始数据
   */
  data: {
    isActive:0,
    startTime:"",
    timeVal:"",
  },
  changeType(e){
    this.setData({
      isActive:e.currentTarget.dataset.type
    })
  },
  setStartTime(){
    var time = new Date();
    var format = formatDateTime(time,"yyyy-MM-dd")
    this.setData({
      startTime: format
    })
  },
  dateChange(e){
    this.setData({
      timeVal: e.detail.value
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.setStartTime()
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