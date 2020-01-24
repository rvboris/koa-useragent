import { Middleware, ParameterizedContext, Next } from 'koa';
import UserAgent from './lib/useragent';

export type UserAgentContext = {
  userAgent: UserAgent;
};

export const userAgent: Middleware = async (ctx: ParameterizedContext, next: Next): Promise<void> => {
  const { header } = ctx;
  const source = header['user-agent'];

  ctx.userAgent = new UserAgent(source);

  await next();
};

export default userAgent;
