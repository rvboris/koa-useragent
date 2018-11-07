/**
 * @author Raivo Laanemets <raivo@infdot.com>
 */

const test = require('ava');
const UserAgent = require('../lib/useragent');

test('iPad 2', (t) => {
  const s = 'Mozilla/5.0 (iPad; CPU OS 5_0 like Mac OS X) AppleWebKit/534.46'
    + ' (KHTML, like Gecko) Version/5.1 Mobile/9A334 Safari/7534.48.3';

  const a = new UserAgent(s);

  t.true(a.isAuthoritative, 'Authoritative');
  t.true(a.isMobile, 'Mobile');
  t.true(a.isiPad, 'iPad');
  t.true(!a.isiPod, 'iPod');
  t.true(!a.isiPhone, 'iPhone');
  t.true(!a.isAndroid, 'Android');
  t.true(!a.isBlackberry, 'Blackberry');
  t.true(!a.isOpera, 'Opera');
  t.true(!a.isIE, 'IE');
  t.true(a.isSafari, 'Safari');
  t.true(!a.isFirefox, 'Firefox');
  t.true(!a.isWebkit, 'Webkit');
  t.true(!a.isChrome, 'Chrome');
  t.true(!a.isKonqueror, 'Konqueror');
  t.true(!a.isDesktop, 'Desktop');
  t.true(!a.isWindows, 'Windows');
  t.true(!a.isLinux, 'Linux');
  t.true(a.isMac, 'Mac');
  t.true(!a.isWindowsPhone, 'Windows Phone');
  t.is(a.version, '5.1');
});

test('Linux Iceweasel', (t) => {
  const s = 'Mozilla/5.0 (X11; U; Linux i686; en-US; rv:1.9.1.16)'
    + ' Gecko/20111108 Iceweasel/3.5.16 (like Firefox/3.5.16)';

  const a = new UserAgent(s);

  t.true(a.isAuthoritative, 'Authoritative');
  t.true(!a.isMobile, 'Mobile');
  t.true(!a.isiPad, 'iPad');
  t.true(!a.isiPod, 'iPod');
  t.true(!a.isiPhone, 'iPhone');
  t.true(!a.isAndroid, 'Android');
  t.true(!a.isBlackberry, 'Blackberry');
  t.true(!a.isOpera, 'Opera');
  t.true(!a.isIE, 'IE');
  t.true(!a.isSafari, 'Safari');
  t.true(a.isFirefox, 'Firefox');
  t.true(!a.isWebkit, 'Webkit');
  t.true(!a.isChrome, 'Chrome');
  t.true(!a.isKonqueror, 'Konqueror');
  t.true(a.isDesktop, 'Desktop');
  t.true(!a.isWindows, 'Windows');
  t.true(a.isLinux, 'Linux');
  t.true(!a.isMac, 'Mac');
  t.true(!a.isWindowsPhone, 'Windows Phone');
  t.is(a.version, '3.5.16');
});

test('Linux 64 Chrome', (t) => {
  const s = 'User-Agent:Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/33.0.1750.152 Safari/537.36';

  const a = new UserAgent(s);

  t.true(a.isAuthoritative, 'Authoritative');
  t.true(!a.isMobile, 'Mobile');
  t.true(!a.isiPad, 'iPad');
  t.true(!a.isiPod, 'iPod');
  t.true(!a.isiPhone, 'iPhone');
  t.true(!a.isAndroid, 'Android');
  t.true(!a.isBlackberry, 'Blackberry');
  t.true(!a.isOpera, 'Opera');
  t.true(!a.isIE, 'IE');
  t.true(!a.isSafari, 'Safari');
  t.true(!a.isFirefox, 'Firefox');
  t.true(!a.isWebkit, 'Webkit');
  t.true(a.isChrome, 'Chrome');
  t.true(!a.isKonqueror, 'Konqueror');
  t.true(a.isDesktop, 'Desktop');
  t.true(!a.isWindows, 'Windows');
  t.true(a.isLinux, 'Linux');
  t.true(a.isLinux64, 'Linux 64');
  t.true(!a.isMac, 'Mac');
  t.true(!a.isWindowsPhone, 'Windows Phone');
});

test('Linux Firefox 11', (t) => {
  const s = 'Mozilla/5.0 (X11; Linux i686; rv:11.0) Gecko/20100101 Firefox/11.0';

  const a = new UserAgent(s);

  t.true(a.isAuthoritative, 'Authoritative');
  t.true(!a.isMobile, 'Mobile');
  t.true(!a.isiPad, 'iPad');
  t.true(!a.isiPod, 'iPod');
  t.true(!a.isiPhone, 'iPhone');
  t.true(!a.isAndroid, 'Android');
  t.true(!a.isBlackberry, 'Blackberry');
  t.true(!a.isOpera, 'Opera');
  t.true(!a.isIE, 'IE');
  t.true(!a.isSafari, 'Safari');
  t.true(a.isFirefox, 'Firefox');
  t.true(!a.isWebkit, 'Webkit');
  t.true(!a.isChrome, 'Chrome');
  t.true(!a.isKonqueror, 'Konqueror');
  t.true(a.isDesktop, 'Desktop');
  t.true(!a.isWindows, 'Windows');
  t.true(a.isLinux, 'Linux');
  t.true(!a.isLinux64, 'Linux 64');
  t.true(!a.isMac, 'Mac');
  t.true(!a.isWindowsPhone, 'Windows Phone');
  t.is(a.version, '11.0');
});

test('Linux Chrome 17', (t) => {
  const s = 'Mozilla/5.0 (X11; Linux i686) AppleWebKit/535.11 (KHTML, like Gecko)'
    + ' Chrome/17.0.963.56 Safari/535.11';

  const a = new UserAgent(s);

  t.true(a.isAuthoritative, 'Authoritative');
  t.true(!a.isMobile, 'Mobile');
  t.true(!a.isiPad, 'iPad');
  t.true(!a.isiPod, 'iPod');
  t.true(!a.isiPhone, 'iPhone');
  t.true(!a.isAndroid, 'Android');
  t.true(!a.isBlackberry, 'Blackberry');
  t.true(!a.isOpera, 'Opera');
  t.true(!a.isIE, 'IE');
  t.true(!a.isSafari, 'Safari');
  t.true(!a.isFirefox, 'Firefox');
  t.true(!a.isWebkit, 'Webkit');
  t.true(a.isChrome, 'Chrome');
  t.true(!a.isKonqueror, 'Konqueror');
  t.true(a.isDesktop, 'Desktop');
  t.true(!a.isWindows, 'Windows');
  t.true(a.isLinux, 'Linux');
  t.true(!a.isMac, 'Mac');
  t.true(!a.isWindowsPhone, 'Windows Phone');
  t.is(a.version, '17.0.963.56');
});

test('Linux Chromium 39', (t) => {
  const s = 'Mozilla/5.0 (X11; Linux x86_64) AppleWebKit/537.36 (KHTML, like Gecko)'
    + ' Ubuntu Chromium/39.0.2171.65 Chrome/39.0.2171.65 Safari/537.36';

  const a = new UserAgent(s);

  t.true(a.isAuthoritative, 'Authoritative');
  t.true(!a.isMobile, 'Mobile');
  t.true(!a.isiPad, 'iPad');
  t.true(!a.isiPod, 'iPod');
  t.true(!a.isiPhone, 'iPhone');
  t.true(!a.isAndroid, 'Android');
  t.true(!a.isBlackberry, 'Blackberry');
  t.true(!a.isOpera, 'Opera');
  t.true(!a.isIE, 'IE');
  t.true(!a.isSafari, 'Safari');
  t.true(!a.isFirefox, 'Firefox');
  t.true(!a.isWebkit, 'Webkit');
  t.true(a.isChrome, 'Chrome');
  t.true(!a.isKonqueror, 'Konqueror');
  t.true(a.isDesktop, 'Desktop');
  t.true(!a.isWindows, 'Windows');
  t.true(a.isLinux, 'Linux');
  t.true(!a.isMac, 'Mac');
  t.true(!a.isWindowsPhone, 'Windows Phone');
  t.is(a.version, '39.0.2171.65');
  t.true(!a.isIECompatibilityMode);
});

test('Linux Ephiphany 2.30', (t) => {
  const s = 'Mozilla/5.0 (X11; U; Linux i686; en-us) AppleWebKit/531.2+ (KHTML, like Gecko)'
    + ' Version/5.0 Safari/531.2+ Debian/squeeze (2.30.6-1) Epiphany/2.30.6';

  const a = new UserAgent(s);

  t.true(a.isAuthoritative, 'Authoritative');
  t.true(!a.isMobile, 'Mobile');
  t.true(!a.isiPad, 'iPad');
  t.true(!a.isiPod, 'iPod');
  t.true(!a.isiPhone, 'iPhone');
  t.true(!a.isAndroid, 'Android');
  t.true(!a.isBlackberry, 'Blackberry');
  t.true(!a.isOpera, 'Opera');
  t.true(!a.isIE, 'IE');
  t.true(!a.isSafari, 'Safari');
  t.true(a.isEpiphany, 'Epiphany');
  t.true(!a.isFirefox, 'Firefox');
  t.true(!a.isWebkit, 'Webkit');
  t.true(!a.isChrome, 'Chrome');
  t.true(!a.isKonqueror, 'Konqueror');
  t.true(a.isDesktop, 'Desktop');
  t.true(!a.isWindows, 'Windows');
  t.true(a.isLinux, 'Linux');
  t.true(!a.isMac, 'Mac');
  t.true(!a.isWindowsPhone, 'Windows Phone');
  t.is(a.version, '2.30.6');
});

test('Windows 8 Chrome 28', (t) => {
  const s = 'Mozilla/5.0 (Windows NT 6.2; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/28.0.1500.95 Safari/537.36';

  const a = new UserAgent(s);

  t.true(a.isAuthoritative, 'Authoritative');
  t.true(!a.isMobile, 'Mobile');
  t.true(!a.isiPad, 'iPad');
  t.true(!a.isiPod, 'iPod');
  t.true(!a.isiPhone, 'iPhone');
  t.true(!a.isAndroid, 'Android');
  t.true(!a.isBlackberry, 'Blackberry');
  t.true(!a.isOpera, 'Opera');
  t.true(!a.isIE, 'IE');
  t.true(!a.isSafari, 'Safari');
  t.true(!a.isFirefox, 'Firefox');
  t.true(!a.isWebkit, 'Webkit');
  t.true(a.isChrome, 'Chrome');
  t.true(!a.isKonqueror, 'Konqueror');
  t.true(a.isDesktop, 'Desktop');
  t.true(a.isWindows, 'Windows');
  t.true(!a.isLinux, 'Linux');
  t.true(!a.isMac, 'Mac');
  t.true(!a.isWindowsPhone, 'Windows Phone');
  t.is(a.version, '28.0.1500.95');
  t.is(a.os, 'Windows 8');
});

test('Windows 8.1 WinJs', (t) => {
  const s = 'Mozilla/5.0 (Windows NT 6.3; Win64; x64; Trident/7.0; MSAppHost/2.0; rv:11.0) like Gecko';

  const a = new UserAgent(s);

  t.true(a.isAuthoritative, 'Authoritative');
  t.true(!a.isMobile, 'Mobile');
  t.true(!a.isiPad, 'iPad');
  t.true(!a.isiPod, 'iPod');
  t.true(!a.isiPhone, 'iPhone');
  t.true(!a.isAndroid, 'Android');
  t.true(!a.isBlackberry, 'Blackberry');
  t.true(!a.isOpera, 'Opera');
  t.true(!a.isIE, 'IE');
  t.true(a.isWinJs, 'WinJs');
  t.true(!a.isSafari, 'Safari');
  t.true(!a.isFirefox, 'Firefox');
  t.true(!a.isWebkit, 'Webkit');
  t.true(!a.isChrome, 'Chrome');
  t.true(!a.isKonqueror, 'Konqueror');
  t.true(a.isDesktop, 'Desktop');
  t.true(a.isWindows, 'Windows');
  t.true(!a.isLinux, 'Linux');
  t.true(!a.isMac, 'Mac');
  t.true(!a.isWindowsPhone, 'Windows Phone');
  t.is(a.version, '2.0');
  t.is(a.os, 'Windows 8.1');
});

test('Windows 7 Firefox 23', (t) => {
  const s = 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:23.0) Gecko/20100101 Firefox/23.0';

  const a = new UserAgent(s);

  t.true(a.isAuthoritative, 'Authoritative');
  t.true(!a.isMobile, 'Mobile');
  t.true(!a.isiPad, 'iPad');
  t.true(!a.isiPod, 'iPod');
  t.true(!a.isiPhone, 'iPhone');
  t.true(!a.isAndroid, 'Android');
  t.true(!a.isBlackberry, 'Blackberry');
  t.true(!a.isOpera, 'Opera');
  t.true(!a.isIE, 'IE');
  t.true(!a.isSafari, 'Safari');
  t.true(a.isFirefox, 'Firefox');
  t.true(!a.isWebkit, 'Webkit');
  t.true(!a.isChrome, 'Chrome');
  t.true(!a.isKonqueror, 'Konqueror');
  t.true(a.isDesktop, 'Desktop');
  t.true(a.isWindows, 'Windows');
  t.true(!a.isLinux, 'Linux');
  t.true(!a.isMac, 'Mac');
  t.true(!a.isWindowsPhone, 'Windows Phone');
  t.is(a.version, '23.0');
  t.is(a.os, 'Windows 7');
});

test('Windows XP IE 5.5', (t) => {
  const s = 'Mozilla/4.0 (compatible; MSIE 5.5; Windows NT 5.1)';

  const a = new UserAgent(s);

  t.true(a.isAuthoritative, 'Authoritative');
  t.true(!a.isMobile, 'Mobile');
  t.true(!a.isiPad, 'iPad');
  t.true(!a.isiPod, 'iPod');
  t.true(!a.isiPhone, 'iPhone');
  t.true(!a.isAndroid, 'Android');
  t.true(!a.isBlackberry, 'Blackberry');
  t.true(!a.isOpera, 'Opera');
  t.true(a.isIE, 'IE');
  t.true(!a.isSafari, 'Safari');
  t.true(!a.isFirefox, 'Firefox');
  t.true(!a.isWebkit, 'Webkit');
  t.true(!a.isChrome, 'Chrome');
  t.true(!a.isKonqueror, 'Konqueror');
  t.true(a.isDesktop, 'Desktop');
  t.true(a.isWindows, 'Windows');
  t.true(!a.isLinux, 'Linux');
  t.true(!a.isMac, 'Mac');
  t.true(!a.isWindowsPhone, 'Windows Phone');
  t.is(a.version, '5.5');
});

test('Windows XP IE 6.0', (t) => {
  const s = 'Mozilla/4.0 (compatible; MSIE 6.0; Windows NT 5.1)';

  const a = new UserAgent(s);

  t.true(a.isAuthoritative, 'Authoritative');
  t.true(!a.isMobile, 'Mobile');
  t.true(!a.isiPad, 'iPad');
  t.true(!a.isiPod, 'iPod');
  t.true(!a.isiPhone, 'iPhone');
  t.true(!a.isAndroid, 'Android');
  t.true(!a.isBlackberry, 'Blackberry');
  t.true(!a.isOpera, 'Opera');
  t.true(a.isIE, 'IE');
  t.true(!a.isSafari, 'Safari');
  t.true(!a.isFirefox, 'Firefox');
  t.true(!a.isWebkit, 'Webkit');
  t.true(!a.isChrome, 'Chrome');
  t.true(!a.isKonqueror, 'Konqueror');
  t.true(a.isDesktop, 'Desktop');
  t.true(a.isWindows, 'Windows');
  t.true(!a.isLinux, 'Linux');
  t.true(!a.isMac, 'Mac');
  t.true(!a.isWindowsPhone, 'Windows Phone');
  t.is(a.version, '6.0');
});

test('Windows XP IE 7.0', (t) => {
  const s = 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 5.1)';

  const a = new UserAgent(s);

  t.true(a.isAuthoritative, 'Authoritative');
  t.true(!a.isMobile, 'Mobile');
  t.true(!a.isiPad, 'iPad');
  t.true(!a.isiPod, 'iPod');
  t.true(!a.isiPhone, 'iPhone');
  t.true(!a.isAndroid, 'Android');
  t.true(!a.isBlackberry, 'Blackberry');
  t.true(!a.isOpera, 'Opera');
  t.true(a.isIE, 'IE');
  t.true(!a.isSafari, 'Safari');
  t.true(!a.isFirefox, 'Firefox');
  t.true(!a.isWebkit, 'Webkit');
  t.true(!a.isChrome, 'Chrome');
  t.true(!a.isKonqueror, 'Konqueror');
  t.true(a.isDesktop, 'Desktop');
  t.true(a.isWindows, 'Windows');
  t.true(!a.isLinux, 'Linux');
  t.true(!a.isMac, 'Mac');
  t.true(!a.isWindowsPhone, 'Windows Phone');
  t.is(a.version, '7.0');
});

test('Windows XP Opera', (t) => {
  const s = 'Opera/9.80 (Windows NT 5.1; U; en) Presto/2.10.229 Version/11.62';

  const a = new UserAgent(s);

  t.true(a.isAuthoritative, 'Authoritative');
  t.true(!a.isMobile, 'Mobile');
  t.true(!a.isiPad, 'iPad');
  t.true(!a.isiPod, 'iPod');
  t.true(!a.isiPhone, 'iPhone');
  t.true(!a.isAndroid, 'Android');
  t.true(!a.isBlackberry, 'Blackberry');
  t.true(a.isOpera, 'Opera');
  t.true(!a.isIE, 'IE');
  t.true(!a.isSafari, 'Safari');
  t.true(!a.isFirefox, 'Firefox');
  t.true(!a.isWebkit, 'Webkit');
  t.true(!a.isChrome, 'Chrome');
  t.true(!a.isKonqueror, 'Konqueror');
  t.true(a.isDesktop, 'Desktop');
  t.true(a.isWindows, 'Windows');
  t.true(!a.isLinux, 'Linux');
  t.true(!a.isMac, 'Mac');
  t.true(!a.isWindowsPhone, 'Windows Phone');
  t.is(a.version, '11.62');
});

test('Windows XP Safari', (t) => {
  const s = 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/534.51.22 (KHTML, like Gecko)'
    + ' Version/5.1.1 Safari/534.51.22';

  const a = new UserAgent(s);

  t.true(a.isAuthoritative, 'Authoritative');
  t.true(!a.isMobile, 'Mobile');
  t.true(!a.isiPad, 'iPad');
  t.true(!a.isiPod, 'iPod');
  t.true(!a.isiPhone, 'iPhone');
  t.true(!a.isAndroid, 'Android');
  t.true(!a.isBlackberry, 'Blackberry');
  t.true(!a.isOpera, 'Opera');
  t.true(!a.isIE, 'IE');
  t.true(a.isSafari, 'Safari');
  t.true(!a.isFirefox, 'Firefox');
  t.true(!a.isWebkit, 'Webkit');
  t.true(!a.isChrome, 'Chrome');
  t.true(!a.isKonqueror, 'Konqueror');
  t.true(a.isDesktop, 'Desktop');
  t.true(a.isWindows, 'Windows');
  t.true(!a.isLinux, 'Linux');
  t.true(!a.isMac, 'Mac');
  t.true(!a.isWindowsPhone, 'Windows Phone');
  t.is(a.version, '5.1.1');
});

test('Windows XP Chrome', (t) => {
  const s = 'Mozilla/5.0 (Windows NT 5.1) AppleWebKit/535.19'
    + ' (KHTML, like Gecko) Chrome/18.0.1025.162 Safari/535.19';

  const a = new UserAgent(s);

  t.true(a.isAuthoritative, 'Authoritative');
  t.true(!a.isMobile, 'Mobile');
  t.true(!a.isiPad, 'iPad');
  t.true(!a.isiPod, 'iPod');
  t.true(!a.isiPhone, 'iPhone');
  t.true(!a.isAndroid, 'Android');
  t.true(!a.isBlackberry, 'Blackberry');
  t.true(!a.isOpera, 'Opera');
  t.true(!a.isIE, 'IE');
  t.true(!a.isSafari, 'Safari');
  t.true(!a.isFirefox, 'Firefox');
  t.true(!a.isWebkit, 'Webkit');
  t.true(a.isChrome, 'Chrome');
  t.true(!a.isKonqueror, 'Konqueror');
  t.true(a.isDesktop, 'Desktop');
  t.true(a.isWindows, 'Windows');
  t.true(!a.isLinux, 'Linux');
  t.true(!a.isMac, 'Mac');
  t.true(!a.isWindowsPhone, 'Windows Phone');
  t.is(a.version, '18.0.1025.162');
});

test('Windows Phone 8', (t) => {
  const s = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows Phone 8.0; '
    + 'Trident/6.0; IEMobile/10.0; ARM; Touch; NOKIA; Lumia 920)';

  const a = new UserAgent(s);

  t.true(a.isAuthoritative, 'Authoritative');
  t.true(a.isMobile, 'Mobile');
  t.true(!a.isiPad, 'iPad');
  t.true(!a.isiPod, 'iPod');
  t.true(!a.isiPhone, 'iPhone');
  t.true(!a.isAndroid, 'Android');
  t.true(!a.isBlackberry, 'Blackberry');
  t.true(!a.isOpera, 'Opera');
  t.true(a.isIE, 'IE');
  t.true(!a.isSafari, 'Safari');
  t.true(!a.isFirefox, 'Firefox');
  t.true(!a.isWebkit, 'Webkit');
  t.true(!a.isChrome, 'Chrome');
  t.true(!a.isKonqueror, 'Konqueror');
  t.true(!a.isDesktop, 'Desktop');
  t.true(!a.isWindows, 'Windows');
  t.true(a.isWindowsPhone, 'Windows Phone');
  t.true(!a.isLinux, 'Linux');
  t.true(!a.isMac, 'Mac');
  t.is(a.version, '10.0');
});

test('OS X OmniWeb 622', (t) => {
  const s = 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X; en-US) AppleWebKit/528.16'
    + '(KHTML, like Gecko, Safari/528.16) OmniWeb/v622.8.0.112941';

  const a = new UserAgent(s);

  t.true(a.isAuthoritative, 'Authoritative');
  t.true(!a.isMobile, 'Mobile');
  t.true(!a.isiPad, 'iPad');
  t.true(!a.isiPod, 'iPod');
  t.true(!a.isiPhone, 'iPhone');
  t.true(!a.isAndroid, 'Android');
  t.true(!a.isBlackberry, 'Blackberry');
  t.true(!a.isOpera, 'Opera');
  t.true(!a.isIE, 'IE');
  t.true(!a.isSafari, 'Safari');
  t.true(a.isOmniWeb, 'OmniWeb');
  t.true(!a.isFirefox, 'Firefox');
  t.true(!a.isWebkit, 'Webkit');
  t.true(!a.isChrome, 'Chrome');
  t.true(!a.isKonqueror, 'Konqueror');
  t.true(a.isDesktop, 'Desktop');
  t.true(!a.isWindows, 'Windows');
  t.true(!a.isLinux, 'Linux');
  t.true(a.isMac, 'Mac');
  t.true(!a.isWindowsPhone, 'Windows Phone');
  t.is(a.version, '622.8.0.112941');
});

test('OS X Safari 530', (t) => {
  const s = 'Mozilla/5.0 (Macintosh; U; Intel Mac OS X 10_5_8; en-us)'
    + ' AppleWebKit/530.19.2 (KHTML, like Gecko) Version/4.0.2 Safari/530.19';

  const a = new UserAgent(s);

  t.true(a.isAuthoritative, 'Authoritative');
  t.true(!a.isMobile, 'Mobile');
  t.true(!a.isiPad, 'iPad');
  t.true(!a.isiPod, 'iPod');
  t.true(!a.isiPhone, 'iPhone');
  t.true(!a.isAndroid, 'Android');
  t.true(!a.isBlackberry, 'Blackberry');
  t.true(!a.isOpera, 'Opera');
  t.true(!a.isIE, 'IE');
  t.true(a.isSafari, 'Safari');
  t.true(!a.isFirefox, 'Firefox');
  t.true(!a.isWebkit, 'Webkit');
  t.true(!a.isChrome, 'Chrome');
  t.true(!a.isKonqueror, 'Konqueror');
  t.true(a.isDesktop, 'Desktop');
  t.true(!a.isWindows, 'Windows');
  t.true(!a.isLinux, 'Linux');
  t.true(a.isMac, 'Mac');
  t.true(!a.isWindowsPhone, 'Windows Phone');
  t.is(a.version, '4.0.2');
});

test('OS X Chromium', (t) => {
  const s = 'Mozilla/5.0 (iPad; CPU OS 7_0_4 like Mac OS X) AppleWebKit/537.51.1 (KHTML, like Gecko) CriOS/32.0.1700.20 Mobile/11B554a Safari/9537.53';

  const a = new UserAgent(s);

  t.true(a.isAuthoritative, 'Authoritative');
  t.true(a.isMobile, 'Mobile');
  t.true(a.isiPad, 'iPad');
  t.true(!a.isiPod, 'iPod');
  t.true(!a.isiPhone, 'iPhone');
  t.true(!a.isAndroid, 'Android');
  t.true(!a.isBlackberry, 'Blackberry');
  t.true(!a.isOpera, 'Opera');
  t.true(!a.isIE, 'IE');
  t.true(!a.isSafari, 'Safari');
  t.true(!a.isFirefox, 'Firefox');
  t.true(!a.isWebkit, 'Webkit');
  t.true(a.isChrome, 'Chromium');
  t.true(!a.isKonqueror, 'Konqueror');
  t.true(!a.isDesktop, 'Desktop');
  t.true(!a.isWindows, 'Windows');
  t.true(!a.isLinux, 'Linux');
  t.true(a.isMac, 'Mac');
  t.true(!a.isWindowsPhone, 'Windows Phone');
  t.is(a.version, '32.0.1700.20');
  t.true(!a.isIECompatibilityMode);
});

// Source: copied from an OnePlus phone
test('Android 8.0 Chrome', (t) => {
  const s = 'Mozilla/5.0 (Linux; Android 8.0.0; ONEPLUS A3003 Build/OPR6.170623.013) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/64.0.3282.137 Mobile Safari/537.36';

  const a = new UserAgent(s);

  t.true(a.isAuthoritative, 'Authoritative');
  t.true(a.isMobile, 'Mobile');
  t.true(!a.isiPad, 'iPad');
  t.true(!a.isiPod, 'iPod');
  t.true(!a.isiPhone, 'iPhone');
  t.true(a.isAndroid, 'Android');
  t.true(!a.isBlackberry, 'Blackberry');
  t.true(!a.isOpera, 'Opera');
  t.true(!a.isIE, 'IE');
  t.true(!a.isSafari, 'Safari');
  t.true(!a.isFirefox, 'Firefox');
  t.true(!a.isWebkit, 'Webkit');
  t.true(a.isChrome, 'Chrome');
  t.true(!a.isKonqueror, 'Konqueror');
  t.true(!a.isDesktop, 'Desktop');
  t.true(!a.isWindows, 'Windows');
  t.true(a.isLinux, 'Linux');
  t.true(!a.isMac, 'Mac');
  t.true(!a.isWindowsPhone, 'Windows Phone');
  t.is(a.version, '64.0.3282.137');
});

// Source:
// http://www.gtrifonov.com/2011/04/15/google-android-user-agent-strings-2/
test('Android Samsung', (t) => {
  const s = 'Mozilla/5.0 (Linux; U; Android 2.2; en-ca; SGH-T959D Build/FROYO) AppleWebKit/533.1'
    + ' (KHTML, like Gecko) Version/4.0 Mobile Safari/533.1';

  const a = new UserAgent(s);

  t.true(a.isAuthoritative, 'Authoritative');
  t.true(a.isMobile, 'Mobile');
  t.true(!a.isiPad, 'iPad');
  t.true(!a.isiPod, 'iPod');
  t.true(!a.isiPhone, 'iPhone');
  t.true(a.isAndroid, 'Android');
  t.true(!a.isBlackberry, 'Blackberry');
  t.true(!a.isOpera, 'Opera');
  t.true(!a.isIE, 'IE');
  t.true(a.isSafari, 'Safari');
  t.true(!a.isFirefox, 'Firefox');
  t.true(!a.isWebkit, 'Webkit');
  t.true(!a.isChrome, 'Chrome');
  t.true(!a.isKonqueror, 'Konqueror');
  t.true(!a.isDesktop, 'Desktop');
  t.true(!a.isWindows, 'Windows');
  t.true(a.isLinux, 'Linux');
  t.true(!a.isMac, 'Mac');
  t.true(!a.isWindowsPhone, 'Windows Phone');
  t.is(a.version, '4.0');
});

// Source:
// Chrome UA Spoofer
test('Android Xoom', (t) => {
  const s = 'Mozilla/5.0 (Linux; U; Android 3.0; en-us; Xoom Build/HRI39) AppleWebKit/534.13'
    + ' (KHTML, like Gecko) Version/4.0 Safari/534.13';

  const a = new UserAgent(s);

  t.true(a.isAuthoritative, 'Authoritative');
  t.true(a.isMobile, 'Mobile');
  t.true(!a.isiPad, 'iPad');
  t.true(!a.isiPod, 'iPod');
  t.true(!a.isiPhone, 'iPhone');
  t.true(a.isAndroid, 'Android');
  t.true(!a.isBlackberry, 'Blackberry');
  t.true(!a.isOpera, 'Opera');
  t.true(!a.isIE, 'IE');
  t.true(a.isSafari, 'Safari');
  t.true(!a.isFirefox, 'Firefox');
  t.true(!a.isWebkit, 'Webkit');
  t.true(!a.isChrome, 'Chrome');
  t.true(!a.isKonqueror, 'Konqueror');
  t.true(!a.isDesktop, 'Desktop');
  t.true(!a.isWindows, 'Windows');
  t.true(a.isLinux, 'Linux');
  t.true(!a.isMac, 'Mac');
  t.true(!a.isWindowsPhone, 'Windows Phone');
  t.is(a.version, '4.0');
});

// Source
// Chrome UA Spoofer
test('iPhone 4', (t) => {
  const s = 'Mozilla/5.0 (iPhone; U; CPU iPhone OS 4_3_2 like Mac OS X; en-us) AppleWebKit/533.17.9'
    + ' (KHTML, like Gecko) Version/5.0.2 Mobile/8H7 Safari/6533.18.5';

  const a = new UserAgent(s);

  t.true(a.isMobile, 'Mobile');
  t.true(!a.isiPad, 'iPad');
  t.true(!a.isiPod, 'iPod');
  t.true(a.isiPhone, 'iPhone');
  t.true(!a.isAndroid, 'Android');
  t.true(!a.isBlackberry, 'Blackberry');
  t.true(!a.isOpera, 'Opera');
  t.true(!a.isIE, 'IE');
  t.true(a.isSafari, 'Safari');
  t.true(!a.isFirefox, 'Firefox');
  t.true(!a.isWebkit, 'Webkit');
  t.true(!a.isChrome, 'Chrome');
  t.true(!a.isKonqueror, 'Konqueror');
  t.true(!a.isDesktop, 'Desktop');
  t.true(!a.isWindows, 'Windows');
  t.true(!a.isLinux, 'Linux');
  t.true(a.isMac, 'Mac');
  t.true(!a.isWindowsPhone, 'Windows Phone');
  t.is(a.version, '5.0.2');
});

// Source:
// http://java.net/jira/browse/USER_AGENT_UTILS-6
test('Bada OS browser', (t) => {
  const s = 'Mozilla/5.0 (SAMSUNG; SAMSUNG-GT-S8500/S8500NEJE5; U; Bada/1.0; fr-fr) AppleWebKit/533.1'
    + ' (KHTML, like Gecko) Dolfin/2.0 Mobile WVGA SMM-MMS/1.2.0 NexPlayer/3.0 profile/MIDP-2.1 '
    + 'configuration/CLDC-1.1 OPN-B';

  const a = new UserAgent(s);

  t.true(a.isAuthoritative, 'Authoritative');
  t.true(a.isMobile, 'Mobile');
  t.true(!a.isiPad, 'iPad');
  t.true(!a.isiPod, 'iPod');
  t.true(!a.isiPhone, 'iPhone');
  t.true(!a.isAndroid, 'Android');
  t.true(!a.isBlackberry, 'Blackberry');
  t.true(!a.isOpera, 'Opera');
  t.true(!a.isIE, 'IE');
  t.true(!a.isSafari, 'Safari');
  t.true(!a.isFirefox, 'Firefox');
  t.true(a.isWebkit, 'Webkit');
  t.true(!a.isChrome, 'Chrome');
  t.true(!a.isKonqueror, 'Konqueror');
  t.true(!a.isDesktop, 'Desktop');
  t.true(!a.isWindows, 'Windows');
  t.true(!a.isLinux, 'Linux');
  t.true(!a.isMac, 'Mac');
  t.true(!a.isWindowsPhone, 'Windows Phone');
  t.is(a.version, '533.1');
});

test('America Online Browser', (t) => {
  const s = 'Mozilla/4.0 (compatible; MSIE 7.0;'
    + ' America Online Browser 1.1; Windows NT 5.1; (R1 1.5); .NET CLR 2.0.50727; InfoPath.1)';

  const a = new UserAgent(s);

  t.true(a.isAuthoritative, 'Authoritative');
  t.true(!a.isMobile, 'Mobile');
  t.true(!a.isiPad, 'iPad');
  t.true(!a.isiPod, 'iPod');
  t.true(!a.isiPhone, 'iPhone');
  t.true(!a.isAndroid, 'Android');
  t.true(!a.isBlackberry, 'Blackberry');
  t.true(!a.isOpera, 'Opera');
  t.true(a.isIE, 'IE');
  t.true(!a.isSafari, 'Safari');
  t.true(!a.isFirefox, 'Firefox');
  t.true(!a.isWebkit, 'Webkit');
  t.true(!a.isChrome, 'Chrome');
  t.true(!a.isKonqueror, 'Konqueror');
  t.true(a.isDesktop, 'Desktop');
  t.true(a.isWindows, 'Windows');
  t.true(!a.isLinux, 'Linux');
  t.true(!a.isMac, 'Mac');
  t.true(!a.isWindowsPhone, 'Windows Phone');
  t.is(a.version, '7.0');
});

test('Windows 7 IE 10.6', (t) => {
  const s = 'Mozilla/5.0 (compatible; MSIE 10.6; Windows NT 6.1; Trident/5.0; InfoPath.2; SLCC1; .NET CLR 2.0.50727) 3gpp-gba UNTRUSTED/1.0';

  const a = new UserAgent(s);

  t.true(!a.isMobile, 'Mobile');
  t.true(!a.isiPad, 'iPad');
  t.true(!a.isiPod, 'iPod');
  t.true(!a.isiPhone, 'iPhone');
  t.true(!a.isAndroid, 'Android');
  t.true(!a.isBlackberry, 'Blackberry');
  t.true(!a.isOpera, 'Opera');
  t.true(a.isIE, 'IE');
  t.true(!a.isSafari, 'Safari');
  t.true(!a.isFirefox, 'Firefox');
  t.true(!a.isWebkit, 'Webkit');
  t.true(!a.isChrome, 'Chrome');
  t.true(!a.isKonqueror, 'Konqueror');
  t.true(a.isDesktop, 'Desktop');
  t.true(a.isWindows, 'Windows');
  t.true(!a.isLinux, 'Linux');
  t.true(!a.isMac, 'Mac');
  t.true(!a.isWindowsPhone, 'Windows Phone');
  t.is(a.version, '10.6');
});

test('Windows 7 IE 11.0', (t) => {
  const s = 'Mozilla/5.0 (Windows NT 6.1; WOW64; Trident/7.0; rv:11.0) like Gecko';

  const a = new UserAgent(s);

  t.true(a.isAuthoritative, 'Authoritative');
  t.true(!a.isMobile, 'Mobile');
  t.true(!a.isiPad, 'iPad');
  t.true(!a.isiPod, 'iPod');
  t.true(!a.isiPhone, 'iPhone');
  t.true(!a.isAndroid, 'Android');
  t.true(!a.isBlackberry, 'Blackberry');
  t.true(!a.isOpera, 'Opera');
  t.true(a.isIE, 'IE');
  t.true(!a.isSafari, 'Safari');
  t.true(!a.isFirefox, 'Firefox');
  t.true(!a.isWebkit, 'Webkit');
  t.true(!a.isChrome, 'Chrome');
  t.true(!a.isKonqueror, 'Konqueror');
  t.true(a.isDesktop, 'Desktop');
  t.true(a.isWindows, 'Windows');
  t.true(!a.isLinux, 'Linux');
  t.true(!a.isMac, 'Mac');
  t.true(!a.isWindowsPhone, 'Windows Phone');
  t.is(a.version, '11.0');
});

test('Windows 8.1 IE 11 Touch', (t) => {
  const s = 'Mozilla/5.0 (Windows NT 6.3; Trident/7.0; Touch; rv:11.0) like Gecko';

  const a = new UserAgent(s);

  t.true(a.isAuthoritative, 'Authoritative');
  t.true(!a.isMobile, 'Mobile');
  t.true(!a.isiPad, 'iPad');
  t.true(!a.isiPod, 'iPod');
  t.true(!a.isiPhone, 'iPhone');
  t.true(!a.isAndroid, 'Android');
  t.true(!a.isBlackberry, 'Blackberry');
  t.true(!a.isOpera, 'Opera');
  t.true(a.isIE, 'IE');
  t.true(!a.isSafari, 'Safari');
  t.true(!a.isFirefox, 'Firefox');
  t.true(!a.isWebkit, 'Webkit');
  t.true(!a.isChrome, 'Chrome');
  t.true(!a.isKonqueror, 'Konqueror');
  t.true(a.isDesktop, 'Desktop');
  t.true(a.isWindows, 'Windows');
  t.true(!a.isLinux, 'Linux');
  t.true(!a.isMac, 'Mac');
  t.true(!a.isWindowsPhone, 'Windows Phone');
  t.is(a.version, '11.0');
});

test('Windows XP IE 8.0', (t) => {
  const s = 'Mozilla/4.0 (compatible; MSIE 8.0; Windows NT 6.0)';

  const a = new UserAgent(s);

  t.true(a.isAuthoritative, 'Authoritative');
  t.true(!a.isMobile, 'Mobile');
  t.true(!a.isiPad, 'iPad');
  t.true(!a.isiPod, 'iPod');
  t.true(!a.isiPhone, 'iPhone');
  t.true(!a.isAndroid, 'Android');
  t.true(!a.isBlackberry, 'Blackberry');
  t.true(!a.isOpera, 'Opera');
  t.true(a.isIE, 'IE');
  t.true(!a.isSafari, 'Safari');
  t.true(!a.isFirefox, 'Firefox');
  t.true(!a.isWebkit, 'Webkit');
  t.true(!a.isChrome, 'Chrome');
  t.true(!a.isKonqueror, 'Konqueror');
  t.true(a.isDesktop, 'Desktop');
  t.true(a.isWindows, 'Windows');
  t.true(!a.isLinux, 'Linux');
  t.true(!a.isMac, 'Mac');
  t.true(!a.isWindowsPhone, 'Windows Phone');
  t.is(a.version, '8.0');
});

test('Windows XP IE 8.0 - Compatibility mode', (t) => {
  const s = 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.0; Trident/4.0)';

  const a = new UserAgent(s);

  t.true(a.isAuthoritative, 'Authoritative');
  t.true(!a.isMobile, 'Mobile');
  t.true(!a.isiPad, 'iPad');
  t.true(!a.isiPod, 'iPod');
  t.true(!a.isiPhone, 'iPhone');
  t.true(!a.isAndroid, 'Android');
  t.true(!a.isBlackberry, 'Blackberry');
  t.true(!a.isOpera, 'Opera');
  t.true(a.isIE, 'IE');
  t.true(!a.isSafari, 'Safari');
  t.true(!a.isFirefox, 'Firefox');
  t.true(!a.isWebkit, 'Webkit');
  t.true(!a.isChrome, 'Chrome');
  t.true(!a.isKonqueror, 'Konqueror');
  t.true(a.isDesktop, 'Desktop');
  t.true(a.isWindows, 'Windows');
  t.true(!a.isLinux, 'Linux');
  t.true(!a.isMac, 'Mac');
  t.is(a.version, 8);
  t.true(!a.isWindowsPhone, 'Windows Phone');
  t.true(a.isIECompatibilityMode);
});

test('Windows XP IE 10.0', (t) => {
  const s = 'Mozilla/5.0 (compatible; MSIE 10.0; Windows NT 6.2)';

  const a = new UserAgent(s);

  t.true(a.isAuthoritative, 'Authoritative');
  t.true(!a.isMobile, 'Mobile');
  t.true(!a.isiPad, 'iPad');
  t.true(!a.isiPod, 'iPod');
  t.true(!a.isiPhone, 'iPhone');
  t.true(!a.isAndroid, 'Android');
  t.true(!a.isBlackberry, 'Blackberry');
  t.true(!a.isOpera, 'Opera');
  t.true(a.isIE, 'IE');
  t.true(!a.isSafari, 'Safari');
  t.true(!a.isFirefox, 'Firefox');
  t.true(!a.isWebkit, 'Webkit');
  t.true(!a.isChrome, 'Chrome');
  t.true(!a.isKonqueror, 'Konqueror');
  t.true(a.isDesktop, 'Desktop');
  t.true(a.isWindows, 'Windows');
  t.true(!a.isLinux, 'Linux');
  t.true(!a.isMac, 'Mac');
  t.true(!a.isWindowsPhone, 'Windows Phone');
  t.is(a.version, '10.0');
  t.true(!a.isIECompatibilityMode);
});

test('Windows XP IE 10.0 - Compatibility mode', (t) => {
  const s = 'Mozilla/5.0 (compatible; MSIE 7.0; Windows NT 6.2; Trident/6.0)';

  const a = new UserAgent(s);

  t.true(a.isAuthoritative, 'Authoritative');
  t.true(!a.isMobile, 'Mobile');
  t.true(!a.isiPad, 'iPad');
  t.true(!a.isiPod, 'iPod');
  t.true(!a.isiPhone, 'iPhone');
  t.true(!a.isAndroid, 'Android');
  t.true(!a.isBlackberry, 'Blackberry');
  t.true(!a.isOpera, 'Opera');
  t.true(a.isIE, 'IE');
  t.true(!a.isSafari, 'Safari');
  t.true(!a.isFirefox, 'Firefox');
  t.true(!a.isWebkit, 'Webkit');
  t.true(!a.isChrome, 'Chrome');
  t.true(!a.isKonqueror, 'Konqueror');
  t.true(a.isDesktop, 'Desktop');
  t.true(a.isWindows, 'Windows');
  t.true(!a.isLinux, 'Linux');
  t.true(!a.isMac, 'Mac');
  t.true(!a.isWindowsPhone, 'Windows Phone');
  t.is(a.version, 10);
  t.true(a.isIECompatibilityMode);
});

test('Windows XP IE 7.0 - Compatibility mode (invalid mode)', (t) => {
  const s = 'Mozilla/5.0 (compatible; MSIE 7.0; Windows NT 6.2; Trident/1.0)';

  const a = new UserAgent(s);

  t.true(a.isAuthoritative, 'Authoritative');
  t.true(!a.isMobile, 'Mobile');
  t.true(!a.isiPad, 'iPad');
  t.true(!a.isiPod, 'iPod');
  t.true(!a.isiPhone, 'iPhone');
  t.true(!a.isAndroid, 'Android');
  t.true(!a.isBlackberry, 'Blackberry');
  t.true(!a.isOpera, 'Opera');
  t.true(a.isIE, 'IE');
  t.true(!a.isSafari, 'Safari');
  t.true(!a.isFirefox, 'Firefox');
  t.true(!a.isWebkit, 'Webkit');
  t.true(!a.isChrome, 'Chrome');
  t.true(!a.isKonqueror, 'Konqueror');
  t.true(a.isDesktop, 'Desktop');
  t.true(a.isWindows, 'Windows');
  t.true(!a.isLinux, 'Linux');
  t.true(!a.isMac, 'Mac');
  t.true(!a.isWindowsPhone, 'Windows Phone');
  t.is(a.version, '7.0');
  t.true(!a.isIECompatibilityMode);
});

test('Windows XP IE 9.0 - Compatibility mode', (t) => {
  const s = 'Mozilla/4.0 (compatible; MSIE 7.0; Windows NT 6.1; WOW64; Trident/5.0; SLCC2; '
    + '.NET CLR 2.0.50727; .NET CLR 3.5.30729; .NET CLR 3.0.30729; Media Center PC 6.0; .NET4.0C)';

  const a = new UserAgent(s);

  t.true(a.isAuthoritative, 'Authoritative');
  t.true(!a.isMobile, 'Mobile');
  t.true(!a.isiPad, 'iPad');
  t.true(!a.isiPod, 'iPod');
  t.true(!a.isiPhone, 'iPhone');
  t.true(!a.isAndroid, 'Android');
  t.true(!a.isBlackberry, 'Blackberry');
  t.true(!a.isOpera, 'Opera');
  t.true(a.isIE, 'IE');
  t.true(!a.isSafari, 'Safari');
  t.true(!a.isFirefox, 'Firefox');
  t.true(!a.isWebkit, 'Webkit');
  t.true(!a.isChrome, 'Chrome');
  t.true(!a.isKonqueror, 'Konqueror');
  t.true(a.isDesktop, 'Desktop');
  t.true(a.isWindows, 'Windows');
  t.true(!a.isLinux, 'Linux');
  t.true(!a.isMac, 'Mac');
  t.true(!a.isWindowsPhone, 'Windows Phone');
  t.is(a.version, 9);
  t.true(a.isIECompatibilityMode);
});

test('Mac OSX Opera 30', (t) => {
  const s = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_10_2) AppleWebKit/537.36 (KHTML, like Gecko)'
    + 'Chrome/43.0.2357.125 Safari/537.36 OPR/30.0.1835.88';

  const a = new UserAgent(s);

  t.true(a.isAuthoritative, 'Authoritative');
  t.true(!a.isMobile, 'Mobile');
  t.true(!a.isiPad, 'iPad');
  t.true(!a.isiPod, 'iPod');
  t.true(!a.isiPhone, 'iPhone');
  t.true(!a.isAndroid, 'Android');
  t.true(!a.isBlackberry, 'Blackberry');
  t.true(a.isOpera, 'Opera');
  t.true(!a.isIE, 'IE');
  t.true(!a.isSafari, 'Safari');
  t.true(!a.isFirefox, 'Firefox');
  t.true(!a.isWebkit, 'Webkit');
  t.true(!a.isChrome, 'Chrome');
  t.true(!a.isKonqueror, 'Konqueror');
  t.true(a.isDesktop, 'Desktop');
  t.true(!a.isWindows, 'Windows');
  t.true(!a.isLinux, 'Linux');
  t.true(a.isMac, 'Mac');
  t.true(!a.isWindowsPhone, 'Windows Phone');
  t.is(a.version, '30.0.1835.88');
  t.true(!a.isIECompatibilityMode);
});

test('Microsoft Edge 12', (t) => {
  const s = 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko)'
    + ' Chrome/39.0.2171.71 Safari/537.36 Edge/12.0';

  const a = new UserAgent(s);

  t.true(a.isAuthoritative, 'Authoritative');
  t.true(!a.isMobile, 'Mobile');
  t.true(!a.isiPad, 'iPad');
  t.true(!a.isiPod, 'iPod');
  t.true(!a.isiPhone, 'iPhone');
  t.true(!a.isAndroid, 'Android');
  t.true(!a.isBlackberry, 'Blackberry');
  t.true(!a.isOpera, 'Opera');
  t.true(!a.isIE, 'IE');
  t.true(a.isEdge, 'Edge');
  t.true(!a.isSafari, 'Safari');
  t.true(!a.isFirefox, 'Firefox');
  t.true(!a.isWebkit, 'Webkit');
  t.true(!a.isChrome, 'Chrome');
  t.true(!a.isKonqueror, 'Konqueror');
  t.true(a.isDesktop, 'Desktop');
  t.true(a.isWindows, 'Windows');
  t.true(!a.isLinux, 'Linux');
  t.true(!a.isMac, 'Mac');
  t.true(!a.isWindowsPhone, 'Windows Phone');
  t.is(a.version, '12.0');
  t.true(!a.isIECompatibilityMode);
});

test('Microsoft Edge Mobile', (t) => {
  const s = 'Mozilla/5.0 (Windows Phone 10.0; Android 4.2.1; DEVICE INFO) AppleWebKit/537.36 (KHTML, like Gecko)'
    + ' Chrome/39.0.2171.71 Mobile Safari/537.36 Edge/12.0';

  const a = new UserAgent(s);

  t.true(a.isAuthoritative, 'Authoritative');
  t.true(a.isMobile, 'Mobile');
  t.true(!a.isiPad, 'iPad');
  t.true(!a.isiPod, 'iPod');
  t.true(!a.isiPhone, 'iPhone');
  t.true(!a.isAndroid, 'Android');
  t.true(!a.isBlackberry, 'Blackberry');
  t.true(!a.isOpera, 'Opera');
  t.true(!a.isIE, 'IE');
  t.true(a.isEdge, 'Edge');
  t.true(!a.isSafari, 'Safari');
  t.true(!a.isFirefox, 'Firefox');
  t.true(!a.isWebkit, 'Webkit');
  t.true(!a.isChrome, 'Chrome');
  t.true(!a.isKonqueror, 'Konqueror');
  t.true(!a.isDesktop, 'Desktop');
  t.true(!a.isWindows, 'Windows');
  t.true(!a.isLinux, 'Linux');
  t.true(!a.isMac, 'Mac');
  t.true(a.isWindowsPhone, 'Windows Phone');
  t.is(a.version, '12.0');
  t.true(!a.isIECompatibilityMode);
});

test('PhantomJS', (t) => {
  const s = 'Mozilla/5.0 (Windows NT 6.1; WOW64) AppleWebKit/534.34 (KHTML, like Gecko) PhantomJS/1.9.8 Safari/534.34';

  const a = new UserAgent(s);

  t.true(a.isAuthoritative, 'Authoritative');
  t.true(!a.isMobile, 'Mobile');
  t.true(!a.isiPad, 'iPad');
  t.true(!a.isiPod, 'iPod');
  t.true(!a.isiPhone, 'iPhone');
  t.true(!a.isAndroid, 'Android');
  t.true(!a.isBlackberry, 'Blackberry');
  t.true(!a.isOpera, 'Opera');
  t.true(!a.isIE, 'IE');
  t.true(!a.isEdge, 'Edge');
  t.true(!a.isSafari, 'Safari');
  t.true(!a.isFirefox, 'Firefox');
  t.true(!a.isWebkit, 'Webkit');
  t.true(!a.isChrome, 'Chrome');
  t.true(!a.isKonqueror, 'Konqueror');
  t.true(a.isDesktop, 'Desktop');
  t.true(a.isWindows, 'Windows');
  t.true(!a.isLinux, 'Linux');
  t.true(!a.isMac, 'Mac');
  t.true(!a.isWindowsPhone, 'Windows Phone');
  t.true(a.isPhantomJS, 'PhantomJS');
  t.is(a.version, '1.9.8');
  t.true(!a.isIECompatibilityMode);
});

test('OS X Electron', (t) => {
  const s = 'Mozilla/5.0 (Macintosh; Intel Mac OS X 10_13_3) AppleWebKit/537.36 (KHTML, like Gecko) electron-app-name/1.0.0 Chrome/59.0.3071.115 Electron/1.8.3 Safari/537.36';

  const a = new UserAgent(s);

  t.true(a.isAuthoritative, 'Authoritative');
  t.true(!a.isMobile, 'Mobile');
  t.true(!a.isiPad, 'iPad');
  t.true(!a.isiPod, 'iPod');
  t.true(!a.isiPhone, 'iPhone');
  t.true(!a.isAndroid, 'Android');
  t.true(!a.isBlackberry, 'Blackberry');
  t.true(!a.isOpera, 'Opera');
  t.true(!a.isIE, 'IE');
  t.true(!a.isSafari, 'Safari');
  t.true(!a.isFirefox, 'Firefox');
  t.true(!a.isWebkit, 'Webkit');
  t.true(a.isChrome, 'Chrome');
  t.true(!a.isKonqueror, 'Konqueror');
  t.true(a.isDesktop, 'Desktop');
  t.true(!a.isWindows, 'Windows');
  t.true(!a.isLinux, 'Linux');
  t.true(a.isMac, 'Mac');
  t.true(!a.isWindowsPhone, 'Windows Phone');
  t.is(a.version, '59.0.3071.115');
  t.true(!a.isIECompatibilityMode);
  t.is(a.electronVersion, '1.8.3');
});
