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
    user: "",
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
    getUser(state, data) {
      state.user = data;
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
          state.game.golds = Number(
            (state.game.golds - upgrade.price).toFixed(3)
          );
          upgrade.level++;
          upgrade.price =
            upgrade.price + Math.round((upgrade.scaling * upgrade.price) / 100);
          upgrade.production = Number(
            (
              upgrade.production +
              (upgrade.scaling * upgrade.production) / 100
            ).toFixed(3)
          );
          state.game.production = Number(
            (state.game.production + upgrade.production).toFixed(3)
          );
        }
      });
    },
  },
  actions: {},
  modules: {},
});
