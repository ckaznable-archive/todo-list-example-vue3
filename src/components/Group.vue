<script setup>
import { inject } from "@vue/runtime-core"
import Item from "./Item.vue"

const list = inject("list")

const onDelete = index => {
  list.splice(index, 1)
}

</script>

<template>
  <div class="wrap">
    <div class="total">Total: {{ list.length }}</div>
    <hr>
    <div class="group">
      <item v-for="(_item, index) in list" :item="_item" :key="`${index}${_item.title}`" @delete="onDelete(index)"></item>
    </div>
  </div>
</template>

<style scoped>
  .wrap {
    
  }

  .total {
    display: flex;
    justify-content: flex-end;
    font-size: 14px;
  }

  .group {
    min-height: 300px;
    max-height: 300px;
    overflow: auto;
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  }
</style>