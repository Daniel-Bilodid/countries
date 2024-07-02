import { createStore } from "vuex";

const store = createStore({
  state: {
    isDarkMode: false,
  },
  mutations: {
    toggleDarkMode(state) {
      state.isDarkMode = !state.isDarkMode;
    },
  },
});

export default store;
