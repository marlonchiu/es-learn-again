// Dynamic Import 按需导入
// Vue中也已使用Dynamic Import实现组件的动态导入

const oBtn = document.querySelector('#btn')
oBtn.addEventListener('click', () => {
  import('../es-6/ajax.js').then(mod => {
    console.log(mod)
    mod.default('static/a.json', res => {
      console.log(res)
    })
  })
})
