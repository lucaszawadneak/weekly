<template>
  <div class="bg-blueGray-800 rounded p-2 mt-2 md:max-w-xs mx-5 md:mx-0 w-full flex-1">
    <h1 class="text-white font-bold mt-1">Tags</h1>
    <template v-for="(tag, index) in tags" :key="tag">
      <WeekTag :index="index" :item="tag" />
    </template>
    <div
      v-if="tags.length < 5"
      class="
        flex
        items-center
        bg-blueGray-900
        rounded
        p-1
        px-2
        mb-1
        justify-between
      "
    >
      <input
        v-model="newTagLabel"
        class="bg-blueGray-900 outline-none text-white"
      />
      <button @click="newTag">
        <PlusIcon class="text-green-500 h-5" />
      </button>
    </div>
  </div>
</template>

<script>
import { PlusIcon } from "@heroicons/vue/outline";
import { mapActions, mapState } from "vuex";
import WeekTag from "./WeekTag.vue";

const colors = ["blue", "green", "purple", "yellow", "orange","gray"];

export default {
  components: { PlusIcon, WeekTag },
  computed:{
    ...mapState(['tags'])
  },
  data() {
    return {
      newTagLabel: "",
    };
  },
  methods: {
    ...mapActions(["addNewTag"]),
    newTag() {
      if (this.tags.length < 5) {
        const tagColor = colors[Math.floor(Math.random()*5)];

        this.addNewTag({value: this.newTagLabel,color: tagColor});
        this.newTagLabel = "";
      }
    },
  },
};
</script>

<style></style>
