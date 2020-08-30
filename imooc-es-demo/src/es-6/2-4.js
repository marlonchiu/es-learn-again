// TODO ES5 中 数组遍历方式

/**
 *    ES5 中 数组遍历
 *
 * for 循环
 *
 * forEach() 没有返回值，只是针对每个元素调用func
 *      forEach 的代码块中不能使用 break、continue，它会抛出异常
 *      forEach 不能跳出循环
 *
 * map() 返回新的Array，每个元素为调用func的结果
 *
 * filter() 返回符合func条件的元素数组
 *
 * some() 返回boolean，判断是否有元素符合func条件
 *      找到符合的就好，提前结束，后续遍历不执行了
 *
 * every() 返回boolean，判断每个元素都符合func条件
 *      一旦遇到不符合的就返回 false，后续遍历不执行了
 *
 * reduce() 接收一个函数作为累加器
 *
 * TODO ES6 中数组遍历方式 for...in
 */

let arr = [1, 2, 3, 2, 4]

// for
// for (let i = 0; i < arr.length; i++) {
//   if (arr[i] === 2) {
//     continue
//   }
//   console.log(arr[i]) // 1 3 4
// }

// map
// let result = arr.map(function (item, index, array) {
//   // console.log(item, index, array)
//   item += 1
//   // console.log(item)
//   return item
// })
// console.log(arr, result)

// filter
// let result = arr.filter(function (item, index, array) {
//   return item !== 2
// })
// console.log(arr, result)

// some
// let result = arr.some(function (item, index, array) {
//   console.log('some', item, index) // 之遍历到第二个就找到了
//   return item === 2
// })
// console.log(arr, result) // true

// every
// let result = arr.every(function (item, index, array) {
//   console.log('every', item, index) // 每一个，找到不符合的就提前结束了
//   return item === 2
// })
// console.log(arr, result) // true

// reduce
// let result = arr.reduce(function (prev, cur) {
//   return prev + cur
// }, 0)
// console.log(arr, result) // 求和 12

// TODO reduce 实现 数组最大值
// let max = arr.reduce(function (prev, cur, index, array) {
//   return Math.max(prev, cur)
// })
// console.log(max)

// TODO reduce 实现 数组去重
// let res = arr.reduce(function (prev, cur) {
//   prev.indexOf(cur) == -1 && prev.push(cur) // 数组去重
//   return prev
// }, [])
// console.log(res)

/**
 *  TODO ES6 中 数组的遍历
 *
 *  for...in ？？？
 *
 * find() 返回第一个通过测试的元素
 * findIndex() 返回第一个通过测试的元素的索引
 * for of
 * values()
 * keys()
 * entries()
 */
// Array.prototype.foo = function () {
//   console.log('foo')
// }
// for (var index in arr) {
//   console.log(arr[index]) // 还可以遍历出数组原型上的方法
// }

// find
// let res = arr.find(function (value) {
//   return value === 8
// })
// console.log(arr, res) // res undefined

// findIndex
// let res = arr.findIndex(function (value) {
//   return value === 2
// })
// console.log(arr, res) // 1

// for of
// for (let item of arr) {
//   console.log(item) // 默认就是keys
// }
// for (let item of arr.values()) {
//   console.log(item)
// }
// for (let item of arr.keys()) {
//   console.log(item)
// }
// for (let item of arr.entries()) {
//   console.log(item) // 下标和值组成的数组
// }
for (let [index, item] of arr.entries()) {
  console.log(index, item)
}
