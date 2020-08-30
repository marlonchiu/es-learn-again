// BigInt
// 在 ES10 增加了新的原始数据类型：BigInt，表示一个任意精度的整数，可以表示超长数据，可以超出2的53次方

const max = 2 ** 53 // 9007199254740992
console.log(max) // es7 幂运算符
console.log(Number.MAX_SAFE_INTEGER) // 最大值-1

console.log(max === max + 1) // true

const bigInt = 9007199254740993n
console.log(bigInt)
console.log(typeof bigInt) // bigint

console.log(1n == 1) // true
console.log(1n === 1) // false

const bigInt2 = BigInt(9007199254740993n)
console.log(bigInt2)

const num = bigInt + bigInt2
console.log(num) // 18014398509481986n
console.log(num.toString()) // '18014398509481986'
