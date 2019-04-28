<template>
  <button class="fzs-ui-button-single-row" type="button">
    <slot></slot>
  </button>
</template>
<style lang="less">
@import '../base/base.less';

@bgColor: darkcyan;
.fzs-ui-button-single-row {
  box-sizing: border-box;
  display: block;
  width: 100%;
  background: @bgColor;
  font-size: @fontSize;
  border-radius: @fontSize * 3;
  border: 1px solid @bgColor;
  line-height: @fontSize * 3;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;
  padding: 0 @fontSize * 1.5;
  height: @fontSize * 3;
  color: #fff;
  border-radius: @fontSize * 0.2;
  transition: all 0.3s;
  margin: 0;

  &:active {
    opacity: 0.8;
    transform: translate(0, @fontSize * 0.1);
    box-shadow: 0 0 5px #ccc;
  }
  &:disabled {
    background: #eee;
    color: #ccc;
    border-color: #ccc;
  }
}
</style>
