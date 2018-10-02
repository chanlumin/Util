import strictIndexOf from './strictIndexOf'
import baseIsNaN from './baseIsNaN'
import baseFindIndex from './baseFindIndex'

function baseIndexOf(arr, value, fromStart) {
  // 1 正常的数字查找不是NaN的话 调用strictIndexOf 
  return value === value
    ? strictIndexOf(arr, value, fromStart)
    : baseFindIndex(arr, baseIsNaN, fromStart)
}

export default baseIndexOf