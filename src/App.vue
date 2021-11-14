<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import TodoList from "./components/TodoList.vue"
</script>

<template>
  <todo-list></todo-list>
</template>

<style>
html, body {
  margin: 0;
  padding: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  background: -webkit-linear-gradient(-20deg, rgb(206, 178, 67), rgb(225, 217, 174));
  background: linear-gradient(-20deg, rgb(206, 178, 67), rgb(225, 217, 174));
  min-height: 100vh;
  min-width: 100vw;
  display: flex;
  align-items: center;
  justify-content: center;
}

.btn {
  cursor: pointer;
  box-shadow: inset 0px 1px 0px 0px #fce2c1;
  background: linear-gradient(to bottom, #ffc477 5%, #fb9e25 100%);
  background-color: #ffc477;
  border-radius: 6px;
  border: 1px solid #eeb44f;
  display: inline-block;
  color: #ffffff;
  font-family: Arial;
  font-size: 15px;
  font-weight: bold;
  padding: 6px 24px;
  text-decoration: none;
  text-shadow: 0px 1px 0px #cc9f52;
  width: fit-content;
}

.btn:hover {
  background: linear-gradient(to bottom, #fb9e25 5%, #ffc477 100%);
  background-color: #fb9e25;
}

.btn:active {
  position: relative;
  top:1px;
}
.btn[disabled="true"]{
  border: 1px solid #999999;
  background: none;
  background-color: #cccccc;
  color: #666666;
}
</style>
