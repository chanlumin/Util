
/**
 * 找出数组中 符合回调函数comparator为true的值
 * 有点像数组baseFindIndex 和 arrayIncludes 
 * 但是他们两个中都只传入value
 * @param {Array} arr 需要查找的数组
 * @param {Number} target 查找的目标值
 * @param {Function} comparator 回调函数
 */
function arrayIncludesWith(arr, target, comparator) {
  // if(!arr) {
  //   return false
  // }
  if(arr == null) {
    return false
  }

  for(const value of arr) {
    if(comparator(target, value)) {
      return true
    }
  }
  return false 
}

export default arrayIncludesWith