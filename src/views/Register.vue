<template>
  <v-container fluid class="fill-height" dark>
    <v-row justify="center" align="center">
      <v-col cols="12" sm="8" md="5">
        <FormRegister />
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import FormRegister from "@/components/FormRegister.vue";
export default {
  name: "Register",
  components: {
    FormRegister,
  },
};
</script>
