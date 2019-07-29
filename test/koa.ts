import test, {ExecutionContext} from 'ava';
import Koa, {Context} from 'koa';
const http = require('http');
const request = require('supertest');
import userAgent from '../index';

test('koa middleware', async (t: ExecutionContext) => {
    const app = new Koa();

    app.use(userAgent);

    t.plan(1);

    app.use(async (context: Context, next: () => void) => {
        t.true(!!context.userAgent);
        await next();
    });

    await request(http.createServer(app.callback())).get('/');
});
