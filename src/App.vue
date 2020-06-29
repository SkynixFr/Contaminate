<template>
  <v-app id="container">
    <NavBar v-if="this.$store.state.authToken" :username="username" />
    <v-main>
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
  data() {
    return {
      username: "",
    };
  },
  mounted() {
    axios
      .get("/users/" + this.$store.state.userId, {
        headers: {
          "auth-token": this.$store.state.authToken,
        },
      })
      .then((response) => {
        this.username = response.data.user.username;
      })
      .catch((error) => {
        console.log(error.response.message);
      });
  },
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
