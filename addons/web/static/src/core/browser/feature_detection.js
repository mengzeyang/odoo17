/** @odoo-module **/

import { browser } from "./browser";

// -----------------------------------------------------------------------------
// Feature detection
// -----------------------------------------------------------------------------

/**
 * True if the browser is based on Chromium (Google Chrome, Opera, Edge).
 */
export function isBrowserChrome() {
    return /Chrome/i.test(browser.navigator.userAgent);
}

export function isBrowserFirefox() {
    return /Firefox/i.test(browser.navigator.userAgent);
}

export function isAndroid() {
    return /Android/i.test(browser.navigator.userAgent);
}

export function isIOS() {
    return (
        /(iPad|iPhone|iPod)/i.test(browser.navigator.userAgent) ||
        (browser.navigator.platform === "MacIntel" && maxTouchPoints() > 1)
    );
}

export function isOtherMobileOS() {
    return /(webOS|BlackBerry|Windows Phone)/i.test(browser.navigator.userAgent);
}

export function isMacOS() {
    return /Mac/i.test(browser.navigator.userAgent);
}

export function isMobileOS() {
    return isAndroid() || isIOS() || isOtherMobileOS();
}

export function isIosApp() {
    return /OdooMobile \(iOS\)/i.test(browser.navigator.userAgent);
}

export function isAndroidApp() {
    return /OdooMobile.+Android/i.test(browser.navigator.userAgent);
}

export function hasTouch() {
    return browser.ontouchstart !== undefined;
}

export function maxTouchPoints() {
    return browser.navigator.maxTouchPoints || 1;
}
