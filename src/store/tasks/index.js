export default {
  namespaced: true,
  state: () => ({
    count: 0,
  }),
  mutations: {
    increment(state, value) {
      // `state` is the local module state
      state.count = value;
    },
  },

  getters: {
    doubleCount(state) {
      return state.count;
    },
  },
};
