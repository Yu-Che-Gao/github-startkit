const Koa = require('koa')
const app = new Koa()
const koaLogger = require('koa-logger')

app.use(koaLogger())

app.use(async (ctx, next) => {
    if (ctx.request.path === '/a') ctx.body = 'I am a'
    else {
        console.log('I am back!')
        await next()
    }
})

app.use(async (ctx, next) => {
    if (ctx.request.path === '/b') ctx.body = 'I am b'
    else {
        console.log('I am back!')
        await next()
    }
})

app.use(async (ctx, next) => {
    if (ctx.request.path === '/c') ctx.body = 'I am c'
    else {
        console.log('I am back!')
        await next()
    }
})

app.on('error', (err, ctx) => ctx.throw(404, 'not found'))
app.listen(3000, () => console.log('listening on port 3000'))