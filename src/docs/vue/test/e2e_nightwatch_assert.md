## Nightwatch.js 基本语法

# 　
### 01.编写和运行测试代码
- 以前一篇创建的test_project_sample项目为例，测试代码文件在test_project_sample\test\e2e\specs目录下<br />
- 我们可以自己添加更多的测试代码文件

> 基本格式

```javascript
module.exports = {
'default e2e tests': function (browser) {
  //默认是localhost:8080
  const devServer = browser.globals.devServerURL

  browser
    .url(devServer) //让浏览器加载页面
    .waitForElementVisible('#app', 5000)
    .assert.elementPresent('.hello')
    .assert.containsText('h1', 'Welcome to Your Vue.js App')
    .assert.elementCount('img', 1)
    //结束测试。要结束测试时，务必调用end方法，以结束Selenium会话。 
    .end()
  }
}
```

# 　
### 02.选择器
- Nightwatch中默认使用CSS选择器，你可以通过.useXpath()和.useCss()方法来切换选择器的使用

```javascript
module.exports = {
  'default e2e tests': function (browser) {
    browser
      .useXpath() // every selector now must be xpath
      .click("//tr[@data-recordid]/span[text()='Search Text']")
      .useCss() // we're back to CSS now
      .setValue('input[type=text]', 'nightwatch')
  }
}
```

# 　
### 03.Expect
- Nightwatch在0.7版本中引入的BDD[行为驱动开发（Behavior Driven Development）]风格接口<br />
- 用于对元素进行断言，定义在Nightwatch实例的expect命名空间上。<br />
- 它基于Chai Expect断言库，提供了更高的灵活性，并在经典的断言接口上添加了新的功能。<br />
- 它使用可链接的语言来构造断言，给定由css / xpath选择器指定的元素。<br />
- to、be、been、is、that、which、and、has、have、with、at、does、of 用于增强语法可读性<br />
- 参考 http://nightwatchjs.org/api , http://chaijs.com/api/bdd/ <br />


> #### .equal(value)/.contain(value)/.match(regex)<br /> 

- 用于对元素上的某个目标（属性、元素内文本、CSS属性）进行断言<br />
- 注意：这里所说的“属性”是指input的name、value、id这类原生属性

```javascript
browser.expect.element('#main').text.to.equal('hello world!');
browser.expect.element('#main').text.to.contain('hello');
browser.expect.element('#main').text.to.match(/^hello.*/);
browser.expect.element('#nameinput').value.to.equal('张飞');
browser.expect.element('#main').to.have.css('display').which.equals('block')
//去掉to have which也是可以的，作用不受影响
browser.expect.element('#main').css('display').equals('block')
```

> #### .a(type)/.an(type) 节点类型验证

```javascript
browser.expect.element('#main').is.a('div')
browser.expect.element('#main').is.an('div')
```

> #### .not 表示‘非’

```javascript
browser.expect.element('#main').is.not.a('span')
browser.expect.element('#main').text.not.equal('hello xxxxx!');
```

> #### .attribute(name) 属性检查

```javascript
//验证属性是否存在
browser.expect.element('#main').to.have.attribute('data-xxxx');
//验证属性值
browser.expect.element('#main').to.have.attribute('data-xxxx').equals('1234');
```

> #### .present 检查元素是否存在

```javascript
browser.expect.element('#main').to.be.present;//断言#main存在
browser.expect.element('#main').not.present;  //断言#main不存在
```

> #### .selected 检查（option、input）是否选中

```
browser.expect.element('#main option[value=aaa]').to.be.selected;
```

> #### .visible<br />

- 元素不存在时会报错！！！

```javascript
browser.expect.element('#main').to.not.be.visible;
```

> #### .enabled

```javascript
browser.expect.element('#login_btn').to.be.enabled;
```

> #### .before(ms)/.after(ms)

- 官方说明：These methods perform the same thing which is essentially retrying the assertion for the given amount of time (in milliseconds). before or after can be chained to any assertion and thus adding retry capability.
You can change the polling interval by defining a waitForConditionPollInterval property (in milliseconds) as a global property in your nightwatch.json or in your external globals file. Similarly, a default timeout can be specified as a global waitForConditionTimeout property (in milliseconds).
- 在指定时间内重试断言，直到断言 成功 或 超时
- 很遗憾的是没有在实际使用中体会到before和after的区别

```javascript
browser.expect.element('#weblogin').to.be.enabled.after(5000);
browser.expect.element('#weblogin').to.be.enabled.before(5000);
```


# 　
### 04.Assert、Verify经典语法
-经典的assert、verify库在Nightwatch中依然是可用的。
- .assert - 发生错误时结束测试，跳过其它断言。
- .verify - 发生错误时，仅写错误日志，并继续运行测试。
- 自动重试失败的断言：您可以告诉Nightwatch在测试运行者放弃测试失败之前，自动重试失败的断言，直到达到给定的超时。这可以通过在全局文件中设置属性retryAssertionTimeout（以毫秒为单位）来完成。
- Nightwatch拓展了Node.js Assert模块，因此你可以在测试代码中使用其所有可用方法<br />
- Assert命名空间下有一些语法是和Expect中作用相似的，下面的例子中将列出来<br /> 
- Assert语法中，message是可选的，如果你需要自定义错误信息的话

> #### .attributeContains\attributeEquals(selector, attribute, expected, message) 属性值断言

```javascript
//没看出来attributeContains和attributeEquals的区别
//Expect：browser.expect.element('#main').to.have.attribute('data-xxxx').equals('1234');
browser.assert.attributeContains('#main', 'data-xxxx', '1234');
browser.assert.attributeEquals('#main', 'data-xxxx', '1234');
```

> #### .containsText(selector, expected) 文本内容断言

```javascript
//Expect：browser.expect.element('#main').text.to.contain('hello');
browser.assert.containsText("#main", "hello");
```

> #### .cssClassPresent(selector, className, message) class存在断言

```javascript
//Expect：没找到作用相同的直接写法
browser.assert.containsText("#main", "myClassName");
```

> #### .cssClassNotPresent(selector, className, message) class不存在断言

```javascript
//Expect：没找到作用相同的直接写法
browser.assert.cssClassNotPresent("#main", "myClassName");
```

> #### .cssProperty(selector, property, expected, message) CSS属性断言

```javascript
//Expect：browser.expect.element('#main').css('display').equals('block')
browser.assert.cssProperty("#main", "display", "block");
```

> #### .elementPresent(selector, message) 元素存在断言

```javascript
//Expect：browser.expect.element('#main').to.be.present;
browser.assert.elementPresent("#main");
```

> #### .elementNotPresent(selector, message) 元素不存在断言

```javascript
//Expect：browser.expect.element('#main').not.present;
browser.assert.elementNotPresent(".should_not_exist");
```

> #### .hidden(selector, message) 元素不可见断言<br />

- 元素不存在时会报错！！！

```javascript
//Expect：browser.expect.element('#main').to.not.be.visible;
browser.assert.hidden("#main")
```

> #### .visible(selector, message) 元素可见断言<br />

- 元素不存在时会报错！！！

```javascript
//Expect：browser.expect.element('#main').to.be.visible;
browser.assert.visible("#main");
```

> #### .title(text, message) 页面标题断言（document.title）

```javascript
browser.assert.title("Nightwatch.js");
```

> #### .urlContains(keyword, message) Url包含内容断言

```javascript
browser.assert.urlContains('google');
```

> #### .urlEquals(expected, message) Url断言

```javascript
browser.assert.urlEquals('http://www.google.com');
```

> #### .value(selector, expected, message) value值断言

```javascript
//Expect：browser.expect.element('#nameinput').value.to.equal('张飞')
browser.assert.value("form.login input[type=text]", "username");
```

> #### .valueContains(selector, expected, message) value值包含断言

```javascript
//Expect：browser.expect.element('#nameinput').value.to.contain('张飞')
browser.assert.valueContains("form.login input[type=text]", "username");
```

> #### .verify和.assert

```javascript
//.assert和.verify的语法是完全相同的
//区别在于，verify断言失败后仍然会继续后面的测试，而assert则会终止测试
browser.verify.attributeContains('#main', 'data-xxxx', '12346');
browser.assert.attributeContains('#main', 'data-xxxx', '12345');
```

# 　
### 05.在浏览器中执行JS代码

- 由于Nightwatch封装的语法并不能满足所有需求，这种方式就非常有用<br />
- browser.execute(function, [params...], callback)

```javascript
module.exports = {
  //测试过程名称：function
  '页面加载': function (browser) {
    const userInfo = browser.globals.userInfo

    //让浏览器加载页面
    browser.url(browser.globals.devServerURL)
    //在浏览器窗口下执行js代码
    browser.execute(
      function (userInfo) { //要执行的代码
        //这里的this就是window
        //通过写localStorage模拟了一个用户登陆状态
        this.localStorage.setItem('payUserInfo', userInfo)
        //完成登陆后跳转到一个页面
        this.location.href = browser.globals.devServerURL + '#/account/user'
        return true;
      },
      [userInfo],             //传入参数
      function (result) {  }  //回调
    )

    //等待一个元素显示出来，超时时间指定为5000
    browser.waitForElementVisible('.page-collectmoney-amount', 5000)
  },

  
  '结束': function (browser) {
    //暂停5秒
    browser.pause(5000)
    //结束测试 关闭浏览器
    browser.end()
  }
}
```


# 　
### 06.Commands
- Nightwatch中封装了许多页面对象操作，可以直接使用它们<br />
- 内容比较多，就不一一列举了

> #### 表单操作

```javascript
//设置值
browser.setValue('#loginform input[type=email]', 'helloklf@outlook.com');
//提交表单
browser.submitForm('form.login');
```

> #### cookie操作

```javascript
//获取cookie
browser.getCookie(name, function callback(result) {
  this.assert.equal(result.value, '123456');
  this.assert.equals(result.name, 'test_cookie');
});
browser.getCookies(function callback(result) {
  this.assert.equal(result.value.length, 1);
  this.assert.equals(result.value[0].name, 'test_cookie');
});
//设置cookie
browser.setCookie({
  name     : "test_cookie",
  value    : "test_value",
  path     : "/", (Optional)
  domain   : "example.org", (Optional)
  secure   : false, (Optional)
  httpOnly : false, // (Optional)
  expiry   : 1395002765 // (Optional) time in seconds since midnight, January 1, 1970 UTC
});
```

> #### 动态添加Js引入

```javascript
//注入js
this.injectScript("{script-url}", function() {
  // we're all done here.
});
```


# 　
### 07.UnitTest
- 虽然Vue-cli中把Nightwatch.js用作E2E测试框架，但实际上Nightwatch.js也是可以做单元测试的<br />
- 下面可以通过两个简单的例子来看看<br />
- 详情可参考 http://nightwatchjs.org/guide/#unit-testing<br />
- 但是，Vue-cli默认的配置是无法使用Nightwatch进行Vue组件测试的

```javascript
module.exports = {
  testA: function(browser) {
    //SUCCESS
    browser.assert.equal(999 + 1, 1000)
    //ERROR
    browser.assert.equal(998 + 1, 1000)
  },
  '结束': function(browser){
    //老规矩，关闭浏览器窗口，避免其它测试代码无法继续运行
    browser.end()
  }
}
```

> 当然，上面这种测试999+1是否等于1000的例子是毫无意义的，因为并不是我们要测试的代码<br />
> 下面我们通过一段测试代码，来测试一个递增求和的方法，是否能够正确计算结果

```javascript
//测试代码内容
import myCode from '../../../src/js/myCode.js'
module.exports = {
  sumTest: function(browser) {
    browser.assert.equal(myCode.sum(0, 100), 5050)
  },
  '结束': function(browser){
    browser.end()
  }
}
```

```javascript
//myCode.js代码内容
export default {
  sum(min, max) {
    let total = 0;
    for (let i = min; i <= max; i++) {
      total += i
    }
    return total
  }
}
```

# &nbsp;
### 08.测试钩子
- Nightwatch提供 brefore/after 和beforeEach/afterEach 用于测试<br />
- brefore和after分别在测试套件执行前后运行，而beforeEach和afterEach每个测试（测试步骤）前后运行<br />
- 所有方法都有Nightwatch实例作为参数传递


```javascript
module.exports = {
  before : function(browser) { console.log('Setting up...'); },
  after : function(browser) { console.log('Closing down...'); },
  beforeEach : function(browser) {  },
  afterEach : function() {  },
  'step one' : function (browser) {  },
  'step two' : function (browser) { browser.end(); }
};
```

> 在上面的例子中，方法调用的顺序如下：before(), beforeEach(), "step one", afterEach(), beforeEach(), "step two", afterEach(), after()<br />
> 出于向后兼容性的原因，afterEach钩子只能以异步形式接收浏览器对象 -  afterEach（browser，done）{..}


# &nbsp;
### 09.异步的测试钩子
- brefore/after 和beforeEach/afterEach均可以执行异步操作<br />
- 此时，需要传递第二个参数done作为完成回调，如果不回调将会超时错误

```javascript
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
```


# &nbsp;
### 10.总结
- Vue-cli所推荐的E2E测试框架Nightwatch.js使用难度不大，也很便捷<br />
- 官方文档已经比较完善<br />
- 适用于模拟用户操作和页面交互测试，属于黑盒测试<br />

