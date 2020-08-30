// TODO Array.prototype.flat()
// flat() 方法会按照一个可指定的深度递归遍历数组，并将所有元素与遍历到的子数组中的元素合并为一个新数组返回。

// TODO Array.prototype.flatMap()
// flatMap() 方法首先使用映射函数映射每个元素，然后将结果压缩成一个新数组。从方法的名字上也可以看出来它包含两部分功能一个是 map，一个是 flat（深度为1）。
// const new_array = arr.flatMap(function callback(currentValue[, index[, array]]) {// 返回新数组的元素 }[, thisArg])

// const arr = [1, 2, 3, [4, 5, 6, [7, 8, 9, [10, 11, 12]]]]
// // console.log(arr.flat())
// // console.log(arr.flat().flat())
// // console.log(arr.flat().flat().flat())
// console.log(arr.flat(3))
// console.log(arr.flat(Infinity))
const arr = [1, 2, 3, 4, 5]
// const res = arr.map(x => x + 1)
// const res = arr.map(x => [x + 1])
// const res = arr.map(x => [x + 1]).flat()
const res = arr.flatMap(x => [x + 1])
console.log(res)
