<template>
  <div>
    <Menu :coffee_list="coffee_list" @getIngredients="get_ingredients" />
    <div id="instruction" v-if="this.ingredients">
      <Cup />
      <ul
        v-for="(ingredient, index) in this.ingredients.ingredients"
        :key="index"
      >
        <li>{{ index }} - {{ ingredient.toFixed(2) }}</li>
      </ul>
    </div>
    <div v-else class="d-flex justify-content-center">
      <Welcome />
    </div>
  </div>
</template>

<script>
import Menu from "@/components/Menu.vue";
import Cup from "@/components/Cup";
import Welcome from '@/components/Welcome'
export default {
  name: "CoffeeMaker",
  components: {
    Menu,
    Cup,
    Welcome
  },
  data: function () {
    return {
      ingredients: false,
    };
  },
  computed: {
    coffee_list() {
      return this.$store.state.coffee_list;
    },
  },

  methods: {
    get_ingredients(value) {
      this.ingredients = value;
      console.log(this.ingredients);
    },
  },
};
</script>

<style scoped>
canvas {
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
