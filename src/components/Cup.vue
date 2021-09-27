<template>
  <canvas id="glass" height="400" width="180"> </canvas>
</template>
<script>

export default {
  name: "Cup",
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