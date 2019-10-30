import UserAgent from './lib/useragent';

declare module 'koa' {
  interface Context {
    userAgent: UserAgent;
  }
}
