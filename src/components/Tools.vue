<script setup>
import { computed, ref } from "@vue/reactivity";
import { inject } from "@vue/runtime-core";

const list = inject("list")

const title = ref("")
const desc = ref("")
const disable = computed(() => !title.value || !desc.value)

const submit = () => {
  if(disable.value) {
    return
  }

  list.push({
    title: title.value,
    desc: desc.value
  })

  title.value = ""
  desc.value = ""
}
</script>

<template>
  <div class="wrap">
    <input type="text" v-model="title" @keyup.enter="submit">
    <textarea v-model="desc" cols="80" rows="3" @keyup.enter="submit"></textarea>
    <div class="submit btn" @click="submit" :disabled="disable">submit</div>
  </div>
</template>

<style scoped>
  .wrap {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
  }

  textarea {
    resize: none;
  }

  input, textarea {
    padding: 8px 10px;
    border-radius: 5px;
    border: #000 1px solid;
    font-size: 16px;
  }
</style>