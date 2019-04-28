import myCode from '../../../src/js/myCode.js'

module.exports = {
  sumTest: function(browser) {
    assert(myCode.sum(0, 100), 5050)
    browser.assert.equal(myCode.sum(0, 100), 5050)
  },
  'test Utils2' : function(browser) {
    browser.assert.equal(myCode.sum(0, 100), 5050)
  },
  '结束': function(browser){
    browser.end()
  }
}