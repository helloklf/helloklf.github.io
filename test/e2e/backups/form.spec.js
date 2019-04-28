module.exports = {
  '页面加载和表单测试': function (browser) {
    const devServer = browser.globals.devServerURL    
    browser.url(`${devServer}`)
    //要求2秒内页面加载出来
    browser.expect.element('#loginform').present.after(2000)
    //验证提交按钮是否处于不可点击状态
    browser.element('#loginform button').is.not.enabled

    //模拟输入无效的邮箱地址
    browser.setValue('#loginform input[type=email]', 'helloklf@@@outlook.com')
    //验证错误提示是否错误显示
    browser.expect.element('#loginform .form-invalid-error').is.visible.after(500)
    //验证错误提示是否错误显示内容是否正确
    browser.expect.element('#loginform .form-invalid-error').text.to.match(/.*无效.*/i)
    //验证提交按钮是否处于不可点击状态
    browser.element('#loginform button').is.not.enabled

    //模拟输入有效的邮箱地址
    browser.setValue('#loginform input[type=email]', 'helloklf@outlook.com')
    //检查是否自动隐藏错误信息
    browser.expect.element('#loginform .form-invalid-error').is.not.visible.after(500)
    //验证提交按钮是否处于不可点击状态
    browser.element('#loginform button').is.not.enabled

    //模拟输入长度无效的密码
    browser.setValue('#loginform input[type=password]', 'asdf')
    //验证错误提示是否错误显示
    browser.expect.element('#loginform .form-invalid-error').is.visible.after(500)
    //验证错误提示是否错误显示内容是否正确
    browser.expect.element('#loginform .form-invalid-error').text.to.match(/.*至少6位.*/i)
    //验证提交按钮是否处于不可点击状态
    browser.element('#loginform button').is.not.enabled

    //模拟输入有效的密码    
    browser.setValue('#loginform input[type=password]', 'asdf1234')
    browser.expect.element('#loginform .form-invalid-error').is.not.visible.after(500)
    
    //所有输入都已有效，判断是否已经可以点击提交按钮
    browser.element('#loginform button').is.enabled
  },
  
  '结束': function (browser) {
    browser.end()
  }
}