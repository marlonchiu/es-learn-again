// Symbol 扩展
// TODO Symbol.prototype.description

const s = Symbol('imooc')
console.log(s)
s.description = 'es'
console.log(s)
console.log(s.description) // 只读属性
console.log(s === 'Symbol(imooc)') // false
console.log(s.toString() === 'Symbol(imooc)') // true

const s2 = Symbol()
console.log(s2.description) // undefined
