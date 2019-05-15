<template>
  <div id="app">
    <div class="navigation-bar">
      <div>
        <i @click="navigationBar = ! navigationBar" class="navigation-bar-switch icon-menu"></i>
      </div>
      <div v-show="navigationBar" class="navigation-bar-items">
        <div class="nav-item color-oranage">
          <i class="icon icon-fire"></i>
          <div>
            <h4>新鲜出炉</h4><div class="list"> Golang </div>
          </div>
        </div>

        <div class="nav-item color-green" @click="goOpenSource">
          <i class="icon icon-github"></i>
          <div>
            <h4>开源项目</h4><div class="list"> Golang </div>
          </div>
        </div>

        <div class="nav-item color-blue" @click="goDocumentLibrary">
          <i class="icon icon-documents"></i>
          <div>
            <h4>文档库</h4>
            <div class="list"> Golang </div>
          </div>
        </div>

        <div class="nav-item color-yellow" @click="goApps">
          <i class="icon icon-app-store"></i>
          <div>
            <h4>应用</h4><div class="list"> Golang </div>
          </div>
        </div>

        <div class="nav-item color-purple" @click="goMarkdownEdit">
          <i class="icon icon-markdown"></i>
          <div>
            <h4>Markdown编辑器</h4><div class="list"> Golang </div>
          </div>
        </div>

        <div class="nav-item color-sky" @click="goAbout">
          <i class="icon icon-about"></i>
          <div>
            <h4>关于</h4><div class="list"> Golang </div>
          </div>
        </div>
      </div>
      <div>
        <i @click="navigationBar = ! navigationBar" class="navigation-bar-switch icon-setup"></i>
      </div>
    </div>

    <div class="root-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import './assets/highlight/highlight.pack.js'
import './assets/highlight/styles/vs.css'

export default {
  name: 'app',
  data () {
    return {
      navigationBar: true
    }
  },
  methods: {
    autoHideNavigationBar () {
      if (window.innerWidth < 600) {
        this.navigationBar = false
      }
    },
    goOpenSource () {
      this.$router.push({
        name: 'OpenSource'
      })
      this.autoHideNavigationBar()
    },
    goDocumentLibrary () {
      this.$router.push({
        name: 'DocumentLibrary'
      })
      this.autoHideNavigationBar()
    },
    goMarkdownEdit () {
      this.$router.push({
        name: 'MarkdownOnlineEdit'
      })
      this.autoHideNavigationBar()
    },
    goApps () {
      this.$router.push({
        name: 'Apps'
      })
      this.autoHideNavigationBar()
    },
    goAbout () {
      this.$router.push({
        name: 'About'
      })
      this.autoHideNavigationBar()
    }
  }
}
</script>
<style lang="scss" src="./assets/base.scss">

</style>

<style lang="scss">
@keyframes slide_from_bottom {
  0% {
    opacity: 0.4;
    transform: translateY(50%);
  }
  70% {
    opacity: 0.4;
    transform: translateY(-10%);
  }
  100% {
    opacity: 1;
    transform: translateY(0);
  }
}
#app {
  background-color: #f8f8f8;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  display: flex;
  height: 100%;
  flex-direction: row;

  .root-content {
    flex: 1;
    overflow-y: auto;
    overflow-x: none;
    -webkit-overflow-scrolling: touch;
  }
}

.root-content {
  margin-left: 0.5em;
}
.navigation-bar {
  background-color: #fff;
  padding: 1em 1em 0 1em;
  max-height: 100%;
  height: auto;
  overflow: hidden;
  box-sizing: border-box;
  user-select: none;
  box-shadow: 0 0 0.5em rgba(128, 128, 128, 0.5);
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  .navigation-bar-items {
    overflow-y: auto;
    animation: slide_from_bottom 0.5s ease-out;
  }
  * {
    font-size: inherit;
  }
  .navigation-bar-switch {
    height: 2.5em;
    width: 2.5em;
    cursor: pointer;
    margin-bottom: 0.5em;
    opacity: 0.8;
    transition: transform 0.4s ease-out;
    &:hover {
      opacity: 1;
    }
    &:active {
      transform: scale(0.8);
    }
  }
  
  .nav-item {
    width: 18em;
    padding: 1.5em 1em 1em 1em;
    flex-direction: row-reverse;
    display: flex;
    cursor: pointer;
    transition: all 0.3s;
    border-radius: 0.5em;
    margin-bottom: 1em;

    .icon {
      margin-left: 1em;
      margin-top: -0.5em;
      width: 2em;
      &::before {
        height: 100%;
        display: block;
        content: " ";
        background-repeat: no-repeat;
        background-position: center;
        background-size: contain;
      }
      &.icon-fire {
        &::before {
          background-image: url('./assets/icons/fire.svg');
        }
      }
      &.icon-github {
        &::before {
          background-image: url('./assets/icons/github.white.svg');
        }
      }
      &.icon-documents {
        &::before {
          background-image: url('./assets/icons/documents.white.svg');
        }
      }
      &.icon-app-store {
        &::before {
          background-image: url('./assets/icons/app-store.white.svg');
        }
      }
      &.icon-markdown {
        &::before {
          background-image: url('./assets/icons/code.white.svg');
        }
      }
      &.icon-about {
        &::before {
          background-image: url('./assets/icons/info.white.svg');
        }
      }
      & + div {
        flex: 1;
      }
    }
    h4, h3 {
      margin: 0;
    }
    .list {
      margin-top: 0.5em;
      opacity: 0.6;
      line-height: 1.5em;
    }

    &.color-oranage {
      background-image: linear-gradient(top left, #F06522, rgb(240, 81, 1));
      color: #fff;
    }
    &.color-green {
      background-image: linear-gradient(top left, #8DC73F, rgb(118, 177, 42));
      color: #fff;
    }
    &.color-blue {
      background-image: linear-gradient(top left, #00ADEF, rgb(0, 151, 211));
      color: #fff;
    }
    &.color-yellow {
      background-image: linear-gradient(top left, #FEC20A, rgb(226, 147, 0));
      color: #fff;
    }
    &.color-purple {
      background-image: linear-gradient(top left, rgb(160, 0, 160), rgb(133, 29, 133));
      color: #fff;
    }
    &.color-sky {
      background-image: linear-gradient(top left, #d6e1f7, #8ccbff);
      color: #000;
      &:hover {
        background-image: linear-gradient(top left, #d6e1f7, #74c0ff);
      }
    }
  }
}

@media screen and (max-width: 599px) {
  #app{
    flex-direction: column-reverse;
  }
  .navigation-bar {
    margin-left: 0em;
    margin-top: 0.5em;
    flex-direction: row;
    justify-content: space-between;
    align-items: flex-end;
  }
  .navigation-bar-items {
    flex: 1;
    flex-wrap: wrap;
    padding-left: 0.5em;
    padding-right: 0.5em;
    box-sizing: border-box;
    
    .nav-item {
      padding: 0.6em 0.6em 0.4em 0.5em;
      font-size: 0.8em;
      display: inline-flex;
      width: 44%;
      margin-left: 2%;
      flex-grow: 1;
      float: left;
    }
  }
}
@media screen and (min-width: 600px) {
  .navigation-bar-items {
    flex: 1;
  }
}
</style>
