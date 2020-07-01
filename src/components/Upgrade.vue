<template>
  <v-list-item>
    <!-- <v-list-item-icon>
      <v-icon v-text="item.icon"></v-icon>
    </v-list-item-icon> -->
    <v-list-item-content>
      <v-list-item-title>{{ upgrade.name }}</v-list-item-title>
      <v-list-item-subtitle>
        {{ formatedProduction }} or/s
      </v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-action> Prix : {{ formatedPrice }} </v-list-item-action>
  </v-list-item>
</template>

<script>
export default {
  name: "Upgrade",
  props: {
    upgrade: {
      type: Object,
      require: true,
    },
  },
  computed: {
    formatedPrice: function() {
      return new Intl.NumberFormat().format(this.upgrade.price);
    },
    formatedProduction: function() {
      return new Intl.NumberFormat().format(this.upgrade.production);
    },
  },
};
</script>

<style></style>
