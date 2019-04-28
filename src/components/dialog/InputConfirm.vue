<template>
  <confirm class="fzs-ui-dialog-input-confirm" left='' :title='title' left='取消' message="" right='确定' @onRightClick='onRightClick' @onLeftClick="onLeftClick" :class="{ 'is-disabled':isDisabled }">
    <textarea :placeholder="placeholder" :maxlength="maxlength" v-model="currentValue"></textarea>
  </confirm>
</template>
<script>
import Confirm from './Confirm'
export default {
  props: {
    title: {
      type: String,
      default: '请输入'
    },
    message: {
      type: String,
      default: '请注意！！'
    },
    allowEmpty: {
      type: Boolean,
      default: false
    },
    placeholder: {
      type: String,
      default: '请在此处输入内容...'
    },
    maxlength: {
      type: Number,
      default: 70
    },
    value: {
      type: String,
      default: ''
    }
  },
  data () {
    return {
      currentValue: this.value || ''
    }
  },
  methods: {
    onRightClick () {
      if (!this.allowEmpty && this.isEmpty) {
        return
      }
      this.$emit('onConfirm', this.currentValue)
    },
    onLeftClick () {
      this.$emit('onCancel', '')
    }
  },
  watch: {
    value (v) {
      if (v !== this.currentValue) {
        this.currentValue = v
      }
    }
  },
  computed: {
    isEmpty () {
      return this.currentValue === undefined || this.currentValue === null || this.currentValue.trim() === ''
    },
    isDisabled () {
      return !this.allowEmpty && this.isEmpty
    }
  },
  components: {
    Confirm
  }
}
</script>

<style lang="less">
.fzs-ui-dialog-input-confirm {
  textarea {
    height: 90%;
    width: 100%;
    border: none;
    outline: none;
    box-shadow: none;
    margin: 0;
    padding: 0;
    resize: none !important;
    line-height: 1.6em;
    color: #555;
  }
  &.is-disabled {
    .actions {
      .right {
        background: #eee;
        color: #aaa;
      }
    }
  }
}
</style>
