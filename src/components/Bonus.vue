<template>
  <v-tooltip bottom color="rgba(0,0,0,0)">
    <template v-slot:activator="{ on, attrs }">
      <v-chip
        v-bind="attrs"
        v-on="on"
        color="#004D40"
        :ripple="false"
        dark
        v-show="canBuySoon"
        :disabled="canBuyNow"
      >
        {{ bonus.name }}
      </v-chip>
    </template>
    <v-card color="rgba(0,0,0,1)">
      <v-card-title>{{ bonus.name }}</v-card-title>
      <v-card-text>{{ bonus.description }} </v-card-text>
      <v-card-actions>
        <span> Prix: {{ formatedBonusPrice }}</span>
      </v-card-actions>
    </v-card>
  </v-tooltip>
</template>

<script>
export default {
  name: "Bonus",
  props: {
    bonus: {
      type: Object,
      require: true,
    },
  },
  data() {
    return {
      goldsGame: Number,
      canBuySoon: false,
      canBuyNow: true,
    };
  },
  computed: {
    formatedBonusPrice: function() {
      return new Intl.NumberFormat().format(this.bonus.price);
    },
    getGoldsGame: function() {
      return (this.goldsGame = this.$store.state.game.golds);
    },
  },
  methods: {
    getStartGoldsGame() {
      this.goldsGame = this.$store.state.game.golds;
    },
  },
  watch: {
    getGoldsGame(newGolds, oldGolds) {
      if (this.goldsGame >= this.bonus.price - this.bonus.price / 4) {
        this.canBuySoon = true;
        if (this.goldsGame >= this.bonus.price) {
          this.canBuyNow = false;
        }
      }
    },
  },
  mounted() {
    this.getStartGoldsGame();
    if (this.goldsGame >= this.bonus.price - this.bonus.price / 4) {
      this.canBuySoon = true;
      if (this.goldsGame >= this.bonus.price) {
        this.canBuyNow = false;
      }
    }
  },
};
</script>
