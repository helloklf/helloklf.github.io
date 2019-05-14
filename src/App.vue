<template>
  <div id="app">
    <div class="navigation-bar">
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

    <div class="root-content">
      <router-view />
    </div>
  </div>
</template>

<script>
export default {
  name: 'app',
  data () {
    return {
    }
  },
  methods: {
    goOpenSource () {
      this.$router.push({
        name: 'OpenSource'
      })
    },
    goDocumentLibrary () {
      this.$router.push({
        name: 'DocumentLibrary'
      })
    },
    goMarkdownEdit () {
      this.$router.push({
        name: 'MarkdownOnlineEdit'
      })
    },
    goApps () {
      this.$router.push({
        name: 'Apps'
      })
    },
    goAbout () {
      this.$router.push({
        name: 'About'
      })
    }
  }
}
</script>
<style lang="scss" src="./assets/base.scss">

</style>

<style lang="scss">
#app {
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

.navigation-bar {
  padding: 1em 1em 0 1em;
  max-height: 100%;
  height: auto;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  width: 20em;
  box-shadow: 0 0 0.5em rgba(128, 128, 128, 0.5);
  margin-right: 0.5em;
  * {
    font-size: inherit;
  }
  
  .nav-item {
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
</style>
