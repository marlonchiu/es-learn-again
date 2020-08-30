// TODO String.prototype.padStart()
// TODO String.prototype.padEnd()
// const str = 'imooc'
// console.log(str.padStart(8, 'x'))
// console.log(str.padEnd(8, 'y'))
// console.log(str.padStart(8))

// yyyy-mm-dd  2020-04-01
const now = new Date()
const year = now.getFullYear()
// const month = (now.getMonth() + 1).toString().padStart(2, '0') // 0~11
const month = (now.getMonth() + 1).toString().padStart(2, '0')
const day = now.getDate().toString().padStart(2, '0')
console.log(`${year}-${month}-${day}`)

const tel = '13012345678'
const newTel = tel.slice(-4).padStart(tel.length, '*')
console.log(newTel) // *******5678

// 时间戳统一长度
// 时间戳 13位的 ms
// 在前端处理这个时间戳的时候，保险起见，要先做一个13位的补全，保证单位是毫秒
console.log(new Date().getTime())
const timestamp = new Date().getTime()
console.log(timestamp.toString().padEnd(13, '0'))
console.log(Number(timestamp.toString().padEnd(13, '0')))
