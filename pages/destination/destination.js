
var globalLists = new Array()

Page({
  data: {
    histroy: ['沙盒', '解父解', '百度', '方式到翻身', '红设是非得失', '百度发顺分克莱斯勒'],
    destinations: [1, 2, 3, 4, 5, 1, 2, 3, 4, 5, 1, 2, 3, 4, 5],
    lists: [1, 2, 3, 4, 5, 6, 7, 8]
  },

  // 点击历史记录
  tapHistroyText: function(e) {
    console.log('点击历史记录')
  },

  // 点击加载更多
  clickLoadingMoreOrReduce: function(e) {
    // 获取事件中的数据
    globalLists = globalLists.concat(this.data.lists)
    let flag = e.currentTarget.dataset.type
    let destinations = []
    if (flag === false) {
      destinations = globalLists
      console.log('this.data.lists' + destinations)
    } else {
      destinations = this.data.lists.slice(0, 4)
    }
    this.setData({
      lists: destinations
    })
  },

  // 点击destination
  clickDestination: function(e) {
    console.log('点击destination')
  },

  // 点击destination-item
  clickItem: function(e) {
    console.log(e)
  }
})