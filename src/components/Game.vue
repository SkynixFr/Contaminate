<template>
  <v-row align="center">
    <v-col cols="12" md="8" offset-md="2" style="background-color: green">
      {{ gold }} golds.
    </v-col>
    <v-col cols="12" md="8" offset-md="2">
      <v-btn text @click="countingGold">
        Click me !
      </v-btn>
    </v-col>
    <v-col cols="12" md="8" offset-md="2">
      nb twitch point
    </v-col>
  </v-row>
</template>

<script>
export default {
  data() {
    return {
      gold: 0,
      goldpersecond: 0,
    };
  },
  methods: {
    countingGold() {
      this.gold++;
    },
    goldAutomatic() {
      setInterval(() => {
        this.gold += this.goldpersecond;
      }, 1000);
    },
  },
  mounted() {
    this.goldAutomatic();
  },
};
</script>

<style></style>
