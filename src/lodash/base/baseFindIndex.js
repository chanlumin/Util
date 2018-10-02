
/**
 *  findIndex 和 findLastIndex的  基础实现
 * @param {Array} arr 传入的数组
 * @param {Function} predicate 传入的回调函数
 * @param {Number} fromStart 开始查找的位置
 * @param {Boolean} startRight 是否开始查找的位置
 */
  function baseFindIndex(arr, predicate, fromStart, startRight) {
  const {length} = arr 
  // fromStart = startRight ? fromStart + 1 : fromStart - 1
  let step = startRight ? -1 : 1
  fromStart = fromStart ? fromStart + step : 0
  for(let i = fromStart; i < length && i >=0;  i+=step ) {
    if(predicate(arr[i], i, arr)) {
      return i
    } 
  }
  return -1
}

export default baseFindIndex