<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="6"><Gold :game="game"/></v-col>
      <v-col cols="12" md="6"><Store /></v-col>
    </v-row>
  </v-container>
</template>

<script>
import Gold from "@/components/Gold.vue";
import Store from "@/components/Store.vue";
export default {
  name: "Game",
  components: {
    Gold,
    Store,
  },
  data() {
    return {
      game: "",
    };
  },
  methods: {
    gameInfos() {
      axios
        .post("/games", {
          headers: {
            "auth-token": this.$store.state.authToken,
          },
        })
        .then((response) => {
          this.game = response.data.game;
        })
        .catch((error) => {
          console.log(error.response.message);
        });
    },
  },
  mounted() {
    this.gameInfos();
  },
};
</script>

<style></style>
