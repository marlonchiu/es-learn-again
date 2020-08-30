// TODO 浅拷贝和深拷贝
// let target = {
//   a: {
//     b: {
//       c: 1,
//       m: 8
//     },
//     e: 4,
//     f: 5,
//     g: 6
//   }
// }
// let source = {
//   a: {
//     b: {
//       c: 3
//     },
//     e: 2,
//     f: 3
//   }
// }
// Object.assign(target, source)
// console.log(target)
// TODO Object.assign()对于引用数据类型属于浅拷贝

// let a = 5
// let b = a
// a = 6
// console.log(a, b) // 6 5

// let obj1 = {
//   name: 'xiecheng',
//   age: 34
// }
// let obj2 = obj1
// obj1.age = 18
// console.log(obj1) // {name: "xiecheng", age: 18}
// console.log(obj2) // {name: "xiecheng", age: 18}

// let obj = JSON.parse('{"a": "hello", "b": "world"}')
// console.log(obj)
// let str = JSON.stringify(obj)
// console.log(str)

// TODO JSON.stringify() JSON.parse() 实现的时深拷贝（但是值不能为函数和正则表达式）
// let str = JSON.stringify(obj1)
// let obj2 = JSON.parse(str)
// obj1.age = 18
// console.log(obj1) // {name: "xiecheng", age: 18}
// console.log(obj2) // {name: "xiecheng", age: 34}

// 检查类型
let checkType = data => {
  console.log(typeof data)
  console.log(Array.isArray(data)) // 布尔值
  console.log(Object.prototype.toString.call(data))
  return Object.prototype.toString.call(data).slice(8, -1)
}
console.log(checkType('')) // String
console.log(checkType([])) // Array
console.log(checkType({})) // Object

let deepClone = target => {
  let targetType = checkType(target)
  let result
  if (targetType === 'Object') {
    result = {}
  } else if (targetType === 'Array') {
    result = []
  } else {
    return target
  }

  for (let i in target) {
    let value = target[i]
    let valueType = checkType(value)
    if (valueType === 'Object' || valueType === 'Array') {
      result[i] = deepClone(value) // 递归
    } else {
      result[i] = value
    }
  }
  return result
}

function _deepClone(source) {
  let target
  if (typeof source === 'object') {
    target = Array.isArray(source) ? [] : {}
    for (let key in source) {
      if (source.hasOwnProperty(key)) {
        if (typeof source[key] !== 'object') {
          target[key] = source[key]
        } else {
          target[key] = _deepClone(source[key])
        }
      }
    }
  } else {
    target = source
  }
  return target
}

// let arr1 = [1, 2, { age: 18 }]
// // let arr2 = deepClone(arr1)
// let arr2 = _deepClone(arr1)
// arr2[2].age = 34
// console.log(arr1) // age:18
// console.log(arr2) // age:34

let obj1 = {
  name: 'xiecheng',
  hobby: ['coding', 'eating']
}
// let obj2 = deepClone(obj1)
let obj2 = _deepClone(obj1)
obj2.hobby[0] = 'sleeping'
console.log(obj1) // hobby: (2) ["coding", "eating"]
console.log(obj2) // hobby: (2) ["sleeping", "eating"]
