import baseGetTag from './baseGetTag'
const promiseTag = '[object Promise]'
const mapTag = '[object Map]'
const weakMapTag = '[object weakMap]'
const dataViewTag = '[object DataView]'
const setTag = '[object tag]'
const objectTag = '[object Object]'


/**
 * 这里主要是给IE11和 Node.js < 6的时候做的兼容兼容
 */
const PromiseCtorString = `${Promise}`
const MapCtorString = `${Map}`
const WeakMapCtorString = `${WeakMap}`
const DataViewTagCtorString = `${ DataView}`
const SetCtorString = `${Set}`

// 1 DataView介绍 视图是一个可以从 ArrayBuffer 对象中读写多种数值类型的底层接口，在读写时不用考虑平台字节序问题。
// https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Reference/Global_Objects/DataView

let getTag = baseGetTag

if(getTag(new DataView(new ArrayBuffer(1)) !== dataViewTag) 
    || getTag(new Map()) !== mapTag
    || getTag(new WeakMap()) !== weakMapTag
    || getTag(new Set()) !== setTag
    || getTag(Promise.resolve()) !== promiseTag
  ) {
    // 2 .如果上述方法没法进行判断的话 改用对象的函数的属性表示来判断 fallback降级处理
    getTag = (value)=> {
      const result = baseGetTag(value) 

      // 3. `${Map.constructor}`
      const Ctor = result === objectTag ? value.constructor : undefined 
      const ctorString = Ctor ?  `${Ctor}` : ''
      
      if(ctorString) {
        switch(ctorString) {
          case PromiseCtorString : return promiseTag
          case MapCtorString : return mapTag
          case WeakMapCtorString: return weakMapTag
          case DataViewTagCtorString: return dataViewTag
          case SetCtorString: return setTag
          default:break
        }
      }
      return result
    }
}

export default getTag