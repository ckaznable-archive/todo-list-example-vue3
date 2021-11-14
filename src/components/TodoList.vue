<script setup>
import Tools from './Tools.vue'
import Group from './Group.vue'
import { reactive, toRaw } from '@vue/reactivity'
import { provide, watch } from '@vue/runtime-core'
import useStorage from '@/hooks/useStorage'

const { load, write } = useStorage()

const list = reactive(load())
provide("list", list)

watch(list, (_list) => {
  write(toRaw(_list))
})

</script>

<template>
  <div class="main">
    <tools></tools>
    <group></group>
  </div>
</template>

<style scoped>
  .main {
    border: 1px solid #000;
    border-radius: 10px;
    padding: 10px;
    background: #fff;
  }
</style>