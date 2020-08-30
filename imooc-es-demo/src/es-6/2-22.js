// ajax 原理
// // 创建 XMLHttpRequest 对象
// const url = 'http://jsonplaceholder.typicode.com/users'
// // var url = 'http://musicapi.xiecheng.live/personalized' // No 'Access-Control-Allow-Origin'
// var xmlhttp
// if (window.XMLHttpRequest) {
//   // code for IE7+, Firefox, Chrome, Opera, Safari
//   xmlhttp = new XMLHttpRequest()
// } else {
//   // code for IE6, IE5
//   xmlhttp = new ActiveXObject('Microsoft.XMLHTTP')
// }

// // 发送请求
// xmlhttp.open('GET', url, true)
// xmlhttp.send()

// // 服务端响应
// xmlhttp.onreadystatechange = function () {
//   if (xmlhttp.readyState == 4 && xmlhttp.status == 200) {
//     console.log(xmlhttp.responseText)
//     let obj = JSON.parse(xmlhttp.responseText)
//     console.log(obj)
//   }
// }

// Ajax的原理
function ajax(url, callback) {
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
      callback(obj)
    }
  }
}

// const url = 'http://jsonplaceholder.typicode.com/users'
// ajax(url, res => {
//   console.log(res)
// })
ajax('static/a.json', res => {
  console.log(res)
  ajax('static/b.json', res => {
    console.log(res)
    ajax('static/c.json', res => {
      console.log(res)
    })
  })
})
