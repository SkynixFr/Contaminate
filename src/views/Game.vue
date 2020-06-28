<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12">
        
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import NavBar from "@/components/NavBar.vue";
export default {
  name: "Game",
  data() {
    return {
      username: "",
    };
  },
  components: {
    NavBar,
  },
  methods: {
    infosUser() {
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
  },
  mounted() {
    this.infosUser();
  },
};
</script>

<style></style>
