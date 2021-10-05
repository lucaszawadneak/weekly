<template>
  <div
    class="
      w-full
      bg-blueGray-800
      rounded
      p-3
      mt-2
      flex-col
      justify-between
      items-center
      shadow-lg
    "
  >
    <div class="flex-1">
      <h1 class="text-white font-bold">{{ todoItem.value }}</h1>
      <WeekTagView :item="todoItem.tag"/>
    </div>
    <div class="flex gap-2 mt-2">
      <button
        class="
          bg-coolGray-900
          rounded=
          p-1
          hover:opacity-70
          transition
          duration-300
        "
        @click="handleCheckItem"
      >
        <CheckIcon class="h-6 text-green-600" />
      </button>
      <button
        class="
          bg-coolGray-900
          rounded
          p-1
          hover:opacity-70
          transition
          duration-300
        "
        @click="handleRemoveItem"
      >
        <TrashIcon class="h-6 text-red-500" />
      </button>
      <button
        class="
          bg-coolGray-900
          rounded
          p-1
          hover:opacity-70
          transition
          duration-300
        "
      >
        <ClockIcon class="h-6 text-blue-500" />
      </button>
    </div>
  </div>
</template>

<script>
import { TrashIcon, CheckIcon, ClockIcon } from "@heroicons/vue/outline";
import { mapActions } from "vuex";
import WeekTagView from "./WeekTagView.vue";

export default {
  components: { TrashIcon, CheckIcon, ClockIcon,WeekTagView},
  props: {
    card: {
      required: true,
    },
  },
  data() {
    return {
      todoItem: this.card,
    };
  },
  methods: {
    ...mapActions(['deleteCard']),
    handleRemoveItem() {
      this.deleteCard(this.todoItem.id);
    },
    handleCheckItem() {
      this.deleteCard(this.todoItem.id);
    },
  },
};
</script>
