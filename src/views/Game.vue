<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="6"><Gold :game="game" /> </v-col>
      <v-col cols="12" md="6"><Store /></v-col>
    </v-row>
    <v-snackbar
      bottom
      dark
      color="#004D40"
      elevation="2"
      transition="slide-y-reverse-transition"
      :value="showUpdate"
    >
      <v-icon>mdi-check-circle</v-icon>
      <span class="ml-2">{{ updateGameMessage }} !</span>
    </v-snackbar>
  </v-container>
</template>

<script>
import { bus } from "../main";
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
      showUpdate: false,
      updateGameMessage: "",
    };
  },
  methods: {
    gameInfos() {
      axios
        .post("/games")
        .then((response) => {
          this.game = response.data.game;
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
  },
  created() {
    bus.$on("updateGame", (data) => {
      this.showUpdate = true;
      this.updateGameMessage = data;
      setTimeout(() => {
        this.showUpdate = false;
      }, 5000);
    });
  },
  mounted() {
    this.gameInfos();
  },
};
</script>

<style></style>
