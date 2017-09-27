
function getRect(el) {
  return new Promise((resolve, reject) => {
    wx.createSelectorQuery().select(el).boundingClientRect((rect) => {
      rect.id      // 节点的ID
      rect.dataset // 节点的dataset
      rect.left    // 节点的左边界坐标
      rect.right   // 节点的右边界坐标
      rect.top     // 节点的上边界坐标
      rect.bottom  // 节点的下边界坐标
      rect.width   // 节点的宽度
      rect.height  // 节点的高度
      resolve(rect)
    }).exec()
  })
}

function getAllRects(el) {
  return new Promise((resolve, reject) => {
    wx.createSelectorQuery().selectAll(el).boundingClientRect((rects) => {
      resolve(rects)
    }).exec()
  })
}

// 时间格式化
/**
 * date   日期
 * fmt   "yyyy-MM-dd" || "yyyy-MM-dd HH:mm:ss"
 */
function formatDateTime(date, fmt) { //author: meizz 
  var o = {
    "M+": date.getMonth() + 1, //月份 
    "d+": date.getDate(), //日 
    "h+": date.getHours(), //小时 
    "m+": date.getMinutes(), //分 
    "s+": date.getSeconds(), //秒 
    "q+": Math.floor((date.getMonth() + 3) / 3), //季度 
    "S": date.getMilliseconds() //毫秒 
  };
  if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
  for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
  return fmt;
}


module.exports = {
  getRect,
  getAllRects,
  formatDateTime,
}
