<template>
  <v-card shaped elevation="12">
    <v-snackbar
      centered
      top
      dark
      color="#004D40"
      elevation="2"
      multi-line
      transition="scroll-y-transition"
      :value="showSuccess"
    >
      <v-icon>mdi-check-circle</v-icon>
      <span class="success-text">{{ responseRegister }} !</span>
    </v-snackbar>
    <v-toolbar flat color="#004D40" dark>
      <v-spacer></v-spacer>
      <v-toolbar-title class="text-center">
        Connecte-toi !
      </v-toolbar-title>
      <v-spacer></v-spacer>
    </v-toolbar>
    <v-card-text>
      <v-form ref="form" v-model="valid">
        <v-text-field
          outlined
          color="#004D40"
          label="Pseudo"
          placeholder="Pseudo"
          prepend-icon="mdi-account"
          v-model="username"
          :rules="[rules.required, rules.minUsername]"
          v-on:keyup.enter="login"
        />
        <v-text-field
          outlined
          color="#004D40"
          label="Mot de passe"
          placeholder="Mot de passe"
          prepend-icon="mdi-lock"
          v-model="password"
          :append-icon="showPassword ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword = !showPassword"
          :type="showPassword ? 'text' : 'password'"
          :rules="[rules.required, rules.minPassword]"
          v-on:keyup.enter="login"
        />
        <div>
          <v-alert
            dense
            border="left"
            icon="mdi-alert"
            color="#C62828"
            elevation="2"
            transition="slide-x-reverse-transition"
            :value="showError"
            dark
          >
            {{ errorMessage }}
          </v-alert>
        </div>
        <v-btn block color="#004D40" depressed dark @click="login">
          Se connecter
        </v-btn>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <div class="footing-text">
        <span>Pas de compte ? </span>
        <router-link to="/register" class="link">S'inscrire</router-link>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "FormLogin",
  props: {
    responseRegister: {
      type: String,
    },
  },
  data() {
    return {
      valid: true,
      showSuccess: false,
      showError: false,
      errorMessage: "",
      username: "",
      password: "",
      showPassword: false,
      rules: {
        required: (value) => !!value || "Ce champs est requis.",
        minUsername: (value) =>
          value.length >= 3 || "Le pseudo n'est pas assez long.",
        minPassword: (value) =>
          value.length >= 6 || "Le mot de passe n'est pas assez long",
      },
    };
  },
  methods: {
    login() {
      if (this.$refs.form.validate()) {
        let parameters = {
          username: this.username,
          email: this.email,
          password: this.password,
        };
        axios
          .post("/auth/login", parameters)
          .then((response) => {
            this.$store.commit("login", response.data);
            this.$router.push({
              name: "Game",
            });
          })
          .catch((error) => {
            this.showError = true;
            setTimeout(() => {
              this.showError = false;
            }, 5000);
            return (this.errorMessage = error.response.data.message);
          });
      }
    },
  },
  mounted() {
    if (this.responseRegister) {
      this.showSuccess = true;
      setTimeout(() => {
        this.showSuccess = false;
      }, 5000);
    }
  },
};
</script>
<style lang="scss">
.success-text {
  margin-left: 15px;
}
.footing-text {
  width: 100%;
  text-align: center;
  .link {
    color: #004d40;
  }
}
</style>
