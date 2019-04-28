exports.command = function (selector, callback) {
  console.log('dbClick');
  //moveToElement和doubleClick都是内置的command
  //moveToElement(selector, offsetX, offsetY) 用于移动鼠标到指定元素
  return this.moveToElement(selector, 5, 5).doubleClick()
}
