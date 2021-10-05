<template>
  <div class="bg-blueGray-800 rounded p-2 mt-2 max-w-xs w-full">
    <h1 class="text-white font-bold">{{ username }}</h1>
    <p class="text-white">Tasks finished today: {{ completed }}</p>
    <button class="bg-blueGray-900 rounded text-white font-bold p-2 self-end">
      LOG OUT
    </button>
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
