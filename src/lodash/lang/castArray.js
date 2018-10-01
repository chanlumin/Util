



/** 把元素包装成为数组
 * 
 *castArray(1)
  [1]
  castArray(undefined)
  [undefined]
  castArray(null)
  [null]
  castArray([1,2,3])
  [1, 2, 3]
 * @param  {...any} args 
 */
function castArray(...args) {
  // 1. 通过判断argslength去判断是否有传入参数
  if(!args.length) {
    return []
  }
  const value = args[0]
  return Array.isArray(value) ? value : [value]
}
export default castArray