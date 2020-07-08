import Vue from "vue";
import Vuex from "vuex";
import VuexPersist from "vuex-persist";

Vue.use(Vuex);

const vp = new VuexPersist({
  key: "store",
  storage: window.localStorage,
});

export default new Vuex.Store({
  plugins: [vp.plugin],
  state: {
    authToken: "",
    game: "",
    upgrades: [],
    bonus: [],
    loader: true,
  },
  mutations: {
    login(state, data) {
      state.authToken = data.token;
    },
    logout(state) {
      state.authToken = "";
      state.game = "";
      state.loader = true;
      state.upgrades = [];
    },
    getGame(state, data) {
      state.game = data;
    },
    getUpgrade(state, data) {
      state.upgrades.push(data);
    },
    updateGameGolds(state, data) {
      state.game.golds = data;
    },
    updateLoader(state, data) {
      state.loader = data;
    },
    updateUpgrade(state, data) {
      state.upgrades.forEach((upgrade) => {
        if (data._id === upgrade._id) {
          state.game.production =
            state.game.production + Math.round(upgrade.production * 100) / 100;
          upgrade.level++;
          upgrade.production =
            upgrade.production +
            Math.round(((upgrade.scaling * upgrade.production) / 100) * 100) /
              100;
          upgrade.price = Math.round(
            upgrade.price + (upgrade.scaling * upgrade.price) / 100
          );
        }
      });
    },
  },
  actions: {},
  modules: {},
});
