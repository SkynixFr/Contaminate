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
    memberToken: "",
  },
  mutations: {
    login(state, data) {
      state.memberToken = data.token;
    },
    logout(state) {
      state.memberToken = "";
    },
  },
  actions: {},
  modules: {},
});
