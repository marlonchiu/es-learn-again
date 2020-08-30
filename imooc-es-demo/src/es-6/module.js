// export const a = 5
// export const b = 'imooc'
// export const sum = (x, y) => x + y
// const obj = {
//   name: 'es'
// }
// export { obj }

// const a = 5
// const b = 'imooc'
// const sum = (x, y) => x + y
// const obj = {
//   name: 'es'
// }
// class People {
//   constructor(name) {
//     this.name = name
//   }
//   showName() {
//     console.log(this.name)
//   }
// }

// export { a, b, sum, obj, People }

// function sum(x, y) {
//   return x + y
// }
// export default sum
// export const str = 'imooc'

const a = 5
const b = 'imooc'
const sum = (x, y) => x + y
const obj = {
  name: 'es'
}
class People {
  constructor(name) {
    this.name = name
  }
  showName() {
    console.log(this.name)
  }
}
export default {
  a,
  b,
  sum,
  obj,
  People
}
