<template>
  <v-container fluid>
    <v-dialog
      v-model="this.$store.state.loader"
      persistent
      fullscreen
      content-class="loader"
    >
      <v-container fill-height>
        <v-layout column justify-center align-center>
          <v-img
            src="../../public/twitch_8bit.png"
            max-height="250"
            class="mb-4"
          ></v-img>
          <v-progress-circular
            indeterminate
            :size="40"
            class="mb-4"
          ></v-progress-circular>
          <span>Chargement de la partie en cours...</span>
        </v-layout>
      </v-container>
    </v-dialog>
    <v-row>
      <v-col cols="12" md="6"><Gold /> </v-col>
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
      showUpdate: false,
      updateGameMessage: "",
      listDefaultUpgrades: [],
      listModifiedUpgrades: [],
    };
  },
  methods: {
    async getGame() {
      try {
        await axios.post("/games").then((response) => {
          this.$store.commit("getGame", response.data.game);
        });
        await this.verifyUpgrade();
      } catch (error) {
        console.log(error.response.data);
      }
    },
    async getDefaultUpgrade() {
      try {
        await axios.get("upgrade/default").then((response) => {
          response.data.upgrades.forEach((upgrade) => {
            this.listDefaultUpgrades.push(upgrade);
          });
        });
      } catch (error) {
        console.log(error);
      }
    },
    async getModifiedUpgrade() {
      try {
        await axios
          .get("upgrade/" + this.$store.state.game._id)
          .then((response) => {
            response.data.upgrades.forEach((upgrade) => {
              this.listModifiedUpgrades.push(upgrade);
            });
          });
      } catch (error) {
        console.log(error);
      }
    },
    async verifyUpgrade() {
      try {
        await this.getDefaultUpgrade();
        await this.getModifiedUpgrade();
        this.listDefaultUpgrades.forEach((defaultUpgrade) => {
          if (this.listModifiedUpgrades.length === 0) {
            this.$store.commit("getUpgrade", defaultUpgrade);
          } else {
            this.listModifiedUpgrades.forEach((modifiedUpgrade) => {
              if (defaultUpgrade._id === modifiedUpgrade.upgrade) {
                const upgrade = {
                  level: modifiedUpgrade.level,
                  _id: defaultUpgrade._id,
                  name: defaultUpgrade.name,
                  price: modifiedUpgrade.price,
                  production: modifiedUpgrade.production,
                  scaling: defaultUpgrade.scaling,
                  __v: defaultUpgrade.__v,
                };
                this.$store.commit("getUpgrade", upgrade);
              }
            });
          }
        });
      } catch (error) {
        console.log(error);
      }
    },
    async updateGame() {
      let parameters = {
        golds: this.$store.state.game.golds,
        // twitchPts: this.game.twitchPts,
        production: this.$store.state.game.production,
      };
      console.log(this.$store.state.game.production);

      try {
        await axios
          .patch("/games/" + this.$store.state.game._id, parameters)
          .then((response) => {
            this.updateGameMessage = response.data.message;
            this.showUpdate = true;
            setTimeout(() => {
              this.showUpdate = false;
            }, 5000);
          })
          .catch((error) => {
            console.log(error.response.data);
          });
      } catch (error) {
        console.log(error);
      }
    },
    async updateUpgrades() {
      this.$store.state.upgrades.forEach((upgrade) => {
        if (upgrade.level > 0) {
          let parameters = {
            level: upgrade.level,
            price: upgrade.price,
            production: upgrade.production,
          };
          try {
            axios
              .patch(
                "upgrade/" + this.$store.state.game._id + "/" + upgrade._id,
                parameters
              )
              .catch((error) => {
                console.log(error.response.data);
              });
          } catch (error) {
            console.log(error);
          }
        }
      });
    },
  },
  created() {
    if (this.$store.state.loader) {
      this.getGame().then(() => {
        setTimeout(() => {
          this.$store.commit("updateLoader", false);
        }, 1500);
      });
    } else {
      setInterval(() => {
        this.updateGame();
        this.updateUpgrades();
      }, 60000);
    }
  },
};
</script>

<style>
.loader {
  background-color: #004d40;
  color: whitesmoke;
}
</style>
