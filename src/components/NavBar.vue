<template>
  <div class="nav-bar">
    <span class="toggle-menu" @click="toggleMenu">三</span>
    <span class="title">{{title}}</span>
    <span class="empty"></span>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    }
  },
  methods: {
    toggleMenu () {
      this.$emit('toggleMenu', this)
    }
  }
}
</script>

<style lang="scss">
.nav-bar {
  font-size: 1.3em;
  z-index: 5;
  background: #fff;
  color: #888;
  box-shadow: 0 0 5px #ccc;
  width: 100%;
  display: flex;
  user-select: none;
  >* {
    height: 100%;
    line-height: 3em;
    min-width: 3em;
    text-align: center;
    cursor: pointer;
  }
  .title{
    padding-left: 1.5em;
  }
  .empty {
    flex: 1;
  }
}
@media screen and (min-width:1024px){
  .nav-bar{
    .toggle-menu{
      display: none !important;
    }
  }
}
@media screen and (max-width: 599px) {
  .nav-bar {
    font-size: 1.6em;
  }
}
</style>
