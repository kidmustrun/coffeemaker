<template>
<div class="container">
  <ul v-for="coffee in coffee_list" :key="coffee.id">

      <li @click="showIngredients(coffee.id)">{{ coffee.name }}</li>

  </ul>
  <canvas id="glass" height="100" width="40"></canvas>
  </div>
</template>

<script>
export default {
  name: 'Choose',
  props:[
    'coffee_list'
  ],
  methods:{
     makeCoffee: function(ingredients){
    
      let canvas = document.getElementById('glass');
      let ctx = canvas.getContext('2d');
      let y = canvas.height;
      ctx.clearRect(0,0, canvas.width, canvas.height);
      for (let ingredient in ingredients) {
        if(ingredient === 'milk'){
            console.log(ingredients[ingredient]*100)
            ctx.fillStyle = 'white';
            console.log('milk')
            }
        if(ingredient === 'whipped_milk'){
            console.log(ingredients[ingredient]*100)
            ctx.fillStyle = '#fff8e7';
            console.log('whipped_milk')
            }
        if(ingredient === 'espresso'){
            console.log(ingredients[ingredient]*100)
            ctx.fillStyle = 'brown';
            console.log('espresso')
          }
        if(ingredient === 'water'){
            console.log(ingredients[ingredient]*100)
            ctx.fillStyle = 'blue';
            console.log('water')
          }
          ctx.fillRect(0, y-ingredients[ingredient]*100, canvas.width, ingredients[ingredient]*100);
          console.log(y);
          y = y-ingredients[ingredient]*100;
      }
    },
    showIngredients: function(coffee_id){
      let index = this.coffee_list.findIndex((coffee) => coffee.id === coffee_id)
      this.makeCoffee(this.coffee_list[index].ingredients)
    },
   
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
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
