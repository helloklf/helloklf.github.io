<template>
  <button :disabled="disabled" class="touch-button" @touchstart="active" @click="touch" ref="btn">
    <slot></slot>
  </button>
</template>

<style>
.touch-button_ripple {
  position:absolute;
  background:rgba(0,0,0,.15);
  border-radius:100%;
  transform:scale(0);
  pointer-events:none;
}
.touch-button_ripple.show {
  animation:touch-button_ripple .5s ease-out;
}
@keyframes touch-button_ripple {to {transform:scale(2);opacity:0;}}

@keyframes anm_touch-button {
  from {
      background: #fff;
  }
  to {
      background: #ccc;
  }
}

.touch-button {
  border: none;
  position: relative;
  overflow: hidden;
  outline: none !important;
  user-select: none;
  touch-action: none;
  transition-duration: 0;
  transition-delay: 0;
  -webkit-touch-action: none;
  -webkit-transition-duration: 0;
  -webkit-transition-delay: 0;
  -webkit-touch-callout: none;
  box-sizing: border-box;
}
</style>

<script>
export default {
  props: {
    disabled: {
      default: false
    }
  },
  methods: {
    active (e) {
      let target = e.currentTarget
      if (this.disabled || !target || !target.classList.contains('touch-button')) {
        return
      }
      let rect = target.getBoundingClientRect()
      let ripple = target.querySelector('.touch-button_ripple')
      if (!ripple) {
        ripple = document.createElement('span')
        ripple.className = 'touch-button_ripple'
        ripple.style.height = ripple.style.width = Math.max(rect.width, rect.height) + 'px'
        target.appendChild(ripple)
      }
      ripple.classList.remove('show')
      let point = e.targetTouches[0]
      let top = point.pageY - rect.top - ripple.offsetHeight / 2 - document.body.scrollTop
      let left = point.pageX - rect.left - ripple.offsetWidth / 2 - document.body.scrollLeft
      ripple.style.top = top + 'px'
      ripple.style.left = left + 'px'
      ripple.classList.add('show')
      this.vibration()
    },
    touch (e) {
      if (this.disabled) {
        return
      }
      setTimeout(() => {
        this.$emit('touch', e)
        this.$emit('click', e)
      }, 0)
      /*
      // 如果阻止了事件冒泡，则父级无法截获“touch”事件，但如果事件捕获需要在父级进行，此时就不适用
      // 但是，如果不阻止事件冒泡，会发生奇怪的现下
        例如 在页面“B” 点击一个“TouchBlock”触发了页面跳转到页面“A”，如果此时触摸位置在A页面上也有一个"TouchBlock"或者"TouchButton"，则页面"A"的这个“TouchBlock”或“TouchButton”也会捕获到“touch”事件...
      // 因此，后面将监听事件的方式从“touchend”改为“click”
      e.cancelBubble = true
      if (e.preventDefault) {
        e.preventDefault()
      }
      if (e.stopPropagation) {
        e.stopPropagation()
      }
      return false
      */
    },
    vibration () {
      if (navigator.vibrate) {
        navigator.vibrate([20, 0])
      } else if (navigator.webkitVibrate) {
        navigator.webkitVibrate([20, 0])
      } else if (navigator.mozVibrate) {
        navigator.mozVibrate([20, 0])
      } else if (navigator.msVibrate) {
        navigator.msVibrate([20, 0])
      }
    }
  }
}
</script>
