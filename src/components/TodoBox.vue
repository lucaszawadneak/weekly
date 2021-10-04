<template>
  <div class="w-full bg-blueGray-800 rounded p-3 mt-2 flex justify-between items-center shadow-lg">
    <div class="flex-1">
      <h1 class="text-white font-bold">{{data}}</h1>
    </div>
    <div class="flex flex-col">
      <button class="bg-coolGray-900 rounded p-1 hover:opacity-70 transition duration-300">
        <TrashIcon class="h-6 text-red-500"/>
      </button>
      <button class="bg-coolGray-900 rounded mt-2 p-1 hover:opacity-70 transition duration-300">
        <CheckIcon class="h-6 text-green-600"/>
      </button>
    </div>
  </div>
</template>

<script>
import { TrashIcon,CheckIcon } from '@heroicons/vue/outline'

export default {
  props:{
    data:{
      required: true,
    }
  },
  components: { TrashIcon,CheckIcon }
}
</script>