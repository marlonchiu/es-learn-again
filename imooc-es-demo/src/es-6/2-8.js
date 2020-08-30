// TODO 箭头函数

// console.log(sum(4, 5))
// 函数的预定义
// function sum(x, y) {
//     return x + y
// }

// console.log(sum)
// let sum = function (x, y) {
//   return x + y
// }

// let sum = (x, y) => {
//   return x + y
// }
// let sum = (x, y) => x + y
// console.log(sum(3, 4))

// todo 箭头函数的箭头左边是参数，右边是函数体
// let x = x => x
// let x = function (x) {
//   return x
// }

// TODO 箭头函数
// TODO this指向定义时所在的对象，而不是调用时所在的对象
// TODO 不可以当做构造函数
// TODO 不可以使用arguments对象

// let oBtn = document.querySelector('#btn')
// oBtn.addEventListener('click', function () {
//   // console.log(this)
//   // setTimeout(
//   //   function () {
//   //     // call apply bind
//   //     console.log(this)
//   //   }.bind(this),
//   //   1000
//   // )
//   setTimeout(() => {
//     console.log(this)
//   }, 1000)
// })

// 类
// function People(name, age) {
//   console.log(this)
//   this.name = name
//   this.age = age
// }
// People is not a constructor
// let People = (name, age) => {
//   this.name = name
//   this.age = age
// }
// let p1 = new People('xiecheng', 34)
// console.log(p1)

// let foo = () => {
//   console.log(arguments)
// }
// foo(1, 2, 3)
// let foo = (...args) => {
//   // console.log(arguments)
//   console.log(args)
// }
// foo(1, 2, 3)
