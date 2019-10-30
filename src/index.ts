import { Context } from 'koa';
import UserAgent from './lib/useragent';

export const userAgent = async (ctx: Context, next: () => Promise<void>): Promise<void> => {
  const { header } = ctx.request;
  const source = header['user-agent'];

  ctx.userAgent = new UserAgent(source);

  await next();
};

declare module 'koa' {
  interface Context {
    userAgent: UserAgent;
  }
}
