function mixins(...list) {
  return function (target) {
    console.log(...list)
  //   // Object.assign(target.prototype, ...list)
  }
}
const Foo = {
  foo() {
    console.log('foo')
  }
}
mixins(Foo)()