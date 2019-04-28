<template>
  <confirm left='' :title='title' :message='message' right='确定' @onRightClick='onRightClick' />
</template>
<script>
import Confirm from './Confirm'
export default {
  props: {
    title: {
      type: String,
      default: '注意'
    },
    message: {
      type: String,
      default: '请注意！！'
    }
  },
  methods: {
    onRightClick () {
      this.$emit('onConfirm', '')
    }
  },
  components: {
    Confirm
  }
}
</script>
