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
    isConnected: false,
    memberToken: "",
  },
  mutations: {
    login(state, data) {
      state.isConnected = true;
      state.memberToken = data.token;
    },
  },
  actions: {},
  modules: {},
});
