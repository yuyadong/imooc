const http = require('http')
const fs = require('fs')

http.createServer((request, response) => {
  console.log('request come', request.url)

  if (request.url === '/') {
    const html = fs.readFileSync('index.html', 'utf-8')
    response.writeHead(200, {
      'Content-Type': 'text/html',
      'Set-Cookie': ['id=123; max-age=2', 'abc=456; HttpOnly']
    })
    response.end(html)
  }
}).listen(8888)

console.log('server listen on 8888')