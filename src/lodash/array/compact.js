


/**
 * 把数组中的undefined null Nan '' 等剔除出去
 * compact1( [1,2,3,NaN,undefined,'',null,'ddd',12312])
 * [1, 2, 3, "ddd", 12312]
 * @param {传入的数组} arr 
 */
const compact = (arr) => {
  const length = arr ? arr.length : 0 
  const result = []
  for(let index = 0; index < length; index++) {
    // !NaN !undefined !'' !null 都为true
    if(!arr[index]) {
      continue
    } 
    result.push(arr[index])
  }
  return result 
}

/**
 *  version2 不需要计算数组的长度 利用for(const value of arr) 迭代
 * @param {传入数组}} arr 
 */
export const compact1 = (arr) => {
  const result = []
  if(arr == null) return result 
  
  // 1. for中的arr需要是迭代对象
  for(const value of arr) {
    // 2. if(NaN) => if(false) 也是不通过的
    if(value) {
      result.push(value)
    }
  }

  return result 
}
export default {
  compact,
  compact1
}