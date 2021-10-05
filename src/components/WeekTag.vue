<template>
  <div
    class="
      flex
      items-center
      bg-blueGray-900
      rounded
      p-1
      px-2
      mb-2
      justify-between
    "
  >
    <div class="flex flex-row items-center">
      <div :class="`h-2 w-2 rounded-full bg-${color}-500 mr-2`"></div>
      <h3 :class="`text-${color}-500`">{{ value }}</h3>
    </div>
    <button @click="handleRemoveTag">
      <XIcon class="text-red-500 h-5" />
    </button>
  </div>
</template>

<script>
import { XIcon } from "@heroicons/vue/outline";
import { mapActions } from "vuex";

const colors = ["blue", "green", "purple", "yellow", "orange"];

export default {
  components: { XIcon },
  props: {
    item: {
      type: Object,
      required: true,
    },
    index: {
      type: Number,
      required: true,
    },
  },
  data() {
    return {
      color: colors[this.index],
      value: this.item,
    };
  },
  methods:{
    ...mapActions(['deleteTag']),
    handleRemoveTag(){
      this.deleteTag(this.value);
    }
  }
};
</script>

<style></style>
