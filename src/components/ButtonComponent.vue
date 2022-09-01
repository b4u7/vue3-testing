<script setup>
const props = defineProps({
  type: {
    type: String,
    default: 'button',
  },
  text: {
    type: String,
    required: true,
  },
  onClick: {
    type: Function,
    default: () => {},
  },
  class: {
    type: String,
    default: '',
  },
})
</script>

<template>
  <button
    :type="props.type"
    :class="props.class"
    class="transition py-2 px-4 rounded text-sm font-semibold"
    v-text="props.text"
    @click="props.onClick"
  />
</template>
