// TODO 对象的扩展

/**12
 *
 * 属性简洁表示法
 * 属性名表达式
 * Object.is()
 *    判断两个对象是否相等（严格相等）
 * 扩展运算符 Object.assign()
 *    Object.assign()用于将所有可枚举属性的值从一个或多个源对象复制到目标对象，它将返回目标对象
 *
 * in
 * 对象的遍历方式
 */

// let name = 'xiecheng'
// let age = 34
// let s = 'school'
// let obj = {
//   name,
//   age,
//   [s]: 'imooc',
//   study() {
//     console.log(this.name + '正在学习')
//   }
// }
// // console.log(obj)
// obj.study()

// TODO 可以判断 NaN
// console.log(Object.is(2, '2')) // false
// console.log(Object.is(NaN, NaN)) // true
// console.log(Object.is(+0, -0)) // false

// let obj1 = {
//   // new Object()
//   name: 'xiecheng',
//   age: 34
// }

// let obj2 = {
//   // new Object()
//   name: 'xiecheng',
//   age: 34
// }
// console.log(obj1 === obj2) // false

// console.log(Object.is(obj1, obj2)) // false

// let x = {
//   a: 3,
//   b: 4
// }
// // let y = {...x}
// let y = {
//   c: 5,
//   a: 6
// }
// Object.assign(y, x)
// console.log(y)
// console.log('a' in x) // true

// let arr = [1, 2, 3]
// console.log(2 in arr) // 判断当前位置是否有值

let obj = {
  name: 'xiecheng',
  age: 34,
  school: 'imooc'
}
// todo 遍历对象的方法
// 1. for...in    2.Object.keys().forEach()
// 3. Object.getOwnPropertyNames(obj)    4.Reflect.ownKeys(obj).forEach()

// for (let key in obj) {
//   console.log(key, obj[key])
// }

// Object.keys(obj).forEach(key => {
//   console.log(key, obj[key])
// })
// Object.values(obj).forEach(value => {
//   console.log(value)
// })
// Object.getOwnPropertyNames(obj).forEach(key => {
//   console.log(key, obj[key])
// })

Reflect.ownKeys(obj).forEach(key => {
  console.log(key, obj[key])
})
