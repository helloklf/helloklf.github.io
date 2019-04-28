module.exports = {
  before : function(browser, done) {
    setTimeout(() => {
      console.log('Setting up...')
      done()
    }, 2000);
  },
  after : function(browser, done) {
    setTimeout(() => {
      console.log('Setting down...')
      done()
    }, 2000);
  },
  beforeEach : function(browser, done) {
    setTimeout(() => {
      console.log('beforeEach...')
      done()
    }, 2000);
  },
  afterEach : function(browser, done) {
    setTimeout(() => {
      console.log('afterEach...')
      done()
    }, 2000);
  },
  'step one' : function (browser) {
  },
  'step two' : function (browser) {
    browser.end();
  }
};