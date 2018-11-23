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