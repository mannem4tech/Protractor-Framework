import { browser, Config } from 'protractor';
import * as path from 'path';
import * as runid from 'shortid';
import * as reporter from 'cucumber-html-reporter';
import chai = require('chai');
import chaiAsPromised = require('chai-as-promised');
chai.use(chaiAsPromised);
let runID = runid.generate().toUpperCase();
export let config: Config = {
  directConnect: false,
  SELENIUM_ADDRESS: "http://hub-cloud.browserstack.com/wd/hub",
  ignoreUncaughtExceptions: true,
  // SELENIUM_PROMISE_MANAGER: true,
  capabilities: {
    browserName: 'chrome',
    args: [
      '--incognito'
    ]
  },
  onPrepare: (): any => {
    browser.waitForAngularEnabled(false);
  },
  beforeLaunch: (): any => { },
  afterLaunch: async (): Promise<any> => {
    let options = {
      theme: 'bootstrap',
      jsonFile: `${path.join(__dirname, '/..')}/reports/json/${runID}_report.json`,
      output: `${path.join(__dirname, '/..')}/reports/html/${runID}_report.html`,
      reportSuiteAsScenarios: true,
      scenarioTimestamp: true,
      launchReport: true,
      storeScreenShots: true,
      columnLayout: 1
    };
    reporter.generate(options);
  },
  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  specs: [
    '../features/*.feature',
  ],
  keepAlive: true,
  cucumberOpts: {
    'require-module': path.join(__dirname, '/..') + '/node_modules/ts-node/register',
    format: `json:reports/json/${runID}_report.json`,
    require: [
      path.join(__dirname, '/..') + '/steps/*.ts',
    ],
    tags: '@Tag or @auto'
  }
}