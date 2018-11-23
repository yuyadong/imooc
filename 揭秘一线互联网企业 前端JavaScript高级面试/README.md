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

##  原型
* jQuery
* Zepto
```javascript
// jQuery
(function (window) {
  var jQuery = function (selector) {
    return new jQuery.fn.init(selector)
  }

  jQuery.fn = jQuery.prototype = {
    constructor: 'jQuery',
    css: function (key, value) {
      console.log('css')
    },
    html: function(value) {
      console.log('html')
    }
  }

  var init = jQuery.fn.init = function (selector) {
    var slice = Array.prototype.slice
    var dom = slice.call(document.querySelectorAll(selector))

    var i, len = dom ? dom.length : 0
    for (i = 0; i < len; i++) this[i] = dom[i]
    this.length = len
    this.selector = selector || ''
  }

  init.prototype = jQuery.fn
  window.$ = jQuery
})(window)
```

```javascript
// Zepto
(function (window) {
  function Zepto(dom, selector) {
    var i, len = dom ? dom.length : 0
    for (i = 0; i < len; i++) this[i] = dom[i]
    this.length = len
    this.selector = selector || ''
  }
  
  var zepto = {}
  
  zepto.init = function (selector) {
    var slice = Array.prototype.slice
    var dom = slice.call(document.querySelectorAll(selector))
    return zepto.Z(dom, selector)
  }
  
  zepto.Z = function (dom, selector) {
    return new Zepto(dom, selector)
  }
  
  var $ = function (selector) {
    return zepto.init(selector)
  }

  window.$ = $

  $.fn = {
    css: function (key, value) {
      return this
    },
    html: function(value) {
      return this
    }
  }

  Zepto.prototype = $.fn
})(window)
```

##  单线程 异步
* 单线程 `一次只能执行一个任务，避免 DOM 渲染冲突`
  * 浏览器需要渲染 DOM
  * JS 可以修改 DOM
  * JS 执行的时候，浏览器 DOM 渲染会暂停
  * 两段 JS 不能同时执行
  * JS 本身是单线程，JS 执行与浏览器渲染也在一个单线程中
  * webworker 支持 JS 多线程，但是不能访问 DOM
* 异步 `单线程解决方案`
```javascript
// 单线程 - 1
console.log('start')
var i, sum = 0
for (i = 0; i < 1000000000; i++) {
  sum++
}
console.log(sum)
console.log('end')

// 单线程 - 2
console.log('start')
alert('Hello World')
console.log('end')
```