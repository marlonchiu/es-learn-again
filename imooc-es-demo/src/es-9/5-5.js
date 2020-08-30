// TODO String 字符串扩展

// 带标签的模板字符串
// const foo = (a, b, c, d) => {
//   console.log(a) // ["这是", ",他的年龄是", "岁", raw: Array(3)]
//   console.log(b)
//   console.log(c)
//   console.log(d)
// }
// // foo(1, 2, 3, 4)
// const name = 'xiecheng'
// const age = 34
// foo`这是${name},他的年龄是${age}岁`

// TODO ES9 标准移除了对 ECMAScript带标签的模板字符串 中转义序列的语法限制。
const foo = arg => {
  console.log(arg)
}
foo`\u{61} and \u{62}`
// foo`\u{61} and \unicode` // 结果是 undefined

// let str = `\u{61} and \unicode`
