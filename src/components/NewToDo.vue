<template>
  <div class="w-full bg-blueGray-800 rounded p-3 mt-2 shadow-lg">
    <textarea v-model="newCardValue" name="title" placeholder="To do" class="w-full bg-blueGray-800 outline-none resize-none text-white"/>
  </div>
  <button @click="handleCreateNewCard" class="bg-orange-400 rounded p-2 text-white font-bold mt-2 hover:opacity-70 transition duration-300">
    <span class="flex gap-2">
      <SaveIcon class="h-5"/>
    <strong>SAVE</strong>
    </span>
  </button>
</template>

<script>
import { SaveIcon } from '@heroicons/vue/outline'

export default {
  components: { SaveIcon },
  data(){
    return {
      newCardValue: "",
    };
  },
  methods:{
    handleCreateNewCard(){
      this.$emit("submit",this.newCardValue);
      this.newCardValue = "";
    }
  }
}
</script>