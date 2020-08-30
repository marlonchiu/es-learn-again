// TODO 空值合并运算符（Nullish coalescing Operator）
// 空值合并运算符（??）是一个逻辑运算符。当左侧操作数为 null 或 undefined 时，其返回右侧的操作数。否则返回左侧的操作数

// const b = 0 // 或者null undefined false
// const a = b || 5
// console.log(a)

// false 0  无效
const b = false // 或者null undefined false
const a = b ?? 5
console.log(a)
