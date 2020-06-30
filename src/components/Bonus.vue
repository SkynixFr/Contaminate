<template>
  <v-tooltip bottom color="rgba(0,0,0,0)">
    <template v-slot:activator="{ on, attrs }">
      <v-chip v-bind="attrs" v-on="on" color="#004D40" :ripple="false" dark>
        {{ bonus.name }}
        {{ golds }}
      </v-chip>
    </template>
    <v-card color="rgba(0,0,0,1)">
      <v-card-title>{{ bonus.name }}</v-card-title>
      <v-card-text>{{ bonus.description }} </v-card-text>
      <v-card-actions>
        <span> Prix: {{ formatedGold }} <v-icon small>mdi-gold</v-icon></span>
      </v-card-actions>
    </v-card>
  </v-tooltip>
</template>

<script>
import { bus } from "../main";
export default {
  name: "Bonus",
  data() {
    return {
      golds: 0,
    };
  },
  props: {
    bonus: {
      type: Object,
      require: true,
    },
  },
  computed: {
    formatedGold: function() {
      return new Intl.NumberFormat().format(this.bonus.price);
    },
  },
  created() {
    bus.$on("addingGold", (data) => {
      this.golds = data;
    });
  },
};
</script>

<style></style>
