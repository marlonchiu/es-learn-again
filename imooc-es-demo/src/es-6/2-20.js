// todo Proxy
// 可以自定义一些常用行为如查找、赋值、枚举、函数调用等。
// 通过 Proxy 这个名称也可以看出来它包含了“代理”的含义，只要有“代理”的诉求都可以考虑使用 Proxy 来实现

// ES5
// let obj = {}
// let newVal = 'mooc'
// Object.defineProperty(obj, 'name', {
//   get() {
//     console.log('get')
//     return newVal
//   },
//   set(val) {
//     console.log('set')
//     // this.name = val // 死循环
//     newVal = val
//   }
// })
// console.log(obj.name)
// obj.name = 'es'
// console.log(obj.name)

/**
 *
 * new Proxy(target, handler)
 *
 *    target	用 Proxy 包装的目标对象（可以是任何类型的对象，包括原生数组，函数，甚至另一个代理）	Y
 *    handler	一个对象，其属性是当执行一个操作时定义代理的行为的函数	Y
 */
// let obj = {}
// let handler = {}
// let p = new Proxy(obj, handler)
// p.name = 'imooc'
// console.log(obj)
// console.log(obj.name)
// for (let key in obj) {
//   console.log(key)
// }

// todo get
// let arr = [7, 8, 9]
// arr = new Proxy(arr, {
//   get(target, prop) {
//     // console.log(target, prop) // [7, 8, 9] "1"
//     return prop in target ? target[prop] : 'error'
//   }
// })
// console.log(arr[1])
// console.log(arr[10])

// let dict = {
//   hello: '你好',
//   world: '世界'
// }
// dict = new Proxy(dict, {
//   get(target, prop) {
//     return prop in target ? target[prop] : 'error'
//   }
// })
// console.log(dict['hello'])
// console.log(dict['world2'])

// todo set
// let arr = []
// arr = new Proxy(arr, {
//   set(target, prop, val) {
//     if (typeof val === 'number') {
//       target[prop] = val
//       return true
//     } else {
//       return false
//     }
//   }
// })
// arr.push(5)
// arr.push(6)
// console.log(arr[0], arr[1], arr.length)

// todo has
// let range = {
//   start: 1,
//   end: 5
// }
// range = new Proxy(range, {
//   has(target, prop) {
//     return prop >= target.start && prop <= target.end
//   }
// })
// console.log(2 in range) // true
// console.log(8 in range) // false

// todo ownKeys
// let obj = {
//   name: 'imooc',
//   [Symbol('es')]: 'es6'
// }
// console.log(Object.getOwnPropertyNames(obj))
// console.log(Object.getOwnPropertySymbols(obj))
// console.log(Object.keys(obj))
// for (let key in obj) {
//   console.log(key)
// }

// let userInfo = {
//   name: 'xieCheng',
//   age: 34,
//   _password: '123***' // 不想遍历出带_的属性
// }
// userInfo = new Proxy(userInfo, {
//   ownKeys(target) {
//     return Object.keys(target).filter(key => !key.startsWith('_'))
//   }
// })
// for (let key in userInfo) {
//   console.log(key)
// }
// console.log(Object.keys(userInfo))

// todo 对 _属性进行拦截 禁止增删改查
// let user = {
//   name: 'xiecheng',
//   age: 34,
//   _password: '***'
// }

// user = new Proxy(user, {
//   get(target, prop) {
//     if (prop.startsWith('_')) {
//       throw new Error('不可访问')
//     } else {
//       return target[prop]
//     }
//   },
//   set(target, prop, val) {
//     if (prop.startsWith('_')) {
//       throw new Error('不可访问')
//     } else {
//       target[prop] = val
//       return true
//     }
//   },
//   // 拦截删除操作
//   deleteProperty(target, prop) {
//     if (prop.startsWith('_')) {
//       throw new Error('不可删除')
//     } else {
//       delete target[prop]
//       return true
//     }
//   },
//   // 拦截循环遍历
//   ownKeys(target) {
//     return Object.keys(target).filter(key => !key.startsWith('_'))
//   }
// })

// console.log(user.name)
// console.log(user._password)
// user.age = 18
// console.log(user.age)

// try {
//   user._password = 'xxx'
// } catch (e) {
//   console.log(e.message)
// }

// try {
//   delete user._password
// } catch (e) {
//   console.log(e.message)
// }
// for (let key in user) {
//   console.log(key)
// }

// todo apply 拦截函数调用 和 call 、 apply的操作
let sum = (...args) => {
  return args.reduce((prev, cur) => prev + cur, 0)
}
// console.log(sum(1, 2, 3, 4))
sum = new Proxy(sum, {
  apply(target, ctx, args) {
    return target(...args) * 2
  }
})
console.log(sum(1, 2, 3))
console.log(sum.call(null, 1, 2, 3))
console.log(sum.apply(null, [1, 2, 3]))

// todo construct  用于拦截 new 返回一个对象
let User = class {
  constructor(name) {
    this.name = name
  }
}
User = new Proxy(User, {
  construct(target, args, newTarget) {
    console.log(target, args)
    console.log('construct')
    return new target(...args)
  }
})
console.log(new User('imooc'))
