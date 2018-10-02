/**
 * 判断Node.js的 global环境 如果是 辅助 给freeGlobal 否则返回false
 */

const freeGlobal = typeof global === 'object' &&  global !== null && global.Object === Object && global 

export default freeGlobal