<template>
<div class="menu text-left">
   <b-button v-b-toggle.my-sidebar variant="light">Cook something!</b-button>
  <b-sidebar id="my-sidebar" bg-variant="transparent" title="Sidebar">
      <template #header="{ hide }">
        <div @click="hide" class="px-3 py-2">
          <ul v-for="coffee in coffee_list" :key="coffee.id">
           <li href="#" @click="showIngredients(coffee.id)">{{ coffee.name }}</li>
        </ul>
      </div>
      </template>
      
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
      getImgUrl(pic) {
    return require('../assets/' + pic);
      },
     makeCoffee: function(ingredients){
        let index=1;
        let canvas = document.getElementById('glass');
        let ctx = canvas.getContext('2d');
        let water = new Image()
        water.src = this.getImgUrl('water.png')
        let espresso = new Image()
        espresso.src = this.getImgUrl('espresso.png')
        let whipped_milk = new Image()
        whipped_milk.src = this.getImgUrl('whipped_milk.png')
        let milk = new Image()
        milk.src = this.getImgUrl('milk.png')
        let syrup = new Image()
        syrup.src = this.getImgUrl('syrup.png')
        let whipped_cream = new Image()
        whipped_cream.src = this.getImgUrl('whipped_cream.png')
        let y = canvas.height;
        ctx.clearRect(0,0, canvas.width, canvas.height);
        for (let ingredient in ingredients) {
        setTimeout(function(){
          if(ingredient === 'milk'){
            ctx.drawImage(milk, 0, y-ingredients[ingredient]*canvas.height, canvas.width, ingredients[ingredient]*canvas.height, 0, y-ingredients[ingredient]*canvas.height, canvas.width, ingredients[ingredient]*canvas.height);
            y = y-ingredients[ingredient]*canvas.height
            }
          if(ingredient === 'whipped milk'){
          ctx.drawImage(whipped_milk, 0, y-ingredients[ingredient]*canvas.height, canvas.width, ingredients[ingredient]*canvas.height, 0, y-ingredients[ingredient]*canvas.height, canvas.width, ingredients[ingredient]*canvas.height);
          y = y-ingredients[ingredient]*canvas.height
            }
          if(ingredient === 'espresso'){
            ctx.drawImage(espresso, 0, y-ingredients[ingredient]*canvas.height, canvas.width, ingredients[ingredient]*canvas.height, 0, y-ingredients[ingredient]*canvas.height, canvas.width, ingredients[ingredient]*canvas.height);
            y = y-ingredients[ingredient]*canvas.height
          }
          if(ingredient === 'water'){
            ctx.drawImage(water, 0, y-ingredients[ingredient]*canvas.height, canvas.width, ingredients[ingredient]*canvas.height, 0, y-ingredients[ingredient]*canvas.height, canvas.width, ingredients[ingredient]*canvas.height);
            y = y-ingredients[ingredient]*canvas.height
          }
           if(ingredient === 'syrup'){
            ctx.drawImage(syrup, 0, y-ingredients[ingredient]*canvas.height, canvas.width, ingredients[ingredient]*canvas.height, 0, y-ingredients[ingredient]*canvas.height, canvas.width, ingredients[ingredient]*canvas.height);
            y = y-ingredients[ingredient]*canvas.height
            }
            if(ingredient === 'whipped cream'){
            ctx.drawImage(whipped_cream, 0, y-ingredients[ingredient]*canvas.height, canvas.width, ingredients[ingredient]*canvas.height, 0, y-ingredients[ingredient]*canvas.height, canvas.width, ingredients[ingredient]*canvas.height);
            y = y-ingredients[ingredient]*canvas.height
            }
          },1000*index)
         
          index+=1;
          }
        },
      

    showIngredients: function(coffee_id){
      let index = this.coffee_list.findIndex((coffee) => coffee.id === coffee_id)
      this.$emit('getIngredients', {
          ingredients: this.coffee_list[index].ingredients
        })
       let promise = new Promise((resolve) => {
        resolve(this.coffee_list[index].ingredients)
        });
      promise
      .then(
    result => this.makeCoffee(result)
      );
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
ul li{
    list-style-type: none;
    cursor: pointer;
    color: white
}
</style>
