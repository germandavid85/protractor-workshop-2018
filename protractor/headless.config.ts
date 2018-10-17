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
  SELENIUM_PROMISE_MANAGER: false,
  getPageTimeout: 30000,
  capabilities: {
    browserName: 'chrome',
    chromeOptions: {
      args: ['--headless', '--disable-gpu', '--user-agent', 'New User Agent']
    }
  },
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  }
};
