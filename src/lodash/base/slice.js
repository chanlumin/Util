

/**
 * 
 * @param {传入数组}} arr 
 * @param {开始截取的数组下表} start 
 * @param {结束截取的数组下表不包含end}} end 
 */

 const slice = (arr, start, end)=> {
  // 1. 没传参数时候 start = 0  end = arr.length 
  if(!arr) {
     throw new Error('没有传入数组')
  }
  let length = arr.length || 0 
  if(start == null) {
    start = 0 
    end = length
  } else if(end === void 0) {
    end = length
  }
  // 2 start和end下标为负数并且超出超出数组下表的范围的的话都为0
  if(start < 0) {
    start = -start > length ? 0 : start + length
  }
  if(end < 0 ) {
    end = -end > length ? 0 : end + length
  }
  // 3 start和end大于数组的长度的情况
  start = start > length ? length : start
  end = end > length ? length : end 

  let rlength = (end - start) < 0 ? 0 : end - start
  let result = []
  for(let index = 0; index < rlength; index++) {
    // 结果数组等于 开始数组的
    result[index] = arr[start++]
  }
  return result 
 }

 export default slice 