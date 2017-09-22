exports.config = {
  user: process.env.BROWSERSTACK_USERNAME || 'BROWSERSTACK_USERNAME',
  key: process.env.BROWSERSTACK_ACCESS_KEY || 'BROWSERSTACK_ACCESS_KEY',

  updateJob: false,
  specs: [
    './tests/specs/fail_pass.js',
    './tests/specs/pass_fail.js'
  ],
  exclude: [],
  services  : ['browserstack'],

  capabilities: [{
    browser: 'chrome',
    build: `webdriver-browserstack${(new Date().getTime()).toString(36)}`
  }],

  logLevel: 'verbose',
  coloredLogs: true,
  screenshotPath: './errorShots/',
  baseUrl: '',
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,

  framework: 'mocha',
  mochaOpts: {
      ui: 'bdd',
      timeout: 300000
  },

  beforeTest(test) {
  return new Promise((resolve) => {
    browser.desiredCapabilities.name = test.fullTitle;
    resolve();
  });
},

beforeHook() {
  return new Promise((resolve) => {
    // if (global.debug) { browser.debug(); }

    if (global.notFirstSpec) {
      browser.reload();
    }
    global.notFirstSpec = true;
    resolve();
  });
}
}
