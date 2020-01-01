const Router = require('koa-router')
const { UserValidation } = require('../../validators/validator')
const { User } = require('../../models/user')
const router = new Router({
  prefix: '/v1/user'
})

router.post('/register', async (ctx) => {
  const v = await new UserValidation().validate(ctx)
  const user = {
    email: v.get('body.email'),
    nickname: v.get('body.nickname'),
    password: v.get('body.password')
  }
  User.create(user)
})

module.exports = router