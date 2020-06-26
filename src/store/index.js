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
    userId: "",
  },
  mutations: {
    login(state, data) {
      state.authToken = data.token;
      state.userId = data.user;
    },
  },
  actions: {},
  modules: {},
});
