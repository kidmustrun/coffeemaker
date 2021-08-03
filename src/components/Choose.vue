<template>

<div>
   <Menu :coffee_list="coffee_list" @getIngredients="get_ingredients"/>
  
  <div id="instruction" v-if="this.ingredients">
    <canvas id="glass" height="400" width="180">
  </canvas>
    <ul v-for="(ingredient, index) in this.ingredients.ingredients" :key="index">
           <li>{{ index }} - {{ ingredient.toFixed(2) }}</li>
        </ul>
  </div>
  <div v-else class="d-flex justify-content-center">

  <b-card no-body class="overflow-hidden" style="max-width: 540px;">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img :src="require('../assets/barista.jpg')" alt="Barista" class="rounded-0"></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="Welcome to CoffeeMaker!">
          <b-card-text>
            This small application will help novice baristas to learn the types of drinks, their ingredients and cooking proportions. To see an example, click the "Cook something!" button and select the type of drink. Have fun learning!
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
  </div>
  </div>
</template>

<script>
import Menu from '../components/Menu.vue'
export default {
  name: 'Choose',
  components: {
    Menu
  },
  data: function () {
    return {
      ingredients: false
    }
  },
  computed: {
      coffee_list(){
          return this.$store.state.coffee_list;
      }
  },

  methods:{
get_ingredients(value){
  this.ingredients = value;
  console.log(this.ingredients)
}
  }
}
</script>

<style scoped>
canvas{
  background-color: beige;
}
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
