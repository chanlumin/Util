import freeGlobal from './freeGlobal'

// 1. freeGlobal node.js环境
// 2. selfGlobal 浏览器环境

const freeSelf = typeof self === 'object' && self !== null && self.Object === Object && self

const root = freeSelf || freeGlobal || Function('return this')()

export default root