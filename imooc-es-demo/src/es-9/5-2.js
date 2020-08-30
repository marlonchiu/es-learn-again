// RegExp Updates

// TODO dotAll 模式
// dot  www.imooc.com  dotAll
// .
// const reg = /./
// console.log(reg.test('5')) // true
// console.log(reg.test('x')) // true
// // 换行分隔符号 \n
// console.log(reg.test('\n')) // false
// // 回车分隔符号 \r
// console.log(reg.test('\r')) // false
// // 行分隔符号\u{2028}
// console.log(reg.test('\u{2028}')) // false
// // 段落分隔符号\u{2029}
// console.log(reg.test('\u{2029}')) // false

// const reg = /./s // s 开启 dotAll 模式
// console.log(reg.test('5')) // true
// console.log(reg.test('x')) // true
// // 换行分隔符号 \n
// console.log(reg.test('\n')) // true
// // 回车分隔符号 \r
// console.log(reg.test('\r')) // true
// // 行分隔符号\u{2028}
// console.log(reg.test('\u{2028}')) // true
// // 段落分隔符号\u{2029}
// console.log(reg.test('\u{2029}')) // true

// RegExp 修饰符: g i m y u s

// TODO 具名组匹配
// const date = /(\d{4})-(\d{2})-(\d{2})/.exec('2020-08-30')
// console.log(date)
// console.log(date[1])
// console.log(date[2])
// console.log(date[3])

// const date = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/.exec('2020-08-30')
// console.log(date)
const reg = /(?<year>\d{4})-(?<month>\d{2})-(?<day>\d{2})/
const groups = reg.exec('2020-08-30').groups
console.log(groups)
// const year = groups.year
// const month = groups.month
// const day = groups.day
const { year, month, day } = groups
console.log(year, month, day)

// TODO 后行断言
//  先行断言
const str = 'ecmascript'
console.log(str.match(/ecma(?=script)/)) // 匹配ecma 后边要跟着script的 匹配不到null
// es9:后行断言
console.log(str.match(/(?<=ecma)script/))
console.log(str.match(/(?<=ecma1)script/))
console.log(str.match(/(?<!ecma)script/))
