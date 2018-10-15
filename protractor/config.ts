import { Config, browser } from 'protractor';
import { reporter } from './helpers/reporter';

export const config: Config = {
  onPrepare: () => {
    reporter();
    browser.ignoreSynchronization = true;
  },
  framework: 'jasmine',
  specs: [ '../test/spec.js' ],
  SELENIUM_PROMISE_MANAGER: false
};
