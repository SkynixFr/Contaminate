<template>
  <v-container fluid>
    <v-row>
      <v-col cols="12" md="6"><Gold /></v-col>
      <v-col cols="12" md="6"><Store /></v-col>
    </v-row>
  </v-container>
</template>

<script>
import Gold from "@/components/Gold.vue";
import Store from "@/components/Store.vue";
export default {
  name: "Game",
  components: {
    Gold,
    Store,
  },
};
</script>

<style></style>
