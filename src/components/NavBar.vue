<template>
  <div>
    <v-app-bar app fixed color="rgba(0,0,0,0.8)" dark>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-img
            src="../../public/icon.png"
            max-width="50"
            v-on:click="home"
            class="mr-5"
            v-bind="attrs"
            v-on="on"
          ></v-img>
        </template>
        <span>Revenir sur le jeu</span>
      </v-tooltip>
      <v-toolbar-title class="hidden-sm-and-down">
        Bonus achetés :
      </v-toolbar-title>
      <v-col cols="12" md="6" class="hidden-sm-and-down">
        <v-chip-group>
          <v-tooltip
            bottom
            v-for="bonusBought in listBonusBought"
            :key="bonusBought._id"
          >
            <template v-slot:activator="{ on, attrs }">
              <v-chip
                color="#004D40"
                :ripple="false"
                v-bind="attrs"
                v-on="on"
                dark
              >
                {{ bonusBought.name }}
              </v-chip>
            </template>
            <span>{{ bonusBought.description }}</span>
          </v-tooltip>
        </v-chip-group>
      </v-col>
      <v-spacer></v-spacer>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-toolbar-title
            class="pr-2 hidden-sm-and-down"
            v-bind="attrs"
            v-on="on"
          >
            <router-link to="/profil" exact>
              {{ username }}
            </router-link>
          </v-toolbar-title>
        </template>
        <span>Profil</span>
      </v-tooltip>
      <v-toolbar-title class="pr-2 hidden-sm-and-down">???/???</v-toolbar-title>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
            class="hidden-sm-and-down"
            to="/ladder"
            exact
          >
            <v-icon>mdi-podium</v-icon>
          </v-btn>
        </template>
        <span>Classement</span>
      </v-tooltip>
      <v-app-bar-nav-icon
        @click.stop="drawer = !drawer"
        class="hidden-md-and-up"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" fixed temporary dark>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-avatar :size="60" class="mb-2" rounded>
            <v-img
              src="../../public/icon.png"
              max-width="75"
              max-height="75"
            ></v-img>
          </v-list-item-avatar>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-item link to="/" exact>
          <v-list-item-icon>
            <v-icon>mdi-nintendo-game-boy</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Jeu</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/profil" exact>
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Profil</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/ladder" exact>
          <v-list-item-icon>
            <v-icon>mdi-podium</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ username }} ???/???</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-expansion-panels flat accordion dark>
          <v-expansion-panel>
            <v-expansion-panel-header expand-icon="mdi-menu-down">
              Liste des bonus achetés
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-chip-group column>
                <v-tooltip
                  bottom
                  v-for="bonusBought in listBonusBought"
                  :key="bonusBought._id"
                >
                  <template v-slot:activator="{ on, attrs }">
                    <v-chip
                      color="#004D40"
                      :ripple="false"
                      v-bind="attrs"
                      v-on="on"
                      dark
                    >
                      {{ bonusBought.name }}
                    </v-chip>
                  </template>
                  <span>{{ bonusBought.description }}</span>
                </v-tooltip>
              </v-chip-group>
            </v-expansion-panel-content>
          </v-expansion-panel>
        </v-expansion-panels>
      </v-list>
      <template v-slot:append>
        <v-divider></v-divider>
        <div class="pa-2">
          <v-btn icon @click="logout">
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </div>
      </template>
    </v-navigation-drawer>
  </div>
</template>

<script>
export default {
  name: "NavBar",
  data() {
    return {
      drawer: null,
      username: "",
      listBonusBought: "",
    };
  },
  methods: {
    home() {
      this.$router.push({
        path: "/",
        name: "Game",
      });
    },
    logout() {
      this.$store.commit("logout");
      this.$router.push("/login");
    },
  },
  mounted() {
    axios
      .get("/users/" + this.$store.state.game.user)
      .then((response) => {
        this.username = response.data.user.username;
      })
      .catch((error) => {
        console.log(error.response.data);
      });
    axios.get("/bonus/" + this.$store.state.game._id).then((response) => {
      this.listBonusBought = response.data.bonus;
    });
  },
};
</script>

<style lang="scss" scoped>
.text-game {
  color: #004d40;
}
</style>
