<template>
  <v-app id="container">
    <v-main>
      <NavBar v-if="this.$store.state.authToken" />
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "App",
  components: {
    NavBar,
  },
};
</script>

<style lang="scss" scoped>
#container {
  background-image: url("../public/large-twitch.jpg");
  background-color: rgba(0, 0, 0, 0.9);
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
@media (max-width: 767px) {
  #container {
    background-image: url("../public/medium-twitch.jpg");
  }
}
@media (max-width: 1920px) and (min-width: 768px) {
  #container {
    background-image: url("../public/medium-twitch.jpg");
  }
}
</style>
