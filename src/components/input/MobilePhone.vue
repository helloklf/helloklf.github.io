<template>
  <div class="fzs-ui-input-mobile-phone">
    <input type="text" placeholder="请输入内容" />
  </div>
</template>
<style lang="less">
@import '../base/base.less';

.fzs-ui-input-mobile-phone {
  border: 1px solid #eee;
  font-size: @fontSize;
  input {
    width: 100%;
    display: block;
    height: @fontSize * 3;
    box-sizing: border-box;
    padding: 0 @fontSize;
    margin: 0;
    line-height: @fontSize * 3;
    font-size: @fontSize;
    border: none;
    outline: none;
    box-shadow: none;
    color: #555;
  }
}
</style>

