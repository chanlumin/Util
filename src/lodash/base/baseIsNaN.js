

/**
 * NaN类型判断是通过他自己本身就不属于他本身
 * @param {anyType} value 值
 */
function baseIsNaN(value) {
  return value !== value
}

export default baseIsNaN

