
function getRect(el){
  return new Promise( (resolve,reject)=>{
    wx.createSelectorQuery().select(el).boundingClientRect(function (rect) {
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
    wx.createSelectorQuery().selectAll(el).boundingClientRect(function (rects) {
      resolve(rects)
    }).exec()
  })
}















module.exports = {
  getRect,
  getAllRects
}
