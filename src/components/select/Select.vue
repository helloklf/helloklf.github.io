<template>
  <div class="fzs-ui-select-custom" :class="{ expanded: expanded }">
    <div class="placeholder" @click="expanded = !expanded">
      {{ displayText }}
      <small v-if="multiSelect" class="selected-count">{{selectedCount}}</small>
    </div>
    <div class="select-items-list">
      <div :class="{ selected: isSelected($index) }" class="select-item" v-for="(item, $index) in options" :key="$index" @click="itemClick(item, $index)">
        <slot :data="item" :selected="selectedStatus[$index] || false" />
      </div>
    </div>
    <div class="fzs-ui-select-custom-click-hide" @click="hide"></div>
  </div>
</template>

<script>
export default {
  props: {
    /* 没有选中项时的默认显示文本 */
    placeholder: {
      type: String,
      default: '请选择'
    },
    /* 是否允许多选 */
    multiSelect: {
      type: Boolean,
      default: false
    },
    /* 值字段 */
    valueField: {
      type: String,
      default: '',
      required: false
    },
    /* 值 */
    value: { },
    /* 用于显示的字段 */
    displayField: {
      type: String,
      default: ''
    },
    /* 显示文本，优先于placeholder */
    text: {
      type: String,
      default: ''
    },
    /* 选项列表 */
    options: {
      type: Array,
      required: true
    },
    /* 是否字段选择列表中的第一项，仅单选模式有效 */
    autoSelect: {
      type: Boolean,
      default: true
    }
  },
  data () {
    return {
      selectedStatus: [],
      expanded: false
    }
  },
  mounted () {
    if (this.value === null || this.value === undefined || this.value === '' || this.value.length === 0) {
      if (this.options.length > 0 && this.autoSelectFirstItem && !this.multiSelect) {
        this.selectedStatus[0] = true
        this.$set(this.selectedStatus, 0, true)
        this.notifyChange()
      }
    }
  },
  created () {
    this.setSelectStatusByValue()
  },
  methods: {
    hide () {
      this.expanded = false
    },
    itemClick (item, index) {
      if (this.multiSelect) {
        this.selectedStatus[index] = !this.selectedStatus[index]
      } else {
        this.selectedStatus = []
        this.selectedStatus[index] = true
        this.expanded = false
      }
      this.$set(this.selectedStatus, index, this.selectedStatus[index])
      this.notifyChange()
    },
    setSelectStatusByValue () {
      let status = []
      for (let i = 0; i < this.options.length; i++) {
        if (this.multiSelect) {
          if (this.value === null || this.value === undefined) {
            break
          }
          if (this.value.includes(this.options[i]) || this.value.includes(this.options[i][this.valueField])) {
            status[i] = true
          }
        } else {
          if (this.options[i] === this.value || this.options[i][this.valueField] === this.value) {
            status[i] = true
            break
          }
        }
      }
      this.selectedStatus = status
    },
    isSelected (index) {
      return this.selectedStatus[index] === true
    },
    notifyChange () {
      this.$emit('onSelectedItemChange', this.selectedItems)
      this.$emit('input', this.selectedItemsValue)
    }
  },
  watch: {
    options (newArr) {
      if (newArr !== this.options) {
        this.selectedStatus = []
        this.options = newArr
        this.setSelectStatusByValue()
      }
    },
    value (newValue) {
      this.setSelectStatusByValue()
    }
  },
  computed: {
    selectedItems () {
      let arr = []
      for (let i = 0; i < this.selectedStatus.length; i++) {
        if (this.selectedStatus[i]) {
          arr.push(this.options[i])
        }
      }
      if (!this.multiSelect) {
        if (arr.length > 0) {
          return arr[0]
        } else {
          return null
        }
      } else {
        return arr
      }
    },
    selectedItemsValue () {
      let arr = []
      for (let i = 0; i < this.selectedStatus.length; i++) {
        if (this.selectedStatus[i]) {
          if (this.valueField) {
            arr.push(this.options[i][this.valueField])
          } else {
            arr.push(this.options[i])
          }
        }
      }
      if (!this.multiSelect) {
        if (arr.length > 0) {
          return arr[0]
        } else {
          return null
        }
      } else {
        return arr
      }
    },
    selectedCount () {
      let count = 0
      for (let i = 0; i < this.selectedStatus.length; i++) {
        if (this.selectedStatus[i]) {
          count++
        }
      }
      if (count > 9) {
        return '9+'
      }
      return count
    },
    displayText () {
      if (this.text) {
        return this.text
      } else if (this.displayField && this.selectedCount > 0) {
        if (this.multiSelect) {
          let text = []
          let items = this.selectedItems
          for (let i = 0; i < items.length; i++) {
            try {
              text.push(items[i][this.displayField])
            } catch (ex) {
              text.push('')
            }
          }
          return text.join(',') || '　'
        } else {
          return this.selectedItems[this.displayField] || '　'
        }
      } else {
        return this.placeholder || this.selectedItems
      }
    }
  }
}
</script>

<style lang="less">
@keyframes anm-fzs-ui-dorpdown {
  0% {
    transform: scaleY(0);
  }
  100% {
    transform: scaleY(1);
  }
}
@keyframes anm-fzs-ui-dialog {
  0% {
    opacity: 0.6;
    transform: scale(0.6);
  }
  80% {
    opacity: 0.8;
    transform: scale(1.1);
  }
  100% {
    transform: scale(1);
  }
}
@fontSize: 14px;
@lineHeight: @fontSize*3;

.fzs-ui-select-custom {
  text-align: left;
  position: relative;
  display: inline-block;
  width: 20em;
  user-select: none;
  .placeholder {
    cursor: pointer;
    color: #000;
    background: #fff;
    border: 1px solid #eee;
    font-weight: 500;
    line-height: @lineHeight;
    font-size: @fontSize;
    padding-left: @fontSize;
    position: relative;
    overflow: hidden;
    white-space: nowrap;
    padding-right: @fontSize * 6;
    text-overflow: ellipsis;
    &::after {
      content: " ";
      display: inline-block;
      height: 1em;
      width: 1em;
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      right: 1em;
      margin: auto;
      background-repeat: no-repeat;
      background-size: 100%;
      background-position: center;
      background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACUAAAATCAYAAAAXvcSzAAABIElEQVRIicXVvStGYRQA8N/lJon8CXaj1cSgpFgoZWXlH1A2KaOSdzJIWYQiImFhNRrIwiSDz6LEcO/Azcv7cT/O8tTzPJ1+dU7nBKVSaRItmFN8zOA+xDqO8YjFgkEj6Alxiz6c4AkrRYJwF8aX1zHsCM/YKAoE4bfHC/RjHy/xmTsIGhKfzjGEVXQXAfoNBWcYFZWwK29QORQcYgI76MwTxM+eSsYWWrGLXlzlAfoPRdRbbdiLE91kDaoEBUsJ2J8J6wVRvqeSMY9NUSnbswRVg4JpnGJbtCszAVWLgilcisZFUxagWlCfGBct7zU0pg2qBQUfGEMzlhGkCaoVBe8YRgcW0gRR2UgoF68YxAFm8ZYGqF4UPGBAtI6CNEDwBdusU9Va27lXAAAAAElFTkSuQmCC');
    }
    .selected-count {
      position: absolute;
      height: 2em;
      width: 2em;
      right: 2.4em;
      font-size: 1.2em;
      background: #f8f8f8;
      line-height: 2em;
      border-radius: 50%;
      text-align: center;
      top: 0;
      bottom: 0;
      margin: auto;
      color: #333;
      transform: scale(0.8);
      transform-origin: center;
    }
  }
  .select-items-list {
    font-size: @fontSize;
    user-select: none;
    max-height: 25em;
    max-height: 45vh;
    overflow-y: auto;
    overflow-x: hidden;
    box-sizing: border-box;
    position: absolute;
    width: 100%;
    margin: 0;
    border: 1px solid #eee;
    border-top: none;
    animation: anm-fzs-ui-dorpdown 0.2s ease-in-out;
    background: #fff;
    border-radius: 2px;
    transform-origin: top;
    z-index: 49;
    .select-item {
      cursor: pointer;
      border-left: 5px solid transparent;
      padding: 1em;
      opacity: 0.8;
      &:not(:last-child) {
        margin-bottom: 0.2em;
      }
      &.selected {
        border-left-color: turquoise;
        background: #f8f8f8;
        opacity:1;
      }
    }
    b,big {
      color: #333;
      font-weight: 600;
    }
    small {
      color: #888;
    }
  }
  &:not(.expanded) {
    .select-items-list {
      display: none !important;
    }
  }
  .fzs-ui-select-custom-click-hide {
    z-index: 48;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    width: 100%;
    height: 100%;
    background: red;
  }
}
</style>
