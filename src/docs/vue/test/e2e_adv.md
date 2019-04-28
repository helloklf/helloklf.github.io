## Nightwatch.js 例子




```html
<template>
  <div class="money-view">
    <span class="unit">{{unit}}</span>
    <span class="yuan">{{yuan}}</span>
    <span class="jiaofen">{{jiaofen}}</span>
  </div>
</template>
<style lang='scss'>
.money-view{
  font-size: 2em;
  .unit{ font-size:0.8em; }
  .yuan { color: #ff6600; }
  .jaofen { color: #ffbb00; }
}
</style>

<script>
export default {
  props: {
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      money: (this.value || '').replace(/\s/g, '')
    }
  },
  computed: {
    unit () {
      return (isNaN(this.money[0])) ? this.money[0] : '￥'
    },
    yuan () {
      return this.money.substr((isNaN(this.money[0]) ? 1 : 0), (this.money.includes('.') ? (this.money.indexOf('.') - (isNaN(this.money[0]) ? 1 : 0)) : this.money.length))
    },
    jiaofen () {
      if (this.money.includes('.')) {
        let value = this.money.substr(this.money.indexOf('.'), 3)
        while (value.length < 3) {
          value = '' + value + '0'
        }
      } else {
        return '.00'
      }
    }
  }
}
</script>
```

