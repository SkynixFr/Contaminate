<template>
  <v-container fluid style="">
    <v-row>
      <v-col cols="12" md="3"> </v-col>
      <v-col cols="12" md="6">
        <v-card dark color="rgba(0,0,0,0.7)">
          <v-list-item x-line>
            <v-list-item-content>
              <v-list-item-title class="display-1 pt-1">
                Général
              </v-list-item-title>
              <v-list-item-subtitle class="pt-5">
                Pseudo : {{ user.username }}
              </v-list-item-subtitle>
              <v-list-item-subtitle class=" pt-1">
                Email : {{ user.email }}
              </v-list-item-subtitle>
              <v-list-item-subtitle class=" pt-1">
                <v-tooltip bottom>
                  <template v-slot:activator="{ on, attrs }">
                    <v-btn icon @click="logout" v-bind="attrs" v-on="on">
                      <v-icon>mdi-logout</v-icon>
                    </v-btn>
                  </template>
                  <span>Se déconnecter</span>
                </v-tooltip>
              </v-list-item-subtitle>
              <v-list-item-title class="display-1 pt-7">
                Statistique
              </v-list-item-title>
              <v-list-item-subtitle class=" pt-5">
                Gold total :
              </v-list-item-subtitle>
              <v-list-item-subtitle class=" pt-1">
                Gold utilisé :
              </v-list-item-subtitle>
              <v-list-item-subtitle class=" pt-1">
                Temps de jeu :
              </v-list-item-subtitle>
              <v-list-item-subtitle class=" pt-1">
                Total amélioration acheté :
              </v-list-item-subtitle>
              <v-list-item-subtitle class=" pt-1">
                Gold par seconde :
              </v-list-item-subtitle>
              <v-list-item-subtitle class=" pt-1">
                Gold par clique :
              </v-list-item-subtitle>
              <v-list-item-subtitle class=" pt-1">
                Nombre de gold fait en tout grâce au clique :
              </v-list-item-subtitle>
              <v-list-item-subtitle class=" pt-1">
                Nombre de gold fait en tout grâce au amélioration :
              </v-list-item-subtitle>
              <v-list-item-title class="display-1 pt-5">
                Amélioration
              </v-list-item-title>
              <v-list-item-title class="display-1 pt-5">
                Bonus
              </v-list-item-title>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Profil",
  data() {
    return {
      user: "",
      username: "",
    };
  },
  methods: {
    logout() {
      this.$store.commit("logout");
      this.$router.push("/login");
    },
  },
  mounted() {
    axios
      .get("/users/" + this.$store.state.userId, {
        headers: {
          "auth-token": this.$store.state.token,
        },
      })
      .then((response) => {
        this.user = response.data.user;
      });
  },
};
</script>

<style>
.display-1 {
  border-bottom: solid white;
}
</style>
