<script setup>
import TodoBox from './components/TodoBox.vue'
import NewToDo from './components/NewToDo.vue';
</script>

<template>
  <div class="w-full flex pt-5 justify-center">
    <div class="max-w-3xl w-full">
      <template v-for="item in cards" :key="item">
        <TodoBox :data="item"/>
      </template>
      <NewToDo @submit="handleAddNewCard"/>
    </div>
  </div>
</template>

<script>
export default {
  data(){
    return {
      cards: [],
    }
  },
  methods:{
    handleAddNewCard(data){
      console.log(data);
      this.cards.push(data);
    }
  }
}
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
