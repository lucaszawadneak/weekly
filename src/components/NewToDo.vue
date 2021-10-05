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
    <div class="flex-1 mr-5">
      <input
        maxlength="100"
        v-model="newCardValue"
        name="title"
        placeholder="To do"
        class="w-full flex-1 bg-blueGray-800 outline-none resize-none text-white mb-2"
      />
      <select class="w-1/2 bg-blueGray-900 rounded text-white p-2" v-model="cardTag">
        <option value="" label=""/>
        <option :value="tag" :label="tag.value" :key="tag.value" v-for="tag in tags"/>
      </select>
    </div>
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
import { SaveIcon } from '@heroicons/vue/outline'
import { mapActions, mapState } from 'vuex'

export default {
  components: { SaveIcon },
  computed: {
    ...mapState(['tags'])
  },
  data() {
    return {
      newCardValue: '',
      cardTag: '',
    }
  },
  methods: {
    ...mapActions(["addNewCard"]),
    handleCreateNewCard() {
      if (this.newCardValue.length > 0) {
        const id = new Date().getTime()
        this.addNewCard({ id, value: this.newCardValue,tag: this.cardTag })
        this.newCardValue = ''
      }
    },
  },
}
</script>
