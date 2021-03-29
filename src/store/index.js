import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export const store = new Vuex.Store({
  state: {
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
})