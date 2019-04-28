<template>
  <div id="app">
    <nav-bar @toggleMenu="toggleMenu" :title="title" />
    <nav-menu :show.sync="showMenu" :menus="menus" @menuSelect="menuSelect"/>
    <div class="root-content">
      <router-view />
    </div>
  </div>
</template>

<script>
import NavMenu from './components/NavMenu'
import NavBar from './components/NavBar'
export default {
  name: 'app',
  data () {
    return {
      showMenu: false,
      title: '',
      menus: []
    }
  },
  methods: {
    toggleMenu () {
      this.showMenu = !this.showMenu
    },
    menuSelect (item) {
      if (this.$router && item.route) {
        this.$router.replace(item.route)
      }
      if (item.label) {
        this.title = item.label
        window.document.title = item.label
      }
    }
  },
  components: {
    NavMenu,
    NavBar
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
