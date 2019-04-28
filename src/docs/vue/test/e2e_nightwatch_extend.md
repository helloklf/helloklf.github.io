## 拓展Nightwatch
- Nightwatch允许我们自定义Report、Command、Assert

# &nbsp;
### Command
- 下面示例，是创建一个模拟双击的Command

> nightwatch.conf.js添加配置

```javascript
custom_commands_path: ['test/e2e/custom-commands']
```

> 创建 dbClick.js 在test/e2e/custom-commands 目录下

```javascript
exports.command = function (selector, callback) {
  console.log('dbClick');
  //moveToElement和doubleClick都是内置的command
  //moveToElement(selector, offsetX, offsetY) 用于移动鼠标到指定元素
  return this.moveToElement(selector, 5, 5).doubleClick()
}
```

> 使用自定义的dbClick

```javascript
browser.dbClick('#main');
```


# &nbsp;
### Assertions
- Vue-cli创建项目时，自动给我们创建了一个拓展，可以直接拿出来看看

> nightwatch.conf.js添加配置

```javascript
custom_assertions_path: ['test/e2e/custom-assertions']
```

> 创建 elementCount.js 在test/e2e/custom-assertions 目录下

```javascript
exports.assertion = function (selector, count) {
  //测试输出信息
  this.message = 'Testing if element <' + selector + '> has count: ' + count
  //执行断言的值。如果定义了一个函数，将使用它的结果。
  this.expected = count
  //执行实际断言的方法。它是以值方法的结果作为参数来调用的。
  this.pass = function (val) {
    return val === this.expected
  }
  //返回断言上使用的值的方法。它是根据命令的结果调用的。
  this.value = function (res) {
    return res.value
  }
  //执行协议命令/动作，其结果通过回调参数传递给值方法。
  this.command = function (cb) {
    var self = this
    return this.api.execute(function (selector) {
      return document.querySelectorAll(selector).length
    }, [selector], function (res) {
      cb.call(self, res)
    })
  }
  return this;
}
```

> 使用自定义的elementCount断言

```javascript
browser.assert.elementCount('img', 1)
```


# &nbsp;
### Reporter
- 还没有看懂