<template>
  <b-card no-body class="overflow-hidden" style="max-width: 540px">
    <b-row no-gutters>
      <b-col md="6">
        <b-card-img
          :src="require('../assets/barista.jpg')"
          alt="Barista"
          class="rounded-0"
        ></b-card-img>
      </b-col>
      <b-col md="6">
        <b-card-body title="Welcome to CoffeeMaker!">
          <b-card-text>
            This small application will help novice baristas to learn the types
            of drinks, their ingredients and cooking proportions. To see an
            example, click the "Cook something!" button and select the type of
            drink. Have fun learning!
          </b-card-text>
        </b-card-body>
      </b-col>
    </b-row>
  </b-card>
</template>
<script>
export default {
  name: "Welcome",
};
</script>