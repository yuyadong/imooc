function loadImg(src) {
  let promise = new Promise(function (resolve, reject) {
    let img = document.createElement('img')
    img.onload = function () {
      resolve(img)
    }
    img.onerror = function () {
      reject('图片加载失败')
    }
    img.src = src
  })
  return promise
}