module.exports = {
  '基本语法': function (browser) {
    const devServer = browser.globals.devServerURL
    browser.url(devServer)
    //#main元素中的 文本 是 hello world!
    browser.expect.element('#main').text.to.equal('hello world!');
    //#main元素中的 文本 包含 hello
    browser.expect.element('#main').text.to.contain('hello');
    //#main元素显示位block
    browser.expect.element('#main').to.have.css('display').which.equals('block');
  },
  '结束': function (browser) {
    browser.end()
  }
}