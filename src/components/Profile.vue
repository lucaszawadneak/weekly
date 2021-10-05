<template>
  <div class="bg-blueGray-800 rounded p-2 mt-2 mx-5 md:mx-0 md:max-w-xs w-full flex items-center justify-center flex-1">
    <!-- <h1 class="text-white font-bold">{{ username }}</h1> -->
    <!-- <p class="text-white">Tasks finished today: {{ completed }}</p>
    <button class="bg-blueGray-900 rounded text-white font-bold p-2 self-end">
      LOG OUT
    </button> -->
    <a href="https://lucaszawadneak.me" class="text-white text-sm text-center">developed by Lucas Zawadneak</a>
  </div>
</template>

<script>
export default {
  data() {
    return {
      username: "@cassilha",
      completed: 0,
    };
  },
};
</script>

<style></style>
