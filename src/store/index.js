import { createStore } from 'vuex'

const storedTags = localStorage.getItem('weekly:tags');
const storedCards = localStorage.getItem('weekly:cards');

export default createStore({
  state: {
    tags: storedTags? JSON.parse(storedTags): [],
    cards: storedCards? JSON.parse(storedCards): [],
  },
  mutations: {
    addTag(state, value) {
      state.tags.push(value);
    },
    removeTag(state, value) {
      state.tags = state.tags.filter((item) => item.value !== value);
    },
    addCard(state, value) {
      state.cards.push(value);
    },
    removeCard(state, id) {
      state.cards = state.cards.filter((item) => item.id !== id);
    },
  },
  actions: {
    addNewTag(ctx,payload) {
      ctx.commit("addTag",payload);
      localStorage.setItem("weekly:tags",JSON.stringify(ctx.state.tags));
    },
    deleteTag(ctx,payload) {
      ctx.commit("removeTag", payload);
      localStorage.setItem("weekly:tags",JSON.stringify(ctx.state.tags));
    },
    addNewCard(ctx,payload) {
      ctx.commit("addCard", payload);
      localStorage.setItem("weekly:cards",JSON.stringify(ctx.state.tags));
    },
    deleteCard(ctx,payload) {
      ctx.commit("removeCard", payload);
      localStorage.setItem("weekly:cards",JSON.stringify(ctx.state.tags));
    },
  },
});
