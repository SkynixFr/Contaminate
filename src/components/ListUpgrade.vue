<template>
  <v-list color="#004D40">
    <v-list-item-group>
      <Upgrade
        v-for="upgrade in listUpgrade"
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
  data() {
    return {
      listUpgrade: "",
    };
  },
  methods: {
    getUpgrade() {
      axios
        .get("/upgrade/default")
        .then((response) => {
          this.listUpgrade = response.data.upgrades;
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
  },
  mounted() {
    this.getUpgrade();
  },
};
</script>

<style></style>
