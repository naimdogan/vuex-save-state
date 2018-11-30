const app = new Vue({
  el: "#app",
  store: store,
  computed: Vuex.mapState(["products"]),
  methods: {
    ...Vuex.mapActions(["getProducts"])
  },
  created() {
    this.getProducts();
  }
});
