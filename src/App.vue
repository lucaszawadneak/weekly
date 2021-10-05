<script setup>
import TodoBox from "./components/TodoBox.vue";
import Profile from "./components/Profile.vue";
import Week from "./components/Week.vue";
import NewToDo from "./components/NewToDo.vue";
</script>

<template>
  <div class="w-full flex pt-5 justify-center items-start gap-3 flex-wrap">
    <Week :tags="tags" @newTag="handleAddNewTag" @deleteTag="handleDeleteTag" />
    <div class="max-w-3xl w-full flex-1 min-w-min">
      <template v-for="item in cards" :key="item.id">
        <TodoBox
          :card="item"
          @done="handleTaskComplete"
          @delete="handleDeleteCard"
        />
      </template>
      <NewToDo @submit="handleAddNewCard" />
    </div>
    <Profile></Profile>
  </div>
</template>

<script>
export default {
  data() {
    return {
      cards: [],
      tags: [],
    };
  },
  methods: {
    handleAddNewCard(data) {
      this.cards.push(data);
    },
    handleAddTag(data) {
      this.tags.push(data);
    },
    handleDeleteCard(id) {
      this.cards = this.cards.filter((item) => item.id !== id);
    },
    handleDeleteTag(data) {
      this.cards = this.cards.filter((item) => item !== data);
    },
    handleTaskComplete(id) {
      this.cards = this.cards.filter((item) => item.id !== id);
    },
  },
};
</script>

<style>
@tailwind base;
@tailwind components;
@tailwind utilities;
* {
  font-family: Roboto, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
</style>
