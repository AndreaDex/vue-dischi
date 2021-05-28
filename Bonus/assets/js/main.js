const app = new Vue({
  el: "#app",
  data: {
    url: "https://flynn.boolean.careers/exercises/api/array/music ",
    discs: "",
    selected: "",
  },
  methods: {},
  computed: {
    orderedDisc() {
      return _.orderBy(this.discs, "year");
    },
  },
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
