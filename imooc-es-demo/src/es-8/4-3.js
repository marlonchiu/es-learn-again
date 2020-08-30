// todo  Object.getOwnPropertyDescriptors()
/**
 * Object.getOwnPropertyDescriptors()
 * 这个描述符包括几个属性：
  value [属性的值]
  writable [属性的值是否可被改变]
  enumerable [属性的值是否可被枚举]
  configurable [描述符本身是否可被修改，属性是否可被删除]
 */
// const obj = {
//   name: 'imooc',
//   course: 'es'
// }

// const desc = Object.getOwnPropertyDescriptors(obj)
// console.log(desc)

const obj = {}
Reflect.defineProperty(obj, 'name', {
  value: 'zhangsan',
  writable: true, // 默认值false
  configurable: true, // 默认值false
  enumerable: false // 默认值false
})
Reflect.defineProperty(obj, 'age', {
  value: 34,
  writable: true, // 默认值false
  configurable: true, // 默认值false
  enumerable: true // 默认值false
})
// console.log(obj)
// obj.name = 'lisi'
// console.log(obj)
// delete obj.name
// console.log(obj)
for (let key in obj) {
  console.log(key)
}

console.log(Object.getOwnPropertyDescriptors(obj))
console.log(Object.getOwnPropertyDescriptor(obj, 'age'))
