var userAgent = new require('../');
var koa = new require('koa');
var request = new require('supertest');

exports['koa'] = function(test) {
  var app = koa();

  app.use(userAgent());

  app.use(function *(next) {
    test.ok(this.state.userAgent, Object);
    yield next;
  });

  request(app.listen()).get('/').end(function() {
    test.done();

    setTimeout(function() {
      process.exit();
    });
  });
}
