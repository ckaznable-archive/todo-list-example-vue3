<script setup>
import { ref } from "@vue/reactivity"

const emit = defineEmits(["delete"])

const props = defineProps({
  item: Object
})

const { item } = props
const isOpen = ref(false)

const onDelete = () => {
  emit("delete")
}

const toggleOpen = () => {
  isOpen.value = !isOpen.value
}
</script>

<template>
  <div class="root">
    <div @click="toggleOpen" class="wrap">
      <div class="title">{{ item.title }}</div>
      <div class="delete btn" @click.stop="onDelete">Delete</div>
    </div>
    <div v-if="isOpen" class="desc">
      {{ item.desc }}
    </div>
  </div>
</template>

<style scoped>
  .root {
    display: flex;
    flex-direction: column;
    padding: 10px;
  }

  .wrap {
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 5px 15px;
  }

  .wrap:hover {
    background-color: #D1E9E9;
  }

  .title {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: pre;
  }

  .delete {
    cursor: pointer;
  }

  .desc {
    padding: 5px 15px;
    border: #000 1px solid;
    border-radius: 5px;
    margin-top: 3px;
  }
</style>