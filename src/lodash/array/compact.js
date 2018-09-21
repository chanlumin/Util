


/**
 * 把数组中的undefined null Nan '' 等剔除出去
 * @param {传入的数组} arr 
 */
const compact = (arr) => {
  const length = arr ? arr.length : 0 
  let result = []
  for(let index = 0; index < length; index++) {
    // !NaN !undefined !'' !null 都为true
    if(!arr[index]) {
      continue
    } 
    result.push(arr[index])
  }
  return result 
}

export default compact