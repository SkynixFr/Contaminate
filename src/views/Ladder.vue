<template>
  <v-container fluid style="">
    <v-row>
      <v-col cols="12" md="12">
        <v-card class="ladder">
          <v-list-item x-line>
            <v-list-item-content>
              <v-list-item-title id="title" class="display-1 pt-1 ">
                Ladder
              </v-list-item-title>
              <v-btn icon class="mr-1" @click="getmyprofil">
                Voir mon classement
              </v-btn>
              <v-col cols="12" md="3">
                <v-list-item-title id="title" class="display-1 pt-1">
                  #
                </v-list-item-title>
                <v-list-item-subtitle
                  id="subtitle-top-1"
                  class="display-1 pt-5"
                >
                  1
                </v-list-item-subtitle>
                <v-list-item-subtitle
                  id="subtitle-top-2"
                  class="display-1 pt-5"
                >
                  2
                </v-list-item-subtitle>
                <v-list-item-subtitle
                  id="subtitle-top-3"
                  class="display-1 pt-5"
                >
                  3
                </v-list-item-subtitle>
                <v-list-item-subtitle id="subtitle" class="display-1 pt-5">
                  4
                </v-list-item-subtitle>
              </v-col>
              <v-col cols="12" md="3">
                <v-list-item-title id="title" class="display-1 pt-1">
                  Pseudo
                </v-list-item-title>
                <v-list-item-subtitle
                  id="subtitle-top-1"
                  class="display-1 pt-5"
                >
                  Zoons
                </v-list-item-subtitle>
                <v-list-item-subtitle
                  id="subtitle-top-2"
                  class="display-1 pt-5"
                >
                  Skynix
                </v-list-item-subtitle>
                <v-list-item-subtitle
                  id="subtitle-top-3"
                  class="display-1 pt-5"
                >
                  AAAA
                </v-list-item-subtitle>
                <v-list-item-subtitle id="subtitle" class="display-1 pt-5">
                  ezazae
                </v-list-item-subtitle>
              </v-col>
              <v-col cols="12" md="3">
                <v-list-item-title id="title" class="display-1 pt-1">
                  Nombre de gold
                </v-list-item-title>
                <v-list-item-subtitle
                  id="subtitle-top-1"
                  class="display-1 pt-5"
                >
                  54435
                </v-list-item-subtitle>
                <v-list-item-subtitle
                  id="subtitle-top-2"
                  class="display-1 pt-5"
                >
                  32133
                </v-list-item-subtitle>
                <v-list-item-subtitle
                  id="subtitle-top-3"
                  class="display-1 pt-5"
                >
                  12332
                </v-list-item-subtitle>
                <v-list-item-subtitle id="subtitle" class="display-1 pt-5">
                  1212
                </v-list-item-subtitle>
              </v-col>
              <v-col cols="12" md="3">
                <v-list-item-title id="title" class="display-1 pt-1">
                  Nombre de point twitch
                </v-list-item-title>
                <v-list-item-subtitle
                  id="subtitle-top-1"
                  class="display-1 pt-5"
                >
                  12
                </v-list-item-subtitle>
                <v-list-item-subtitle
                  id="subtitle-top-2"
                  class="display-1 pt-5"
                >
                  10
                </v-list-item-subtitle>
                <v-list-item-subtitle
                  id="subtitle-top-3"
                  class="display-1 pt-5"
                >
                  9
                </v-list-item-subtitle>
                <v-list-item-subtitle id="subtitle" class="display-1 pt-5">
                  2
                </v-list-item-subtitle>
              </v-col>
            </v-list-item-content>
          </v-list-item>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
export default {
  name: "Ladder",
  data() {
    return {
      username: "",
    };
  },
  methods: {
    getmyprofil() {
      axios
        .get("/users/" + this.$store.state.userId, {
          headers: {
            "auth-token": this.$store.state.token,
          },
        })
        .then((response) => {
          this.username = response.data.user.username;
          console.log(this.username);
        });
    },
  },
  mounted() {
    this.getmyprofil();
  },
};
</script>

<style>
#title {
  text-align: center;
  border-bottom: solid white;
}
#subtitle {
  text-align: center;
  color: gray;
}
#subtitle-top-1 {
  text-align: center;
  color: gold;
}
#subtitle-top-2 {
  text-align: center;
  color: silver;
}
#subtitle-top-3 {
  text-align: center;
  color: #c49c48;
}
</style>
