<template>
  <v-container fluid class="fill-height" dark>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="5">
        <FormLogin :responseRegister="responseRegister" />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FormLogin from "@/components/FormLogin.vue";
export default {
  name: "Login",
  props: {
    responseRegister: {
      type: String,
    },
  },
  components: {
    FormLogin,
  },
};
</script>
