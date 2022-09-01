<script setup>
import ButtonComponent from './ButtonComponent.vue'

const emit = defineEmits(['deleteItem', 'setCompleted'])

const props = defineProps({
  item: {
    type: Object,
    required: true,
  },
})

console.log(props.item)
</script>

<template>
  <div class="p-4 bg-white rounded shadow">
    <div class="flex flex-row">
      <p v-text="item.title" />
      <input
        type="checkbox"
        class="ml-auto form-checkbox h-6 w-6 rounded shadow-sm cursor-pointer"
        :checked="item.completed"
        @click="() => emit('setCompleted', item.id)"
      />
    </div>
    <div class="text-right mt-4">
      <ButtonComponent
        :text="'Delete'"
        :onClick="
          () => {
            emit('deleteItem', item.id)
          }
        "
        :class="'ml-auto text-red-500 hover:text-red-400 active:text-red-600 focus:text-red-600'"
      />
    </div>
  </div>
</template>
