<template>
  <div class="home">
    {{ token }}
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      token: this.$store.state.memberToken,
    };
  },
  methods: {
    test() {
      axios
        .get("https://contaminateapi.herokuapp.com/users", {
          headers: {
            "auth-token": this.token,
          },
        })
        .then((response) => {
          console.log(response.data);
        })
        .catch((error) => {
          console.log(error.response);
        });
    },
  },
  mounted() {
    this.test();
  },
};
</script>
