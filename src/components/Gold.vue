<template>
  <v-container fluid dark>
    <v-row justify="center" align="center">
      <v-card outlined dark color="rgba(0,0,0,0.7)" min-width="600">
        <v-card-title class="justify-center gold-number">
          {{ formatedGold }}
          <v-icon class="ml-2" color="#ffd700">mdi-gold</v-icon>
        </v-card-title>
        <v-card-subtitle class="text-center">
          <span class="ml-2 gold-second">
            ({{ this.$store.state.game.production }} or/s.)
          </span>
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
        <v-card-actions class="justify-center">
          <v-img
            src="../../public/twitch_8bit.png"
            max-width="250"
            v-on:click="addingGold"
            class="goldImg"
          >
          </v-img>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  methods: {
    addingGold() {
      this.$store.state.game.golds++;
      this.$store.commit(
        "updateGameGolds",
        Number(this.$store.state.game.golds.toFixed(3))
      );
    },
    productionGold() {
      this.$store.state.game.golds = Number(
        (
          this.$store.state.game.golds + this.$store.state.game.production
        ).toFixed(3)
      );
    },
    getProduction: function() {
      return this.$store.state.game.production;
    },
  },
  computed: {
    formatedGold: function() {
      return new Intl.NumberFormat().format(
        Number(this.$store.state.game.golds)
      );
    },
  },
  mounted() {
    if (this.$store.state.game.production > 0) {
      var intervalMounted = setInterval(() => {
        this.productionGold();
      }, 1000);
    }
  },
  watch: {
    getProduction(newProd, oldProd) {
      var intervalWatch = setInterval(() => {
        this.productionGold();
      }, 1000);
      var intervalWatch2 = setInterval(() => {
        this.$store.commit(
          "updateGameGolds",
          Number(this.$store.state.game.golds.toFixed(3))
        );
      }, 10000);
    },
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
.goldImg {
  cursor: pointer;
  &:hover {
    animation: pulsate 0.5s ease-in-out;
  }
}
@-webkit-keyframes pulsate {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  25% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
  50% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  75% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
@keyframes pulsate {
  0% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  25% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
  50% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
  75% {
    -webkit-transform: scale(0.9);
    transform: scale(0.9);
  }
  100% {
    -webkit-transform: scale(1);
    transform: scale(1);
  }
}
</style>
