const app = new Vue({
  el: "#app",
  computed:{
    products() { return store.state.products }
  }
});