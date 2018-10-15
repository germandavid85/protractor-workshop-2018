import { Config, browser } from 'protractor';

export const config: Config = {
  onPrepare: () => {
    browser.ignoreSynchronization = true;
  },
  framework: 'jasmine',
  specs: [ '../test/spec.js' ],
  seleniumAddress: 'http://localhost:4444/wd/hub'
};
