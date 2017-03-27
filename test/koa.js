const http = require('http');
const test = require('ava');
const request = require('supertest');
const Koa = require('koa');

const userAgent = require('../');

test('koa middleware', async (t) => {
  const app = new Koa();

  app.use(userAgent);

  t.plan(1);

  app.use(async (ctx, next) => {
    t.true(!!ctx.userAgent);
    await next();
  });

  await request(http.createServer(app.callback())).get('/');
});
