// TODO for await of
// TODO Symbol.asyncIterator
// 异步迭代器(for-await-of)：循环等待每个Promise对象变为resolved状态才进入下一步
// const arr = ['es6', 'es7', 'es8', 'es9']
// arr[Symbol.iterator] = function () {
//   let nextIndex = 0

//   return {
//     next() {
//       // let flag = nextIndex < arr.length
//       // return {
//       //   value: flag ? arr[nextIndex++] : undefined,
//       //   done: flag ? false : true
//       // }

//       return nextIndex < arr.length ?{
//         value: arr[nextIndex++],
//         done: false
//       } : {
//           value: undefined,
//           done: true
//       }
//     }
//   }
// }
// for (let item of arr) {
//   console.log(item)
// }

function getPromise(time) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve({
        value: time,
        done: false
      })
    }, time)
  })
}
const arr = [getPromise(1000), getPromise(2000), getPromise(3000)]
arr[Symbol.asyncIterator] = function () {
  let nextIndex = 0

  return {
    next() {
      return nextIndex < arr.length
        ? arr[nextIndex++]
        : Promise.resolve({
            value: undefined,
            done: true
          })
    }
  }
}
async function test() {
  for await (let item of arr) {
    console.log(item)
  }
}
test()
