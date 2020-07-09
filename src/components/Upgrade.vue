<template>
  <v-list-item v-show="canBuySoon" :disabled="canBuyNow" @click="buyUpgrade">
    <!-- <v-list-item-icon>
      <v-icon v-text="item.icon"></v-icon>
    </v-list-item-icon> -->
    <v-list-item-content>
      <v-list-item-title class="name">{{ upgrade.name }}</v-list-item-title>
      <v-list-item-subtitle>
        {{ formatedPrice }}
        <v-icon color="#ffd700" :size="15">mdi-gold</v-icon>
      </v-list-item-subtitle>
    </v-list-item-content>
    <v-list-item-action>
      <span class="level">{{ upgrade.level }}</span></v-list-item-action
    >
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
  data() {
    return {
      canBuySoon: false,
      canBuyNow: true,
      haventEnoughMoney: false,
    };
  },
  computed: {
    formatedPrice: function() {
      return new Intl.NumberFormat().format(this.upgrade.price);
    },
    getGoldsGame: function() {
      return this.$store.state.game.golds;
    },
  },
  methods: {
    buyUpgrade() {
      if (this.$store.state.game.golds >= this.upgrade.price) {
        this.$store.commit("updateUpgrade", this.upgrade);
      }
    },
  },
  watch: {
    getGoldsGame(newGolds, oldGolds) {
      if (
        this.upgrade.level >= 1 ||
        this.$store.state.game.golds >=
          this.upgrade.price - this.upgrade.price / 4
      ) {
        this.canBuySoon = true;
        if (this.$store.state.game.golds >= this.upgrade.price) {
          this.canBuyNow = false;
        }
      }
    },
  },
  mounted() {
    if (
      this.upgrade.level >= 1 ||
      this.$store.state.game.golds >=
        this.upgrade.price - this.upgrade.price / 4
    ) {
      this.canBuySoon = true;
      if (this.$store.state.game.golds >= this.upgrade.price) {
        this.canBuyNow = false;
      }
    }
  },
};
</script>

<style>
.name {
  font-size: 1.5em;
}
.level {
  opacity: 0.2;
  color: #000;
  font-size: 2em;
}
</style>
