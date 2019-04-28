<template>
  <div class="page-home-bg">
    <div class="page-home">
      <div class="block" @click="goOpenSource">Open Source Projects</div>
      <div class="block" @click="goDocumentLibrary">Document Library</div>
      <div class="block" @click="goMarkdownEdit">Markdown Online Editor</div>
      <div class="block" @click="goAbout">About This Page</div>
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
  background-image: url('../assets/bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
}
.page-home {
  display: flex;
  flex-wrap: wrap;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
  max-width: 80em;
  margin: 0 auto;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  overflow-y: auto;
  -webkit-overflow-scrolling: touch;

  .block {
    width: 44%;
    margin: 0.5em;
    height: 30vh;
    color: #fff;
    background: #eee;
    padding: 1rem;
    font-size: 5em;
    box-sizing: border-box;
    box-shadow: 0 0 10px #000;
    transition: all 0.3s;
    overflow: hidden;
    cursor: pointer;
    user-select: none;

    &:hover {
      opacity: 0.6;
    }

    &:active {
      transform: scale(0.95);
    }

    &:empty {
      opacity: 0;
    }

    &:nth-child(1) {
      background: rgb(163, 0, 0);
    }
    &:nth-child(2) {
      background: rgb(6, 89, 138);
    }
    &:nth-child(3) {
      background: rgb(103, 121, 0);
    }
    &:nth-child(4) {
      background: rgb(92, 92, 92);
    }
  }
}
@media screen and (max-width: 599px) {
  .page-home {
    display: block;
    padding: 1em;
    .block {
      display: block;
      width: 100%;
      margin: 0;
      margin-bottom: 0.2em;
      opacity: 0.9;
    }
  }
}
</style>
