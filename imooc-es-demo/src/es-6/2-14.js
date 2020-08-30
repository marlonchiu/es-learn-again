// TODO Symbol
// let s = Symbol()
// console.log(typeof s) // "symbol"

// let s1 = Symbol('foo')
// let s2 = Symbol('bar')

// console.log(s1) // Symbol(foo)
// s2 // Symbol(bar)
// console.log(s1 === s2) // false
// console.log(s1.toString()) // "Symbol(foo)"
// s2.toString() // "Symbol(bar)"

// let obj = {
//   name: 'imooc',
//   toString() {
//     return this.name
//   }
// }
// let s = Symbol(obj)
// // 会自动调用对象的 toString 方法
// console.log(s) // symbol(imooc)

// let s = Symbol('foo')
// // s.name = 'imooc'
// // console.log(s)
// console.log(s.description) // foo

// Symbol.for()
// Symbol.for() 接受一个字符串作为参数，然后搜索有没有以该参数作为名称的 Symbol 值。
// 如果有，就返回这个 Symbol 值，否则就新建一个以该字符串为名称的 Symbol 值，并将其注册到全局。
// let s1 = Symbol.for('foo')
// let s2 = Symbol.for('foo')
// console.log(s1 === s2) // true

// function foo() {
//   return Symbol.for('foo')
// }
// const x = foo()
// const y = Symbol.for('foo')
// console.log(x === y) // true

// const s1 = Symbol('foo')
// console.log(Symbol.keyFor(s1)) // undefined

// const s2 = Symbol.for('foo')
// console.log(Symbol.keyFor(s2)) // foo

// 常见的应用场景
// const grade = {
//   张三: { address: 'xxx', tel: '111' },
//   李四: { address: 'yyy', tel: '222' },
//   李四: { address: 'zzz', tel: '333' }
// }
// console.log(grade) // 第二个被覆盖了

// const stu1 = '李四'
// const stu2 = '李四'
// const grade = {
//   [stu1]: { address: 'yyy', tel: '222' },
//   [stu2]: { address: 'zzz', tel: '333' }
// }
// console.log(grade)

// symbol 作为对象的key(班级重名的操作)
// const stu1 = Symbol('李四')
// const stu2 = Symbol('李四')
// const grade = {
//   [stu1]: { address: 'yyy', tel: '222' },
//   [stu2]: { address: 'zzz', tel: '333' }
// }
// console.log(grade)
// console.log(grade[stu1])
// console.log(grade[stu2])

const sym = Symbol('imooc')
class User {
  constructor(name) {
    this.name = name
    this[sym] = 'imooc.com'
  }
  getName() {
    return this.name + this[sym]
  }
}
const user = new User('xiecheng')
// console.log(user.getName())

// for (let key in user) {
//   console.log(key) // 只有 name  可以达到隐藏属性的效果
// }

// for (let key of Object.keys(user)) {
//   console.log(key) // name
// }

// for (let key of Object.getOwnPropertySymbols(user)) {
//   console.log(key) // Symbol(imooc)
// }

// for (let key of Reflect.ownKeys(user)) {
//   console.log(key) // name 、Symbol(imooc)
// }

// function getArea(shape) {
//   let area = 0
//   switch (shape) {
//     case 'Triangle':
//       area = 1
//       break
//     case 'Circle':
//       area = 2
//       break
//   }
//   return area
// }
// console.log(getArea('Triangle'))

// 消除魔术字符串
// 魔术字符串指的是，在代码之中多次出现、与代码形成强耦合的某一个具体的字符串或者数值
// 字符串Triangle和Circle就是魔术字符串

const shapeType = {
  // triangle: 'Triangle',
  // circle: 'Circle'
  triangle: Symbol(),
  circle: Symbol()
}
function getArea(shape) {
  let area = 0
  switch (shape) {
    case shapeType.triangle:
      area = 1
      break
    case shapeType.circle:
      area = 2
      break
  }
  return area
}
console.log(getArea(shapeType.triangle))
