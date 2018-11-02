const http = require('http')
const fs = require('fs')

http.createServer((request, response) => {
  console.log('request come', request.url)

  const html = fs.readFileSync('index.html', 'utf-8')
  const img = fs.readFileSync('img.png')

  if (request.url === '/') {
    response.writeHead(200, {
      'Content-Type': 'text/html',
      'Connection': 'close'
    })
    response.end(html)
  } else {
    response.writeHead(200, {
      'Content-Type': 'image/png',
      'Connection': 'close'
    })
    response.end(img)
  }
}).listen(8888)

console.log('server listen on 8888')