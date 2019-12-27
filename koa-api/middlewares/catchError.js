const catchError = async function(ctx, next){
    try {
        await next()
    } catch (error) {
        ctx.body = {
          code: 500,
          msg: '服务器报错'
        }
    }
}
module.exports = catchError