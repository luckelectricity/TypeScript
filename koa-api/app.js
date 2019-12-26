const Koa = require('koa')
const Router = require('koa-router')

const app = new Koa()

const router = new Router()
// app.use(async (ctx, next) => {
//   if (ctx.path === '/classic/latest' && ctx.method === 'GET') {
//     ctx.body = {
//       code: 200,
//       data: {
//         "content": "人生不能像做菜，把所有的料准备好才下锅",
//         "fav_nums": 0,
//         "id": 1,
//         "image": "http://127.0.0.1:5000/images/movie.7.png",
//         "index": 7,
//         "like_status": 0,
//         "pubdate": "2018-06-22",
//         "title": "李安<<饮食男女>>",
//         "type": 100
//       }
//     }
//   }

// })
router.get('/classic/latest', (ctx) => {
  ctx.body = {
          code: 200,
          data: {
            "content": "人生不能像做菜，把所有的料准备好才下锅",
            "fav_nums": 0,
            "id": 1,
            "image": "http://127.0.0.1:5000/images/movie.7.png",
            "index": 7,
            "like_status": 0,
            "pubdate": "2018-06-22",
            "title": "李安<<饮食男女>>",
            "type": 100
          }
        }
})

app.use(router.routes()).use(router.allowedMethods)
app.listen(3000, () => {
  console.log('3000')
})