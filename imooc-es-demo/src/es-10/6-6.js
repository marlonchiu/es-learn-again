// todo JSON扩展
// JSON superset 什么是 JSON 超集？，简而言之就是让 ECMAScript 兼容所有JSON支持的文本。
// JSON.stringify() 增强能力

// JSON 超集 段分隔符\u2029    行分隔福\u2028
eval('var str="imooc";\u2029 function foo(){return str;}')
console.log(foo())

// 0xD800~0xDfff
// \uD83D\uDE0E  emoji 多字节的一个字符
console.log(JSON.stringify('\uD83D\uDE0E')) // emoji"😎"
console.log(JSON.stringify('\uD83D'))
