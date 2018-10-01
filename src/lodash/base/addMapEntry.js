

/**
 * 向map添加pairs的键值对
 * @param {*} map 
 * @param {键值对} pairs 
 */
function addMapEntry(map, pairs) {
  // 不要直接返回 map.set(pairs[0], paris[1]) IE11会bug
  map.set(pairs[0], pairs[1])
  return map 
}