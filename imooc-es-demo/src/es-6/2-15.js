// todo Set
// let s = new Set()
// console.log(s)

// 成员的值都是唯一的，没有重复的值
// 初始化的参数必须是可遍历的，可以是数组或者自定义遍历的数据结构。

// let s = new Set([1, 2, 3, 2])
// // console.log(s) // Set(3) {1, 2, 3}
// s.add('imooc').add('es')
// // console.log(s) // Set(5) {1, 2, 3, "imooc", "es"}
// // console.log(s.delete(2)) // true(布尔值)
// s.delete(2)
// // s.clear()
// console.log(s.has('imooc')) // true
// console.log(s)
// console.log(s.size)

// let s = new Set([1, 2, 3, 2])
// s.forEach(item => {
//   console.log(item) //  1    2    3
// })
// for (let item of s) {
//   console.log(item)
// }
// for (let item of s.keys()) {
//   console.log(item)
// }
// for (let item of s.values()) {
//   console.log(item)
// }
// for (let item of s.entries()) {
//   console.log(item, item[0], item[1])
// }

// 数组去重
// let arr = [1, 2, 3, 4, 2, 3]
// let s = new Set(arr)
// console.log(s) // Set(4) {1, 2, 3, 4}
// console.log(Array.from(s)) // [1, 2, 3, 4]

// 合并去重 set->array
let arr1 = [1, 2, 3, 4]
let arr2 = [2, 3, 4, 5, 6]
// let s = new Set([...arr1, ...arr2])
// console.log(s)
// console.log([...s]) // [1, 2, 3, 4, 5, 6]
// console.log(Array.from(s)) // [1, 2, 3, 4, 5, 6]

// 交集
// let s1 = new Set(arr1)
// let s2 = new Set(arr2)
// let result = new Set(arr1.filter(item => s2.has(item)))
// console.log(Array.from(result)) // [2,3,4]

// 差集
// let s1 = new Set(arr1)
// let s2 = new Set(arr2)
// let arr3 = new Set(arr1.filter(item => !s2.has(item)))
// let arr4 = new Set(arr2.filter(item => !s1.has(item)))
// console.log(arr3, arr4) // Set(1) {1} Set(2) {5, 6}
// console.log([...arr3, ...arr4]) // [1, 5, 6]

// TODO WeakSet
// 只能存储对象
let ws = new WeakSet()
// ws.add(1) // Invalid value used in weak set
const obj1 = {
  name: 'imooc'
}
const obj2 = {
  age: 5
}
ws.add(obj1)
ws.add(obj2)
// ws.delete(obj1)
console.log(ws)
console.log(ws.obj2) // undefined
console.log(ws.has(obj2))
// ws.forEach(item => console.log(item)) // 报错 Uncaught TypeError: ws.forEach is not a function
// WeakSet 没有size属性，没有办法遍历它的成员。
// 垃圾回收机制 GC +1 +1
// weakset 弱引用
// todo 适用于临时存放一些对象
