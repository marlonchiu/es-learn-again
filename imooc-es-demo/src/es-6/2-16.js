// TODO  Map
//  Map 数据结构。它类似于对象，也是键值对的集合，但是“键”的范围不限于字符串，各种类型的值（包括对象）都可以当作键。
// 也就是说，Object 结构提供了“字符串—值”的对应，Map 结构提供了“值—值”的对应，是一种更完善的 Hash 结构实现。
// 如果你需要“键值对”的数据结构，Map 比 Object 更合适

// let m = new Map()
// let obj = {
//   name: 'imooc'
// }
// m.set(obj, 'es')
// console.log(m.get(obj))
// // m.delete(obj)
// console.log(m)
// console.log(m.has(obj))

let map = new Map([
  ['name', 'imooc'],
  ['age', 5]
])
// console.log(map)
// console.log(map.size)
// console.log(map.has('name'))
// console.log(map.get('age'))
// map.set('name', 'zhangsan')
// map.delete('name')
// console.log(map)

// 遍历
// map.forEach((value, key) => console.log(value, key))

// for (let [key, value] of map) {
//   console.log(key, value)
// }

// for (let key of map.keys()) {
//   console.log(key)
// }

// for (let value of map.values()) {
//   console.log(value)
// }

// for (let [key, value] of map.entries()) {
//   console.log(key, value)
// }

// map --> object 应用场景跟对象类似

// TODO WeakMap 键名只支持引用类型
// let wm = new WeakMap()
// wm.set([1], 2)
// wm.set(
//   {
//     name: 'imooc'
//   },
//   'es'
// )
// // wm.clear() // Uncaught TypeError: wm.clear is not a function
// console.log(wm)
// // console.log(wm.size) // undefined 没有size 属性

// let wm = new WeakMap()
// let elem = document.getElementsByTagName('h1')
// wm.set(elem, 'info') // HTMLCollection 作为key
// console.log(wm)
// console.log(wm.get(elem))

// WeakMap的键名所指向的对象，不计入垃圾回收机制
