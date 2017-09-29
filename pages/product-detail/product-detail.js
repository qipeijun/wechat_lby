// pages/product-detail/product-detail.js

import {
  getCurrentDate,
  generateDays,
  translateFormateDate,
  nextMonth,
  lastMonth
} from './calendar.js'


Page({

  /**
   * 页面的初始数据
   */
  data: {
    weekDays:new Array("日", "一", "二", "三", "四", "五", "六"),
    lastDay:new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31),

    date: '2017-05',
    week: ['日', '一', '二', '三', '四', '五', '六'],
    months: [{}]
  },

  bindPickerChange: function (e) {
    this.setData({
      months: generateDays(e.detail.value),
      date: e.detail.value,
      dateCN: translateFormateDate(e.detail.value)
    })
  },

  bindNextMonth: function () {
    this.setData({
      date: nextMonth(this.data.date),
      dateCN: translateFormateDate(nextMonth(this.data.date)),
      months: generateDays(nextMonth(this.data.date))
    })
  },

  bindLastMonth: function () {
    this.setData({
      date: lastMonth(this.data.date),
      dateCN: translateFormateDate(lastMonth(this.data.date)),
      months: generateDays(lastMonth(this.data.date))
    })
  },

  click: function (e) {
    console.log(e.currentTarget.dataset.item)
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

    var currentDate = getCurrentDate()
    this.setData({
      date: currentDate.getYearMonth(),
      dateCN: translateFormateDate(currentDate.getYearMonth()),
      months: generateDays(currentDate.getYearMonth())
    })
  
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