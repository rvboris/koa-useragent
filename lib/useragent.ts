const useragent = require('express-useragent');

export default class UserAgent implements ExpressUseragent.UserAgent {
    get isEpiphany() {
        return this.agent.isEpiphany;
    }

    get isDesktop(): boolean {
        return this.agent.isDesktop;
    }

    get isWindows(): boolean {
        return this.agent.isWindows;
    }

    get isWindowsPhone(): boolean {
        return this.agent.isWindowsPhone;
    }

    get isLinux(): boolean {
        return this.agent.isLinux;
    }

    get isLinux64(): boolean {
        return this.agent.isLinux64;
    }

    get isMac(): boolean {
        return this.agent.isMac;
    }

    get isChromeOS(): boolean {
        return this.agent.isChromeOS;
    }

    get isBada(): boolean {
        return this.agent.isBada;
    }

    get isSamsung(): boolean {
        return this.agent.isSamsung;
    }

    get isRaspberry(): boolean {
        return this.agent.isRaspberry;
    }

    // @types/express-useragent's type definition is not so correct
    get isBot(): any {
        return this.agent.isBot;
    }

    get isCurl(): boolean {
        return this.agent.isCurl;
    }

    get isAndroidTablet(): boolean {
        return this.agent.isAndroidTablet;
    }

    get isWinJs(): boolean {
        return this.agent.isWinJs;
    }

    get isKindleFire(): boolean {
        return this.agent.isKindleFire;
    }

    get isSilk(): boolean {
        return this.agent.isSilk;
    }

    get isCaptive(): boolean {
        return this.agent.isCaptive;
    }

    get isSmartTV(): boolean {
        return this.agent.isSmartTV;
    }

    get silkAccelerated(): boolean {
        return this.agent.silkAccelerated;
    }

    get SilkAccelerated(): boolean {
        return this.agent.silkAccelerated;
    }

    get browser(): string {
        return this.agent.browser;
    }

    // @types/express-useragent's type definition is not so correct
    get version(): any {
        return this.agent.version;
    }

    get os(): string {
        return this.agent.os;
    }

    get platform(): string {
        return this.agent.platform;
    }

    get geoIp(): any {
        return this.agent.geoIp;
    }

    get source(): string {
        return this.agent.source;
    }

    private readonly agent: any

    constructor(source = 'unknown') {
        this.agent = useragent.parse(source);

        return this.agent;
    }

    get isFacebook() {
        return this.agent.isFacebook;
    }

    get isAmaya() {
        return this.agent.isAmaya;
    }

    get isFlock() {
        return this.agent.isFlock;
    }

    get isSeaMonkey() {
        return this.agent.isSeaMonkey;
    }

    get isOmniWeb() {
        return this.agent.isOmniWeb;
    }

    get isKonqueror() {
        return this.agent.isKonqueror;
    }

    get isChrome() {
        return this.agent.isChrome;
    }

    get isWebkit() {
        return this.agent.isWebkit;
    }

    get isFirefox() {
        return this.agent.isFirefox;
    }

    get isSafari() {
        return this.agent.isSafari;
    }

    get isIECompatibilityMode() {
        return this.agent.isIECompatibilityMode;
    }

    get isEdge() {
        return this.agent.isEdge;
    }

    get isIE() {
        return this.agent.isIE;
    }

    get isOpera() {
        return this.agent.isOpera;
    }

    get isBlackberry() {
        return this.agent.isBlackberry;
    }

    get isMobile() {
        return this.agent.isMobile;
    }

    get isTablet() {
        return this.agent.isTablet;
    }

    get isiPad() {
        return this.agent.isiPad;
    }

    get isiPod() {
        return this.agent.isiPod;
    }

    get isiPhone() {
        return this.agent.isiPhone;
    }

    get isAndroid() {
        return this.agent.isAndroid;
    }

    get isAuthoritative() {
        return this.agent.isAuthoritative;
    }

    get isAlamoFire() {
        return this.agent.isAlamoFire;
    }

    get isPhantomJS() {
        return this.agent.isPhantomJS;
    }
}
