const Koa = require('koa')
const axios = require('axios')
const app = new Koa()
app.use(async (ctx,next) => {
    console.log(1)
    const a = await next()
    console.log(a)
    console.log(2)
})
app.use(async (ctx,next) => {
    console.log(3)
    const res = await axios.get('http://7yue.pro')
    console.log(res)
    await next()
    console.log(4)
})
app.listen(3000, ()=>{
    console.log('3000')
})