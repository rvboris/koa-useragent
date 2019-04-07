/*!
 * Based on express-useragent.js (https://github.com/biggora/express-useragent/)
 * Copyright 2011-2017 Alexey Gordeyev
 * Licensed under MIT (https://github.com/biggora/express-useragent/blob/master/LICENSE)
 */

class UserAgent {
  constructor(source = 'unknown', header = {}) {
    this.agent = UserAgent.defaultAgent;

    this.agent.source = source.replace(/^\s*/, '').replace(/\s*$/, '');
    this.agent.os = this.getOS(this.agent.source);
    this.agent.platform = this.getPlatform(this.agent.source);
    this.agent.browser = this.getBrowser(this.agent.source);
    this.agent.version = this.getBrowserVersion(this.agent.source);

    this.testNginxGeoIP(header);
    this.testBot();
    this.testSmartTV();
    this.testMobile();
    this.testAndroidTablet();
    this.testTablet();
    this.testCompatibilityMode();
    this.testSilk();
    this.testKindleFire();
    this.testCaptiveNetwork();
    this.testWebkit();
    this.testElectron();

    return this.agent;
  }

  static get version() {
    return '1.0.12';
  }

  static get bots() {
    return [
      '\\+https:\\/\\/developers.google.com\\/\\+\\/web\\/snippet\\/',
      'ad\\smonitoring',
      'adsbot',
      'apex',
      'applebot',
      'archive.org_bot',
      'baiduspider',
      'bingbot',
      'cloudflare',
      'cloudinary',
      'crawler',
      'curl',
      'discordbot',
      'duckduckbot',
      'embedly',
      'exabot',
      'facebookexternalhit',
      'facebot',
      'flipboard',
      'google',
      'googlebot',
      'gsa-crawler',
      'gurujibot',
      'guzzlehttp',
      'heritrix',
      'ia_archiver',
      'insights',
      'linkedinbot',
      'ltx71',
      'mediapartners',
      'msnbot',
      'odklbot',
      'phantom\\.js',
      'phantomjs',
      'pingdom',
      'pinterest',
      'python',
      'rtlnieuws',
      'skypeuripreview',
      'slackbot',
      'slurp',
      'spbot',
      'telegrambot',
      'test\\scertificate',
      'testing',
      'tiabot',
      'tumblr ',
      'twitterbot',
      'vkshare',
      'web\\sscraper',
      'wget',
      'yandexbot',
      'whatsapp',
      'orangebot',
      'smtbot',
      'qwantify',
      'mj12bot',
      'ahrefsbot',
      'seznambot',
      'panscient\.com',
    ];
  }

  static get isBotRegExp() {
    return new RegExp(`^.*(${UserAgent.bots.join('|')}).*$`);
  }

  static get isElectronRegExp() {
    return /Electron\/([\d\w\.\-]+)/i;
  }

  static get versions() {
    return {
      Edge: /(?:edge|edga|edgios)\/([\d\w\.\-]+)/i,
      Firefox: /(?:firefox|fxios)\/([\d\w\.\-]+)/i,
      IE: /msie\s([\d\.]+[\d])|trident\/\d+\.\d+;.*[rv:]+(\d+\.\d)/i,
      Chrome: /(?:chrome|crios)\/([\d\w\.\-]+)/i,
      Chromium: /chromium\/([\d\w\.\-]+)/i,
      Safari: /version\/([\d\w\.\-]+)/i,
      Opera: /version\/([\d\w\.\-]+)|OPR\/([\d\w\.\-]+)/i,
      Ps3: /([\d\w\.\-]+)\)\s*$/i,
      Psp: /([\d\w\.\-]+)\)?\s*$/i,
      Amaya: /amaya\/([\d\w\.\-]+)/i,
      SeaMonkey: /seamonkey\/([\d\w\.\-]+)/i,
      OmniWeb: /omniweb\/v([\d\w\.\-]+)/i,
      Flock: /flock\/([\d\w\.\-]+)/i,
      Epiphany: /epiphany\/([\d\w\.\-]+)/i,
      WinJs: /msapphost\/([\d\w\.\-]+)/i,
      PhantomJS: /phantomjs\/([\d\w\.\-]+)/i,
      AlamoFire: /alamofire\/([\d\w\.\-]+)/i,
      UC: /ucbrowser\/([\d\w\.]+)/i,
      Facebook: /FBAV\/([\d\w\.]+)/i,
      WebKit: /applewebkit\/([\d\w\.]+)/i,
    };
  }

  static get browsers() {
    return {
      Edge: /edge|edga|edgios/i,
      Amaya: /amaya/i,
      Konqueror: /konqueror/i,
      Epiphany: /epiphany/i,
      SeaMonkey: /seamonkey/i,
      Flock: /flock/i,
      OmniWeb: /omniweb/i,
      Chromium: /chromium/i,
      Chrome: /chrome|crios/i,
      Safari: /safari/i,
      IE: /msie|trident/i,
      Opera: /opera|\sOPR\//i,
      PS3: /playstation 3/i,
      PSP: /playstation portable/i,
      Firefox: /firefox|fxios/i,
      WinJs: /msapphost/i,
      PhantomJS: /phantomjs/i,
      AlamoFire: /alamofire/i,
      UC: /UCBrowser/i,
      Facebook: /FBA[NV]/,
    };
  }

  static get os() {
    return {
      Windows10: /windows nt 10\.0/i,
      Windows81: /windows nt 6\.3/i,
      Windows8: /windows nt 6\.2/i,
      Windows7: /windows nt 6\.1/i,
      UnknownWindows: /windows nt 6\.\d+/i,
      WindowsVista: /windows nt 6\.0/i,
      Windows2003: /windows nt 5\.2/i,
      WindowsXP: /windows nt 5\.1/i,
      Windows2000: /windows nt 5\.0/i,
      WindowsPhone81: /windows phone 8\.1/i,
      WindowsPhone80: /windows phone 8\.0/i,
      OSXCheetah: /os x 10[._]0/i,
      OSXPuma: /os x 10[._]1(\D|$)/i,
      OSXJaguar: /os x 10[._]2/i,
      OSXPanther: /os x 10[._]3/i,
      OSXTiger: /os x 10[._]4/i,
      OSXLeopard: /os x 10[._]5/i,
      OSXSnowLeopard: /os x 10[._]6/i,
      OSXLion: /os x 10[._]7/i,
      OSXMountainLion: /os x 10[._]8/i,
      OSXMavericks: /os x 10[._]9/i,
      OSXYosemite: /os x 10[._]10/i,
      OSXElCapitan: /os x 10[._]11/i,
      MacOSSierra: /os x 10[._]12/i,
      MacOSHighSierra: /os x 10[._]13/i,
      Mac: /os x/i,
      Linux: /linux/i,
      Linux64: /linux x86\_64/i,
      ChromeOS: /cros/i,
      Wii: /wii/i,
      PS3: /playstation 3/i,
      PSP: /playstation portable/i,
      iPad: /\(iPad.*os (\d+)[._](\d+)/i,
      iPhone: /\(iPhone.*os (\d+)[._](\d+)/i,
      iOS: /ios/i,
      Bada: /Bada\/(\d+)\.(\d+)/i,
      Curl: /curl\/(\d+)\.(\d+)\.(\d+)/i,
    };
  }

  static get platform() {
    return {
      Windows: /windows nt/i,
      WindowsPhone: /windows phone/i,
      Mac: /macintosh/i,
      Linux: /linux/i,
      Wii: /wii/i,
      Playstation: /playstation/i,
      iPad: /ipad/i,
      iPod: /ipod/i,
      iPhone: /iphone/i,
      Android: /android/i,
      Blackberry: /blackberry/i,
      Samsung: /samsung/i,
      Curl: /curl/i,
      iOS: /^ios\-/i,
    };
  }

  static get defaultAgent() {
    return {
      isAuthoritative: true,
      isMobile: false,
      isTablet: false,
      isiPad: false,
      isiPod: false,
      isiPhone: false,
      isAndroid: false,
      isBlackberry: false,
      isOpera: false,
      isIE: false,
      isEdge: false,
      isIECompatibilityMode: false,
      isSafari: false,
      isFirefox: false,
      isWebkit: false,
      isChrome: false,
      isKonqueror: false,
      isOmniWeb: false,
      isSeaMonkey: false,
      isFlock: false,
      isAmaya: false,
      isPhantomJS: false,
      isEpiphany: false,
      isDesktop: false,
      isWindows: false,
      isLinux: false,
      isLinux64: false,
      isMac: false,
      isChromeOS: false,
      isBada: false,
      isSamsung: false,
      isRaspberry: false,
      isBot: false,
      isCurl: false,
      isAndroidTablet: false,
      isWinJs: false,
      isKindleFire: false,
      isSilk: false,
      isCaptive: false,
      isSmartTV: false,
      isUC: false,
      isElectron: false,
      isFacebook: false,
      isAlamoFire: false,
      silkAccelerated: false,
      browser: 'unknown',
      version: 'unknown',
      os: 'unknown',
      platform: 'unknown',
      geoIp: {},
      electronVersion: '',
      source: '',
    };
  }

  getBrowser(string) {
    switch (true) {
      case UserAgent.browsers.AlamoFire.test(string):
        this.agent.isAlamoFire = true;
        return 'AlamoFire';
      case UserAgent.browsers.Edge.test(string):
        this.agent.isEdge = true;
        return 'Edge';
      case UserAgent.browsers.PhantomJS.test(string):
        this.agent.isPhantomJS = true;
        return 'PhantomJS';
      case UserAgent.browsers.Konqueror.test(string):
        this.agent.isKonqueror = true;
        return 'Konqueror';
      case UserAgent.browsers.Amaya.test(string):
        this.agent.isAmaya = true;
        return 'Amaya';
      case UserAgent.browsers.Epiphany.test(string):
        this.agent.isEpiphany = true;
        return 'Epiphany';
      case UserAgent.browsers.SeaMonkey.test(string):
        this.agent.isSeaMonkey = true;
        return 'SeaMonkey';
      case UserAgent.browsers.Flock.test(string):
        this.agent.isFlock = true;
        return 'Flock';
      case UserAgent.browsers.OmniWeb.test(string):
        this.agent.isOmniWeb = true;
        return 'OmniWeb';
      case UserAgent.browsers.Opera.test(string):
        this.agent.isOpera = true;
        return 'Opera';
      case UserAgent.browsers.Chromium.test(string):
        this.agent.isChrome = true;
        return 'Chromium';
      case UserAgent.browsers.Facebook.test(string):
        this.agent.isFacebook = true;
        return 'Facebook';
      case UserAgent.browsers.Chrome.test(string):
        this.agent.isChrome = true;
        return 'Chrome';
      case UserAgent.browsers.WinJs.test(string):
        this.agent.isWinJs = true;
        return 'WinJs';
      case UserAgent.browsers.IE.test(string):
        this.agent.isIE = true;
        return 'IE';
      case UserAgent.browsers.Firefox.test(string):
        this.agent.isFirefox = true;
        return 'Firefox';
      case UserAgent.browsers.Safari.test(string):
        this.agent.isSafari = true;
        return 'Safari';
      case UserAgent.browsers.PS3.test(string):
        return 'ps3';
      case UserAgent.browsers.PSP.test(string):
        return 'psp';
      case UserAgent.browsers.UC.test(string):
        this.agent.isUC = true;
        return 'UCBrowser';
      default:
        // If the UA does not start with Mozilla guess the user agent.
        if (string.indexOf('Mozilla') !== 0 && /^([\d\w\-\.]+)\/[\d\w\.\-]+/i.test(string)) {
          this.agent.isAuthoritative = false;
          return RegExp.$1;
        }
        return 'unknown';
    }
  }

  getBrowserVersion(string) {
    let regex;
    switch (this.agent.browser) {
      case 'Edge':
        if (UserAgent.versions.Edge.test(string)) {
          return RegExp.$1;
        }
        break;
      case 'PhantomJS':
        if (UserAgent.versions.PhantomJS.test(string)) {
          return RegExp.$1;
        }
        break;
      case 'Chrome':
        if (UserAgent.versions.Chrome.test(string)) {
          return RegExp.$1;
        }
        break;
      case 'Chromium':
        if (UserAgent.versions.Chromium.test(string)) {
          return RegExp.$1;
        }
        break;
      case 'Safari':
        if (UserAgent.versions.Safari.test(string)) {
          return RegExp.$1;
        }
        break;
      case 'Opera':
        if (UserAgent.versions.Opera.test(string)) {
          return RegExp.$1 ? RegExp.$1 : RegExp.$2;
        }
        break;
      case 'Firefox':
        if (UserAgent.versions.Firefox.test(string)) {
          return RegExp.$1;
        }
        break;
      case 'WinJs':
        if (UserAgent.versions.WinJs.test(string)) {
          return RegExp.$1;
        }
        break;
      case 'IE':
        if (UserAgent.versions.IE.test(string)) {
          return RegExp.$2 ? RegExp.$2 : RegExp.$1;
        }
        break;
      case 'ps3':
        if (UserAgent.versions.Ps3.test(string)) {
          return RegExp.$1;
        }
        break;
      case 'psp':
        if (UserAgent.versions.Psp.test(string)) {
          return RegExp.$1;
        }
        break;
      case 'Amaya':
        if (UserAgent.versions.Amaya.test(string)) {
          return RegExp.$1;
        }
        break;
      case 'Epiphany':
        if (UserAgent.versions.Epiphany.test(string)) {
          return RegExp.$1;
        }
        break;
      case 'SeaMonkey':
        if (UserAgent.versions.SeaMonkey.test(string)) {
          return RegExp.$1;
        }
        break;
      case 'Flock':
        if (UserAgent.versions.Flock.test(string)) {
          return RegExp.$1;
        }
        break;
      case 'OmniWeb':
        if (UserAgent.versions.OmniWeb.test(string)) {
          return RegExp.$1;
        }
        break;
      case 'UCBrowser':
        if (UserAgent.versions.UC.test(string)) {
          return RegExp.$1;
        }
        break;
      case 'Facebook':
        if (UserAgent.versions.Facebook.test(string)) {
          return RegExp.$1;
        }
        break;
      default:
        if (this.agent.browser !== 'unknown') {
          regex = new RegExp(`${this.agent.browser}[\\/ ]([\\d\\w\\.\\-]+)`, 'i');
          if (regex.test(string)) {
            return RegExp.$1;
          }
        } else {
          this.testWebkit();
          if (this.agent.isWebkit && UserAgent.versions.WebKit.test(string)) {
            return RegExp.$1;
          }
          return 'unknown';
        }
    }

    return 'unknown';
  }

  getOS(string) {
    switch (true) {
      case UserAgent.os.WindowsVista.test(string):
        this.agent.isWindows = true;
        return 'Windows Vista';
      case UserAgent.os.Windows7.test(string):
        this.agent.isWindows = true;
        return 'Windows 7';
      case UserAgent.os.Windows8.test(string):
        this.agent.isWindows = true;
        return 'Windows 8';
      case UserAgent.os.Windows81.test(string):
        this.agent.isWindows = true;
        return 'Windows 8.1';
      case UserAgent.os.Windows10.test(string):
        this.agent.isWindows = true;
        return 'Windows 10.0';
      case UserAgent.os.Windows2003.test(string):
        this.agent.isWindows = true;
        return 'Windows 2003';
      case UserAgent.os.WindowsXP.test(string):
        this.agent.isWindows = true;
        return 'Windows XP';
      case UserAgent.os.Windows2000.test(string):
        this.agent.isWindows = true;
        return 'Windows 2000';
      case UserAgent.os.WindowsPhone81.test(string):
        this.agent.isWindowsPhone = true;
        return 'Windows Phone 8.1';
      case UserAgent.os.WindowsPhone80.test(string):
        this.agent.isWindowsPhone = true;
        return 'Windows Phone 8.0';
      case UserAgent.os.Linux64.test(string):
        this.agent.isLinux = true;
        this.agent.isLinux64 = true;
        return 'Linux 64';
      case UserAgent.os.Linux.test(string):
        this.agent.isLinux = true;
        return 'Linux';
      case UserAgent.os.ChromeOS.test(string):
        this.agent.isChromeOS = true;
        return 'Chrome OS';
      case UserAgent.os.Wii.test(string):
        return 'Wii';
      case UserAgent.os.PS3.test(string):
        return 'Playstation';
      case UserAgent.os.PSP.test(string):
        return 'Playstation';
      case UserAgent.os.OSXCheetah.test(string):
        this.agent.isMac = true;
        return 'OS X Cheetah';
      case UserAgent.os.OSXPuma.test(string):
        this.agent.isMac = true;
        return 'OS X Puma';
      case UserAgent.os.OSXJaguar.test(string):
        this.agent.isMac = true;
        return 'OS X Jaguar';
      case UserAgent.os.OSXPanther.test(string):
        this.agent.isMac = true;
        return 'OS X Panther';
      case UserAgent.os.OSXTiger.test(string):
        this.agent.isMac = true;
        return 'OS X Tiger';
      case UserAgent.os.OSXLeopard.test(string):
        this.agent.isMac = true;
        return 'OS X Leopard';
      case UserAgent.os.OSXSnowLeopard.test(string):
        this.agent.isMac = true;
        return 'OS X Snow Leopard';
      case UserAgent.os.OSXLion.test(string):
        this.agent.isMac = true;
        return 'OS X Lion';
      case UserAgent.os.OSXMountainLion.test(string):
        this.agent.isMac = true;
        return 'OS X Mountain Lion';
      case UserAgent.os.OSXMavericks.test(string):
        this.agent.isMac = true;
        return 'OS X Mavericks';
      case UserAgent.os.OSXYosemite.test(string):
        this.agent.isMac = true;
        return 'OS X Yosemite';
      case UserAgent.os.OSXElCapitan.test(string):
        this.agent.isMac = true;
        return 'OS X El Capitan';
      case UserAgent.os.MacOSSierra.test(string):
        this.agent.isMac = true;
        return 'macOS Sierra';
      case UserAgent.os.MacOSHighSierra.test(string):
        this.agent.isMac = true;
        return 'macOS High Sierra';
      case UserAgent.os.Mac.test(string):
        this.agent.isMac = true;
        return 'OS X';
      case UserAgent.os.iPad.test(string):
        this.agent.isiPad = true;
        return string.match(UserAgent.os.iPad)[0].replace('_', '.');
      case UserAgent.os.iPhone.test(string):
        this.agent.isiPhone = true;
        return string.match(UserAgent.os.iPhone)[0].replace('_', '.');
      case UserAgent.os.Bada.test(string):
        this.agent.isBada = true;
        return 'Bada';
      case UserAgent.os.Curl.test(string):
        this.agent.isCurl = true;
        return 'Curl';
      case UserAgent.os.iOS.test(string):
        this.agent.isiPhone = true;
        return 'iOS';
      default:
        return 'unknown';
    }
  }

  getPlatform(string) {
    switch (true) {
      case UserAgent.platform.Windows.test(string):
        return 'Microsoft Windows';
      case UserAgent.platform.WindowsPhone.test(string):
        this.agent.isWindowsPhone = true;
        return 'Microsoft Windows Phone';
      case UserAgent.platform.Mac.test(string):
        return 'Apple Mac';
      case UserAgent.platform.Curl.test(string):
        return 'Curl';
      case UserAgent.platform.Android.test(string):
        this.agent.isAndroid = true;
        return 'Android';
      case UserAgent.platform.Blackberry.test(string):
        this.agent.isBlackberry = true;
        return 'Blackberry';
      case UserAgent.platform.Linux.test(string):
        return 'Linux';
      case UserAgent.platform.Wii.test(string):
        return 'Wii';
      case UserAgent.platform.Playstation.test(string):
        return 'Playstation';
      case UserAgent.platform.iPad.test(string):
        this.agent.isiPad = true;
        return 'iPad';
      case UserAgent.platform.iPod.test(string):
        this.agent.isiPod = true;
        return 'iPod';
      case UserAgent.platform.iPhone.test(string):
        this.agent.isiPhone = true;
        return 'iPhone';
      case UserAgent.platform.Samsung.test(string):
        this.agent.isiSamsung = true;
        return 'Samsung';
      case UserAgent.platform.iOS.test(string):
        return 'Apple iOS';
      default:
        return 'unknown';
    }
  }

  testCompatibilityMode() {
    if (this.agent.isIE) {
      if (/Trident\/(\d)\.0/i.test(this.agent.source)) {
        const tridentVersion = parseInt(RegExp.$1, 10);
        const version = parseInt(this.agent.version, 10);
        if (version === 7 && tridentVersion === 7) {
          this.agent.isIECompatibilityMode = true;
          this.agent.version = 11.0;
        }

        if (version === 7 && tridentVersion === 6) {
          this.agent.isIECompatibilityMode = true;
          this.agent.version = 10.0;
        }

        if (version === 7 && tridentVersion === 5) {
          this.agent.isIECompatibilityMode = true;
          this.agent.version = 9.0;
        }

        if (version === 7 && tridentVersion === 4) {
          this.agent.isIECompatibilityMode = true;
          this.agent.version = 8.0;
        }
      }
    }
  }

  testSilk() {
    switch (true) {
      case new RegExp('silk', 'gi').test(this.agent.source):
        this.agent.isSilk = true;
        break;
      default:
    }

    if (/Silk-Accelerated=true/gi.test(this.agent.source)) {
      this.agent.SilkAccelerated = true;
    }

    return this.agent.isSilk ? 'Silk' : false;
  }

  testKindleFire() {
    switch (true) {
      case /KFOT/gi.test(this.agent.source):
        this.agent.isKindleFire = true;
        return 'Kindle Fire';
      case /KFTT/gi.test(this.agent.source):
        this.agent.isKindleFire = true;
        return 'Kindle Fire HD';
      case /KFJWI/gi.test(this.agent.source):
        this.agent.isKindleFire = true;
        return 'Kindle Fire HD 8.9';
      case /KFJWA/gi.test(this.agent.source):
        this.agent.isKindleFire = true;
        return 'Kindle Fire HD 8.9 4G';
      case /KFSOWI/gi.test(this.agent.source):
        this.agent.isKindleFire = true;
        return 'Kindle Fire HD 7';
      case /KFTHWI/gi.test(this.agent.source):
        this.agent.isKindleFire = true;
        return 'Kindle Fire HDX 7';
      case /KFTHWA/gi.test(this.agent.source):
        this.agent.isKindleFire = true;
        return 'Kindle Fire HDX 7 4G';
      case /KFAPWI/gi.test(this.agent.source):
        this.agent.isKindleFire = true;
        return 'Kindle Fire HDX 8.9';
      case /KFAPWA/gi.test(this.agent.source):
        this.agent.isKindleFire = true;
        return 'Kindle Fire HDX 8.9 4G';
      default:
        return false;
    }
  }

  testCaptiveNetwork() {
    switch (true) {
      case /CaptiveNetwork/gi.test(this.agent.source):
        this.agent.isCaptive = true;
        this.agent.isMac = true;
        this.agent.platform = 'Apple Mac';
        return 'CaptiveNetwork';
      default:
        return false;
    }
  }

  reset() {
    return Object.assign(this, UserAgent.defaultAgent);
  }

  testMobile() {
    switch (true) {
      case this.agent.isWindows:
      case this.agent.isLinux:
      case this.agent.isMac:
      case this.agent.isChromeOS:
        this.agent.isDesktop = true;
        break;
      case this.agent.isAndroid:
      case this.agent.isSamsung:
        this.agent.isMobile = true;
        break;
      default:
    }

    switch (true) {
      case this.agent.isiPad:
      case this.agent.isiPod:
      case this.agent.isiPhone:
      case this.agent.isBada:
      case this.agent.isBlackberry:
      case this.agent.isAndroid:
      case this.agent.isWindowsPhone:
        this.agent.isMobile = true;
        this.agent.isDesktop = false;
        break;
      default:
    }

    if (/mobile|^ios\-/i.test(this.agent.source)) {
      this.agent.isMobile = true;
      this.agent.isDesktop = false;
    }
  }

  testTablet() {
    switch (true) {
      case this.agent.isiPad:
      case this.agent.isAndroidTablet:
      case this.agent.isKindleFire:
        this.agent.isTablet = true;
        break;
      default:
    }

    if (/tablet/i.test(this.agent.source)) {
      this.agent.isTablet = true;
    }
  }

  testNginxGeoIP(headers) {
    Object.keys(headers).forEach((key) => {
      if (/^GEOIP/i.test(key)) {
        this.agent.geoIp[key] = headers[key];
      }
    });
  }

  testBot() {
    const isBot = UserAgent.isBotRegExp.exec(this.agent.source.toLowerCase());

    if (isBot) {
      [, this.agent.isBot] = isBot;
    } else if (!this.agent.isAuthoritative) {
      // Test unauthoritative parse for `bot` in UA to flag for bot
      this.agent.isBot = /bot/i.test(this.agent.source);
    }
  }

  testSmartTV() {
    const isSmartTV = new RegExp('smart-tv|smarttv|googletv|appletv|hbbtv|pov_tv|netcast.tv', 'gi').exec(this.agent.source.toLowerCase());

    if (isSmartTV) {
      [, this.agent.isSmartTV] = isSmartTV;
    }
  }

  testAndroidTablet() {
    if (this.agent.isAndroid && !/mobile/i.test(this.agent.source)) {
      this.agent.isAndroidTablet = true;
    }
  }

  testWebkit() {
    if (this.agent.browser === 'unknown' && /applewebkit/i.test(this.agent.source)) {
      this.agent.browser = 'Apple WebKit';
      this.agent.isWebkit = true;
    }
  }

  testElectron() {
    if (UserAgent.isElectronRegExp.test(this.agent.source.toLowerCase())) {
      this.agent.isElectron = true;
      this.agent.electronVersion = RegExp.$1;
      this.agent.isDesktop = true;
    }
  }
}

module.exports = UserAgent;
