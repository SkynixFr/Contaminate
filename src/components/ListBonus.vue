<template>
  <v-chip-group column :show-arrows="false">
    <Bonus v-for="bonus in listBonus" :key="bonus._id" :bonus="bonus" />
  </v-chip-group>
</template>

<script>
import Bonus from "@/components/Bonus.vue";
export default {
  name: "ListBonus",
  components: {
    Bonus,
  },
  data() {
    return {
      listBonus: "",
    };
  },
  methods: {
    getAllBonus() {
      axios
        .get("/bonus/default")
        .then((response) => {
          this.listBonus = response.data.bonus;
          this.listBonus.sort((a, b) => {
            return a.price - b.price;
          });
        })
        .catch((error) => {
          console.log(error.response.data);
        });
    },
  },
  mounted() {
    this.getAllBonus();
  },
};
</script>

<style></style>
