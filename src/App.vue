<template lang="pug">
component(:is="$route.meta.layout || 'div'")
</template>

<script lang="ts">
// import {defineComponent, ref} from 'vue'
import { defineComponent } from "vue";
import axios from "axios";

export default defineComponent({
  name: "App",
  components: {},
  data() {
    return {
      posts: null,
    };
  },
  setup() {},
  mounted() {
    this.fetchData();
  },
  methods: {
    async fetchData() {
      try {
        console.log(123);
        this.posts = (
          await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=2")
        ).data;
      } catch (e) {
        console.log(e);
      }
    },
  },
});
</script>

<style scoped lang="scss">
#app {
}
</style>
