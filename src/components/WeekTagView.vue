<template>
  <div v-if="item"
    class="
      flex
      items-center
      rounded
      mt-2
      justify-between
    "
  >
    <div class="flex flex-row items-center">
      <div :class="`h-2 w-2 rounded-full bg-${item.color}-500 mr-2`"></div>
      <h3 :class="`text-${item.color}-500 text-sm`">{{ item.value }}</h3>
    </div>
  </div>
</template>

<script>
import { XIcon } from "@heroicons/vue/outline";


export default {
  components: { XIcon },
  props: {
    item: {
      type: Object,
      required: true,
    },
  },
};
</script>

<style></style>
