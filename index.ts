import UserAgent from './lib/useragent'

export default async (ctx: any, next: () => Promise<any>) => {
    const {header} = ctx.request
    const source = header['user-agent']

    ctx.userAgent = new UserAgent(source)

    await next()
}
