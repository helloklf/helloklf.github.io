<template>
  <div class="page-home-bg">
    
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
  padding-top: 2em;
  height: 100%;
  width: 100%;
  // background-image: linear-gradient(top left, #a170f1, #398af1); // url('../assets/bg.jpg');
  background-size: cover;
  background-repeat: no-repeat;
  display: flex;
  background-image: url('../assets/bg.jpg');
  align-items: flex-start;
}
</style>
