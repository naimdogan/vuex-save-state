const loadState = name => {
  try {
    const serializedState = localStorage.getItem(name);
    if (serializedState === null) {
      return undefined;
    }
    return JSON.parse(serializedState);
  } catch (err) {
    return undefined;
  }
};

const saveState = (name, state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem(name, serializedState);
  } catch (err) {
    console.error(`Something went wrong: ${err}`);
  }
};

const state = {
  products: loadState("products") || []
};
const getters = {};

const mutations = {
  SET_PRODUCTS(state, products) {
    state.products = products.product;
    saveState("products", state.products);
  }
};

const actions = {
  getProducts({ commit, payload }) {
    axios
      .get("https://my-json-server.typicode.com/naimdogan/product/db")
      .then(response => {
        commit("SET_PRODUCTS", response.data);
      });
  }
};

const store = new Vuex.Store({
  state,
  getters,
  mutations,
  actions
});
