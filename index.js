// index.js for dynamic-theme-switcher
import debounce from 'lodash.debounce';
import { applyPolyfill } from 'css-vars-ponyfill';

class ThemeSwitcher {
  constructor() {
    this.currentTheme = null;
  }

  /**
   * Initialize the theme switcher with the default theme.
   * @param {Object} defaultTheme - The default theme variables.
   */
  init(defaultTheme) {
    this.currentTheme = defaultTheme;
    this.applyTheme(defaultTheme);
  }

  /**
   * Apply the provided theme variables to the document root.
   * @param {Object} themeVariables - The theme variables to apply.
   */
  applyTheme(themeVariables) {
    const root = document.documentElement;
    Object.keys(themeVariables).forEach(key => {
      root.style.setProperty(`--${key}`, themeVariables[key]);
    });

    // Apply polyfill for older browsers
    applyPolyfill();
  }

  /**
   * Switch to the provided theme with a debounce to prevent rapid changes.
   * @param {Object} themeVariables - The theme variables to switch to.
   */
  switchTheme(themeVariables) {
    debounce(() => {
      this.applyTheme(themeVariables);
    }, 300)();
  }
}

export default new ThemeSwitcher();
