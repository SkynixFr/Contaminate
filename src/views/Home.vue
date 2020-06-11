<template>
  <v-container fluid style="background-color:blue">
    <v-row>
      <v-col cols="12" md="3">
        <span>Profile</span>
        <v-btn icon @click="logout">
          <v-icon color="red-darken-2">mdi-logout</v-icon>
        </v-btn>
      </v-col>
      <v-col cols="12" md="6">
        <listBonusBought></listBonusBought>
      </v-col>
      <v-col cols="12" md="3">
        <Classement></Classement>
      </v-col>
    </v-row>
    <v-row align="start">
      <v-col cols="12" md="6" style="background-color:red" class="fixed-game">
        <Game></Game>
      </v-col>
      <v-col cols="12" md="6"><Boutique></Boutique></v-col>
    </v-row>
  </v-container>
</template>

<script>
import axios from "axios";
import listBonusBought from "../components/listBonusBought";
import Classement from "../components/Classement";
import Game from "../components/Game";
import Boutique from "../components/Boutique";
export default {
  components: {
    listBonusBought,
    Classement,
    Game,
    Boutique,
  },
  methods: {
    // test() {
    //   axios
    //     .get("https://contaminateapi.herokuapp.com/users", {
    //       headers: {
    //         "auth-token": this.token,
    //       },
    //     })
    //     .then((response) => {
    //       console.log(response.data);
    //     })
    //     .catch((error) => {
    //       console.log(error.response);
    //     });
    // },
    logout() {
      this.$store.commit("logout");
      this.$router.push("/login");
    },
  },
};
</script>
