'use strict';

const Controller = require('egg').Controller;

class HomeController extends Controller {
  async index() {
    const { ctx } = this;
    ctx.body = 'hi, egg';
  }
  async page() {
    const { ctx } = this;
    ctx.body = '这个是home页面' + ctx.params.id;
  }
}

module.exports = HomeController;
