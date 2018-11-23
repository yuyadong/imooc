import { readonly } from 'core-decorators'
import { deprecate } from 'core-decorators'

class Person {
  constructor() {
    this.first = 'A'
    this.last = 'B'
  }
  // 只读
  @readonly
  name() {
    return `${this.first} ${this.last}`
  }
  @deprecate
  facepalm() {
    console.log('facepalm')
  }

  @deprecate('We stop facepalming')
  facepalmHard() {}

  @deprecate('We stop facepalming', { url: 'http://www.baidu.com' })
  facepalmHarder() {}
}

const p = new Person()
console.log(p.name())
p.facepalm()
p.facepalmHard()
p.facepalmHarder()
p.name = function () {
  console.log('@readonly')
}

