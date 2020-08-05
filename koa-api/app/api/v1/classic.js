<<<<<<< HEAD
const Router = require('koa-router')
// const { ValidationInteger } = require('../../validators/validator')
const { Auth } = require('../../../middlewares/auth')
const { Flow } = require('../../models/flow')
const { Art } = require('../../models/art')
const { renderBody } = require('../../lib/helper')


const router = new Router({
  prefix: '/v1/classic'
})

router.get('/latest', new Auth().m, async (ctx) => {
  const flow = await Flow.findOne({
    order:[
      ['index', 'DESC']
    ]
  })
  const art = await Art.getData(flow.id, flow.type)
  art.setDataValue('index', flow.index)
  ctx.body = renderBody(200,art)
})

module.exports = router
=======
const Router = require('koa-router')
const { ValidationInteger } = require('../../validators/validator')
const { Auth } = require('../../../middlewares/auth')
const router = new Router({
  prefix: '/v1/classic'
})

router.get('/latest', new Auth(8).m, async (ctx) => {
    ctx.body = {
      code: 200,
      data: ctx.auth,
      msg: 'success'
    }
  })

router.post('/v1/:id/a/b', async (ctx,next) => {
  const params = ctx.params
  const query = ctx.request.query
  const header = ctx.request.header
  const body = ctx.request.body
  const v = await new ValidationInteger().validate(ctx)
  const id = v.get('path.id')
  ctx.body = {
    id: id,
    params,
    query,
    header,
    body
  }
})

module.exports = router
>>>>>>> one
