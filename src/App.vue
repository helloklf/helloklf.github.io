<template>
  <div id="app">
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
  flex-direction: column;

  .root-content {
    flex: 1;
    overflow-y: auto;
    overflow-x: none;
    -webkit-overflow-scrolling: touch;
  }
}
@media screen and (max-width: 599px){
  #app {
    flex-direction: column-reverse;
  }
}
</style>
