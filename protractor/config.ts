import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {
  onPrepare: () => {
    reporter();
    browser.ignoreSynchronization = true;
    browser.manage().timeouts().implicitlyWait(0);
  },
  framework: 'jasmine',
  specs: ['../test/**/*.spec.js'],
  getPageTimeout: 30000,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['disable-infobars=true', '--window-size=800,600'],
      prefs: { credentials_enable_service: false }
    }
  },
  SELENIUM_PROMISE_MANAGER: false,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  }
};
