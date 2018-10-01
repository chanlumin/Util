

/**
 * 
 * @param {数组} arr 
 * @param  {拼接的字符串或者数组 }}} args 
 */
const concat = (arr, ...args) =>{
  const length = arr == null ? 0 : arr.length
  const result = []
  const argsArr = [...args]
  // console.log(argsArr)
  if(!arr) return result 
  for(let i = 0; i < length; i++) {
    result[i] = arr[i]
  }
  // 1. args本身就是一个数组了
  argsArr.forEach(value => {
    result.push(value)
  })
  return result 
}



export default concat 