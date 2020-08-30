// todo 异步编程解决方案Generator
// 什么是 JavaScript Generators 呢？通俗的讲 Generators 是可以用来控制迭代器的函数。它们可以暂停，然后在任何时候恢复

// function foo() {
//   for (let i = 0; i < 3; i++) {
//     console.log(i)
//   }
// }
// foo()

// function* foo() {
//   for (let i = 0; i < 3; i++) {
//     yield i
//   }
// }
// let f = foo()
// console.log(f.next())
// console.log(f.next())
// console.log(f.next())
// console.log(f.next())

// yield 关键字只能在Generator函数中使用
// yield 关键字用来暂停和恢复一个生成器函数

// function* gen(x) {
//   let y = 2 * (yield x + 1)
//   let z = yield y / 3
//   return x + y + z
// }

// let g = gen(5)
// console.log(g.next()) // 6  next 表示的上一条yield的返回值 yield x + 1
// console.log(g.next()) // NaN 2 *NaN
// console.log(g.next()) // NaN

// let g = gen(5)
// console.log(g.next()) // 6
// console.log(g.next(12)) // Y=24 8
// console.log(g.next(13)) // Z=13 X=5  42

// TODO 游戏过7的倍数则过
// function* count(x = 1) {
//   while (true) {
//     if (x % 7 === 0) {
//       yield x
//     }
//     x++
//   }
// }
// let n = count()
// console.log(n.next().value)
// console.log(n.next().value)
// console.log(n.next().value)
// console.log(n.next().value)
// console.log(n.next().value)
// console.log(n.next().value)

function ajax(url, callback) {
  // 1、创建XMLHttpRequest对象
  var xmlhttp
  if (window.XMLHttpRequest) {
    xmlhttp = new XMLHttpRequest()
  } else {
    // 兼容早期浏览器
    xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
  }
  // 2、发送请求
  xmlhttp.open('GET', url, true)
  xmlhttp.send()
  // 3、服务端响应
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState === 4 && xmlhttp.status === 200) {
      var obj = JSON.parse(xmlhttp.responseText)
      // console.log(obj)
      callback(obj)
    }
  }
}

function request(url) {
  ajax(url, res => {
    getData.next(res)
  })
}

// 按照顺序发送请求
function* gen() {
  let res1 = yield request('static/a.json')
  console.log(res1)
  let res2 = yield request('static/b.json')
  console.log(res2)
  let res3 = yield request('static/c.json')
  console.log(res3)
}
let getData = gen()
getData.next()
