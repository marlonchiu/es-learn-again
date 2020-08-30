// globalThis
// Javascript 在不同的环境获取全局对象有不通的方式：

// node 中通过 global
// web 中通过 window, self 等.

// self：打开任何一个网页，浏览器会首先创建一个窗口，
// 这个窗口就是一个window对象，也是js运行所依附的全局环境对象和全局作用域对象。
// self 指窗口本身，它返回的对象跟window对象是一模一样的。
// 也正因为如此，window对象的常用方法和函数都可以用self代替window

// setTimeout(() => {
//   console.log(123)
// }, 1000)
// window.setTimeout(() => {
//   console.log(123)
// }, 1000)
// self.setTimeout(() => {
//   console.log(123)
// }, 1000)

// const getGlobal = () => {
//   if (typeof self !== 'undefined') {
//     return self
//   }
//   if (typeof window !== 'undefined') {
//     return window
//   }
//   if (typeof global !== 'undefined') {
//     return global
//   }
//   throw new Error('无法找到全局对象')
// }
// const global = getGlobal()
// console.log(global)
// console.log(self)

// TODO globalThis 提供了一个标准的方式来获取不同环境下的全局 this 对象（也就是全局对象自身）
console.log(globalThis)
