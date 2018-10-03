// 获取 变量的Tag 类型 比如 '[object Number]'

const hasOwnProperty = Object.prototype.hasOwnProperty
const toString = Object.prototype.toString
const symStringTag = typeof Symbol !== 'undefined' ? Symbol.toStringTag : undefined 


function baseGetTag(value) {
  // 1. 判断value == null => [object Null] 和 [object Undefined]
  if(value == null) {
    return value === null ? '[object Null]' : '[object Undefined]'
  }
  // 2. 非Symbol类型的时候直接调用 Object.prototype.toString.call(value) => value对象会有对应的StringTag
  // 用到in 所有要用Object去封装
  // if(!(typeof value !== 'symbol' && symStringTag in Object(value))) {
  if(!(symStringTag && symStringTag in Object(value))) {
    return toString.call(value)
  }

  // 3. 如果是Symbol类型 本身会Symbol.toStringTag 重写这个属性会影响toString.call(value)的判断
  // 所以先去掉这个属性，等到类型判断完成之后在把这个属性加上
  const isOwn = hasOwnProperty.call(value, symStringTag)
  const tag = value[symStringTag]
  const unmask = false // 还么去掉属性
  try {
    value[symStringTag] = undefined
    unmask = true 
  } catch(e) {}

  const result = toString.call(value)
  // 如果属性去掉了
  if(unmask) {
    if(isOwn) {
      // 如果symStringTag 是value的属性 把属性还回去
      value[symStringTag] = tag 
    } else {
      // 否则把属性给删除
      delete value[symStringTag]
    }
  }
  return result 
}
// baseGetTag(Symbol())
// baseGetTag(1)
// baseGetTag(2)
// baseGetTag([1,2])
// baseGetTag()
export default baseGetTag