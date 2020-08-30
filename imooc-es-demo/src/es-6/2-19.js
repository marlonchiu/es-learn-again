// TODO Number的扩展  Math扩展

// // 十进制 -> 二进制
// const a = 55 // 110111
// // toString接收一个数值代表转换的进制
// console.log(a.toString(2)) // 110111
// console.log(a.toString(8)) // 67

// // 二进制 -> 十进制
// const b = 101
// // console.log(parseInt(5.5)) // 5
// // parseInt() 的第二个参数表示转换的进制
// console.log(parseInt(b, 2))

// ES6 0B二进制  0O八进制
// const a = 0b0101
// console.log(a)

// const b = 0o777
// console.log(b)

/**
 * Number 新增方法
 *    Number.isFinite()
 *      用来检查一个数值是否为有限的（finite），即不是Infinity。
 *
 *    Number.isNaN()
 *      用来检查一个数值是否为NaN。
 *
 *    Number.parseInt()
 *      ES6 将全局方法parseInt()移植到Number对象上面，行为完全保持不变。这样做的目的，是逐步减少全局性方法，使得语言逐步模块化。
 *
 *    Number.parseFloat()
 *      ES6 将全局方法parseFloat()移植到Number对象上面，行为完全保持不变。这样做的目的，是逐步减少全局性方法，使得语言逐步模块化。
 *
 *    Number.isInteger()
 *      用来判断一个数值是否为整数
 *
 *    Number.isSafeInteger()
 *      JavaScript 能够准确表示的整数范围在-2^53到2^53之间（不含两个端点），超过这个范围，无法精确表示这个值
 *
 *    Number.MAX_SAFE_INTEGER  Math.pow(2, 53) - 1     9007199254740991
 *    Number.MIN_SAFE_INTEGER                          -9007199254740991
 */

// console.log(Number.isFinite(5))
// console.log(Math.PI) // 3.141592653589793
// console.log(Number.isFinite(Math.PI)) // true
// console.log(Number.isFinite(Infinity)) // false
// console.log(Number.isFinite('imooc')) // false
// console.log(Number.isFinite(true)) // false

// console.log(Number.isNaN(NaN)) // true
// console.log(Number.isNaN(15)) // false

// console.log(Number.parseInt(5.5)) // 5 数值5
// console.log(Number.parseFloat(5.5)) // 5.5 数值5.5
// console.log(parseInt(5.5)) // 5 数值5
// console.log(parseFloat(5.5)) // 5.5 数值5.5
// console.log(window.parseInt(5.5)) // 5 数值5
// console.log(window.parseFloat(5.5)) // 5.5 数值5.5

// console.log(Number.isInteger(5)) // true
// console.log(Number.isInteger(5.5)) // false

// IEEE 754 双精度标准

// 35 -> 00100011 八进制
// 0.375 -> 0.011  二进制
// 0.1 -> 0.000110011....
// console.log(0.1000000000000001)
// console.log(0.10000000000000001) // 0.1 超出了存储范围，超出的就会被舍弃 (精度缺失的问题)
// console.log(0.10000000000000001 === 0.1) // true

// const max = Math.pow(2, 53)
// console.log(max)
// console.log(max + 1)
// console.log(Number.MAX_SAFE_INTEGER) // 9007199254740991
// console.log(Number.MAX_SAFE_INTEGER === max - 1)
// console.log(Number.MIN_SAFE_INTEGER)
// console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER)) // TRUE
// console.log(Number.isSafeInteger(Number.MAX_SAFE_INTEGER + 1)) // false

/**
 * Math扩展
 *    Math.trunc()
 *      用于去除一个数的小数部分，返回整数部分.
 *
 *    Number.sign()
 *      用来判断一个数到底是正数、负数、还是零。对于非数值，会先将其转换为数值
 *        参数为正数，返回+1;  参数为负数，返回-1;  参数为 0，返回0;  参数为-0，返回-0;  其他值，返回NaN
 *
 *    Math.cbrt()
 *      用于计算一个数的立方根
 *    Math.pow()
 *      用于计算一个数的立方
 */
// console.log(Math.trunc(5))
// console.log(Math.trunc(5.5))
// console.log(Math.trunc(true))
// console.log(Math.trunc(false))
// console.log(Math.trunc(NaN)) // NaN
// console.log(Math.trunc(undefined)) // NaN
// console.log(Math.trunc()) // NaN
// console.log(Number.isNaN(Math.trunc())) // true

// console.log(Math.sign(5))
// console.log(Math.sign(-5.5))
// console.log(Math.sign(true))
// console.log(Math.sign(false))
// console.log(Math.sign(NaN))
// console.log(Math.sign(undefined))
// console.log(Math.sign())

console.log(Math.cbrt(8)) // 2
console.log(Math.pow(2, 3)) // 8
console.log(2 ** 3) // 8
console.log(Math.cbrt('imooc')) // NaN
