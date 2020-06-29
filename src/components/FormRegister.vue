<template>
  <v-card shaped elevation="12">
    <v-toolbar flat color="#004D40" dark>
      <v-spacer></v-spacer>
      <v-toolbar-title class="text-center">
        Inscris-toi !
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
          v-on:keyup.enter="register"
        />
        <v-text-field
          outlined
          color="#004D40"
          label="Email"
          placeholder="Email"
          prepend-icon="mdi-at"
          v-model="email"
          :rules="[rules.required, rules.email]"
          v-on:keyup.enter="register"
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
          v-on:keyup.enter="register"
        />
        <v-text-field
          outlined
          color="#004D40"
          label="Confirmation du mot de passe"
          placeholder="Confirmation du mot de passe"
          prepend-icon="mdi-lock"
          v-model="password2"
          :append-icon="showPassword2 ? 'mdi-eye' : 'mdi-eye-off'"
          @click:append="showPassword2 = !showPassword2"
          :type="showPassword2 ? 'text' : 'password'"
          :rules="[rules.required, rules.minPassword]"
          v-on:keyup.enter="register"
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
        <v-btn block color="#004D40" depressed dark @click="register">
          S'inscrire
        </v-btn>
      </v-form>
    </v-card-text>
    <v-card-actions>
      <div class="footing-text">
        <span>Déjà un compte ? </span>
        <router-link to="/login" class="link">Se connecter</router-link>
      </div>
    </v-card-actions>
  </v-card>
</template>

<script>
export default {
  name: "FormRegister",
  data() {
    return {
      valid: true,
      showError: false,
      errorMessage: "",
      username: "",
      email: "",
      password: "",
      password2: "",
      showPassword: false,
      showPassword2: false,
      rules: {
        required: (value) => !!value || "Ce champs est requis.",
        minUsername: (value) =>
          value.length >= 3 || "Le pseudo n'est pas assez long.",
        minPassword: (value) =>
          value.length >= 6 || "Le mot de passe n'est pas assez long",
        email: (value) => {
          const pattern = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
          return pattern.test(value) || "L'email n'est pas valide.";
        },
      },
    };
  },
  methods: {
    register() {
      if (this.password != this.password2) {
        this.showError = true;
        setTimeout(() => {
          this.showError = false;
        }, 5000);
        return (this.errorMessage =
          "Les mots de passes ne sont pas identiques.");
      }
      if (this.$refs.form.validate()) {
        let parameters = {
          username: this.username,
          email: this.email,
          password: this.password,
        };
        axios
          .post("/auth/register", parameters)
          .then((response) => {
            this.$router.push({
              name: "Login",
              path: "/login",
              params: {
                responseRegister: response.data.message,
              },
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
};
</script>
<style lang="scss">
.footing-text {
  width: 100%;
  text-align: center;
  .link {
    color: #004d40;
  }
}
</style>
