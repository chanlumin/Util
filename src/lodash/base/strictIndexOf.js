

/**
 * 
 * @param {Array} arr 数组
 * @param {Number} value 需要findIndex的值
 * @param {Number} fromIndex 开始查找的Index
 */
function strictIndexOf(arr, value, fromIndex) {
  // 处理arr传入为null undefined
  const length = arr.length == null ? 0: arr.length
  // const {length} = arr  如果arr没有length属性会报错
  
  // 2. 处理fromIndex如果不填写默认从0开始
  fromIndex = !fromIndex ? 0 : 
    fromIndex > length ? length - 1 : fromIndex - 1
  for(let index = fromIndex; index < length; index++) {
    if(arr[index] === value) {
      return index
    }
  }
  return -1
}

export default strictIndexOf