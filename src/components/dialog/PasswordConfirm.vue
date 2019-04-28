<template>
  <confirm class="fzs-ui-dialog-input-confirm" left='' :title='title' left='取消' message="" right='确定' @onRightClick='onRightClick' @onLeftClick="onLeftClick" :class="{ 'is-disabled':isDisabled }">
    <input type="password" :placeholder="placeholder" :maxlength="maxlength" v-model="currentValue" autocomplete="off" />
  </confirm>
</template>
<script>
import Confirm from './Confirm'
export default {
  props: {
    title: {
      type: String,
      default: '请输入密码'
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
      default: '请在此输入密码...'
    },
    maxlength: {
      type: Number,
      default: 16
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
      if (this.isDisabled) {
        return
      }
      this.$emit('onConfirm', this.currentValue.trim())
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
  .body {
    display: flex;
    align-items: center;
    padding-bottom: 1.25em;
  }
  input[type=password] {
    padding: 0 1em;
    width: 100%;
    border: 1px solid #eee;
    outline: none;
    box-shadow: none;
    resize: none !important;
    line-height: 3em;
    height: 3em;
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
