# 揭秘一线互联网企业 前端JavaScript高级面试
##  ES6 语法
* 模块化
  * import
  * export
  * export default
```javascript
// util1.js
export default function fn() {
  console.log('fn')
}

import fn from 'util1'
```
```javascript
// util2.js
export function fn1() {
  console.log('fn1')
}

export function fn2() {
  console.log('fn1')
}

import { fn1, fn2 } from 'util1'
```
