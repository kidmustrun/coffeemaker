<template>
  <div id="app">
    <Choose :coffee_list="coffee_list"/>
  </div>
</template>

<script>
import Choose from './components/Choose.vue'

export default {
  name: 'App',
  components: {
    Choose
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
  margin-top: 60px;
}
</style>
