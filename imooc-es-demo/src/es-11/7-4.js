// Promise.allSettled()
// Promise.all() 具有并发执行异步任务的能力。但它的最大问题就是如果其中某个任务出现异常(reject)，所有任务都会挂掉，Promise直接进入 reject 状态
const p1 = Promise.resolve({
  code: 200,
  data: [1, 2, 3]
})
const p2 = Promise.reject({
  code: 500,
  data: []
})
const p3 = Promise.resolve({
  code: 200,
  data: [7, 8, 9]
})

// Promise.all([p1, p2, p3])
//   .then(res => {
//     console.log(res)
//     console.log('成功')
//   })
//   .catch(err => {
//     console.log(err)
//     console.log('失败')
//   })

// es2020
Promise.allSettled([p1, p2, p3])
  .then(res => {
    // console.log(res)
    // console.log('成功')
    const data = res.filter(item => item.status === 'fulfilled')
    console.log(data)
  })
  .catch(err => {
    console.log(err)
    console.log('失败')
  })
