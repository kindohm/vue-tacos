<template>
  <div v-if="taco">
    <div v-if="taco.base_layer">
      <vue-markdown>{{ taco.base_layer.recipe }}</vue-markdown>
    </div>
    <div v-if="taco.condiment">
      <vue-markdown>{{ taco.condiment.recipe }}</vue-markdown>
    </div>
  </div>
</template>

<script>
import VueMarkdown from "vue-markdown";

export default {
  name: "RandomTaco",
  components: { VueMarkdown },
  data() {
    return {
      taco: null
    };
  },
  created() {
    // fetch the data when the view is created and the data is
    // already being observed
    this.fetchData();
  },
  methods: {
    fetchData() {
      // from https://github.com/evz/tacofancy-api
      const url = "http://taco-randomizer.herokuapp.com/random/?full-taco=true";
      fetch(url)
        .then(function(response) {
          return response.json();
        })
        .then(data => {
          console.log("data", data);
          this.taco = data;
        });
    }
  }
};
</script>
