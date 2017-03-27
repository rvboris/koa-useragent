/**
* @author Luiz Freneda <lfreneda@gmail.com>
*/
const test = require('ava');
const UserAgent = require('../lib/useragent');

test('Arbitrary bot UA', (t) => {
  const source = 'sockbot/3.1.0-RC1 (Linux x86_64) (nodejs 5.10.1) (owner:fred user:george)';
  const userAgent = new UserAgent(source);

  t.true(!userAgent.isAuthoritative, 'Authoritative');
  t.true(!userAgent.isMobile, 'Mobile');
  t.true(!userAgent.isiPad, 'iPad');
  t.true(!userAgent.isiPod, 'iPod');
  t.true(!userAgent.isiPhone, 'iPhone');
  t.true(!userAgent.isAndroid, 'Android');
  t.true(!userAgent.isBlackberry, 'Blackberry');
  t.true(!userAgent.isOpera, 'Opera');
  t.true(!userAgent.isIE, 'IE');
  t.true(!userAgent.isSafari, 'Safari');
  t.true(!userAgent.isFirefox, 'Firefox');
  t.true(!userAgent.isWebkit, 'Webkit');
  t.true(!userAgent.isChrome, 'Chrome');
  t.true(!userAgent.isKonqueror, 'Konqueror');
  t.true(!userAgent.isOmniWeb, 'OmniWeb');
  t.true(!userAgent.isSeaMonkey, 'SeaMonkey');
  t.true(!userAgent.isFlock, 'Flock');
  t.true(!userAgent.isAmaya, 'Amaya');
  t.true(!userAgent.isEpiphany, 'Epiphany');
  t.true(userAgent.isDesktop, 'Desktop');
  t.true(!userAgent.isWindows, 'Windows');
  t.true(userAgent.isLinux, 'Linux');
  t.true(!userAgent.isMac, 'Mac');
  t.true(!userAgent.isBada, 'Bada');
  t.true(!userAgent.isSamsung, 'Samsung');
  t.true(!userAgent.isRaspberry, 'Raspberry');
  t.true(!userAgent.isAndroidTablet, 'AndroidTablet');
  t.true(userAgent.isBot, 'Bot');
  t.is(userAgent.browser, 'sockbot');
  t.is(userAgent.version, '3.1.0-RC1');
});

test('Baiduspider Bot', (t) => {
  const source = 'Mozilla/5.0 (compatible; Baiduspider/2.0; +http://www.baidu.com/search/spider.html)';
  const userAgent = new UserAgent(source);

  t.true(userAgent.isAuthoritative, 'Authoritative');
  t.true(!userAgent.isMobile, 'Mobile');
  t.true(!userAgent.isiPad, 'iPad');
  t.true(!userAgent.isiPod, 'iPod');
  t.true(!userAgent.isiPhone, 'iPhone');
  t.true(!userAgent.isAndroid, 'Android');
  t.true(!userAgent.isBlackberry, 'Blackberry');
  t.true(!userAgent.isOpera, 'Opera');
  t.true(!userAgent.isIE, 'IE');
  t.true(!userAgent.isSafari, 'Safari');
  t.true(!userAgent.isFirefox, 'Firefox');
  t.true(!userAgent.isWebkit, 'Webkit');
  t.true(!userAgent.isChrome, 'Chrome');
  t.true(!userAgent.isKonqueror, 'Konqueror');
  t.true(!userAgent.isOmniWeb, 'OmniWeb');
  t.true(!userAgent.isSeaMonkey, 'SeaMonkey');
  t.true(!userAgent.isFlock, 'Flock');
  t.true(!userAgent.isAmaya, 'Amaya');
  t.true(!userAgent.isEpiphany, 'Epiphany');
  t.true(!userAgent.isDesktop, 'Desktop');
  t.true(!userAgent.isWindows, 'Windows');
  t.true(!userAgent.isLinux, 'Linux');
  t.true(!userAgent.isMac, 'Mac');
  t.true(!userAgent.isBada, 'Bada');
  t.true(!userAgent.isSamsung, 'Samsung');
  t.true(!userAgent.isRaspberry, 'Raspberry');
  t.true(!userAgent.isAndroidTablet, 'AndroidTablet');
  t.is(userAgent.isBot, 'baiduspider', 'Bot');
});

test('Apple Bot', (t) => {
  const source = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_1) AppleWebKit/600.2.5 (KHTML, like Gecko) Version/8.0.2 Safari/600.2.5 (Applebot/0.1)';
  const userAgent = new UserAgent(source);

  t.true(userAgent.isAuthoritative, 'Authoritative');
  t.true(!userAgent.isMobile, 'Mobile');
  t.true(!userAgent.isiPad, 'iPad');
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
  t.true(!userAgent.isOmniWeb, 'OmniWeb');
  t.true(!userAgent.isSeaMonkey, 'SeaMonkey');
  t.true(!userAgent.isFlock, 'Flock');
  t.true(!userAgent.isAmaya, 'Amaya');
  t.true(!userAgent.isEpiphany, 'Epiphany');
  t.true(userAgent.isDesktop, 'Desktop');
  t.true(!userAgent.isWindows, 'Windows');
  t.true(!userAgent.isLinux, 'Linux');
  t.true(userAgent.isMac, 'Mac');
  t.true(!userAgent.isBada, 'Bada');
  t.true(!userAgent.isSamsung, 'Samsung');
  t.true(!userAgent.isRaspberry, 'Raspberry');
  t.true(!userAgent.isAndroidTablet, 'AndroidTablet');
  t.is(userAgent.isBot, 'applebot', 'Bot');
});

test('Pingdom Bot', (t) => {
  const source = 'Pingdom.com_bot_version_1.4_(http://www.pingdom.com/)';
  const userAgent = new UserAgent(source);

  t.true(userAgent.isAuthoritative, 'Authoritative');
  t.true(!userAgent.isMobile, 'Mobile');
  t.true(!userAgent.isiPad, 'iPad');
  t.true(!userAgent.isiPod, 'iPod');
  t.true(!userAgent.isiPhone, 'iPhone');
  t.true(!userAgent.isAndroid, 'Android');
  t.true(!userAgent.isBlackberry, 'Blackberry');
  t.true(!userAgent.isOpera, 'Opera');
  t.true(!userAgent.isIE, 'IE');
  t.true(!userAgent.isSafari, 'Safari');
  t.true(!userAgent.isFirefox, 'Firefox');
  t.true(!userAgent.isWebkit, 'Webkit');
  t.true(!userAgent.isChrome, 'Chrome');
  t.true(!userAgent.isKonqueror, 'Konqueror');
  t.true(!userAgent.isOmniWeb, 'OmniWeb');
  t.true(!userAgent.isSeaMonkey, 'SeaMonkey');
  t.true(!userAgent.isFlock, 'Flock');
  t.true(!userAgent.isAmaya, 'Amaya');
  t.true(!userAgent.isEpiphany, 'Epiphany');
  t.true(!userAgent.isDesktop, 'Desktop');
  t.true(!userAgent.isWindows, 'Windows');
  t.true(!userAgent.isLinux, 'Linux');
  t.true(!userAgent.isMac, 'Mac');
  t.true(!userAgent.isBada, 'Bada');
  t.true(!userAgent.isSamsung, 'Samsung');
  t.true(!userAgent.isRaspberry, 'Raspberry');
  t.true(!userAgent.isAndroidTablet, 'AndroidTablet');
  t.is(userAgent.isBot, 'pingdom', 'Bot');
});
