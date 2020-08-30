// TODO 数组的方法扩展

/**
 * 类数组/伪数组
 * Array.from()
 *    伪数组转为数组
 *
 * Array.of()
 *    将按顺序成为返回数组中的元素
 *
 * copyWithin()
 *    替换数组中的元素,数组发生改变
 *    arr.copyWithin(target, start = 0, end = this.length)
 *        target	从该位置开始替换数据。如果为负值，表示倒数	Y
 *        start	从该位置开始读取数据，默认为 0。如果为负值，表示从末尾开始计算	N
 *        end	到该位置前停止读取数据，默认等于数组长度。如果为负值，表示从末尾开始计算	N
 *
 * fill()
 *    arr.fill(target, start = 0, end = this.length)
 *
 * includes()
 *    返回 boolean 可以检测NaN
 */

// DOM
// let divs1 = document.getElementsByTagName('div')
// console.log(divs1) // HTMLCollection

// let divs2 = document.getElementsByClassName('xx')
// console.log(divs2) // HTMLCollection

let divs3 = document.querySelectorAll('.xx')
// console.log(divs3) // NodeList
// console.log(divs3 instanceof Array) // false
// divs3.push(123) // Uncaught TypeError: divs3.push is not a function

// slice
// 伪数组转换为真实的数组
// let arr = Array.prototype.slice.call(divs3)
// console.log(arr) // []
// arr.push(123)
// console.log(arr) // [123]

// function foo() {
//   console.log(arguments) // Arguments(3) [1, "imooc", true, callee: ƒ, Symbol(Symbol.iterator): ƒ]
//   console.log(arguments instanceof Array) // false
// }
// foo(1, 'imooc', true)

// 定义 伪数组具备两个特征，1. 按索引方式储存数据 2. 具有length属性；

// let arrayLike = {
//   0: 'es6',
//   1: 'es7',
//   2: 'es8',
//   length: 3
// }
// let arr = Array.from(arrayLike)
// arr.push('es9')
// console.log(arr)

// let arr = new Array(1, 2)
// console.log(arr)

// let arr = new Array(3)
// console.log(arr)

// let arr = Array.of(3)
// console.log(arr) // [3]

// let arr = Array.of(1, true, 'imooc', [1, 2, 3], {
//   name: 'xiecheng'
// })
// console.log(arr) // [1, true, "imooc", Array(3), {…}]

// let arr = [1, 2, 3, 4, 5]
// console.log(arr.copyWithin(1, 3)) // [1, 4, 5, 4, 5]
// console.log(arr) // [1, 4, 5, 4, 5]

// let arr = new Array(3).fill(7)
// console.log(arr)

// let arr = [1, 2, 3, 4, 5]
// arr.fill('imooc', 1, 3)
// // arr.fill(0)
// console.log(arr) // [1, "imooc", "imooc", 4, 5]

// 检测是否有NaN
let arr = [1, 2, 3, NaN]
console.log(arr.indexOf(NaN)) // -1
console.log(NaN === NaN) // false
console.log(arr.includes(NaN)) // true
