// TODO 面向过程 和 面向对象
// TODO ES5   类
function People(name, age) {
  console.log(this) // People {}
  // 实例属性
  this.name = name
  this.age = age
  People.count++
}
// 静态属性
People.count = 0
// 静态方法
People.getCount = function () {
  // console.log(this.age) // undefined
  console.log('当前共有' + People.count + '个人')
}
// 实例方法
People.prototype.showName = function () {
  console.log('我的名字是' + this.name)
}

let p1 = new People('xiecheng', 34)
console.log(p1)
p1.showName()

let p2 = new People('zhangsan', 24)
console.log(p2)
p2.showName()

console.log(People.count)
People.getCount()

// let str = new String('imooc')
// console.log(str) // String {"imooc"}

// let arr = new Array(1, 2, 3)
// console.log(arr)

// let obj = new Object()
// obj.name = 'xiecheng'
// console.log(obj)

// 静态方法
// console.log(Math.max(4, 5))
// console.log(Math.random())
