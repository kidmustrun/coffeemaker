<template>
  <div id="app">
    <Background/>
  </div>
</template>

<script>

import Background from './components/Background.vue'
import { store } from './store'

export default {
  name: 'App',
  store,
  components: {
    Background
  },
}
</script>

<style>

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
body{
    position: relative;
    background-color: #FFD1BA !important;
    /* overflow: hidden !important;  */
}
</style>
