<template>
  <div class="nav-menu-mask" :class="{show: showMenu}">
    <div class="nav-menu">
      <div class="toggle-menu item" @click="toggleMenu">三</div>
      <div class="item" @click="itemClick(home)">
        <i class="menu-icon icon-home"></i>
        <span>{{home.label}}</span>
      </div>
      <div class="item" @click="goBack">
        <i class="menu-icon icon-back"></i>
        <span>返回</span>
      </div>
      <div class="split"></div>
      <div class="item" @click="itemClick(documents)">
        <i class="menu-icon icon-documents"></i>
        <span>{{documents.label}}</span>
      </div>
      <div class="item" @click="itemClick(openSource)">
        <i class="menu-icon icon-github"></i>
        <span>{{openSource.label}}</span>
      </div>
      <div class="item" @click="itemClick(apps)">
        <i class="menu-icon icon-app-store"></i>
        <span>{{apps.label}}</span>
      </div>
      <div class="split"></div>
      <div class="items">
        <div class="item small" v-for="menu in menus" :key="menu.key" :class="{active: selectedItem == menu}" @click="itemClick(menu)">{{menu.label}}</div>
      </div>
    </div>
    <div class="empty" @click="hideMenu" v-show="showMenu"></div>
  </div>
</template>

<script>
export default {
  props: {
    menus: {
      type: Array
    },
    show: {
      type: Boolean,
      default: false
    }
  },
  data () {
    return {
      documents: {
        label: '文档库',
        route: {
          path: '/document-library'
        }
      },
      openSource: {
        label: '开源项目',
        route: {
          path: '/open-source-project'
        }
      },
      home: {
        label: '首页',
        route: {
          path: '/helloklf-github-io'
        }
      },
      apps: {
        label: '应用',
        route: {
          path: '/apps'
        }
      },
      selectedItem: false,
      showMenu: this.show
    }
  },
  watch: {
    show (value) {
      this.showMenu = value
    }
  },
  methods: {
    goBack () {
      if (this.$router) {
        this.$router.back()
      }
    },
    hideMenu () {
      this.$emit('update:show', false)
    },
    toggleMenu () {
      this.showMenu = !this.showMenu
      this.$emit('update:show', this.showMenu)
    },
    itemClick (item) {
      this.$emit('update:show', false)
      this.selectedItem = item
      this.$emit('menuSelect', item)
    }
  }
}
</script>

<style lang='scss'>
.nav-menu-mask {
  z-index: 5;
  position: fixed;
  width: 0%;
  height: 100%;
  left: 0;
  top: 0;
  margin: 0;
  display: flex;
  flex-direction: column;
  .nav-menu {
    display: flex;
    position: fixed;
    height: 100vh;
    background: #fff;
    width: 18em;
    color: #888;
    user-select: none;
    transform: translateX(-100%);
    transition: transform 0.2s ease-in-out;
    flex-direction: column;
    overflow-y: auto;
    box-shadow: 0 2px 2px #ccc;
    .items {
      flex: 1;
    }
    .item{
      box-sizing: border-box;
      line-height: 1.5em;
      padding: 0.8em 1em;
      cursor: pointer;
      transition: all 0.2s;

      &:active,
      &.active {
        background-color: rgba(128, 128, 128, 0.2);
        color: rgb(0, 0, 0);
      }
      &:hover{
        background-color: rgba(128, 128, 128, 0.2);
      }
      &.small {
        font-size: 0.9em;
      }
    }
    .split {
      height: 1px;
      border: none;
      outline: none;
      background: rgba(128, 128, 128, 0.2);
      margin: 1.5em 0;
      display: block;
    }
    .toggle-menu {
      background: rgba(128, 128, 128, 0.2);
      margin-bottom: 1.5em;
      width: 3em;
      color: #80f;
      &:active,
      &.active {
        background: rgba(255,255,255,0.6);
      }
    }
    .menu-icon {
      display: inline-block;
      height: 1.5em;
      width: 1.5em;
      margin-right: 0.2em;
      opacity: 0.8;
      & + span {
        vertical-align: middle;
      }
    }
  }
  .empty {
    flex: 1;
    background: rgba(0, 0, 0, 0.4);
  }
  &.show {
    width: 100%;
    .nav-menu {
      transform: translateX(0);
    }
  }
}
@media screen and (min-width: 1024px){
  body {
    padding-left: 18em;
    .nav-menu-mask {
      width: auto !important;
      .nav-menu {
        transform: translateX(0) !important;
        .toggle-menu {
          opacity: 0.3;
        }
      }
      .empty {
        display: none !important;
      }
    }
  }
}
@media screen and (max-width: 599px) {
  .nav-menu-mask {
    font-size: 1.6em;
    .nav-menu {
      width: 15em;
      flex-direction: column-reverse;
      align-content: bottom;
      .toggle-menu {
        margin-bottom: 0;
        margin-top: 1em;
      }
    }
  }
}
</style>
