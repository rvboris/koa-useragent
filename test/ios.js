/**
 * Created by aleksejs.gordejevs on 2/7/2018.
 */

const test = require('ava');
const UserAgent = require('../lib/useragent');

test('iPad 2', (t) => {
  const source = 'Mozilla/5.0 (iPad; CPU OS 5_0 like Mac OS X) AppleWebKit/534.46'
        + ' (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3';
  const userAgent = new UserAgent(source);

  t.true(userAgent.isAuthoritative, 'Authoritative');
  t.true(userAgent.isMobile, 'Mobile');
  t.true(userAgent.isiPad, 'iPad');
  t.true(!userAgent.isiPod, 'iPod');
  t.true(!userAgent.isiPhone, 'iPhone');
  t.true(!userAgent.isAndroid, 'Android');
  t.true(!userAgent.isBlackberry, 'Blackberry');
  t.true(!userAgent.isOpera, 'Opera');
  t.true(!userAgent.isIE, 'IE');
  t.true(userAgent.isSafari, 'Safari');
  t.true(!userAgent.isFirefox, 'Firefox');
  t.true(!userAgent.isWebkit, 'Webkit');
  t.true(!userAgent.isChrome, 'Chrome');
  t.true(!userAgent.isKonqueror, 'Konqueror');
  t.true(!userAgent.isDesktop, 'Desktop');
  t.true(!userAgent.isWindows, 'Windows');
  t.true(!userAgent.isLinux, 'Linux');
  t.true(userAgent.isMac, 'Mac');
  t.true(!userAgent.isWindowsPhone, 'Windows Phone');
  t.is(userAgent.version, '5.1');
});

test('Chrome iOS', (t) => {
  const source = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_3 like Mac OS X) AppleWebKit/602.1.50 (KHTML, like Gecko)'
        + ' CriOS/56.0.2924.75 Mobile/14E5239e Safari/602.1';
  const userAgent = new UserAgent(source);

  t.true(userAgent.isAuthoritative, 'Authoritative');
  t.true(userAgent.isMobile, 'Mobile');
  t.true(!userAgent.isiPad, 'iPad');
  t.true(!userAgent.isiPod, 'iPod');
  t.true(userAgent.isiPhone, 'iPhone');
  t.true(!userAgent.isAndroid, 'Android');
  t.true(!userAgent.isBlackberry, 'Blackberry');
  t.true(!userAgent.isOpera, 'Opera');
  t.true(!userAgent.isIE, 'IE');
  t.true(!userAgent.isEdge, 'Edge');
  t.true(!userAgent.isSafari, 'Safari');
  t.true(!userAgent.isFirefox, 'Firefox');
  t.true(!userAgent.isWebkit, 'Webkit');
  t.true(userAgent.isChrome, 'Chrome');
  t.true(!userAgent.isKonqueror, 'Konqueror');
  t.true(!userAgent.isDesktop, 'Desktop');
  t.true(!userAgent.isWindows, 'Windows');
  t.true(!userAgent.isLinux, 'Linux');
  t.true(userAgent.isMac, 'Mac');
  t.true(!userAgent.isWindowsPhone, 'Windows Phone');
  t.true(!userAgent.isFacebook, 'Facebook');
  t.is(userAgent.version, '56.0.2924.75');
  t.true(!userAgent.isIECompatibilityMode);
});

// Source
// Chrome UA Spoofer
test('iPhone 4', (t) => {
  const source = 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_2 like Mac OS X; en-us) AppleWebKit/533.17.9'
        + ' (KHTML, like Gecko) Version/5.0.2 Mobile/8H7 Safari/6533.18.5';
  const userAgent = new UserAgent(source);

  t.true(userAgent.isMobile, 'Mobile');
  t.true(!userAgent.isiPad, 'iPad');
  t.true(!userAgent.isiPod, 'iPod');
  t.true(userAgent.isiPhone, 'iPhone');
  t.true(!userAgent.isAndroid, 'Android');
  t.true(!userAgent.isBlackberry, 'Blackberry');
  t.true(!userAgent.isOpera, 'Opera');
  t.true(!userAgent.isIE, 'IE');
  t.true(userAgent.isSafari, 'Safari');
  t.true(!userAgent.isFirefox, 'Firefox');
  t.true(!userAgent.isWebkit, 'Webkit');
  t.true(!userAgent.isChrome, 'Chrome');
  t.true(!userAgent.isKonqueror, 'Konqueror');
  t.true(!userAgent.isDesktop, 'Desktop');
  t.true(!userAgent.isWindows, 'Windows');
  t.true(!userAgent.isLinux, 'Linux');
  t.true(userAgent.isMac, 'Mac');
  t.true(!userAgent.isWindowsPhone, 'Windows Phone');
});

test('iOS AlamoFire', (t) => {
  const source = 'iOS-Example/1.0 (com.alamofire.iOS-Example; build:1; iOS 10.0.0) Alamofire/4.0.0';
  const userAgent = new UserAgent(source);

  t.true(userAgent.isMobile, 'Mobile');
  t.true(!userAgent.isiPad, 'iPad');
  t.true(!userAgent.isiPod, 'iPod');
  t.true(userAgent.isiPhone, 'iPhone');
  t.true(!userAgent.isAndroid, 'Android');
  t.true(!userAgent.isBlackberry, 'Blackberry');
  t.true(!userAgent.isOpera, 'Opera');
  t.true(!userAgent.isIE, 'IE');
  t.true(userAgent.isAlamoFire, 'AlamoFire');
  t.true(!userAgent.isSafari, 'Safari');
  t.true(!userAgent.isFirefox, 'Firefox');
  t.true(!userAgent.isWebkit, 'Webkit');
  t.true(!userAgent.isChrome, 'Chrome');
  t.true(!userAgent.isKonqueror, 'Konqueror');
  t.true(!userAgent.isDesktop, 'Desktop');
  t.true(!userAgent.isWindows, 'Windows');
  t.true(!userAgent.isLinux, 'Linux');
  t.true(!userAgent.isMac, 'Mac');
  t.true(!userAgent.isWindowsPhone, 'Windows Phone');
  t.is(userAgent.version, '4.0.0');
});

test('iPhone like OS X', (t) => {
  const source = 'Mozilla/5.0 (iPhone; CPU iPhone OS 10_0_1 like Mac OS X) '
        + 'AppleWebKit/602.1.50 (KHTML, like Gecko) Mobile/14A403';
  const userAgent = new UserAgent(source);

  t.true(userAgent.isMobile, 'Mobile');
  t.true(!userAgent.isiPad, 'iPad');
  t.true(!userAgent.isiPod, 'iPod');
  t.true(userAgent.isiPhone, 'iPhone');
  t.true(!userAgent.isAndroid, 'Android');
  t.true(!userAgent.isBlackberry, 'Blackberry');
  t.true(!userAgent.isOpera, 'Opera');
  t.true(!userAgent.isIE, 'IE');
  t.true(!userAgent.isSafari, 'Safari');
  t.true(!userAgent.isFirefox, 'Firefox');
  t.true(userAgent.isWebkit, 'Webkit');
  t.true(!userAgent.isChrome, 'Chrome');
  t.true(!userAgent.isKonqueror, 'Konqueror');
  t.true(!userAgent.isDesktop, 'Desktop');
  t.true(!userAgent.isWindows, 'Windows');
  t.true(!userAgent.isLinux, 'Linux');
  t.true(userAgent.isMac, 'Mac');
  t.true(!userAgent.isWindowsPhone, 'Windows Phone');
  t.is(userAgent.version, '602.1.50');
});
