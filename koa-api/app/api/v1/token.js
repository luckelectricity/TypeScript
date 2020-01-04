const Router = require('koa-router')
const router = new Router({
  prefix: '/v1/token'
})
const { TokenValidation } = require('../../validators/validator')
const { LoginType } = require('../../lib/enum')
const { User } = require('../../models/user')

router.post('/', async (ctx) => {
  const v = await new TokenValidation().validate(ctx)
  switch (v.get('body.type')) {
    case LoginType.TYPEEMAIL:
      const user = await typeEmail(v.get('body.account'), v.get('body.pwd'))
      ctx.body = {
        data: user
      }
      break;
  
    default:
      throw new Error('type没有处理方式')
      break;
  }
})

async function typeEmail(email,pwd) {
 const user = await User.emailLogin(email, pwd)
 return user
}
module.exports = router