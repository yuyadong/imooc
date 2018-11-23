function readonly(target, name, descriptor) {
  descriptor.writable = false;
  return descriptor;
}

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
}

const p = new Person()
p.name()