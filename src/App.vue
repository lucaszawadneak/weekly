<script setup>
import TodoBox from "./components/TodoBox.vue";
import Profile from "./components/Profile.vue";
import Week from "./components/Week.vue";
import NewToDo from "./components/NewToDo.vue";
</script>

<template>
  <div class="w-full flex pt-5 justify-center items-start gap-3 flex-wrap">
    <Week  />
    <div class="mx-5  md:mx-0 max-w-3xl w-full flex-3">
      <template v-for="item in cards" :key="item.id">
        <TodoBox
          :card="item"
        />
      </template>
      <NewToDo />
    </div>
    <Profile></Profile>
  </div>
</template>

<script>
import {mapState} from 'vuex'

export default {
  computed:{
    ...mapState(["cards"])
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
