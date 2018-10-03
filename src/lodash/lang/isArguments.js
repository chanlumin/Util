import isObjectLike from './isObjectLike'
import getTag from '../base/getTag'

/**
 * 判断元素是否是参数列表对象
 * @param {anyType} value 输入值
 */
function isArguments(value) {
  return isObjectLike(value) && getTag(value) === '[object Arguments]'
}

export default isArguments