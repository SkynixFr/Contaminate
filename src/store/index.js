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
  },
  mutations: {
    login(state, data) {
      state.authToken = data.token;
    },
    logout(state) {
      state.authToken = "";
      state.game = "";
    },
    getGame(state, data) {
      state.game = data;
    },
    updateGameGolds(state, data) {
      state.game.golds = data;
    },
  },
  actions: {},
  modules: {},
});
