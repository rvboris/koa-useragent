var should = require('chai').should();
var request = require('supertest');
var userAgent = require('..');
var koa = require('koa');

describe('userAgent', function () {
    
    //test.ok\((.+).(.+), '(.+)'\);
    //this.req.userAgent.is$3.should.be.ok;

    //test.equal\(a.(.+), (.+)\);
    //this.req.userAgent.$1.should.to.be.equal($2);

    it('req.userAgent is defined', function (done) {
        var app = koa();

        app.use(userAgent());

        app.use(function *(next) {
            this.req.userAgent.should.to.be.an('object');
            yield next;
        });

        request(app.listen()).get('/').end(done)
    });

    it('Andriod Phone', function (done) {
        var app = koa();

        app.use(userAgent());

        app.use(function *(next) {
            this.req.userAgent.isMobile.should.be.ok;
            this.req.userAgent.isiPad.should.not.be.ok;
            this.req.userAgent.isiPod.should.not.be.ok;
            this.req.userAgent.isiPhone.should.not.be.ok;
            this.req.userAgent.isAndroid.should.be.ok;
            this.req.userAgent.isBlackberry.should.not.be.ok;
            this.req.userAgent.isOpera.should.not.be.ok;
            this.req.userAgent.isIE.should.not.be.ok;
            this.req.userAgent.isSafari.should.be.ok;
            this.req.userAgent.isFirefox.should.not.be.ok;
            this.req.userAgent.isWebkit.should.not.be.ok;
            this.req.userAgent.isChrome.should.not.be.ok;
            this.req.userAgent.isKonqueror.should.not.be.ok;
            this.req.userAgent.isOmniWeb.should.not.be.ok;
            this.req.userAgent.isSeaMonkey.should.not.be.ok;
            this.req.userAgent.isFlock.should.not.be.ok;
            this.req.userAgent.isAmaya.should.not.be.ok;
            this.req.userAgent.isEpiphany.should.not.be.ok;
            this.req.userAgent.isDesktop.should.not.be.ok;
            this.req.userAgent.isWindows.should.not.be.ok;
            this.req.userAgent.isLinux.should.be.ok;
            this.req.userAgent.isMac.should.not.be.ok;
            this.req.userAgent.isBada.should.not.be.ok;
            this.req.userAgent.isSamsung.should.not.be.ok;
            this.req.userAgent.isRaspberry.should.not.be.ok;
            this.req.userAgent.isBot.should.not.be.ok;
            this.req.userAgent.isAndroidTablet.should.not.be.ok;
            this.req.userAgent.Browser.should.to.be.equal('Safari');
            this.req.userAgent.OS.should.to.be.equal('Linux');
            this.req.userAgent.Platform.should.to.be.equal('Android');
            this.req.userAgent.Version.should.to.be.equal('4.0');
            Object.keys(this.req.userAgent.GeoIP).length.should.to.be.equal(0);

            yield next;
        });

        var agent = '';
        agent += 'Mozilla/5.0 (Linux; U; Android 4.1.2; en-us; ';
        agent += 'SAMSUNG-SGH-I777 Build/JZO54K) ';
        agent += 'AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Mobile Safari/534.30';

        request(app.listen()).get('/').set('User-Agent', agent).end(done)
    });

    it('Andriod Phone Tablet', function (done) {
        var app = koa();

        app.use(userAgent());

        app.use(function *(next) {
            this.req.userAgent.isMobile.should.be.ok;
            this.req.userAgent.isiPad.should.not.be.ok;
            this.req.userAgent.isiPod.should.not.be.ok;
            this.req.userAgent.isiPhone.should.not.be.ok;
            this.req.userAgent.isAndroid.should.be.ok;
            this.req.userAgent.isBlackberry.should.not.be.ok;
            this.req.userAgent.isOpera.should.not.be.ok;
            this.req.userAgent.isIE.should.not.be.ok;
            this.req.userAgent.isSafari.should.be.ok;
            this.req.userAgent.isFirefox.should.not.be.ok;
            this.req.userAgent.isWebkit.should.not.be.ok;
            this.req.userAgent.isChrome.should.not.be.ok;
            this.req.userAgent.isKonqueror.should.not.be.ok;
            this.req.userAgent.isOmniWeb.should.not.be.ok;
            this.req.userAgent.isSeaMonkey.should.not.be.ok;
            this.req.userAgent.isFlock.should.not.be.ok;
            this.req.userAgent.isAmaya.should.not.be.ok;
            this.req.userAgent.isEpiphany.should.not.be.ok;
            this.req.userAgent.isDesktop.should.not.be.ok;
            this.req.userAgent.isWindows.should.not.be.ok;
            this.req.userAgent.isLinux.should.be.ok;
            this.req.userAgent.isMac.should.not.be.ok;
            this.req.userAgent.isBada.should.not.be.ok;
            this.req.userAgent.isSamsung.should.not.be.ok;
            this.req.userAgent.isRaspberry.should.not.be.ok;
            this.req.userAgent.isBot.should.not.be.ok;
            this.req.userAgent.isAndroidTablet.should.be.ok;
            this.req.userAgent.Browser.should.to.be.equal('Safari');
            this.req.userAgent.OS.should.to.be.equal('Linux');
            this.req.userAgent.Platform.should.to.be.equal('Android');
            this.req.userAgent.Version.should.to.be.equal('4.0');
            Object.keys(this.req.userAgent.GeoIP).length.should.to.be.equal(0);

            yield next;
        });

        var agent = '';
        agent += 'Mozilla/5.0 (Linux; U; Android 4.0.4; en-us; ';
        agent += 'SAMSUNG-SGH-I957 Build/IMM76D) ';
        agent += 'AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Safari/534.30';

        request(app.listen()).get('/').set('User-Agent', agent).end(done)
    });

    it('iPad 2', function (done) {
        var app = koa();

        app.use(userAgent());

        app.use(function *(next) {
            this.req.userAgent.isMobile.should.be.ok;
            this.req.userAgent.isiPad.should.be.ok;
            this.req.userAgent.isiPod.should.not.be.ok;
            this.req.userAgent.isiPhone.should.not.be.ok;
            this.req.userAgent.isAndroid.should.not.be.ok;
            this.req.userAgent.isBlackberry.should.not.be.ok;
            this.req.userAgent.isOpera.should.not.be.ok;
            this.req.userAgent.isIE.should.not.be.ok;
            this.req.userAgent.isSafari.should.be.ok;
            this.req.userAgent.isFirefox.should.not.be.ok;
            this.req.userAgent.isWebkit.should.not.be.ok;
            this.req.userAgent.isChrome.should.not.be.ok;
            this.req.userAgent.isKonqueror.should.not.be.ok;
            this.req.userAgent.isDesktop.should.not.be.ok;
            this.req.userAgent.isWindows.should.not.be.ok;
            this.req.userAgent.isLinux.should.not.be.ok;
            this.req.userAgent.isMac.should.be.ok;
            this.req.userAgent.isWindowsPhone.should.not.be.ok;
            this.req.userAgent.Version.should.to.be.equal('5.1');

            yield next;
        });

        var agent = '';
        agent += 'Mozilla/5.0 (iPad; CPU OS 5_0 like Mac OS X) AppleWebKit/534.46';
        agent += ' (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3';

        request(app.listen()).get('/').set('User-Agent', agent).end(done)
    });

    it('Linux Iceweasel', function (done) {
        var app = koa();

        app.use(userAgent());

        app.use(function *(next) {
            this.req.userAgent.isMobile.should.not.be.ok;
            this.req.userAgent.isiPad.should.not.be.ok;
            this.req.userAgent.isiPod.should.not.be.ok;
            this.req.userAgent.isiPhone.should.not.be.ok;
            this.req.userAgent.isAndroid.should.not.be.ok;
            this.req.userAgent.isBlackberry.should.not.be.ok;
            this.req.userAgent.isOpera.should.not.be.ok;
            this.req.userAgent.isIE.should.not.be.ok;
            this.req.userAgent.isSafari.should.not.be.ok;
            this.req.userAgent.isFirefox.should.be.ok;
            this.req.userAgent.isWebkit.should.not.be.ok;
            this.req.userAgent.isChrome.should.not.be.ok;
            this.req.userAgent.isKonqueror.should.not.be.ok;
            this.req.userAgent.isDesktop.should.be.ok;
            this.req.userAgent.isWindows.should.not.be.ok;
            this.req.userAgent.isLinux.should.be.ok;
            this.req.userAgent.isMac.should.not.be.ok;
            this.req.userAgent.isWindowsPhone.should.not.be.ok;
            this.req.userAgent.Version.should.to.be.equal('3.5.16');

            yield next;
        });

        var agent = '';
        agent += 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1.16)';
        agent += ' Gecko/20111108 Iceweasel/3.5.16 (like Firefox/3.5.16)';

        request(app.listen()).get('/').set('User-Agent', agent).end(done)
    });

    it('Linux 64 Chrome', function (done) {
        var app = koa();

        app.use(userAgent());

        app.use(function *(next) {
            this.req.userAgent.isMobile.should.not.be.ok;
            this.req.userAgent.isiPad.should.not.be.ok;
            this.req.userAgent.isiPod.should.not.be.ok;
            this.req.userAgent.isiPhone.should.not.be.ok;
            this.req.userAgent.isAndroid.should.not.be.ok;
            this.req.userAgent.isBlackberry.should.not.be.ok;
            this.req.userAgent.isOpera.should.not.be.ok;
            this.req.userAgent.isIE.should.not.be.ok;
            this.req.userAgent.isSafari.should.not.be.ok;
            this.req.userAgent.isFirefox.should.not.be.ok;
            this.req.userAgent.isWebkit.should.not.be.ok;
            this.req.userAgent.isChrome.should.be.ok;
            this.req.userAgent.isKonqueror.should.not.be.ok;
            this.req.userAgent.isDesktop.should.be.ok;
            this.req.userAgent.isWindows.should.not.be.ok;
            this.req.userAgent.isLinux.should.be.ok;
            this.req.userAgent.isLinux64.should.be.ok;
            this.req.userAgent.isMac.should.not.be.ok;
            this.req.userAgent.isWindowsPhone.should.not.be.ok;

            yield next;
        });

        var agent = 'User-Agent:Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.152 Safari/537.36';

        request(app.listen()).get('/').set('User-Agent', agent).end(done)
    });

    it('Linux Firefox 11', function (done) {
        var app = koa();

        app.use(userAgent());

        app.use(function *(next) {
            this.req.userAgent.isMobile.should.not.be.ok;
            this.req.userAgent.isiPad.should.not.be.ok;
            this.req.userAgent.isiPod.should.not.be.ok;
            this.req.userAgent.isiPhone.should.not.be.ok;
            this.req.userAgent.isAndroid.should.not.be.ok;
            this.req.userAgent.isBlackberry.should.not.be.ok;
            this.req.userAgent.isOpera.should.not.be.ok;
            this.req.userAgent.isIE.should.not.be.ok;
            this.req.userAgent.isSafari.should.not.be.ok;
            this.req.userAgent.isFirefox.should.be.ok;
            this.req.userAgent.isWebkit.should.not.be.ok;
            this.req.userAgent.isChrome.should.not.be.ok;
            this.req.userAgent.isKonqueror.should.not.be.ok;
            this.req.userAgent.isDesktop.should.be.ok;
            this.req.userAgent.isWindows.should.not.be.ok;
            this.req.userAgent.isLinux.should.be.ok;
            this.req.userAgent.isLinux64.should.not.be.ok;
            this.req.userAgent.isMac.should.not.be.ok;
            this.req.userAgent.isWindowsPhone.should.not.be.ok;
            this.req.userAgent.Version.should.to.be.equal('11.0');

            yield next;
        });

        var agent = 'Mozilla/5.0 (X11; Linux i686; rv:11.0) Gecko/20100101 Firefox/11.0';

        request(app.listen()).get('/').set('User-Agent', agent).end(done)
    });

    it('Linux Chrome 17', function (done) {
        var app = koa();

        app.use(userAgent());

        app.use(function *(next) {
            this.req.userAgent.isMobile.should.not.be.ok;
            this.req.userAgent.isiPad.should.not.be.ok;
            this.req.userAgent.isiPod.should.not.be.ok;
            this.req.userAgent.isiPhone.should.not.be.ok;
            this.req.userAgent.isAndroid.should.not.be.ok;
            this.req.userAgent.isBlackberry.should.not.be.ok;
            this.req.userAgent.isOpera.should.not.be.ok;
            this.req.userAgent.isIE.should.not.be.ok;
            this.req.userAgent.isSafari.should.not.be.ok;
            this.req.userAgent.isFirefox.should.not.be.ok;
            this.req.userAgent.isWebkit.should.not.be.ok;
            this.req.userAgent.isChrome.should.be.ok;
            this.req.userAgent.isKonqueror.should.not.be.ok;
            this.req.userAgent.isDesktop.should.be.ok;
            this.req.userAgent.isWindows.should.not.be.ok;
            this.req.userAgent.isLinux.should.be.ok;
            this.req.userAgent.isMac.should.not.be.ok;
            this.req.userAgent.isWindowsPhone.should.not.be.ok;
            this.req.userAgent.Version.should.to.be.equal('17.0.963.56');

            yield next;
        });

        var agent = '';
        agent += 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/535.11 (KHTML, like Gecko)'
        agent += ' Chrome/17.0.963.56 Safari/535.11';

        request(app.listen()).get('/').set('User-Agent', agent).end(done)
    });

    it('Linux Ephiphany 2.30', function (done) {
        var app = koa();

        app.use(userAgent());

        app.use(function *(next) {
            this.req.userAgent.isMobile.should.not.be.ok;
            this.req.userAgent.isiPad.should.not.be.ok;
            this.req.userAgent.isiPod.should.not.be.ok;
            this.req.userAgent.isiPhone.should.not.be.ok;
            this.req.userAgent.isAndroid.should.not.be.ok;
            this.req.userAgent.isBlackberry.should.not.be.ok;
            this.req.userAgent.isOpera.should.not.be.ok;
            this.req.userAgent.isIE.should.not.be.ok;
            this.req.userAgent.isSafari.should.not.be.ok;
            this.req.userAgent.isEpiphany.should.be.ok;
            this.req.userAgent.isFirefox.should.not.be.ok;
            this.req.userAgent.isWebkit.should.not.be.ok;
            this.req.userAgent.isChrome.should.not.be.ok;
            this.req.userAgent.isKonqueror.should.not.be.ok;
            this.req.userAgent.isDesktop.should.be.ok;
            this.req.userAgent.isWindows.should.not.be.ok;
            this.req.userAgent.isLinux.should.be.ok;
            this.req.userAgent.isMac.should.not.be.ok;
            this.req.userAgent.isWindowsPhone.should.not.be.ok;
            this.req.userAgent.Version.should.to.be.equal('2.30.6');

            yield next;
        });

        var agent = '';
        agent += 'Mozilla/5.0 (X11; U; Linux i686; en-us) AppleWebKit/531.2+ (KHTML, like Gecko)';
        agent += ' Version/5.0 Safari/531.2+ Debian/squeeze (2.30.6-1) Epiphany/2.30.6';

        request(app.listen()).get('/').set('User-Agent', agent).end(done)
    });

    it('Windows 8 Chrome 28', function (done) {
        var app = koa();

        app.use(userAgent());

        app.use(function *(next) {
            this.req.userAgent.isMobile.should.not.be.ok;
            this.req.userAgent.isiPad.should.not.be.ok;
            this.req.userAgent.isiPod.should.not.be.ok;
            this.req.userAgent.isiPhone.should.not.be.ok;
            this.req.userAgent.isAndroid.should.not.be.ok;
            this.req.userAgent.isBlackberry.should.not.be.ok;
            this.req.userAgent.isOpera.should.not.be.ok;
            this.req.userAgent.isIE.should.not.be.ok;
            this.req.userAgent.isSafari.should.not.be.ok;
            this.req.userAgent.isFirefox.should.not.be.ok;
            this.req.userAgent.isWebkit.should.not.be.ok;
            this.req.userAgent.isChrome.should.be.ok;
            this.req.userAgent.isKonqueror.should.not.be.ok;
            this.req.userAgent.isDesktop.should.be.ok;
            this.req.userAgent.isWindows.should.be.ok;
            this.req.userAgent.isLinux.should.not.be.ok;
            this.req.userAgent.isMac.should.not.be.ok;
            this.req.userAgent.isWindowsPhone.should.not.be.ok;
            this.req.userAgent.Version.should.to.be.equal('28.0.1500.95');
            this.req.userAgent.OS.should.to.be.equal('Windows 8');

            yield next;
        });

        var agent = 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.95 Safari/537.36';

        request(app.listen()).get('/').set('User-Agent', agent).end(done)
    });

    it('Windows 8.1 WinJs', function (done) {
        var app = koa();

        app.use(userAgent());

        app.use(function *(next) {
            this.req.userAgent.isMobile.should.not.be.ok;
            this.req.userAgent.isiPad.should.not.be.ok;
            this.req.userAgent.isiPod.should.not.be.ok;
            this.req.userAgent.isiPhone.should.not.be.ok;
            this.req.userAgent.isAndroid.should.not.be.ok;
            this.req.userAgent.isBlackberry.should.not.be.ok;
            this.req.userAgent.isOpera.should.not.be.ok;
            this.req.userAgent.isIE.should.not.be.ok;
            this.req.userAgent.isWinJs.should.be.ok;
            this.req.userAgent.isSafari.should.not.be.ok;
            this.req.userAgent.isFirefox.should.not.be.ok;
            this.req.userAgent.isWebkit.should.not.be.ok;
            this.req.userAgent.isChrome.should.not.be.ok;
            this.req.userAgent.isKonqueror.should.not.be.ok;
            this.req.userAgent.isDesktop.should.be.ok;
            this.req.userAgent.isWindows.should.be.ok;
            this.req.userAgent.isLinux.should.not.be.ok;
            this.req.userAgent.isMac.should.not.be.ok;
            this.req.userAgent.isWindowsPhone.should.not.be.ok;
            this.req.userAgent.Version.should.to.be.equal('2.0');
            this.req.userAgent.OS.should.to.be.equal('Windows 8.1');

            yield next;
        });

        var agent = 'Mozilla/5.0 (Windows NT 6.3; Win64; x64; Trident/7.0; MSAppHost/2.0; rv:11.0) like Gecko';

        request(app.listen()).get('/').set('User-Agent', agent).end(done)
    });

    it('Windows 7 Firefox 23', function (done) {
        var app = koa();

        app.use(userAgent());

        app.use(function *(next) {
            this.req.userAgent.isMobile.should.not.be.ok;
            this.req.userAgent.isiPad.should.not.be.ok;
            this.req.userAgent.isiPod.should.not.be.ok;
            this.req.userAgent.isiPhone.should.not.be.ok;
            this.req.userAgent.isAndroid.should.not.be.ok;
            this.req.userAgent.isBlackberry.should.not.be.ok;
            this.req.userAgent.isOpera.should.not.be.ok;
            this.req.userAgent.isIE.should.not.be.ok;
            this.req.userAgent.isSafari.should.not.be.ok;
            this.req.userAgent.isFirefox.should.be.ok;
            this.req.userAgent.isWebkit.should.not.be.ok;
            this.req.userAgent.isChrome.should.not.be.ok;
            this.req.userAgent.isKonqueror.should.not.be.ok;
            this.req.userAgent.isDesktop.should.be.ok;
            this.req.userAgent.isWindows.should.be.ok;
            this.req.userAgent.isLinux.should.not.be.ok;
            this.req.userAgent.isMac.should.not.be.ok;
            this.req.userAgent.isWindowsPhone.should.not.be.ok;
            this.req.userAgent.Version.should.to.be.equal('23.0');
            this.req.userAgent.OS.should.to.be.equal('Windows 7');

            yield next;
        });

        var agent = 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:23.0) Gecko/20100101 Firefox/23.0';

        request(app.listen()).get('/').set('User-Agent', agent).end(done)
    });

    it('Windows XP IE 5.5', function (done) {
        var app = koa();

        app.use(userAgent());

        app.use(function *(next) {
            this.req.userAgent.isMobile.should.not.be.ok;
            this.req.userAgent.isiPad.should.not.be.ok;
            this.req.userAgent.isiPod.should.not.be.ok;
            this.req.userAgent.isiPhone.should.not.be.ok;
            this.req.userAgent.isAndroid.should.not.be.ok;
            this.req.userAgent.isBlackberry.should.not.be.ok;
            this.req.userAgent.isOpera.should.not.be.ok;
            this.req.userAgent.isIE.should.be.ok;
            this.req.userAgent.isSafari.should.not.be.ok;
            this.req.userAgent.isFirefox.should.not.be.ok;
            this.req.userAgent.isWebkit.should.not.be.ok;
            this.req.userAgent.isChrome.should.not.be.ok;
            this.req.userAgent.isKonqueror.should.not.be.ok;
            this.req.userAgent.isDesktop.should.be.ok;
            this.req.userAgent.isWindows.should.be.ok;
            this.req.userAgent.isLinux.should.not.be.ok;
            this.req.userAgent.isMac.should.not.be.ok;
            this.req.userAgent.isWindowsPhone.should.not.be.ok;
            this.req.userAgent.Version.should.to.be.equal('5.5');

            yield next;
        });

        var agent = 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.1)';

        request(app.listen()).get('/').set('User-Agent', agent).end(done)
    });

    it('Windows XP IE 6.0', function (done) {
        var app = koa();

        app.use(userAgent());

        app.use(function *(next) {
            this.req.userAgent.isMobile.should.not.be.ok;
            this.req.userAgent.isiPad.should.not.be.ok;
            this.req.userAgent.isiPod.should.not.be.ok;
            this.req.userAgent.isiPhone.should.not.be.ok;
            this.req.userAgent.isAndroid.should.not.be.ok;
            this.req.userAgent.isBlackberry.should.not.be.ok;
            this.req.userAgent.isOpera.should.not.be.ok;
            this.req.userAgent.isIE.should.be.ok;
            this.req.userAgent.isSafari.should.not.be.ok;
            this.req.userAgent.isFirefox.should.not.be.ok;
            this.req.userAgent.isWebkit.should.not.be.ok;
            this.req.userAgent.isChrome.should.not.be.ok;
            this.req.userAgent.isKonqueror.should.not.be.ok;
            this.req.userAgent.isDesktop.should.be.ok;
            this.req.userAgent.isWindows.should.be.ok;
            this.req.userAgent.isLinux.should.not.be.ok;
            this.req.userAgent.isMac.should.not.be.ok;
            this.req.userAgent.isWindowsPhone.should.not.be.ok;
            this.req.userAgent.Version.should.to.be.equal('6.0');

            yield next;
        });

        var agent = 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)';

        request(app.listen()).get('/').set('User-Agent', agent).end(done)
    });

    it('Windows XP IE 7.0', function (done) {
        var app = koa();

        app.use(userAgent());

        app.use(function *(next) {
            this.req.userAgent.isMobile.should.not.be.ok;
            this.req.userAgent.isiPad.should.not.be.ok;
            this.req.userAgent.isiPod.should.not.be.ok;
            this.req.userAgent.isiPhone.should.not.be.ok;
            this.req.userAgent.isAndroid.should.not.be.ok;
            this.req.userAgent.isBlackberry.should.not.be.ok;
            this.req.userAgent.isOpera.should.not.be.ok;
            this.req.userAgent.isIE.should.be.ok;
            this.req.userAgent.isSafari.should.not.be.ok;
            this.req.userAgent.isFirefox.should.not.be.ok;
            this.req.userAgent.isWebkit.should.not.be.ok;
            this.req.userAgent.isChrome.should.not.be.ok;
            this.req.userAgent.isKonqueror.should.not.be.ok;
            this.req.userAgent.isDesktop.should.be.ok;
            this.req.userAgent.isWindows.should.be.ok;
            this.req.userAgent.isLinux.should.not.be.ok;
            this.req.userAgent.isMac.should.not.be.ok;
            this.req.userAgent.isWindowsPhone.should.not.be.ok;
            this.req.userAgent.Version.should.to.be.equal('7.0');

            yield next;
        });

        var agent = 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)';

        request(app.listen()).get('/').set('User-Agent', agent).end(done)
    });

    it('Windows XP Opera', function (done) {
        var app = koa();

        app.use(userAgent());

        app.use(function *(next) {
            this.req.userAgent.isMobile.should.not.be.ok;
            this.req.userAgent.isiPad.should.not.be.ok;
            this.req.userAgent.isiPod.should.not.be.ok;
            this.req.userAgent.isiPhone.should.not.be.ok;
            this.req.userAgent.isAndroid.should.not.be.ok;
            this.req.userAgent.isBlackberry.should.not.be.ok;
            this.req.userAgent.isOpera.should.be.ok;
            this.req.userAgent.isIE.should.not.be.ok;
            this.req.userAgent.isSafari.should.not.be.ok;
            this.req.userAgent.isFirefox.should.not.be.ok;
            this.req.userAgent.isWebkit.should.not.be.ok;
            this.req.userAgent.isChrome.should.not.be.ok;
            this.req.userAgent.isKonqueror.should.not.be.ok;
            this.req.userAgent.isDesktop.should.be.ok;
            this.req.userAgent.isWindows.should.be.ok;
            this.req.userAgent.isLinux.should.not.be.ok;
            this.req.userAgent.isMac.should.not.be.ok;
            this.req.userAgent.isWindowsPhone.should.not.be.ok;
            this.req.userAgent.Version.should.to.be.equal('11.62');

            yield next;
        });

        var agent = 'Opera/9.80 (Windows NT 5.1; U; en) Presto/2.10.229 Version/11.62';

        request(app.listen()).get('/').set('User-Agent', agent).end(done)
    });

    it('Windows XP Safari', function (done) {
        var app = koa();

        app.use(userAgent());

        app.use(function *(next) {
            this.req.userAgent.isMobile.should.not.be.ok;
            this.req.userAgent.isiPad.should.not.be.ok;
            this.req.userAgent.isiPod.should.not.be.ok;
            this.req.userAgent.isiPhone.should.not.be.ok;
            this.req.userAgent.isAndroid.should.not.be.ok;
            this.req.userAgent.isBlackberry.should.not.be.ok;
            this.req.userAgent.isOpera.should.not.be.ok;
            this.req.userAgent.isIE.should.not.be.ok;
            this.req.userAgent.isSafari.should.be.ok;
            this.req.userAgent.isFirefox.should.not.be.ok;
            this.req.userAgent.isWebkit.should.not.be.ok;
            this.req.userAgent.isChrome.should.not.be.ok;
            this.req.userAgent.isKonqueror.should.not.be.ok;
            this.req.userAgent.isDesktop.should.be.ok;
            this.req.userAgent.isWindows.should.be.ok;
            this.req.userAgent.isLinux.should.not.be.ok;
            this.req.userAgent.isMac.should.not.be.ok;
            this.req.userAgent.isWindowsPhone.should.not.be.ok;
            this.req.userAgent.Version.should.be.equal('5.1.1');

            yield next;
        });

        var agent = '';
        agent += 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/534.51.22 (KHTML, like Gecko)';
        agent += ' Version/5.1.1 Safari/534.51.22';

        request(app.listen()).get('/').set('User-Agent', agent).end(done)
    });

    it('Windows XP Chrome', function (done) {
        var app = koa();

        app.use(userAgent());

        app.use(function *(next) {
            this.req.userAgent.isMobile.should.not.be.ok;
            this.req.userAgent.isiPad.should.not.be.ok;
            this.req.userAgent.isiPod.should.not.be.ok;
            this.req.userAgent.isiPhone.should.not.be.ok;
            this.req.userAgent.isAndroid.should.not.be.ok;
            this.req.userAgent.isBlackberry.should.not.be.ok;
            this.req.userAgent.isOpera.should.not.be.ok;
            this.req.userAgent.isIE.should.not.be.ok;
            this.req.userAgent.isSafari.should.not.be.ok;
            this.req.userAgent.isFirefox.should.not.be.ok;
            this.req.userAgent.isWebkit.should.not.be.ok;
            this.req.userAgent.isChrome.should.be.ok;
            this.req.userAgent.isKonqueror.should.not.be.ok;
            this.req.userAgent.isDesktop.should.be.ok;
            this.req.userAgent.isWindows.should.be.ok;
            this.req.userAgent.isLinux.should.not.be.ok;
            this.req.userAgent.isMac.should.not.be.ok;
            this.req.userAgent.isWindowsPhone.should.not.be.ok;
            this.req.userAgent.Version.should.be.equal('18.0.1025.162');

            yield next;
        });

        var agent = '';
        agent += 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.19';
        agent += ' (KHTML, like Gecko) Chrome/18.0.1025.162 Safari/535.19';

        request(app.listen()).get('/').set('User-Agent', agent).end(done)
    });

    it('Windows Phone 8', function (done) {
        var app = koa();

        app.use(userAgent());

        app.use(function *(next) {
            this.req.userAgent.isMobile.should.be.ok;
            this.req.userAgent.isiPad.should.not.be.ok;
            this.req.userAgent.isiPod.should.not.be.ok;
            this.req.userAgent.isiPhone.should.not.be.ok;
            this.req.userAgent.isAndroid.should.not.be.ok;
            this.req.userAgent.isBlackberry.should.not.be.ok;
            this.req.userAgent.isOpera.should.not.be.ok;
            this.req.userAgent.isIE.should.be.ok;
            this.req.userAgent.isSafari.should.not.be.ok;
            this.req.userAgent.isFirefox.should.not.be.ok;
            this.req.userAgent.isWebkit.should.not.be.ok;
            this.req.userAgent.isChrome.should.not.be.ok;
            this.req.userAgent.isKonqueror.should.not.be.ok;
            this.req.userAgent.isDesktop.should.not.be.ok;
            this.req.userAgent.isWindows.should.not.be.ok;
            this.req.userAgent.isWindowsPhone.should.be.ok;
            this.req.userAgent.isLinux.should.not.be.ok;
            this.req.userAgent.isMac.should.not.be.ok;
            this.req.userAgent.Version.should.be.equal('10.0');

            yield next;
        });

        var agent = '';
        agent += 'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; ';
        agent += 'Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 920)';

        request(app.listen()).get('/').set('User-Agent', agent).end(done)
    });

    it('OS X OmniWeb 622', function (done) {
        var app = koa();

        app.use(userAgent());

        app.use(function *(next) {
            this.req.userAgent.isMobile.should.not.be.ok;
            this.req.userAgent.isiPad.should.not.be.ok;
            this.req.userAgent.isiPod.should.not.be.ok;
            this.req.userAgent.isiPhone.should.not.be.ok;
            this.req.userAgent.isAndroid.should.not.be.ok;
            this.req.userAgent.isBlackberry.should.not.be.ok;
            this.req.userAgent.isOpera.should.not.be.ok;
            this.req.userAgent.isIE.should.not.be.ok;
            this.req.userAgent.isSafari.should.not.be.ok;
            this.req.userAgent.isOmniWeb.should.be.ok;
            this.req.userAgent.isFirefox.should.not.be.ok;
            this.req.userAgent.isWebkit.should.not.be.ok;
            this.req.userAgent.isChrome.should.not.be.ok;
            this.req.userAgent.isKonqueror.should.not.be.ok;
            this.req.userAgent.isDesktop.should.be.ok;
            this.req.userAgent.isWindows.should.not.be.ok;
            this.req.userAgent.isLinux.should.not.be.ok;
            this.req.userAgent.isMac.should.be.ok;
            this.req.userAgent.isWindowsPhone.should.not.be.ok;
            this.req.userAgent.Version.should.be.equal('622.8.0.112941');

            yield next;
        });

        var agent = '';
        agent += 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X; en-US) AppleWebKit/528.16';
        agent += '(KHTML, like Gecko, Safari/528.16) OmniWeb/v622.8.0.112941';

        request(app.listen()).get('/').set('User-Agent', agent).end(done)
    });

    it('OS X Safari 530', function (done) {
        var app = koa();

        app.use(userAgent());

        app.use(function *(next) {
            this.req.userAgent.isMobile.should.not.be.ok;
            this.req.userAgent.isiPad.should.not.be.ok;
            this.req.userAgent.isiPod.should.not.be.ok;
            this.req.userAgent.isiPhone.should.not.be.ok;
            this.req.userAgent.isAndroid.should.not.be.ok;
            this.req.userAgent.isBlackberry.should.not.be.ok;
            this.req.userAgent.isOpera.should.not.be.ok;
            this.req.userAgent.isIE.should.not.be.ok;
            this.req.userAgent.isSafari.should.be.ok;
            this.req.userAgent.isFirefox.should.not.be.ok;
            this.req.userAgent.isWebkit.should.not.be.ok;
            this.req.userAgent.isChrome.should.not.be.ok;
            this.req.userAgent.isKonqueror.should.not.be.ok;
            this.req.userAgent.isDesktop.should.be.ok;
            this.req.userAgent.isWindows.should.not.be.ok;
            this.req.userAgent.isLinux.should.not.be.ok;
            this.req.userAgent.isMac.should.be.ok;
            this.req.userAgent.isWindowsPhone.should.not.be.ok;
            this.req.userAgent.Version.should.be.equal('4.0.2');

            yield next;
        });

        var agent = '';
        agent += 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_8; en-us)';
        agent += ' AppleWebKit/530.19.2 (KHTML, like Gecko) Version/4.0.2 Safari/530.19';

        request(app.listen()).get('/').set('User-Agent', agent).end(done)
    });

    it('OS X Chromium', function (done) {
        var app = koa();

        app.use(userAgent());

        app.use(function *(next) {
            this.req.userAgent.isMobile.should.be.ok;
            this.req.userAgent.isiPad.should.be.ok;
            this.req.userAgent.isiPod.should.not.be.ok;
            this.req.userAgent.isiPhone.should.not.be.ok;
            this.req.userAgent.isAndroid.should.not.be.ok;
            this.req.userAgent.isBlackberry.should.not.be.ok;
            this.req.userAgent.isOpera.should.not.be.ok;
            this.req.userAgent.isIE.should.not.be.ok;
            this.req.userAgent.isSafari.should.not.be.ok;
            this.req.userAgent.isFirefox.should.not.be.ok;
            this.req.userAgent.isWebkit.should.not.be.ok;
            this.req.userAgent.isChrome.should.be.ok;
            this.req.userAgent.isKonqueror.should.not.be.ok;
            this.req.userAgent.isDesktop.should.not.be.ok;
            this.req.userAgent.isWindows.should.not.be.ok;
            this.req.userAgent.isLinux.should.not.be.ok;
            this.req.userAgent.isMac.should.be.ok;
            this.req.userAgent.isWindowsPhone.should.not.be.ok;
            this.req.userAgent.Version.should.be.equal('32.0.1700.20');
            this.req.userAgent.isIECompatibilityMode.should.not.be.ok;

            yield next;
        });

        var agent = 'Mozilla/5.0 (iPad; CPU OS 7_0_4 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) CriOS/32.0.1700.20 Mobile/11B554a Safari/9537.53';

        request(app.listen()).get('/').set('User-Agent', agent).end(done)
    });

    it('Android Samsung', function (done) {
        var app = koa();

        app.use(userAgent());

        app.use(function *(next) {
            this.req.userAgent.isMobile.should.be.ok;
            this.req.userAgent.isiPad.should.not.be.ok;
            this.req.userAgent.isiPod.should.not.be.ok;
            this.req.userAgent.isiPhone.should.not.be.ok;
            this.req.userAgent.isAndroid.should.be.ok;
            this.req.userAgent.isBlackberry.should.not.be.ok;
            this.req.userAgent.isOpera.should.not.be.ok;
            this.req.userAgent.isIE.should.not.be.ok;
            this.req.userAgent.isSafari.should.be.ok;
            this.req.userAgent.isFirefox.should.not.be.ok;
            this.req.userAgent.isWebkit.should.not.be.ok;
            this.req.userAgent.isChrome.should.not.be.ok;
            this.req.userAgent.isKonqueror.should.not.be.ok;
            this.req.userAgent.isDesktop.should.not.be.ok;
            this.req.userAgent.isWindows.should.not.be.ok;
            this.req.userAgent.isLinux.should.be.ok;
            this.req.userAgent.isMac.should.not.be.ok;
            this.req.userAgent.isWindowsPhone.should.not.be.ok;
            this.req.userAgent.Version.should.be.equal('4.0');

            yield next;
        });

        var agent = '';
        agent += 'Mozilla/5.0 (Linux; U; Android 2.2; en-ca; SGH-T959D Build/FROYO) AppleWebKit/533.1';
        agent += ' (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1';

        request(app.listen()).get('/').set('User-Agent', agent).end(done)
    });

    it('Android Xoom', function (done) {
        var app = koa();

        app.use(userAgent());

        app.use(function *(next) {
            this.req.userAgent.isMobile.should.be.ok;
            this.req.userAgent.isiPad.should.not.be.ok;
            this.req.userAgent.isiPod.should.not.be.ok;
            this.req.userAgent.isiPhone.should.not.be.ok;
            this.req.userAgent.isAndroid.should.be.ok;
            this.req.userAgent.isBlackberry.should.not.be.ok;
            this.req.userAgent.isOpera.should.not.be.ok;
            this.req.userAgent.isIE.should.not.be.ok;
            this.req.userAgent.isSafari.should.be.ok;
            this.req.userAgent.isFirefox.should.not.be.ok;
            this.req.userAgent.isWebkit.should.not.be.ok;
            this.req.userAgent.isChrome.should.not.be.ok;
            this.req.userAgent.isKonqueror.should.not.be.ok;
            this.req.userAgent.isDesktop.should.not.be.ok;
            this.req.userAgent.isWindows.should.not.be.ok;
            this.req.userAgent.isLinux.should.be.ok;
            this.req.userAgent.isMac.should.not.be.ok;
            this.req.userAgent.isWindowsPhone.should.not.be.ok;
            this.req.userAgent.Version.should.be.equal('4.0');

            yield next;
        });

        var agent = '';
        agent += 'Mozilla/5.0 (Linux; U; Android 3.0; en-us; Xoom Build/HRI39) AppleWebKit/534.13';
        agent += ' (KHTML, like Gecko) Version/4.0 Safari/534.13';

        request(app.listen()).get('/').set('User-Agent', agent).end(done)
    });

    it('iPhone 4', function (done) {
        var app = koa();

        app.use(userAgent());

        app.use(function *(next) {
            this.req.userAgent.isMobile.should.be.ok;
            this.req.userAgent.isiPad.should.not.be.ok;
            this.req.userAgent.isiPod.should.not.be.ok;
            this.req.userAgent.isiPhone.should.be.ok;
            this.req.userAgent.isAndroid.should.not.be.ok;
            this.req.userAgent.isBlackberry.should.not.be.ok;
            this.req.userAgent.isOpera.should.not.be.ok;
            this.req.userAgent.isIE.should.not.be.ok;
            this.req.userAgent.isSafari.should.be.ok;
            this.req.userAgent.isFirefox.should.not.be.ok;
            this.req.userAgent.isWebkit.should.not.be.ok;
            this.req.userAgent.isChrome.should.not.be.ok;
            this.req.userAgent.isKonqueror.should.not.be.ok;
            this.req.userAgent.isDesktop.should.not.be.ok;
            this.req.userAgent.isWindows.should.not.be.ok;
            this.req.userAgent.isLinux.should.not.be.ok;
            this.req.userAgent.isMac.should.be.ok;
            this.req.userAgent.isWindowsPhone.should.not.be.ok;
            this.req.userAgent.Version.should.be.equal('5.0.2');

            yield next;
        });

        var agent = '';
        agent += 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_2 like Mac OS X; en-us) AppleWebKit/533.17.9';
        agent += ' (KHTML, like Gecko) Version/5.0.2 Mobile/8H7 Safari/6533.18.5';

        request(app.listen()).get('/').set('User-Agent', agent).end(done)
    });

    it('Bada OS browser', function (done) {
        var app = koa();

        app.use(userAgent());

        app.use(function *(next) {
            this.req.userAgent.isMobile.should.be.ok;
            this.req.userAgent.isiPad.should.not.be.ok;
            this.req.userAgent.isiPod.should.not.be.ok;
            this.req.userAgent.isiPhone.should.not.be.ok;
            this.req.userAgent.isAndroid.should.not.be.ok;
            this.req.userAgent.isBlackberry.should.not.be.ok;
            this.req.userAgent.isOpera.should.not.be.ok;
            this.req.userAgent.isIE.should.not.be.ok;
            this.req.userAgent.isSafari.should.not.be.ok;
            this.req.userAgent.isFirefox.should.not.be.ok;
            this.req.userAgent.isWebkit.should.not.be.ok;
            this.req.userAgent.isChrome.should.not.be.ok;
            this.req.userAgent.isKonqueror.should.not.be.ok;
            this.req.userAgent.isDesktop.should.not.be.ok;
            this.req.userAgent.isWindows.should.not.be.ok;
            this.req.userAgent.isLinux.should.not.be.ok;
            this.req.userAgent.isMac.should.not.be.ok;
            this.req.userAgent.isWindowsPhone.should.not.be.ok;
            (typeof(this.req.userAgent.Version) === 'undefined').should.be.ok;

            yield next;
        });

        var agent = '';
        agent += 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S8500/S8500NEJE5; U; Bada/1.0; fr-fr) AppleWebKit/533.1';
        agent += ' (KHTML, like Gecko) Dolfin/2.0 Mobile WVGA SMM-MMS/1.2.0 NexPlayer/3.0 profile/MIDP-2.1 configuration/CLDC-1.1 OPN-B';

        request(app.listen()).get('/').set('User-Agent', agent).end(done)
    });

    it('America Online Browser', function (done) {
        var app = koa();

        app.use(userAgent());

        app.use(function *(next) {
            this.req.userAgent.isMobile.should.not.be.ok;
            this.req.userAgent.isiPad.should.not.be.ok;
            this.req.userAgent.isiPod.should.not.be.ok;
            this.req.userAgent.isiPhone.should.not.be.ok;
            this.req.userAgent.isAndroid.should.not.be.ok;
            this.req.userAgent.isBlackberry.should.not.be.ok;
            this.req.userAgent.isOpera.should.not.be.ok;
            this.req.userAgent.isIE.should.be.ok;
            this.req.userAgent.isSafari.should.not.be.ok;
            this.req.userAgent.isFirefox.should.not.be.ok;
            this.req.userAgent.isWebkit.should.not.be.ok;
            this.req.userAgent.isChrome.should.not.be.ok;
            this.req.userAgent.isKonqueror.should.not.be.ok;
            this.req.userAgent.isDesktop.should.be.ok;
            this.req.userAgent.isWindows.should.be.ok;
            this.req.userAgent.isLinux.should.not.be.ok;
            this.req.userAgent.isMac.should.not.be.ok;
            this.req.userAgent.isWindowsPhone.should.not.be.ok;
            this.req.userAgent.Version.should.be.equal('7.0');

            yield next;
        });

        var agent = '';
        agent += 'Mozilla/4.0 (compatible; MSIE 7.0;';
        agent += ' America Online Browser 1.1; Windows NT 5.1; (R1 1.5); .NET CLR 2.0.50727; InfoPath.1)';

        request(app.listen()).get('/').set('User-Agent', agent).end(done)
    });

    it('Windows 7 IE 10.6', function (done) {
        var app = koa();

        app.use(userAgent());

        app.use(function *(next) {
            this.req.userAgent.isMobile.should.not.be.ok;
            this.req.userAgent.isiPad.should.not.be.ok;
            this.req.userAgent.isiPod.should.not.be.ok;
            this.req.userAgent.isiPhone.should.not.be.ok;
            this.req.userAgent.isAndroid.should.not.be.ok;
            this.req.userAgent.isBlackberry.should.not.be.ok;
            this.req.userAgent.isOpera.should.not.be.ok;
            this.req.userAgent.isIE.should.be.ok;
            this.req.userAgent.isSafari.should.not.be.ok;
            this.req.userAgent.isFirefox.should.not.be.ok;
            this.req.userAgent.isWebkit.should.not.be.ok;
            this.req.userAgent.isChrome.should.not.be.ok;
            this.req.userAgent.isKonqueror.should.not.be.ok;
            this.req.userAgent.isDesktop.should.be.ok;
            this.req.userAgent.isWindows.should.be.ok;
            this.req.userAgent.isLinux.should.not.be.ok;
            this.req.userAgent.isMac.should.not.be.ok;
            this.req.userAgent.isWindowsPhone.should.not.be.ok;
            this.req.userAgent.Version.should.be.equal('10.6');

            yield next;
        });

        var agent = 'Mozilla/5.0 (compatible; MSIE 10.6; Windows NT 6.1; Trident/5.0; InfoPath.2; SLCC1; .NET CLR 2.0.50727) 3gpp-gba UNTRUSTED/1.0';

        request(app.listen()).get('/').set('User-Agent', agent).end(done)
    });

    it('Windows 7 IE 11.0', function (done) {
        var app = koa();

        app.use(userAgent());

        app.use(function *(next) {
            this.req.userAgent.isMobile.should.not.be.ok;
            this.req.userAgent.isiPad.should.not.be.ok;
            this.req.userAgent.isiPod.should.not.be.ok;
            this.req.userAgent.isiPhone.should.not.be.ok;
            this.req.userAgent.isAndroid.should.not.be.ok;
            this.req.userAgent.isBlackberry.should.not.be.ok;
            this.req.userAgent.isOpera.should.not.be.ok;
            this.req.userAgent.isIE.should.be.ok;
            this.req.userAgent.isSafari.should.not.be.ok;
            this.req.userAgent.isFirefox.should.not.be.ok;
            this.req.userAgent.isWebkit.should.not.be.ok;
            this.req.userAgent.isChrome.should.not.be.ok;
            this.req.userAgent.isKonqueror.should.not.be.ok;
            this.req.userAgent.isDesktop.should.be.ok;
            this.req.userAgent.isWindows.should.be.ok;
            this.req.userAgent.isLinux.should.not.be.ok;
            this.req.userAgent.isMac.should.not.be.ok;
            this.req.userAgent.isWindowsPhone.should.not.be.ok;
            this.req.userAgent.Version.should.be.equal('11.0');

            yield next;
        });

        var agent = 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko';

        request(app.listen()).get('/').set('User-Agent', agent).end(done)
    });

    it('Windows XP IE 8.0', function (done) {
        var app = koa();

        app.use(userAgent());

        app.use(function *(next) {
            this.req.userAgent.isMobile.should.not.be.ok;
            this.req.userAgent.isiPad.should.not.be.ok;
            this.req.userAgent.isiPod.should.not.be.ok;
            this.req.userAgent.isiPhone.should.not.be.ok;
            this.req.userAgent.isAndroid.should.not.be.ok;
            this.req.userAgent.isBlackberry.should.not.be.ok;
            this.req.userAgent.isOpera.should.not.be.ok;
            this.req.userAgent.isIE.should.be.ok;
            this.req.userAgent.isSafari.should.not.be.ok;
            this.req.userAgent.isFirefox.should.not.be.ok;
            this.req.userAgent.isWebkit.should.not.be.ok;
            this.req.userAgent.isChrome.should.not.be.ok;
            this.req.userAgent.isKonqueror.should.not.be.ok;
            this.req.userAgent.isDesktop.should.be.ok;
            this.req.userAgent.isWindows.should.be.ok;
            this.req.userAgent.isLinux.should.not.be.ok;
            this.req.userAgent.isMac.should.not.be.ok;
            this.req.userAgent.isWindowsPhone.should.not.be.ok;
            this.req.userAgent.Version.should.be.equal('8.0');

            yield next;
        });

        var agent = 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0)';

        request(app.listen()).get('/').set('User-Agent', agent).end(done)
    });

    it('Windows XP IE 8.0 - Compatibility mode', function (done) {
        var app = koa();

        app.use(userAgent());

        app.use(function *(next) {
            this.req.userAgent.isMobile.should.not.be.ok;
            this.req.userAgent.isiPad.should.not.be.ok;
            this.req.userAgent.isiPod.should.not.be.ok;
            this.req.userAgent.isiPhone.should.not.be.ok;
            this.req.userAgent.isAndroid.should.not.be.ok;
            this.req.userAgent.isBlackberry.should.not.be.ok;
            this.req.userAgent.isOpera.should.not.be.ok;
            this.req.userAgent.isIE.should.be.ok;
            this.req.userAgent.isSafari.should.not.be.ok;
            this.req.userAgent.isFirefox.should.not.be.ok;
            this.req.userAgent.isWebkit.should.not.be.ok;
            this.req.userAgent.isChrome.should.not.be.ok;
            this.req.userAgent.isKonqueror.should.not.be.ok;
            this.req.userAgent.isDesktop.should.be.ok;
            this.req.userAgent.isWindows.should.be.ok;
            this.req.userAgent.isLinux.should.not.be.ok;
            this.req.userAgent.isMac.should.not.be.ok;
            this.req.userAgent.Version.should.be.equal('8.0');
            this.req.userAgent.isWindowsPhone.should.not.be.ok;
            this.req.userAgent.isIECompatibilityMode.should.be.ok;

            yield next;
        });

        var agent = 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; Trident/4.0)';

        request(app.listen()).get('/').set('User-Agent', agent).end(done)
    });

    it('Windows XP IE 10.0', function (done) {
        var app = koa();

        app.use(userAgent());

        app.use(function *(next) {
            this.req.userAgent.isMobile.should.not.be.ok;
            this.req.userAgent.isiPad.should.not.be.ok;
            this.req.userAgent.isiPod.should.not.be.ok;
            this.req.userAgent.isiPhone.should.not.be.ok;
            this.req.userAgent.isAndroid.should.not.be.ok;
            this.req.userAgent.isBlackberry.should.not.be.ok;
            this.req.userAgent.isOpera.should.not.be.ok;
            this.req.userAgent.isIE.should.be.ok;
            this.req.userAgent.isSafari.should.not.be.ok;
            this.req.userAgent.isFirefox.should.not.be.ok;
            this.req.userAgent.isWebkit.should.not.be.ok;
            this.req.userAgent.isChrome.should.not.be.ok;
            this.req.userAgent.isKonqueror.should.not.be.ok;
            this.req.userAgent.isDesktop.should.be.ok;
            this.req.userAgent.isWindows.should.be.ok;
            this.req.userAgent.isLinux.should.not.be.ok;
            this.req.userAgent.isMac.should.not.be.ok;
            this.req.userAgent.isWindowsPhone.should.not.be.ok;
            this.req.userAgent.Version.should.be.equal('10.0');
            this.req.userAgent.isIECompatibilityMode.should.not.be.ok;

            yield next;
        });

        var agent = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2)';

        request(app.listen()).get('/').set('User-Agent', agent).end(done)
    });

    it('Windows XP IE 10.0 - Compatibility mode', function (done) {
        var app = koa();

        app.use(userAgent());

        app.use(function *(next) {
            this.req.userAgent.isMobile.should.not.be.ok;
            this.req.userAgent.isiPad.should.not.be.ok;
            this.req.userAgent.isiPod.should.not.be.ok;
            this.req.userAgent.isiPhone.should.not.be.ok;
            this.req.userAgent.isAndroid.should.not.be.ok;
            this.req.userAgent.isBlackberry.should.not.be.ok;
            this.req.userAgent.isOpera.should.not.be.ok;
            this.req.userAgent.isIE.should.be.ok;
            this.req.userAgent.isSafari.should.not.be.ok;
            this.req.userAgent.isFirefox.should.not.be.ok;
            this.req.userAgent.isWebkit.should.not.be.ok;
            this.req.userAgent.isChrome.should.not.be.ok;
            this.req.userAgent.isKonqueror.should.not.be.ok;
            this.req.userAgent.isDesktop.should.be.ok;
            this.req.userAgent.isWindows.should.be.ok;
            this.req.userAgent.isLinux.should.not.be.ok;
            this.req.userAgent.isMac.should.not.be.ok;
            this.req.userAgent.isWindowsPhone.should.not.be.ok;
            this.req.userAgent.Version.should.be.equal('10.0');
            this.req.userAgent.isIECompatibilityMode.should.be.ok;

            yield next;
        });

        var agent = 'Mozilla/5.0 (compatible; MSIE 7.0; Windows NT 6.2; Trident/6.0)';

        request(app.listen()).get('/').set('User-Agent', agent).end(done)
    });

    it('Windows XP IE 7.0 - Compatibility mode (invalid mode)', function (done) {
        var app = koa();

        app.use(userAgent());

        app.use(function *(next) {
            this.req.userAgent.isMobile.should.not.be.ok;
            this.req.userAgent.isiPad.should.not.be.ok;
            this.req.userAgent.isiPod.should.not.be.ok;
            this.req.userAgent.isiPhone.should.not.be.ok;
            this.req.userAgent.isAndroid.should.not.be.ok;
            this.req.userAgent.isBlackberry.should.not.be.ok;
            this.req.userAgent.isOpera.should.not.be.ok;
            this.req.userAgent.isIE.should.be.ok;
            this.req.userAgent.isSafari.should.not.be.ok;
            this.req.userAgent.isFirefox.should.not.be.ok;
            this.req.userAgent.isWebkit.should.not.be.ok;
            this.req.userAgent.isChrome.should.not.be.ok;
            this.req.userAgent.isKonqueror.should.not.be.ok;
            this.req.userAgent.isDesktop.should.be.ok;
            this.req.userAgent.isWindows.should.be.ok;
            this.req.userAgent.isLinux.should.not.be.ok;
            this.req.userAgent.isMac.should.not.be.ok;
            this.req.userAgent.isWindowsPhone.should.not.be.ok;
            this.req.userAgent.Version.should.be.equal('7.0');
            this.req.userAgent.isIECompatibilityMode.should.not.be.ok;

            yield next;
        });

        var agent = 'Mozilla/5.0 (compatible; MSIE 7.0; Windows NT 6.2; Trident/1.0)';

        request(app.listen()).get('/').set('User-Agent', agent).end(done)
    });

    it('Windows XP IE 9.0 - Compatibility mode', function (done) {
        var app = koa();

        app.use(userAgent());

        app.use(function *(next) {
            this.req.userAgent.isMobile.should.not.be.ok;
            this.req.userAgent.isiPad.should.not.be.ok;
            this.req.userAgent.isiPod.should.not.be.ok;
            this.req.userAgent.isiPhone.should.not.be.ok;
            this.req.userAgent.isAndroid.should.not.be.ok;
            this.req.userAgent.isBlackberry.should.not.be.ok;
            this.req.userAgent.isOpera.should.not.be.ok;
            this.req.userAgent.isIE.should.be.ok;
            this.req.userAgent.isSafari.should.not.be.ok;
            this.req.userAgent.isFirefox.should.not.be.ok;
            this.req.userAgent.isWebkit.should.not.be.ok;
            this.req.userAgent.isChrome.should.not.be.ok;
            this.req.userAgent.isKonqueror.should.not.be.ok;
            this.req.userAgent.isDesktop.should.be.ok;
            this.req.userAgent.isWindows.should.be.ok;
            this.req.userAgent.isLinux.should.not.be.ok;
            this.req.userAgent.isMac.should.not.be.ok;
            this.req.userAgent.isWindowsPhone.should.not.be.ok;
            this.req.userAgent.Version.should.be.equal('9.0');
            this.req.userAgent.isIECompatibilityMode.should.be.ok;

            yield next;
        });

        var agent = 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; .NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C)';

        request(app.listen()).get('/').set('User-Agent', agent).end(done)
    });
});