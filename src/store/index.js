import { createStore } from 'vuex'

export default createStore({
  state: {
    tags: [],
    cards: [],
  },
  mutations: {
    addTag(state, value) {
      state.tags.push(value);
    },
    removeTag(state, value) {
      state.tags = state.tags.filter((item) => item !== value);
    },
    addCard(state, value) {
      state.cards.push(value);
    },
    removeCard(state, data) {
      state.cards = state.cards.filter((item) => item.id !== data.id);
    },
  },
  actions: {
    addNewTag(ctx,payload) {
      ctx.commit("addTag",payload);
    },
    deleteTag(ctx,payload) {
      ctx.commit("removeTag", payload);
    },
    addNewCard(ctx,payload) {
      ctx.commit("addCard", payload);
    },
    deleteCard(ctx,payload) {
      ctx.commit("removeCard", payload);
    },
  },
});
