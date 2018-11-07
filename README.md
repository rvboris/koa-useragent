koa-useragent
=====


![CircleCI branch](https://img.shields.io/circleci/project/github/rvboris/koa-useragent/master.svg)
[![NPM version](https://badge.fury.io/js/koa-useragent.svg)](http://badge.fury.io/js/koa-useragent)

[![NPM](https://nodei.co/npm/koa-useragent.png?downloads=true)](https://nodei.co/npm/koa-useragent/)

**Fast Middleware exposing user-agent for [koa.js](http://koajs.com/) based on [express-useragent](https://github.com/biggora/express-useragent)**

----

### Koa2 support
**After version 1.0.0 it supports koa 2 and required node >= 7.6.0, if you need older version don't update**

### Installation

    $ npm install koa-useragent

### Usage overview

```js
const koa = require('koa'),
const app = koa.app()
const userAgent = require('koa-useragent');

app.use(userAgent);

app.use(async (ctx, next) {
    console.log(require('util').inspect(ctx.userAgent));
});

app.listen(3000);
```

Module provides details such as the following:

```js
{
  "isMobile":false,
  "isDesktop":true,
  "isBot":false,
  .....
  "Browser":"Chrome",
  "Version":"17.0.963.79",
  "OS":"Windows 7",
  "Platform":"Microsoft Windows",
  "source":"Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/535.11 (KHTML, like Gecko) Chrome/17.0.963.79 Safari/535.11"
}

```

### Author

Boris Ryabov (contact@bsryabov.ru).

Based on [express-useragent](https://github.com/biggora/express-useragent) by Aleksej Gordejev (aleksej@gordejev.lv).

### License

(The MIT License)

Copyright (c) 2018 Boris Ryabov <contact@bsryabov.ru>

Permission is hereby granted, free of charge, to any person obtaining
a copy of this software and associated documentation files (the
'Software'), to deal in the Software without restriction, including
without limitation the rights to use, copy, modify, merge, publish,
distribute, sublicense, and/or sell copies of the Software, and to
permit persons to whom the Software is furnished to do so, subject to
the following conditions:

The above copyright notice and this permission notice shall be
included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND,
EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF
MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT.
IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY
CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT,
TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE
SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.


### Resources

- Visit the [author website](http://www.bsryabov.ru).
- Report issues on the [github issues](https://github.com/rvboris/koa-rvboris/issues) page.
