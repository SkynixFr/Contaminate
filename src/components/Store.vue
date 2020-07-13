<template>
  <v-container fluid>
    <v-row justify="center" align="center">
      <v-card outlined dark color="rgba(0,0,0,0.7)">
        <v-card-title class="justify-center text-h4">Boutique</v-card-title>
        <v-card-text>
          <p class="text-center text-h6">
            <v-icon color="orange" large>mdi-sign-caution</v-icon>
            Prochainement...
          </p>
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
  data() {
    return {
      showOverlay: true,
    };
  },
  components: {
    ListBonus,
    ListUpgrade,
  },
};
</script>

<style lang="scss" scoped></style>
