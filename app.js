const Koa = require('Koa')
const logger = require('koa-logger')
const bodyParser = require('koa-bodyparser')
const app = new Koa()
const port = process.env.PORT || 2000

app.use(logger())
app.use(bodyParser())
app.use(async (ctx, next) => {
    ctx.hello = 6
    console.log(1)
    await next()
    console.log(11)
})

app.use(async (ctx, next) => {
    ctx.hello++
    console.log(2)

    if (ctx.hello > 5) {
        ctx.throw('你找誰', 400)
        return
    } else {
        await next()
    }
})

app.use(async (ctx, next) => {
    ctx.body = ctx.hello
    console.log(3)
    await next()
    console.log(33)
})

// app.on('error', (err, ctx) => {
//     ctx.throw(err.message || 'Uknown Error', err.status || 500)
// })

const server = app.listen(port)
server.on('listening', () => console.log('listening on port ' + port))