import {slice} from  '../base/index'

/**
 * 把大数组切分成小数组
 * chunk([1,2,3], 2) => [[1,2], [3]]
 * chunkSize 不传默认是1
 * @param {传入的数组} arr 
 * @param {把大数组切分成数组长度为size的小数组}} chunkSize 
 */
const chunk = (arr, chunkSize) => {
  let length = arr == null ? 0 : arr.length

  // 1 chunkSize不传默认是1
  chunkSize = chunkSize ? chunkSize : 1 

  // 2 chunkSize 等于0的时候也返回空数组 
  if(!arr.length || chunkSize < 1) return []

  const chunkLength = Math.ceil(length / chunkSize) 

  let result = new Array(chunkLength)
  for(let i = 0,resIndex=0; i < length; i+=chunkSize) {
    // 2. slice会自动处理最后一部分的元i素  如果i+chunkSize的end 超出范围的话自动取到最后一个元素
    result[resIndex++] = slice(arr, i, i+chunkSize)
  }
  return result
}

export default chunk