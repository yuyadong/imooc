// 自己封装的 ajax，使用方法如下
ajax({
  url: '/getData',
  type: 'POST',
  dataType: 'json',
  data: {
    id: '123'
  }
})
.done(function () {})

// 历史原因，代码中全是$.ajax({...})

var $ = {
  ajax: function (options) {
    return this.ajax(options)
  }
}
