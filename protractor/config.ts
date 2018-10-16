import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {
  onPrepare: () => {
    reporter();
    browser.ignoreSynchronization = true;
  },
  framework: 'jasmine',
  specs: ['../test/**/*.spec.js'],
  getPageTimeout: 30000,
  SELENIUM_PROMISE_MANAGER: false,
  jasmineNodeOpts: {
    defaultTimeoutInterval: 120000
  }
};
