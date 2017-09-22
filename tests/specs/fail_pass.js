const chai = require('chai');

chai.config.truncateThreshold = 0;
global.expect = chai.expect;

describe('Test', () => {
  beforeEach(() => {
  });

  it('fail', () => {
    browser.url('http://exoomple.com/fail');
    expect(1).to.equal(2);
  });

  it('pass', () => {
    browser.url('http://exoomple.com/pass');
    expect(1).to.equal(1);
  });

});
