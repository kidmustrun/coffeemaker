<template>
<div class="container">
  <ul v-for="coffee in coffee_list" :key="coffee.id">

      <li @click="showIngredients(coffee.id)">{{ coffee.name }}</li>

  </ul>
  <canvas id="glass" height="200" width="40"></canvas>
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
      let index=0;
      let canvas = document.getElementById('glass');
      let ctx = canvas.getContext('2d');
      let y = canvas.height;
      let color="black";
      ctx.clearRect(0,0, canvas.width, canvas.height);
      for (let ingredient in ingredients) {
      let promise = new Promise((resolve) => {
        setTimeout(function(){
          if(ingredient === 'milk'){
            color = 'white';
            }
          if(ingredient === 'whipped_milk'){
            color ='#fff8e7';
            }
          if(ingredient === 'espresso'){
            color ='brown';
          }
          if(ingredient === 'water'){
            color = 'blue';
          }
          resolve(color);}, 1000*index)});
      promise.then(result =>{
        ctx.fillStyle=result;
        ctx.fillRect(0, y-ingredients[ingredient]*canvas.height, canvas.width, ingredients[ingredient]*canvas.height);
        y = y-ingredients[ingredient]*canvas.height;
         }) 
      index+=1
      }
     },
    showIngredients: function(coffee_id){
      let index = this.coffee_list.findIndex((coffee) => coffee.id === coffee_id)
      this.makeCoffee(this.coffee_list[index].ingredients)
    },
   
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
