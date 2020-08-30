// TODO 可选链 Optional chaining
// 可让我们在查询具有多层级的对象时，不再需要进行冗余的各种前置校验。

const user = {
  address: {
    street: 'xx街道',
    getNum() {
      return '80号'
    }
  }
}

const street = user && user.address && user.address.street
const num = user && user.address && user.address.getNum && user.address.getNum()
console.log(street, num)

const street2 = user?.address?.street
const num2 = user?.address?.getNum?.()
console.log(street2, num2)
