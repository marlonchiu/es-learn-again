// TODO ES5 中定义常量
// Object.defineProperty(window, 'PI', {
//   value: 3.14,
//   writable: false // 定义是否可写
// })
// console.log(PI) // 3.14
// PI = 5
// console.log(PI)

// const a = 5
// a = 6 // Uncaught TypeError: Assignment to constant variable.

// const a
// a = 5 // Uncaught SyntaxError: Missing initializer in const declaration

// TODO 有块级作用域，只在定义的作用域有效
// if (true) {
//   const a = 5
// }
// console.log(a)

// todo 不存在变量提升，存在暂时性时区
// if (true) {
//   console.log(a) // Uncaught ReferenceError: Cannot access 'a' before initialization
//   const a = 5
// }

const obj = {
  name: 'xiecheng',
  age: 34,
  skill: {
    name: 'code',
    year: 11
  }
}
Object.freeze(obj) // freeze 是浅层的冻结，只能冻结对象的最外层
// Object.freeze(obj.skill)
console.log(obj) // skill: {name: "code", year: 12}
obj.school = 'imooc'
obj.skill.year = 12
console.log(obj) // skill: {name: "code", year: 12}

// 数组是引用地址，指向的是堆内存，是引用地址值变化了
// Obj也是引用地址
// const arr = [1, 2, 3]
// arr.push(4)
// console.log(arr) // [1, 2, 3, 4]
