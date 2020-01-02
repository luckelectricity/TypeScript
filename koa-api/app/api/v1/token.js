const Router = require('koa-router')
const router = new Router({
  prefix: '/v1/token'
})
const { TokenValidation } = require('../../validators/validator')

router.post('/', async (ctx) => {
  const v = await new TokenValidation().validate(ctx)
  ctx.body = {
    code:200,
    data: {
      acction: v.get("body.acction")
    }
  }
})

module.exports = router