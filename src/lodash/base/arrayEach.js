



/**
 * 
 * @param {Array} arr 数组
 * @param {Function} iteratee 需要传入的回调函数 
 */
function arrayEach(arr, iteratee) {
  const length = arr.length == null ? 0 : arr.length 

  for(let index = 0; index < length; index++) {
    // arrayEach只要有一个没有满足条件 就跳出循环
    if(iteratee(arr[index], index, arr) === false) {
      break
    }
  }
  return arr 
}

export default arrayEach