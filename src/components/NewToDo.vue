<template>
  <div
    class="
      w-full
      bg-blueGray-800
      rounded
      p-3
      mt-2
      shadow-lg
      flex
      justify-between
    "
  >
    <textarea
      v-model="newCardValue"
      name="title"
      placeholder="To do"
      class="w-full bg-blueGray-800 outline-none resize-none text-white"
    />
    <button
      class="
        bg-orange-400
        rounded
        p-2
        text-white
        font-bold
        mt-2
        hover:opacity-70
        transition
        duration-300
        h-10
      "
      @click="handleCreateNewCard"
    >
      <SaveIcon class="h-5" />
    </button>
  </div>
</template>

<script>
import { SaveIcon } from "@heroicons/vue/outline";

export default {
  components: { SaveIcon },
  data() {
    return {
      newCardValue: "",
    };
  },
  methods: {
    handleCreateNewCard() {
      if (this.newCardValue.length > 0) {
        const id = new Date().getTime();
        this.$emit("submit", { id, value: this.newCardValue });
        this.newCardValue = "";
      }
    },
  },
};
</script>
