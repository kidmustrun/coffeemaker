<template>
  <div id="app">
    <Background :coffee_list="coffee_list"/>
  </div>
</template>

<script>

import Background from './components/Background.vue'

export default {
  name: 'App',
  components: {
    Background
  },
  data(){
    return {
      coffee_list: [
        {
          id: 1,
          name: 'americano',
          ingredients: {
            espresso: 1/4,
             water: 3/4,
          }
        },
         {
           id: 2,
          name: 'cappucino',
          ingredients: {
            espresso: 1/4,
            milk: 1/4,
            whipped_milk: 1/2
          }
        },
         {
           id: 3,
          name: 'espresso',
          ingredients: {
            espresso: 1/4
          }
        }
      ]

      
    }
  }
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
    overflow: hidden !important; 
}
</style>
