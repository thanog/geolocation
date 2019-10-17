<template>
  <div>
    <section class="container">
      <h1>Home</h1>
      <p class="subheading">The Homepage.</p>
      <!-- <textarea v-model="test"></textarea> -->
      <!-- <p>{{test}}</p> -->
      <UserLocation />
    </section>
  </div>
</template>

<script>
import UserLocation from "~/components/UserLocation.vue";
export default {
  head() {
    return {
      title: "NUXT Home",
      meta: [
        { name: "description", content: "This is my about description here." },
        { name: "keywords", content: "about nuxt, nuxt info" }
      ]
    };
  },
  name: "Default",
  components: {
    UserLocation
  }
};
</script>

<style>
</style>