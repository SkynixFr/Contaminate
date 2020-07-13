<template>
  <v-list-item v-show="canBuySoon" :disabled="canBuy" @click="buyUpgrade">
    <!-- <v-list-item-icon>
      <v-icon v-text="item.icon"></v-icon>
    </v-list-item-icon> -->
    <v-list-item-content>
      <v-list-item-title class="name">{{ upgrade.name }}</v-list-item-title>
      <v-list-item-subtitle>
        {{ upgrade.price | formatingPrice }}
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
  filters: {
    formatingPrice: (value) => {
      return new Intl.NumberFormat().format(value);
    },
  },
  data() {
    return {
      canBuySoon: false,
      canBuy: true,
    };
  },
  computed: {
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
    getGoldsGame() {
      if (this.upgrade.level > 0) {
        this.canBuySoon = true;
        if (this.$store.state.game.golds >= this.upgrade.price) {
          this.canBuy = false;
        } else {
          this.canBuy = true;
        }
      }
      if (this.upgrade.level == 0) {
        this.canBuySoon = false;
        if (
          this.$store.state.game.golds >=
          this.upgrade.price - this.upgrade.price / 4
        ) {
          this.canBuySoon = true;
          this.canBuy = true;
        }
        if (this.$store.state.game.golds >= this.upgrade.price) {
          this.canBuy = false;
        }
      }
    },
  },
  mounted() {
    if (this.upgrade.level > 0) {
      this.canBuySoon = true;
      if (this.$store.state.game.golds >= this.upgrade.price) {
        this.canBuy = false;
      } else {
        this.canBuy = true;
      }
    }
    if (this.upgrade.level == 0) {
      this.canBuySoon = false;
      if (
        this.$store.state.game.golds >=
        this.upgrade.price - this.upgrade.price / 4
      ) {
        this.canBuySoon = true;
        this.canBuy = true;
      }
      if (this.$store.state.game.golds >= this.upgrade.price) {
        this.canBuy = false;
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
