const { AwesomeReport } = require('jasmine-awesome-report');
import { SpecReporter } from 'jasmine-spec-reporter';

export let reporter = () => {
  jasmine.getEnv().addReporter(new SpecReporter({
    spec: {
      displayStacktrace: true
    }
  }));

  jasmine.getEnv().addReporter(AwesomeReport.getReport({
    fullPath: 'awesome-report',
    fileName: 'report',
    merge: true
  }));
};
