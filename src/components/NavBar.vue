<template>
  <div>
    <v-app-bar app fixed color="rgba(0,0,0,0.8)" dark>
      <v-toolbar-title class="pr-1">
        Bienvenue
        <router-link to="/profil">{{ username }}</router-link> !
      </v-toolbar-title>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon class="mr-1 " v-bind="attrs" v-on="on" @click="logout">
            <v-icon>mdi-logout</v-icon>
          </v-btn>
        </template>
        <span>Se déconnecter</span>
      </v-tooltip>
      <v-toolbar-title class="hidden-sm-and-down">
        Liste des bonus achetés :
      </v-toolbar-title>
      <v-col cols="12" md="5" class="hidden-sm-and-down">
        <v-chip-group>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-chip
                color="#004D40"
                :ripple="false"
                v-bind="attrs"
                v-on="on"
                dark
              >
                dazdqsd
              </v-chip>
            </template>
            <span>Bonus n°1</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-chip
                color="#004D40"
                :ripple="false"
                v-bind="attrs"
                v-on="on"
                dark
              >
                dazdqsd
              </v-chip>
            </template>
            <span>Bonus n°2</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-chip
                color="#004D40"
                :ripple="false"
                v-bind="attrs"
                v-on="on"
                dark
              >
                dazdqsd
              </v-chip>
            </template>
            <span>Bonus n°3</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-chip
                color="#004D40"
                :ripple="false"
                v-bind="attrs"
                v-on="on"
                dark
              >
                dazdqsd
              </v-chip>
            </template>
            <span>Bonus n°4</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-chip
                color="#004D40"
                :ripple="false"
                v-bind="attrs"
                v-on="on"
                dark
              >
                dazdqsd
              </v-chip>
            </template>
            <span>Bonus n°5</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-chip
                color="#004D40"
                :ripple="false"
                v-bind="attrs"
                v-on="on"
                dark
              >
                dazdqsd
              </v-chip>
            </template>
            <span>Bonus n°6</span>
          </v-tooltip>
          <v-tooltip bottom>
            <template v-slot:activator="{ on, attrs }">
              <v-chip
                color="#004D40"
                :ripple="false"
                v-bind="attrs"
                v-on="on"
                dark
              >
                dazdqsd
              </v-chip>
            </template>
            <span>Bonus n°7</span>
          </v-tooltip>
        </v-chip-group>
      </v-col>
      <v-spacer></v-spacer>
      <v-toolbar-title class="pr-1 hidden-sm-and-down">
        {{ username }} ???/???
      </v-toolbar-title>
      <v-tooltip bottom>
        <template v-slot:activator="{ on, attrs }">
          <v-btn icon v-bind="attrs" v-on="on" class="hidden-sm-and-down">
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
    <v-navigation-drawer v-model="drawer" fixed temporary>
      <v-list-item>
        <v-list-item-content>
          <v-list-item-title>Contaminate</v-list-item-title>
          <v-list-item-subtitle> {{ username }} </v-list-item-subtitle>
        </v-list-item-content>
      </v-list-item>
      <v-divider></v-divider>
      <v-list>
        <v-list-item link to="/game">
          <v-list-item-icon>
            <v-icon>mdi-nintendo-game-boy</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Jeu</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/game">
          <v-list-item-icon>
            <v-icon>mdi-account</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>Profil</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link to="/game">
          <v-list-item-icon>
            <v-icon>mdi-podium</v-icon>
          </v-list-item-icon>
          <v-list-item-content>
            <v-list-item-title>{{ username }} ???/???</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-expansion-panels flat accordion>
          <v-expansion-panel>
            <v-expansion-panel-header expand-icon="mdi-menu-down">
              Liste des bonus achetés
            </v-expansion-panel-header>
            <v-expansion-panel-content>
              <v-chip-group column>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-chip
                      color="#004D40"
                      :ripple="false"
                      v-bind="attrs"
                      v-on="on"
                      dark
                    >
                      dazdqsd
                    </v-chip>
                  </template>
                  <span>Bonus n°1</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-chip
                      color="#004D40"
                      :ripple="false"
                      v-bind="attrs"
                      v-on="on"
                      dark
                    >
                      dazdqsd
                    </v-chip>
                  </template>
                  <span>Bonus n°2</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-chip
                      color="#004D40"
                      :ripple="false"
                      v-bind="attrs"
                      v-on="on"
                      dark
                    >
                      dazdqsd
                    </v-chip>
                  </template>
                  <span>Bonus n°3</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-chip
                      color="#004D40"
                      :ripple="false"
                      v-bind="attrs"
                      v-on="on"
                      dark
                    >
                      dazdqsd
                    </v-chip>
                  </template>
                  <span>Bonus n°4</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-chip
                      color="#004D40"
                      :ripple="false"
                      v-bind="attrs"
                      v-on="on"
                      dark
                    >
                      dazdqsd
                    </v-chip>
                  </template>
                  <span>Bonus n°5</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-chip
                      color="#004D40"
                      :ripple="false"
                      v-bind="attrs"
                      v-on="on"
                      dark
                    >
                      dazdqsd
                    </v-chip>
                  </template>
                  <span>Bonus n°6</span>
                </v-tooltip>
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-chip
                      color="#004D40"
                      :ripple="false"
                      v-bind="attrs"
                      v-on="on"
                      dark
                    >
                      dazdqsd
                    </v-chip>
                  </template>
                  <span>Bonus n°7</span>
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
          <v-btn icon>
            <v-icon>mdi-brightness-4</v-icon>
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
    };
  },
  props: {
    username: {
      type: String,
      require: true,
    },
  },
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped></style>
