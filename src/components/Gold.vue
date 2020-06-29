<template>
  <v-container fluid dark>
    <v-row justify="center" align="center">
      <v-card outlined dark color="rgba(0,0,0,0)">
        <v-card-title class="justify-center gold-number">
          {{ formatedGold }}
          <v-icon class="ml-2" color="#ffd700">mdi-gold</v-icon>
        </v-card-title>
        <v-card-subtitle class="text-center">
          <span class="ml-2 gold-second">(0 or/s.)</span>
        </v-card-subtitle>
        <v-card-actions>
          <v-img
            src="../../public/twitch.png"
            max-width="250"
            v-on:click="test"
          >
          </v-img>
        </v-card-actions>
      </v-card>
    </v-row>
  </v-container>
</template>

<script>
export default {
  data() {
    return {
      golds: 77882,
    };
  },
  methods: {
    test() {
      this.golds++;
    },
  },
  computed: {
    formatedGold: function() {
      return new Intl.NumberFormat().format(this.golds);
    },
  },
};
</script>

<style lang="scss">
.gold-number {
  font-size: 2em;
  font-family: "MuseoModerno", cursive;
  font-weight: bold;
  color: #ffd700;
}
.gold-second {
  color: #ffd700;
}
</style>
