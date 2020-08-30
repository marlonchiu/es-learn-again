// TODO 可选的Catch Binding
// 省略catch 绑定的参数和括号

const validJSON = json => {
  // try {
  //   JSON.parse(json)
  //   return true
  // } catch (err) {
  //   console.log(err)
  // }
  try {
    JSON.parse(json)
    return true
  } catch {
    return false
  }
}

// const json = '{"name":"imooc", "course": "es"}'
const json = '{name":"imooc", "course": "es"}'
console.log(validJSON(json))
