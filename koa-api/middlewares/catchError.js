const { ParameterException } = require('../core/http-exception')

const catchError = async function (ctx, next) {
  try {
    await next()
  } catch (error) {
    if (error instanceof ParameterException) {
      ctx.body = {
        msg: error.msg,
        errorCode: error.errorCode,
        requestMsg: `${ctx.method} ${ctx.path}`

      }
      ctx.status = error.code

    } else {
      if (global.config.env === 'dev') {
        throw error
      }
      ctx.body = {
        msg: error.msg || '服务器报错',
        errorCode: error.errorCode || 999,
        requestMsg: `${ctx.method} ${ctx.path}`

      }
      ctx.status = error.code || 500
    }
  }
}
module.exports = catchError