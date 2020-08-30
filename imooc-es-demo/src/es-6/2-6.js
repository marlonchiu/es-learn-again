// TODO 函数的参数（函数形参的默认值）

/**
 *
 * 参数的默认值
 * 与解构赋值的结合
 * length属性：表示没有指定默认值的参数个数
 * 作用域
 * 函数的name属性
 */

// function foo(x, y) {
//   y = y || 'world'
//   console.log(x, y)
// }
// // foo('hello', 'imooc')
// foo('hello', 0) // 0 会被解析为 false

// function foo({ x, y = 5 }) {
//   console.log(x, y)
// }

// foo({}) // undefined 5
// foo({
//   x: 1,
//   y: 2
// }) //  1  2
// foo() // Uncaught TypeError: Cannot read property 'x' of undefined

// function ajax(url, { body = '', method = 'GET', headers = {} } = {}) {
//   console.log(method)
// }

// ajax('http://www.imooc.com', {
//   method: 'POST'
// })

// function foo(x, y = 2, z = 3) {
//   console.log(x, y)
// }
// console.log(foo.length) // 1  返回的是没有指定默认值的参数个数

// let x = 1
// function foo(x, y = x) {
//   console.log(y) // 2
// }
// foo(2)

// let x = 1
// function foo(y = x) {
//   let x = 2
//   console.log(y) // 1
// }
// foo()

// // Uncaught ReferenceError: x is not defined
// function foo(y = x) {
//   let x = 2
//   console.log(y)
// }
// foo()

// function foo() {}
// console.log(foo.name) // 返回函数的名称 foo

// console.log(new Function().name) // anonymous 匿名函数

function foo(x, y) {
  console.log(this, x, y) // {name: "xiecheng"}
}
// foo.bind({ name: 'xiecheng' })(1, 2)
console.log(foo.bind({}).name) // bound foo  注释：函数被bind指定后的name 前边会先加上 bound

console.log(function () {}.bind({}).name) // bound
