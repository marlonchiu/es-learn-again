// var -> variable
// var a = 5
// console.log(a)
// // delete a // 删除全局window上的a
// console.log(a)
// console.log(window.a)
// console.log(window)

// b = 6
// // console.log(b)
// // delete b // 删除后 undefined
// // console.log(b) // Uncaught ReferenceError: b is not defined
// console.log(window.b) // 删除后 undefined
// console.log(window)

// var 设计缺陷被挂在window上了

// TODO 不属于顶层对象window
// let a = 5
// console.log(a) // 5
// console.log(window.a) // undefined

// TODO 不允许重复声明
// let a = 5
// let a = 6
// console.log(a)

// TODO 不存在变量提升
// console.log(a) // undefined
// var a = 5

// 等价于
// var a
// console.log(a) // undefined
// a = 5

// console.log(a) // Uncaught ReferenceError: Cannot access 'a' before initialization
// let a = 5

// TODO 存在暂时性死区
// var a = 5
// if (true) {
//   a = 6
//   // var a
//   let a // Uncaught ReferenceError: Cannot access 'a' before initialization
// }

// function foo(a = b, b = 2) {
//   // Uncaught ReferenceError: Cannot access 'b' before initialization
//   console.log(a, b)
// }
// foo()

// function foo(a = 2, b = a) {
//   console.log(a, b)
// }
// foo()

// TODO 块级作用域
// for (var i = 0; i < 3; i++) {
//   console.log('循环内:' + i)
// }
// console.log('循环外:' + i) // var 时： 3； let 时 Uncaught ReferenceError: i is not defined

// if (false) {
//   let a = 5
// }
// console.log(a) // var 输出undefined,   let 输出 Uncaught ReferenceError: a is not defined

// if (true) {
//   let a = 5
// }
// console.log(a) // Uncaught ReferenceError: a is not defined

// todo setTimeout异步操作，for循环同步执行完后 i = 3,再去执行 setTimeout
// for (var i = 0; i < 3; i++) {
//   setTimeout(function () {
//     console.log(i) // 3 3 3
//   })
// }

// for (var i = 0; i < 3; i++) {
//   ;(function (j) {
//     setTimeout(function () {
//       console.log(j)
//     })
//   })(i)
// }

for (let i = 0; i < 3; i++) {
  setTimeout(function () {
    console.log(i) // 0 1 2
  })
}
