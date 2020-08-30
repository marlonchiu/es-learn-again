// TODO Promise.prototype.finally()
// 指定不管最后状态如何都会执行的回调函数。
new Promise((resolve, reject) => {
  setTimeout(() => {
    // resolve('success')
    reject('fail')
  }, 1000)
})
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })
  .finally(() => {
    console.log('finally')
  })

// TODO 场景1：loading关闭
// 需要每次发送请求，都会有loading提示，请求发送完毕，就需要关闭loading提示框，不然界面就无法被点击。
// 不管请求成功或是失败，
// 这个loading都需要关闭掉，这时把关闭loading的代码写在finally里再合适不过了。

// TODO 场景2：数据库断开链接
