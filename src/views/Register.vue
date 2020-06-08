<template>
   <v-container fill-height fluid class="register-container">
      <v-row>
          <v-col cols="12" sm="8" offset="2">
              <p style="text-align: center">Ici image</p>
          </v-col>
          <v-col cols="12" sm="8" offset="2">
              <p class="heading-register">Contaminate</p>
          </v-col>
          <v-col cols="12" sm="6" offset="3">
              <v-card outlined>
                  <v-container>
                      <v-row>
                          <v-col cols="12" sm="12">
                              <p class="heading-form">Créer ton compte !</p>
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
                                clearable
                                color="#2E7D32"
                                prepend-inner-icon="mdi-email"
                                label="E-mail"
                                placeholder="Email"
                                :rules="[rules.emailR , rules.required]"
                                v-model="email"
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
                              <v-btn block color="#2E7D32" dark large depressed>
                                  Créer son compte
                              </v-btn>
                          </v-col>
                          <v-col cols="12" sm="6" offset="3">
                              <span class="text-footing-form">Déjà un compte sur Contaminate ? </span><router-link to="/login" class="text-link-login">Connecte toi !</router-link>
                          </v-col>
                      </v-row>
                  </v-container>
              </v-card>
          </v-col>
      </v-row>
  </v-container>

</template>

<script>
export default {
    name:"Register",
    data() {
        return {
            rules: {
                required: value => !!value || "Ce champs est requis",
                minPassword: value => value.length >= 6,
                minUsername: value => value.length >= 3,
                emailR : value  => /.+@.+/.test(value) || "E-mail must be valid",
            
      },
            showError: false,
            showPassword: false,
            password: "",
            username: "",
            email:""
        }
    }
}

</script>


<style lang="scss" scoped>
    .heading-register{
        text-align: center;
        font-size: 1.5em;
        text-transform: uppercase;
        color: white;
    }
    .register-container{
        background-color: #1B5E20;
    }
    .heading-form {
        text-align: center;
        font-size: 1.5em;
        color: #1B5E20;
    }
    .text-footing-form{
        color: #4a5568;
    }
    .text-link-login{
        color: #2E7D32;
    }

</style>