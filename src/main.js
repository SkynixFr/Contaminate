import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import vuetify from "./plugins/vuetify";
import axios from "axios";

Vue.config.productionTip = false;

window.axios = axios.create({
  baseURL: "https://contaminateapi.herokuapp.com/",
});
new Vue({
  router,
  store,
  vuetify,
  render: (h) => h(App),
  beforeCreate() {
    window.axios.interceptors.request.use(
      (config) => {
        if (this.$store.state.authToken) {
          config.headers = {
            "auth-token": this.$store.state.authToken,
          };
        }
        return config;
      },
      (error) => {
        return console.log(error);
      }
    );
  },
}).$mount("#app");
