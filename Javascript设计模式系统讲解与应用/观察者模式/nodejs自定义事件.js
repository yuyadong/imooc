const EventEmitter = require('events').EventEmitter
const fs = require('fs')
const readline = require('readline')

const emitter1 = new EventEmitter()
// 监听 some 事件
emitter1.on('some', info => {
  console.log('fn1', info)
})
// 监听 some 事件
emitter1.on('some', info => {
  console.log('fn2', info)
})
// 触发 some 事件
emitter1.emit('some', 'xxxxxx')

class Dog extends EventEmitter {
  constructor(name) {
    super()
    this.name = name
  }
}

let simon = new Dog('simon')
simon.on('back', function () {
  console.log(this.name, ' barked')
})

simon.emit('back')

const readStream = fs.createReadStream('file1.txt')

let rl = readline.createInterface({
  input: fs.createReadStream('file1.txt')
})

let lineNum = 0
let length = 0

readStream.on('data', function (chunk) {
  let len = chunk.toString().length
  length += len
  console.log('len', len)
})
readStream.on('end', function () {
  console.log('length', length)
})

rl.on('line', function (line) {
  lineNum++
})
rl.on('close', function () {
  console.log('lineNum', lineNum)
})

