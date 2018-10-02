import baseIndexOf from  './baseIndexOf'


/**
 * 查看数组是否包含value值 返回boolean值 
 * @param {Array} arr 数组  
 * @param {包含的值}} value 需要查找的值
 */
function arrayIncludes(arr, value) {
  const length = arr.length == null ? 0 : arr.length 
  return !!length &&  baseIndexOf(arr, value, 0) > -1
}



