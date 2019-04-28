<template>
  <div class="fzs-ui-list-double-column">
    <slot></slot>
  </div>
</template>

<style lang="less">
@import '../base/base.less';
.fzs-ui-list-double-column {
  font-size: @fontSize;
}
.fzs-ui-list-double-column + .fzs-ui-list-double-column {
  >.fzs-ui-list-double-column-item:first-child {
    border-top: none;
  }
}
</style>

