<template>
  <v-app id="container">
    <v-main>
      <router-view></router-view>
    </v-main>
  </v-app>
</template>

<script>
export default {
  name: "App",
};
</script>

<style lang="scss" scoped>
#container {
  background-image: url("../public/large-twitch.jpg");
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  background-size: cover;
}
@media (max-width: 767px) {
  #container {
    background-image: url("../public/small-twitch.jpg");
  }
}
@media (max-width: 1920px) and (min-width: 768px) {
  #container {
    background-image: url("../public/medium-twitch.jpg");
  }
}
</style>
