<script setup>
import { ref, watch } from 'vue'
import TodoItem from './TodoItem.vue'
import ButtonComponent from './ButtonComponent.vue'

// const items = ref(JSON.parse(localStorage.getItem('todoList')) ?? [])
const items = ref([])
const newItem = ref('')

function createItem() {
  const id =
    items.value.length > 0 ? items.value.at(items.value.length - 1).id + 1 : 0

  items.value.push({ id, title: newItem.value, completed: false })
}

function deleteItem(id) {
  items.value = items.value.filter(item => item.id !== id)
}

// TODO: Fix later
function setCompleted(id) {
  items.value = items.value.filter(item => {
    if (item.id === id) {
      return {
        ...item,
        completed: true,
      }
    }

    return item
  })
}

watch(
  items,
  () => {
    localStorage.setItem('todoList', JSON.stringify(items.value))
  },
  { deep: true }
)
</script>

<template>
  <section>
    <div class="container space-y-4 mx-auto max-w-prose">
      <form @submit.prevent="createItem">
        <div>
          <input
            class="form-input rounded w-full"
            type="text"
            name="title"
            placeholder="Write a todo..."
            v-model="newItem"
          />
        </div>
        <div class="mt-4 text-right">
          <ButtonComponent
            :type="'submit'"
            :class="'text-white shadow-sm bg-blue-500 hover:bg-blue-400 active:bg-blue-600 focus:bg-blue-600'"
            :text="'Create new'"
          />
        </div>
      </form>
      <div class="flex flex-col-reverse space-y-4 space-y-reverse">
        <TodoItem
          v-for="(item, index) in items"
          :key="index"
          :item="item"
          @delete-item="deleteItem"
          @set-completed="setCompleted"
        />
      </div>
    </div>
  </section>
</template>
