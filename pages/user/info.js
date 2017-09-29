// pages/user/info.js
Page({

  /**
   * 页面的初始数据
   */
  data: {

    // 默认值:
    selectGender: '男',
    selectBirthday: '2000-01-01',
    selectDateOfExpiration: '2000-01-01'
  },

  // 点击选择姓名
  selectGender: function(e) {
    console.log(e)
    let query = e.detail.value == 1 ? '女' : '男'
    this.setData({
      selectGender: query
    })
  },

  // 点击选择出生年月日
  selectBirthday: function(e) {
    console.log(e)
    let query = e.detail.value
    this.setData({
      selectBirthday: query
    })
  },
  
  // 点击有效日期
  selectDateOfExpiration: function(e) {
    console.log(e)
    let query = e.detail.value
    this.setData({
      selectDateOfExpiration: query
    })
  }
})