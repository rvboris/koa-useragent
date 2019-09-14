import useragent from 'express-useragent';

// express-useragent's type definition is not so correct yet, so use a modified type for now
type ModifiedUserAgent = ExpressUseragent.UserAgent & {
  SilkAccelerated: boolean;
  isFacebook: boolean;
  isAuthoritative: boolean;
  isAlamoFire: boolean;
  isPhantomJS: boolean;
};

export default class UserAgent implements ExpressUseragent.UserAgent {
  private readonly _agent: ModifiedUserAgent;

  public constructor(source = 'unknown') {
    this._agent = useragent.parse(source) as ModifiedUserAgent;
  }

  public get isEpiphany(): boolean {
    return this._agent.isEpiphany;
  }

  public get isDesktop(): boolean {
    return this._agent.isDesktop;
  }

  public get isWindows(): boolean {
    return this._agent.isWindows;
  }

  public get isWindowsPhone(): boolean {
    return this._agent.isWindowsPhone;
  }

  public get isLinux(): boolean {
    return this._agent.isLinux;
  }

  public get isLinux64(): boolean {
    return this._agent.isLinux64;
  }

  public get isMac(): boolean {
    return this._agent.isMac;
  }

  public get isChromeOS(): boolean {
    return this._agent.isChromeOS;
  }

  public get isBada(): boolean {
    return this._agent.isBada;
  }

  public get isSamsung(): boolean {
    return this._agent.isSamsung;
  }

  public get isRaspberry(): boolean {
    return this._agent.isRaspberry;
  }

  public get isBot(): boolean {
    return !!this._agent.isBot;
  }

  public get isCurl(): boolean {
    return this._agent.isCurl;
  }

  public get isAndroidTablet(): boolean {
    return this._agent.isAndroidTablet;
  }

  public get isWinJs(): boolean {
    return this._agent.isWinJs;
  }

  public get isKindleFire(): boolean {
    return this._agent.isKindleFire;
  }

  public get isSilk(): boolean {
    return this._agent.isSilk;
  }

  public get isCaptive(): boolean {
    return this._agent.isCaptive;
  }

  public get isSmartTV(): boolean {
    return this._agent.isSmartTV;
  }

  public get silkAccelerated(): boolean {
    return this._agent.silkAccelerated;
  }

  public get SilkAccelerated(): boolean {
    return this._agent.SilkAccelerated;
  }

  public get browser(): string {
    return this._agent.browser;
  }

  public get version(): string {
    return `${this._agent.version}`;
  }

  public get os(): string {
    return this._agent.os;
  }

  public get platform(): string {
    return this._agent.platform;
  }

  public get geoIp(): string {
    return this._agent.geoIp;
  }

  public get source(): string {
    return this._agent.source;
  }

  public get isFacebook(): boolean {
    return this._agent.isFacebook;
  }

  public get isAmaya(): boolean {
    return this._agent.isAmaya;
  }

  public get isFlock(): boolean {
    return this._agent.isFlock;
  }

  public get isSeaMonkey(): boolean {
    return this._agent.isSeaMonkey;
  }

  public get isOmniWeb(): boolean {
    return this._agent.isOmniWeb;
  }

  public get isKonqueror(): boolean {
    return this._agent.isKonqueror;
  }

  public get isChrome(): boolean {
    return this._agent.isChrome;
  }

  public get isWebkit(): boolean {
    return this._agent.isWebkit;
  }

  public get isFirefox(): boolean {
    return this._agent.isFirefox;
  }

  public get isSafari(): boolean {
    return this._agent.isSafari;
  }

  public get isIECompatibilityMode(): boolean {
    return this._agent.isIECompatibilityMode;
  }

  public get isEdge(): boolean {
    return this._agent.isEdge;
  }

  public get isIE(): boolean {
    return this._agent.isIE;
  }

  public get isOpera(): boolean {
    return this._agent.isOpera;
  }

  public get isBlackberry(): boolean {
    return this._agent.isBlackberry;
  }

  public get isMobile(): boolean {
    return this._agent.isMobile;
  }

  public get isTablet(): boolean {
    return this._agent.isTablet;
  }

  public get isiPad(): boolean {
    return this._agent.isiPad;
  }

  public get isiPod(): boolean {
    return this._agent.isiPod;
  }

  public get isiPhone(): boolean {
    return this._agent.isiPhone;
  }

  public get isAndroid(): boolean {
    return this._agent.isAndroid;
  }

  public get isAuthoritative(): boolean {
    return this._agent.isAuthoritative;
  }

  public get isAlamoFire(): boolean {
    return this._agent.isAlamoFire;
  }

  public get isPhantomJS(): boolean {
    return this._agent.isPhantomJS;
  }
}
