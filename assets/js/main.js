const app = new Vue({
  el: "#app",
  data: {
    url: "https://flynn.boolean.careers/exercises/api/array/music ",
    discs: "",
  },
  methods: {},
  mounted() {
    axios
      .get(this.url)
      .then((resp) => {
        this.discs = resp.data.response;
      })
      .catch((e) => {
        console.log(e);
      });
  },
});
