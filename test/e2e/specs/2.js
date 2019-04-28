module.exports = {
  'Assert Test Sample': function (browser) {
    browser.execute(function(){
      var input = document.createElement('input')
      input.id = 'nameinput'
      input.value = '张飞'

      var main = document.createElement('div')
      main.id = "main"
      main.innerHTML = "hello world!"
      main.setAttribute('data-xxxx', '1234')
      setTimeout(() => {
        main.innerHTML = 'The Night Watch'
      }, 1000);
      setTimeout(() => {
        main.innerHTML = 'hello world!'
      }, 3000);

      document.body.appendChild(main)
      document.body.appendChild(input)
    }, [], function(){})
    
    browser.dbClick('#main');
    var main = browser.expect.element('#main');

    main.present.after(5000);
    main.text.to.equal('hello world!');
    main.text.to.contain('hello');
    browser.expect.element('#main').text.to.match(/^hello.*/);
    browser.expect.element('#main').css('display').equals('block')
    browser.expect.element('#nameinput').value.to.equal('张飞');
    browser.expect.element('#main').is.a('div')
    browser.expect.element('#main').is.an('div')
    browser.expect.element('#main').is.not.a('span')
    browser.expect.element('#main').text.not.equal('hello xxxxx!');
    browser.expect.element('#main').to.have.attribute('data-xxxx');
    browser.expect.element('#main').to.have.attribute('data-xxxx').equals('1234');

    browser.expect.element('#main').text.to.contain('The Night Watch').before(1000);
    browser.expect.element('#main').text.to.not.contain('The Night Watch').after(5000);
    
    browser.expect.element('#main').to.have.attribute('data-xxxx').equals('1234');
    browser.assert.attributeContains('#main', 'data-xxxx', '1234');
    browser.assert.attributeContains('#main', 'data-xxxx', '1234');

    browser.assert.containsText("#main", "hello");


    //browser.verify.attributeContains('#main', 'data-xxxx', '12346');
    //browser.assert.attributeContains('#main', 'data-xxxx', '12345');

    //browser.assert.hidden(".should_not_be_visible")
    

    browser.end()
  },
  'Assert Test Sample2': function (browser) {
    browser.end()
  }
}