<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-card outlined dark color="rgba(0,0,0,0.8)">
        <v-card-title class="justify-center headline">Boutique</v-card-title>
        <v-card-text>
          <ListBonus />
          <ListUpgrade />
        </v-card-text>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
import ListBonus from "@/components/ListBonus.vue";
import ListUpgrade from "@/components/ListUpgrade.vue";
export default {
  name: "Store",
  components: {
    ListBonus,
    ListUpgrade,
  },
};
</script>

<style lang="scss" scoped></style>
