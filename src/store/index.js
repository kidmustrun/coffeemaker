import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    coffee_list: [
      {
        id: 1,
        name: "americano",
        ingredients: {
          espresso: 1 / 4,
          water: 3 / 4,
        },
      },
      {
        id: 2,
        name: "cappucino",
        ingredients: {
          espresso: 1 / 4,
          milk: 1 / 4,
          "whipped milk": 1 / 2,
        },
      },
      {
        id: 3,
        name: "espresso",
        ingredients: {
          espresso: 1 / 4,
        },
      },
      {
        id: 4,
        name: "doppio",
        ingredients: {
          espresso: 1 / 2,
        },
      },
      {
        id: 5,
        name: "tripplo",
        ingredients: {
          espresso: 3 / 4,
        },
      },
      {
        id: 6,
        name: "flat white",
        ingredients: {
          espresso: 1 / 3,
          milk: 2 / 3,
        },
      },
      {
        id: 7,
        name: "macchiato",
        ingredients: {
          espresso: 1 / 2,
          whipped_milk: 1 / 10,
        },
      },
      {
        id: 8,
        name: "latte",
        ingredients: {
          espresso: 1 / 4,
          milk: 1 / 2,
          whipped_milk: 1 / 4,
        },
      },
      {
        id: 9,
        name: "raf",
        ingredients: {
          syrup: 1 / 10,
          espresso: 3 / 10,
          whipped_milk: 3 / 5,
        },
      },
      {
        id: 10,
        name: "viennese coffee",
        ingredients: {
          espresso: 1 / 4,
          whipped_cream: 3 / 4,
        },
      },
      {
        id: 11,
        name: "latte macchiato",
        ingredients: {
          espresso: 1 / 4,
          milk: 1 / 2,
          whipped_cream: 1 / 4,
        },
      },
    ],
  },
});
