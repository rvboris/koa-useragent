import { Context } from 'koa';
import UserAgent from './lib/useragent';

export default async (ctx: Context, next: () => Promise<void>): Promise<void> => {
  const { header } = ctx.request;
  const source = header['user-agent'];

  ctx.userAgent = new UserAgent(source);

  await next();
};
