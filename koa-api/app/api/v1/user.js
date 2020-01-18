const Router = require('koa-router')
const {
  UserValidation,
  ValidationInteger
} = require('../../validators/validator')
const { User } = require('../../models/user')
const router = new Router({
  prefix: '/v1/user'
})
const { Auth } = require('../../../middlewares/auth')
const {renderBody} = require('../../lib/helper')


router.post('/register', async (ctx) => {
  const v = await new UserValidation().validate(ctx)
  const user = {
    email: v.get('body.email'),
    nickname: v.get('body.nickname'),
    password: v.get('body.password')
  }
  await User.create(user)
  ctx.body = renderBody(200, user, '注册成功')
})

// 分页查询所有用户,权限为admin的用户才可以
router.post('/',  new Auth(16).m, async ctx => {
  const v = await new ValidationInteger().validate(ctx)
  const page = v.get('body.page')
  const size = v.get('body.size')
  let user = await User.findAndCountAll({
    attributes: ['id', 'nickname', 'email'],
    limit: size,
    offset: (page - 1) * size
  })
  ctx.body = renderBody(200, {...user, page, size}, '查询成功')
})

module.exports = router
