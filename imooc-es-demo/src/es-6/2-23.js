// TODO Promise
// 状态管理
// resolve 成功
// reject 失败
// let p = new Promise((resolve, reject) => {
//   // resolve()
//   // reject()
//   resolve('success')
// })
//   .then(res => {
//     console.log(res)
//   })
//   .catch(() => {
//     console.error('fail')
//   })

// let p = new Promise((resolve, reject) => {
//   console.log(1)
//   // resolve()
// })
// console.log(2)
// p.then(res => console.log(3))

// let p1 = new Promise((resolve, reject) => {
//   resolve(1)
// })

// let p2 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     resolve(2)
//   }, 1000)
// })

// let p3 = new Promise((resolve, reject) => {
//   setTimeout(() => {
//     reject(3)
//   }, 1000)
// })

// console.log(p1) // fulfilled // Promise {<fulfilled>: 1}
// console.log(p2) // pending -- fulfilled // Promise {<pending>}
// console.log(p3) // pending -- rejected  // Promise {<pending>}

// setTimeout(() => {
//   console.log(p2) // Promise {<fulfilled>: 2}
// }, 2000)
// setTimeout(() => {
//   console.log(p3) // Promise {<rejected>: 3}
// }, 2000)

// p1.then(res => {
//   console.log(res)
// })
// p2.then(res => {
//   console.log(res)
// })
// p3.catch(err => {
//   console.log(err)
// })

// let p = new Promise((resolve, reject) => {
//   //  状态一旦确定就不能改变
//   reject(2)
//   resolve(1)
// })
// // p.then(
// //   res => {
// //     console.log(res)
// //   },
// //   err => {
// //     console.log(err)
// //   }
// // )
// p.then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })

// Ajax的原理
function ajax(url, successCallback, failCallback) {
  // 1. 创建 XMLHttpRequest 对象
  var xmlhttp
  if (window.XMLHttpRequest) {
    // code for IE7+, Firefox, Chrome, Opera, Safari
    xmlhttp = new XMLHttpRequest()
  } else {
    // code for IE6, IE5
    xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
  }

  // 2.发送请求
  xmlhttp.open('GET', url, true)
  xmlhttp.send()

  // 3.服务端响应
  xmlhttp.onreadystatechange = function () {
    if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
      // console.log(xmlhttp.responseText)
      let obj = JSON.parse(xmlhttp.responseText)
      successCallback && successCallback(obj)
    } else if (xmlhttp.readyState === 4 && xmlhttp.status === 404) {
      failCallback && failCallback(xmlhttp.statusText)
    }
  }
}

// new Promise((resolve, reject) => {
//   ajax('static/a.json', res => {
//     console.log(res)
//     resolve()
//   })
// })
//   .then(res => {
//     console.log('a成功')
//     return new Promise((resolve, reject) => {
//       ajax('static/b.json', res => {
//         console.log(res)
//         resolve()
//       })
//     })
//   })
//   .then(res => {
//     console.log('b成功')
//     return new Promise((resolve, reject) => {
//       ajax('static/c.json', res => {
//         console.log(res)
//         resolve()
//       })
//     })
//   })
//   .then(res => {
//     console.log('c成功')
//   })

function getPromise(url) {
  return new Promise((resolve, reject) => {
    ajax(
      url,
      res => {
        resolve(res)
      },
      err => {
        reject(err)
      }
    )
  })
}

// getPromise('static/a.json')
//   .then(res => {
//     console.log(res)
//     return getPromise('static/b.json')
//   })
//   .then(res => {
//     console.log(res)
//     return getPromise('static/c.json')
//   })
//   .then(res => {
//     console.log(res)
//   })

// getPromise('static/aa.json')
//   .then(
//     res => {
//       console.log(res)
//       return getPromise('static/b.json')
//     },
//     err => {
//       console.log(err) // 返回空的promise
//       // return getPromise('static/b.json')
//     }
//   )
//   .then(res => {
//     console.log(res)
//     return getPromise('static/c.json')
//   })
//   .then(res => {
//     console.log(res)
//   })
getPromise('static/a.json')
  .then(res => {
    console.log(res)
    return getPromise('static/bb.json')
  })
  .then(res => {
    console.log(res)
    return getPromise('static/c.json')
  })
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err) // 返回空的promise
  })
