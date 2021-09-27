<template>
  <div class="menu text-left">
    <b-button v-b-toggle.my-sidebar variant="light">Cook something!</b-button>
    <b-sidebar id="my-sidebar" bg-variant="transparent" title="Sidebar">
      <template #header="{ hide }">
        <div @click="hide" class="px-3 py-2">
          <ul v-for="coffee in coffee_list" :key="coffee.id">
            <li href="#" @click="showIngredients(coffee.id)">
              {{ coffee.name }}
            </li>
          </ul>
        </div>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
export default {
  name: "Menu",
  props: ["coffee_list"],
  methods: {
    getImgUrl(pic) {
      return require("../assets/" + pic);
    },
    showIngredients: function (coffee_id) {
      let index = this.coffee_list.findIndex(
        (coffee) => coffee.id === coffee_id
      );
      this.$emit("getIngredients", {
        ingredients: this.coffee_list[index].ingredients,
      });
      let promise = new Promise((resolve) => {
        resolve(this.coffee_list[index].ingredients);
      });
      promise.then((result) => this.makeCoffee(result));
    },
    makeCoffee: function (ingredients) {
      let index = 1;
      let canvas = document.getElementById("glass");
      let ctx = canvas.getContext("2d");
      let y = canvas.height;
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let ingredient in ingredients) {
        let ingredientImg = new Image();
        ingredientImg.src = this.getImgUrl(`${ingredient}.png`)
        setTimeout(function () {
            ctx.drawImage(
              ingredientImg,
              0,
              y - ingredients[ingredient] * canvas.height,
              canvas.width,
              ingredients[ingredient] * canvas.height,
              0,
              y - ingredients[ingredient] * canvas.height,
              canvas.width,
              ingredients[ingredient] * canvas.height
            );
            y = y - ingredients[ingredient] * canvas.height;
        }, 1000 * index);
        index += 1;
      }
    },
  },
};
</script>

<style>
.b-sidebar {
  background: url("../assets/menu.svg") no-repeat right;
  background-size: cover;
  width: 100% !important;
}
b-collapse {
  background-color: beige;
}
ul li {
  list-style-type: none;
  cursor: pointer;
  color: white;
}
</style>
