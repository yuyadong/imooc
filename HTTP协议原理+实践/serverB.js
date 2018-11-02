const http = require('http')

http.createServer((request, response) => {
  console.log('request come', request.url)
  // 浏览器同域限制
  response.writeHead(200, {
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Headers': 'X-Test-Cors',
    'Access-Control-Allow-Methods': 'POST, PUT, DELECT',
    'Access-Control-Max-Age': '1000'
  })
  response.end('8887')
}).listen(8887)

console.log('server listen on 8887')