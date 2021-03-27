<template>
<div class="menu">
   <b-button v-b-toggle.my-sidebar>Приготовить что-нибудь!</b-button>
  <b-sidebar id="my-sidebar" bg-variant="transparent" title="Sidebar">
      <template #header="{ hide }">
        <b-button size="sm" @click="hide">Закрыть</b-button>
      </template>
      <div class="px-3 py-2">
          <ul v-for="coffee in coffee_list" :key="coffee.id">
           <li href="#" @click="showIngredients(coffee.id)">{{ coffee.name }}</li>
        </ul>
      </div>
    </b-sidebar>
</div>
</template>

<script>
export default {
  name: 'Menu',
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
          ctx.fillStyle=color;
          ctx.fillRect(0, y-ingredients[ingredient]*canvas.height, canvas.width, ingredients[ingredient]*canvas.height);
          y = y-ingredients[ingredient]*canvas.height
          },1000*index)
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

<style>
.b-sidebar{
    background: url("../assets/menu.svg") no-repeat right;
    background-size: cover;
    width: 100% !important;
}
b-collapse{
background-color: beige;
}
</style>
