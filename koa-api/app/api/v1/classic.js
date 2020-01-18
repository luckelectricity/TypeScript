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
