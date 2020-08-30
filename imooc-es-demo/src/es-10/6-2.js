// TODO String.prototype.trimStart()
// trimStart() 方法从字符串的开头删除空格，trimLeft()是此方法的别名

// 虽然 trimLeft 是 trimStart 的别名，但是你会发现 String.prototype.trimLeft.name === 'trimStart'，一定要记住

// TODO String.prototype.trimEnd()
// trimEnd() 方法从一个字符串的右端移除空白字符，trimRight 是 trimEnd 的别名

// let str = '   foo  '
// console.log(str.length) // 8
// // str = str.trimEnd()
// str = str.trimRight()
// console.log(str)
// console.log(str.trim())

const str = '   imooc    '

// 正则
console.log(str)
console.log(str.replace(/^\s+/g, '')) // 去掉前面的空格
console.log(str.replace(/\s+$/g, '')) // 去掉后面的空格
// 去掉前面的空格
console.log(str.trimStart())
console.log(str.trimLeft())
// 去掉后面的空格
console.log(str.trimEnd())
console.log(str.trimRight())

console.log(str.trim())

console.log(String.prototype)
console.log(String.prototype.trimLeft.name === 'trimStart')
