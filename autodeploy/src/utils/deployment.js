/* global __APP_VERSION__ */

export const checkVersion = () => {
    const currentVersion = __APP_VERSION__;
    const storedVersion = localStorage.getItem('app_version');

    // If it's the very first load, just set it
    if (!storedVersion) {
        localStorage.setItem('app_version', currentVersion);
        return { isNew: false, version: currentVersion };
    }

    // If versions differ
    if (currentVersion !== storedVersion) {
        // Update storage
        localStorage.setItem('app_version', currentVersion);
        return { isNew: true, version: currentVersion, oldVersion: storedVersion };
    }

    return { isNew: false, version: currentVersion };
};
