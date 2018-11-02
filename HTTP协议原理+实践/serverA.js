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
    const etag = request.headers['if-none-match']
    if (etag === '777') {
      response.writeHead(304, {
        'Content-Type': 'text/javascript',
        'Cache-Control': 'max-age=200000000, no-store',
        'Last-Modified': '123',
        'Etag': '777'
      })
      response.end('123')
    } else {
      response.writeHead(200, {
        'Content-Type': 'text/javascript',
        'Cache-Control': 'max-age=200000000, no-store',
        'Last-Modified': '123',
        'Etag': '777'
      })
      response.end('console.log("script loaded twice")')
    }
  }
}).listen(8888)

console.log('server listen on 8888')