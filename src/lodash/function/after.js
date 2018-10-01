


/**
 * 返回一个函数 这个函数执行第先执行n-1次，第n次才执行
 * 第二个参数的函数
 *
 * var af = after(2, ()=>console.log('hi'))
 * af()
 * af() ==> 'hi'
 * @param n
 * @param func
 * @returns {Function}
 */
const after = (n, func)=> {
    if(typeof func !== 'function') {
        // throw new Error('第二个参数不是function')
        throw new TypeError("第二个参数不是function")
    }

    return function (...args) {
        if(--n < 1) {
            func.apply(args)
        }
    }
}

export default after