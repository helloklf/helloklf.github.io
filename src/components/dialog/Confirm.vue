<!--
操作确认框
可配置项  ：标题、消息内容（可以包含HTML代码）、左侧按钮文字、右侧按钮文字
作用      ：类似于QQ的异地登陆提示按钮
-->
<template>
  <div class='fzs-ui-dialog-mask'>
    <div class='fzs-ui-dialog-confirm'>
      <div class='header'>{{title}}</div>
      <div class='body' v-html='message' v-if="message"></div>
      <div class="body" v-else><slot></slot></div>
      <div class='actions'>
        <div class='left' v-if='left' @click='onLeftClick'>{{left}}</div>
        <div class='right' v-if='right' @click='onRightClick'>{{right}}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: '提醒'
    },
    message: {
      type: String,
      default: '确定进行这个操作吗？'
    },
    left: {
      type: String,
      default: '取消'
    },
    right: {
      type: String,
      default: '确定'
    }
  },
  data () {
    return {}
  },
  methods: {
    onLeftClick () {
      this.$emit('onLeftClick', '')
    },
    onRightClick () {
      this.$emit('onRightClick', '')
    }
  }
}
</script>

<style lang='less'>
@import '../base/base.less';

.fzs-ui-dialog-mask {
  z-index: 50;
  font-size: @fontSize;
  * {
    box-sizing: border-box;
  }
  background: rgba(0, 0, 0, 0.3);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  height: 100%;
  width: 100%;
}
.fzs-ui-dialog-confirm {
  transition: all 0.3s;
  animation: anm-fzs-ui-dialog 0.5s ease-in-out;
  box-sizing: border-box;
  position: fixed;
  margin: auto;
  width: 76%;
  max-width: 24em;
  background: #fff;
  height: 15em;
  min-width: 20em;
  border-radius: 0.2em;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
  >*:empty {
    display: none;
  }
  .header {
    font-size: 1.3em;
    font-weight: 500;
    line-height: 3.5em;
    padding: 0 0.65em;
    text-align: center;
    color: #000;
  }
  .body{
    text-align: left;
    padding: 0 1em;
    flex: 1;
    line-height: 1.6em;
    overflow-x: hidden;
    overflow-y: auto;
    text-overflow: ellipsis;
    -webkit-overflow-scrolling: touch;
    a {
      color: orange;
    }
  }
  .actions {
    border-top: 1px solid #eee;
    font-size: 1.3em;
    line-height: 2.8em;
    height: 2.8em;
    display: flex;
    flex-direction: row;
    text-align: center;
    color: #000;
    >* {
      user-select: none !important;
      -webkit-tap-highlight-color: transparent;
      flex: 1;
      &:active {
        background: #eee;
      }
      &:not(:last-child) {
        border-right: 1px solid #eee;
      }
    }
  }
}
</style>

