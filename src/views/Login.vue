<template>
  <v-container fill-height fluid class="login-container">
    <v-row>
      <v-col cols="12" sm="8" offset="2">
        <p style="text-align: center">Ici image</p>
      </v-col>
      <v-col cols="12" sm="8" offset="2">
        <p class="heading-login">Contaminate</p>
      </v-col>
      <v-col cols="12" sm="6" offset="3">
        <v-card outlined>
          <v-container>
            <v-row>
              <v-col cols="12" sm="12">
                <p class="heading-form">Connecte toi !</p>
              </v-col>
              <v-col cols="12" sm="8" offset="2">
                <v-text-field
                  outlined
                  clearable
                  color="#2E7D32"
                  prepend-inner-icon="mdi-order-alphabetical-ascending"
                  label="Pseudo"
                  placeholder="Pseudo"
                  :rules="[rules.required, rules.minUsername]"
                  v-model="username"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="8" offset="2">
                <v-text-field
                  outlined
                  color="#2E7D32"
                  prepend-inner-icon="mdi-lock"
                  label="Mot de passe"
                  placeholder="Mot de passe"
                  :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
                  @click:append="showPassword = !showPassword"
                  :type="showPassword ? 'text' : 'password'"
                  :rules="[rules.required, rules.minPassword]"
                  v-model="password"
                ></v-text-field>
              </v-col>
              <v-col cols="12" sm="8" offset="2">
                <v-btn
                  block
                  color="#2E7D32"
                  dark
                  large
                  depressed
                  @click="login"
                >
                  Se connecter
                </v-btn>
              </v-col>
              <v-col cols="12">
                <div class="text-center">
                  <span class="text-footing-form"
                    >Nouveau sur Contaminate ? </span
                  ><router-link to="/register" class="text-link-register"
                    >Inscris-toi</router-link
                  >
                </div>
              </v-col>
            </v-row>
          </v-container>
        </v-card>
      </v-col>
    </v-row>
    <v-snackbar v-model="showMessage" :timeout="5000" color="red darken-2">
      <span class="message-error">{{ message }}</span>
      <v-btn icon @click="showMessage = false"
        ><v-icon color="white">mdi-close</v-icon></v-btn
      >
    </v-snackbar>
  </v-container>
</template>

<script>
import axios from "axios";
export default {
  name: "Login",
  data() {
    return {
      rules: {
        required: (value) => !!value || "Ce champs est requis",
        minPassword: (value) => value.length >= 6,
        minUsername: (value) => value.length >= 3,
      },
      showError: false,
      showPassword: false,
      password: "",
      username: "",
      message: "",
      showMessage: false,
    };
  },
  methods: {
    setMessage(message) {
      this.message = message;
      this.showMessage = !this.showMessage;
    },
    login() {
      if (this.username.length < 3 || this.password.length < 6)
        return this.setMessage("Attention il y a des données manquantes");
      let parameters = {
        username: this.username,
        password: this.password,
      };
      axios
        .post("https://contaminateapi.herokuapp.com/auth/login", parameters)
        .then((response) => {
          console.log("Login réussi");
          console.log(response.data);
          this.$store.commit("login", response.data);
          this.$router.push("/");
        })
        .catch((error) => {
          this.setMessage(error.response.data.message);
        });
    },
  },
};
</script>

<style lang="scss" scoped>
.heading-login {
  text-align: center;
  font-size: 1.5em;
  text-transform: uppercase;
  color: white;
}
.login-container {
  background-color: #1b5e20;
}
.heading-form {
  text-align: center;
  font-size: 1.5em;
  color: #1b5e20;
}
.text-footing-form {
  color: #4a5568;
}
.text-link-register {
  color: #2e7d32;
}
</style>
