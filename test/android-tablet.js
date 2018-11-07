/**
 * @author Sivaprakasam Boopathy <sivaprakasam.boopathy@gmail.com>
 *
 * http://android-developers.blogspot.com/2010/12/android-browser-user-agent-issues.html
 * Based on the above post to detect the Android tablet.
 * */

const test = require('ava');
const UserAgent = require('../lib/useragent');

test('Andriod Tablet', (t) => {
  let source = '';

  source += 'Mozilla/5.0 (Linux; U; Android 4.0.4; en-us; ';
  source += 'SAMSUNG-SGH-I957 Build/IMM76D) ';
  source += 'AppleWebKit/534.30 (KHTML, like Gecko) Version/4.0 Safari/534.30';

  const userAgent = new UserAgent(source);

  t.true(userAgent.isMobile, 'Mobile');
  t.true(!userAgent.isiPad, 'iPad');
  t.true(!userAgent.isiPod, 'iPod');
  t.true(!userAgent.isiPhone, 'iPhone');
  t.true(userAgent.isAndroid, 'Android');
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
  t.true(!userAgent.isDesktop, 'Desktop');
  t.true(!userAgent.isWindows, 'Windows');
  t.true(userAgent.isLinux, 'Linux');
  t.true(!userAgent.isMac, 'Mac');
  t.true(!userAgent.isBada, 'Bada');
  t.true(!userAgent.isSamsung, 'Samsung');
  t.true(!userAgent.isRaspberry, 'Raspberry');
  t.true(!userAgent.isBot, 'Bot');
  t.true(userAgent.isAndroidTablet, 'AndroidTablet');

  t.is(userAgent.browser, 'Safari');
  t.is(userAgent.os, 'Linux');
  t.is(userAgent.platform, 'Android');
  t.is(userAgent.version, '4.0');
});
