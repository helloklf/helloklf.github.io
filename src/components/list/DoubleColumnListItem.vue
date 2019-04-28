<template>
  <div class="fzs-ui-list-double-column-item">
    <span class="letf-text">{{title}}</span>
    <span class="right-text">{{text || '　'}}<slot></slot></span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      require: true
    },
    text: {
      type: String,
      default: ''
    }
  }
}
</script>


<style lang="less">
@import '../base/base.less';

.fzs-ui-list-double-column-item {
  box-sizing: border-box;
  min-height: 3em;
  text-align: left;
  font-size: 0.95em;
  font-weight: 500;
  flex-direction: row;
  display: flex;
  border-top: 1px solid #c2c2c2;
  padding: 0.5em 0;
  line-height: 2em;
  
  .letf-text {
    color: #666666;
    flex: 1;
    text-align: left;
  }
  .right-text {
    color: #222222;
    max-width: 15em;
    text-align: right;
  }
  &:last-child {
    border-bottom: 1px solid #c2c2c2;
  }

  /*其它高亮色*/
  .amount {
    color:#ff8a00;
  }
  .hight-light {
    color:#00b93b;
  }
}
</style>

