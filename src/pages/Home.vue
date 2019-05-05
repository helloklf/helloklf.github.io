<template>
  <div class="page-home-bg">
    <div class="page-navs">
      <touch-button class="block github" @click="goOpenSource">
        <div class=""></div>
        <div>开源项目</div>
      </touch-button>
      <touch-button class="block documents" @click="goDocumentLibrary">
        <div class=""></div>
        <div>文档库</div>
      </touch-button>
      <touch-button class="block app-store" @click="goApps">
        <div class=""></div>
        <div>应用</div>
      </touch-button>
      <touch-button class="block markdown" @click="goMarkdownEdit">
        <div class=""></div>
        <div>Markdown编辑器</div>
      </touch-button>
      <touch-button class="block about" @click="goAbout">
        <div class=""></div>
        <div>关于</div>
      </touch-button>
    </div>
    <div>
      <div class="bg"></div>
      <div>
        <div class="hot">
          <i class="icon-fire"></i>
          <div>
            <h4>新鲜出炉</h4>
            <div class="list">
              Golang
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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

<style lang="scss">
.page-home-bg {
  height: 100%;
  width: 100%;
  // background-image: linear-gradient(top left, #a170f1, #398af1); // url('../assets/bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  background-image: url('../assets/bg.jpg');
}
.page-navs {
  display: block;
  flex-direction: column;
  height: 100%;
  overflow-y: auto;
  overflow-x: hidden;
  box-sizing: border-box;
  width: 32em;
  margin: 0 auto;
  -webkit-overflow-scrolling: touch;
  background-color: rgba(255, 255, 255, 0.1);
  padding: 0.5em;

  .block {
    margin: 0.5em;
    height: 8em;
    color: #fff;
    padding: 1rem;
    font-size: 2em;
    box-sizing: border-box;
    box-shadow: 4px 4px 20px rgba(255, 255, 255, 0.1);
    transition: all 0.3s;
    overflow: hidden;
    cursor: pointer;
    user-select: none;
    border-radius: 0.2em;
    display: flex;
    flex-direction: column;
    background-color: rgb(16, 211, 185);
    opacity: 0.5;

    &.github {
      background-image: url('../assets/icons/github.white.svg');
    }
    &.documents {
      background-image: url('../assets/icons/documents.white.svg');
    }
    &.app-store {
      background-image: url('../assets/icons/app-store.white.svg');
    }
    &.markdown {
      background-image: url('../assets/icons/code.white.svg');
    }
    &.about {
      background-image: url('../assets/icons/info.white.svg');
    }
    background-repeat: no-repeat;
    background-size: 4em;
    background-position: 9em center;

    > div:first-child {
      flex: 1;
    }

    &:hover {
      opacity: 1;
    }

    &:active {
      transform: scale(0.95);
    }

    &:empty {
      opacity: 0;
    }

    &:nth-child(1) {
      background-color: #F06522;
    }
    &:nth-child(2) {
      background-color: #8DC73F;
    }
    &:nth-child(3) {
      background-color: #00ADEF;
    }
    &:nth-child(4) {
      background-color: #FEC20A;
    }
  }
}
@media screen and (max-width: 599px) {
  .page-navs {
    display: block;
    padding: 1em;
    .block {
      height: 18vh;
      display: flex;
      width: 100%;
      margin: 0;
      margin-bottom: 0.5em;
      opacity: 0.9;
      > div:first-child {
        background-size: contain;
      }
    }
  }
}

.page-navs + div {
  flex: 1;
  position: relative;
  overflow: hidden;
  .bg {
    height: 120%;
    width: 120%;
    left: -10%;
    top: -10%;
    position: absolute;
    z-index: 2;
    background-size: cover;
    background-repeat: no-repeat;
  }
  .bg + div {
    position: absolute;
    z-index: 3;
    left: 0;
    right: 0;
    bottom: 0;
    top: 0;
    margin: 0;
    overflow-x: hidden;
    overflow-y: auto;
    color: #fff;
    font-size: 1.5em;
    text-align: right;

    .hot {
      padding: 1.5em 1em 1em 1em;
      flex-direction: row-reverse;
      display: inline-flex;
      width: 25em;
      margin: 1em 1em auto auto;
      // background: rgba(50, 50, 50, 0.5);
      background-image: linear-gradient(top left, #000000, #3a3a3a);
      cursor: pointer;
      transition: all 0.3s;
      border-radius: 0.5em;
      &:hover {
        background-image: linear-gradient(top left, #131313, #363636);
      }

      .icon-fire {
        margin-left: 1em;
        margin-top: -0.5em;
        width: 2em;
        &::before {
          height: 100%;
          display: block;
          content: " ";
          background: url('../assets/icons/fire.svg');
          background-repeat: no-repeat;
          background-position: center;
          background-size: contain;
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
    }
  }
}
</style>
