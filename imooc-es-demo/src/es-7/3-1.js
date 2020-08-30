// Array.prototype.includes(ele, fromIndex)
// ES7引入的Array.prototype.includes() 方法用来判断一个数组是否包含一个指定的值，根据情况，如果包含则返回 true，否则返回false。
// 要搜索的值和搜索的开始索引。第二个参数可选。从该索引处开始查找 searchElement。
// 如果为负值，则从后边开始找（-1 表示从倒数第一个往后开始找）

// const arr = ['es6', 'es7', 'es8']
// console.log(arr.includes('es7'))
// console.log(arr.includes('es9'))
// console.log(arr.includes('es7', 1))
// console.log(arr.includes('es7', 2))
// console.log(arr.includes('es7', -1))
// console.log(arr.includes('es7', -2))

// const arr = ['es6', 'es7', 'es8']
// console.log(arr.indexOf('es7')) // 1
// console.log(arr.indexOf('es7') > -1) // true

// 只能判断简单类型的数据，对于复杂类型的数据，比如对象类型的数组，二维数组，这些是无法判断的.
// const arr = ['es6', ['es7', 'es8'], 'es9']
// console.log(arr.includes(['es7', 'es8'])) // false
// console.log(arr.indexOf(['es7', 'es8'])) // -1

const arr = ['es6', 'es7', NaN, 'es8', 2]
console.log(arr.includes(NaN)) // true
console.log(arr.indexOf(NaN)) // -1

// 两者都是采用 === 的操作符来作比较的，不同之处在于：对于NaN的处理结果不同。
// 我们知道js中 NaN === NaN 的结果是false, indexOf()也是这样处理的，但是includes()不是这样的
console.log(arr.includes('2')) // false
console.log(arr.indexOf('2')) // -1

// 如果只想知道某个值是否在数组中存在，而并不关心它的索引位置，建议使用includes() 。
// 如果想获取一个值在数组中的位置，那么只能使用indexOf方法。
