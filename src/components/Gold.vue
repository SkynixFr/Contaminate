<template>
  <v-container fluid dark>
    <v-row justify="center" align="center">
      <v-card outlined dark color="rgba(0,0,0,0)">
        <v-card-title class="justify-center gold-number">
          {{ formatedGold }}
          <v-icon class="ml-2" color="#ffd700">mdi-gold</v-icon>
        </v-card-title>
        <v-card-subtitle class="text-center">
          <span class="ml-2 gold-second">(0 or/s.)</span>
        </v-card-subtitle>
        <!-- <v-card-title class="justify-center green-number">
          {{ formatedTwitchPts }}
          <v-img
            src="../../public/icon.png"
            class="ml-1"
            max-width="30"
          ></v-img>
        </v-card-title>
        <v-card-subtitle class="text-center">
          <span class="ml-2 ">(Prochainement...)</span>
        </v-card-subtitle> -->

        <v-card-actions>
          <v-img
            src="../../public/twitch.png"
            max-width="250"
            v-on:click="addingGold"
          >
          </v-img>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import { bus } from "../main";
export default {
  methods: {
    addingGold() {
      this.$store.state.game.golds++;
      this.$store.commit("updateGameGolds", this.$store.state.game.golds);
    },
    updateGame() {
      let parameters = {
        golds: this.$store.state.game.golds,
        // twitchPts: this.game.twitchPts,
        // production: this.game.production,
      };
      axios
        .patch("/games/" + this.$store.state.game._id, parameters)
        .then((response) => {
          bus.$emit("updateGame", response.data.message);
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
  },
  computed: {
    formatedGold: function() {
      return new Intl.NumberFormat().format(this.$store.state.game.golds);
    },
    // formatedTwitchPts: function() {
    //   return new Intl.NumberFormat().format(this.game.twitchPts);
    // },
  },
  mounted() {
    setInterval(() => {
      this.updateGame();
    }, 60000);
  },
};
</script>

<style lang="scss">
.gold-number {
  font-size: 2em;
  font-family: "MuseoModerno", cursive;
  font-weight: bold;
  color: #ffd700;
}
.green-number {
  font-size: 2em;
  font-family: "MuseoModerno", cursive;
  font-weight: bold;
}
.gold-second {
  color: #ffd700;
}
</style>
