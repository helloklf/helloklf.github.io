## E2E Nightwatch.js 经典案例
- 前面几篇文档概述了许多框架理念也列举了各种语法，下面通过几个经典的示例来展示一下实际使用场景


# &nbsp;
> ### 01.表单验证功能测试

- 假定有如下页面（使用Vue.js语法，为了控制篇幅只列出了Html部分，Script部分自行脑补）<br />
- 我们需要检验在输入内容前后“登陆”按钮可点击状态是否正确，以及错误信息是否正确显示

```html
<div id="loginform">
  <input type="email" v-model="email" />
  <input type="password" v-model="password" />
  <button :disable="inputInvalid">登陆</button>
  <div v-show="inputInvalid" class="form-invalid-error">{{errorMessage}}</div>
</div>
```

<div id="loginform">
  <input type="email" v-model="email" />
  <input type="password" v-model="password" />
  <button :disable="inputInvalid">登陆</button>
</div>

# &nbsp;
- 那么，我们的测试代码就可以如下所示

```javascript
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
```

