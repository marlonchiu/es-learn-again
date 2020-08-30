// TODO Object.fromEntries()
// 方法 Object.fromEntries() 把键值对列表转换为一个对象，这个方法是和 Object.entries() 相对的
// const obj = {
//   name: 'imooc',
//   course: 'es'
// }
// const entries = Object.entries(obj)
// console.log(entries)

// // ES10
// const fromEntries = Object.fromEntries(entries)
// console.log(fromEntries) // {name: "imooc", course: "es"}

// 案例1：Object 转换操作

// 案例2：Map 转 Object
const map = new Map()
map.set('name', 'imooc')
map.set('course', 'es')
console.log(map) // Map(2) {"name" => "imooc", "course" => "es"}
const obj = Object.fromEntries(map)
console.log(obj) // {name: "imooc", course: "es"}

// 案例2：过滤
// course表示所有课程，想请求课程分数大于80的课程组成的对象
const course = {
  math: 80,
  english: 85,
  chinese: 90
}
const res = Object.entries(course).filter(([key, value]) => value > 80)
console.log(res)
const filterCourse = Object.fromEntries(res)
console.log(filterCourse)
