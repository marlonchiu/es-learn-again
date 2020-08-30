// TODO String.prototype.matchAll()
// matchAll() 方法返回一个包含所有匹配正则表达式及分组捕获结果的迭代器

const str = `
  <html>
    <body>
      <div>第一个div</div>
      <p>这是p</p>
      <div>第二个div</div>
      <span>这是span</span>
      <div>第三个div</div>
    </body>
  </html>
`
// exec g
// function selectDiv(regExp, str) {
//   let matches = []
//   while (true) {
//     // console.log(regExp.lastIndex)
//     const match = regExp.exec(str)
//     // console.log(match)
//     if (match === null) {
//       break
//     }
//     matches.push(match[1])
//   }
//   return matches
// }

const regExp = /<div>(.*)<\/div>/g
// const res1 = selectDiv(regExp, str)
// console.log(res1)

// match
// console.log(str.match(regExp))

// replace
function selectDiv2(regExp, str) {
  let matches = []
  str.replace(regExp, (all, first) => {
    // console.log(all, first)
    matches.push(first)
  })
  return matches
}
const res2 = selectDiv2(regExp, str)
// console.log(res2)

// matchAll
function selectDiv3(regExp, str) {
  let matches = []
  console.log(str.matchAll(regExp))
  for (let match of str.matchAll(regExp)) {
    // console.log(match)
    matches.push(match[1])
  }
  return matches
}
const res3 = selectDiv3(regExp, str)
console.log(res3)
