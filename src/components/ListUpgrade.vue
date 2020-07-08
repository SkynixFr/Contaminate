<template>
  <v-list color="#004D40">
    <v-list-item-group>
      <Upgrade
        v-for="upgrade in this.$store.state.upgrades"
        :key="upgrade._id"
        :upgrade="upgrade"
      />
    </v-list-item-group>
  </v-list>
</template>

<script>
import Upgrade from "@/components/Upgrade.vue";
export default {
  name: "ListUpgrade",
  components: {
    Upgrade,
  },
};
</script>

<style></style>
