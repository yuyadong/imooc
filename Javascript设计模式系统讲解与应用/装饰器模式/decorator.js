function mixins(...list) {
  return function(target) {
    Object.assign(target.prototype, ...list)
  }
}

const Foo = {
  foo() {
    console.log('foo')
  }
}

@mixins(Foo)
class MyClass {

}

const m1 = new MyClass()
m1.foo()