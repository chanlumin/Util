import {slice} from  '../base/index'

const chunk = (arr, chunkSize) => {

  // 1 chunkSize不传默认是1
  chunkSize = chunkSize ? chunkSize : 1 
  if(!arr || chunkSize < 0) return []

  let length = arr.length || 0 
  // 3/2 = 1 
  const chunkLength = Math.ceil(length / chunkSize) 

  let result = new Array(chunkLength)
  console.log(chunkLength,'xxx')
  for(let i = 0, j = 0; i < chunkLength; j+=chunkSize,i++) {
    // 2. slice会自动处理最后一部分的元素  如果i+chunkSize的end 超出范围的话自动取到最后一个元素
    result[i] = slice(arr, j, j+chunkSize)
  }
  return result
}

export default chunk