


/**
 * 判断是否是对象
 * @param {AnyType} value 输入的需要判断的值
 */
function isObjectLike(value) {

  return typeof value === 'object'  && value !== null 
}

export default isObjectLike