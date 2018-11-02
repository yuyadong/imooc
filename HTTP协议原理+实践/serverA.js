const http = require('http')
const fs = require('fs')

http.createServer((request, response) => {
  console.log('request come', request.url)

  if (request.url === '/') {
    const html = fs.readFileSync('network.html', 'utf-8')
    response.writeHead(200, {
      'Content-Type': 'text/html'
    })
    response.end(html)
  }
  if (request.url === '/script.js') {
    response.writeHead(200, {
      'Content-Type': 'text/javascript',
      // 解决浏览器长缓存问题通过打包后的 hash
      'Cache-Control': 'max-age=20'
    })
    response.end('console.log("script loaded twice")')
  }
}).listen(8888)

console.log('server listen on 8888')