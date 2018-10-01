


/**
 * 数组的右迭代
 * @param {Array} arr 传入数组
 * @param {Function} iteratee 回调函数
 */
function arrayEachRight(arr, iteratee) {
  const length = arr.length == null ? 0 : arr.length 
  
  for(let index = length -1; index >=0; --index) {
    if(iteratee(arr[index], index, arr) === false) {
      break
    }
  }
  return arr
}

export default arrayEachRight