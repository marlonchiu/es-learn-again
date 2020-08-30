/**
 * TODO Reflect
 *    将 Object 属于语言内部的方法放到Reflect上
 *    修改某些Object方法的返回结果，让其变得更合理
 *    让Object操作变成函数行为
 *    Reflect 对象的方法与 Proxy对象的方法一一对应
 */

// Object -> Reflect
let obj = {}
let newVal = 'mooc'
Reflect.defineProperty(obj, 'name', {
  get() {
    // console.log('get')
    return newVal
  },
  set(val) {
    // console.log('set')
    newVal = val
  }
})
// console.log(obj.name)
// obj.name = 'es'
// console.log(obj.name)

// Reflect.defineProperty() 返回一个布尔值

// 让 Object 操作变成函数行为
// console.log('assign' in Object) // true
// console.log(Reflect.has(Object, 'assign')) // true

// Reflect 对象的方法与 Proxy对象的方法一一对应
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
//       // return target[prop]
//       return Reflect.get(target, prop)
//     }
//   },
//   set(target, prop, val) {
//     if (prop.startsWith('_')) {
//       throw new Error('不可访问')
//     } else {
//       // target[prop] = val
//       Reflect.set(target, prop, val)
//       return true
//     }
//   },
//   // 拦截删除操作
//   deleteProperty(target, prop) {
//     if (prop.startsWith('_')) {
//       throw new Error('不可删除')
//     } else {
//       // delete target[prop]
//       delete Reflect.deleteProperty(target, prop)
//       return true
//     }
//   },
//   // 拦截循环遍历
//   ownKeys(target) {
//     // return Object.keys(target).filter(key => !key.startsWith('_'))
//     return Reflect.ownKeys(target).filter(key => !key.startsWith('_'))
//   }
// })

// console.log(user.name)
// try {
//   console.log(user._password)
// } catch (error) {
//   console.log(error.message)
// }
// // console.log(user._password)
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

let sum = (...args) => {
  return args.reduce((prev, cur) => prev + cur, 0)
}
// console.log(sum(1, 2, 3, 4))
sum = new Proxy(sum, {
  apply(target, ctx, args) {
    // return target(...args) * 2
    return Reflect.apply(target, target, [...args]) * 2
  }
})
console.log(sum(1, 2, 3))
console.log(sum.call(null, 1, 2, 3))
console.log(sum.apply(null, [1, 2, 3]))
