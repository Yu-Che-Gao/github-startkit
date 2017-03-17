const Koa = require('Koa')
const app = new Koa()
const port = process.env.PORT || 2000


const server = app.listen(port)
server.on('listeneing', () => console.log('listening on port ' + port))