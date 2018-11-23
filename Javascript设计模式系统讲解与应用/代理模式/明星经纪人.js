// 冥想
let star = {
  name: '华晨宇',
  age: 25,
  phone: 18801371511
}

// 经纪人
let agent = new Proxy(star, {
  get: function (target, key) {
    if (key === 'phone') {
      // 返回经纪人电话
      return 13801371511
    }
    if (key === 'price') {
      // 明星不报价，经纪人报价
      return 120000
    }
    return target[key]
  },
  set: function (target, key, val) {
    if (key === 'customPrice') {
      if (val < 100000) {
        // 最低 10w
        throw new Error('价格太低')
      } else {
        target[key] = val
        return true
      }
    }
  }
})

console.log(agent.name)
console.log(agent.age)
console.log(agent.phone)
console.log(agent.price)
console.log(agent.customPrice = 10)