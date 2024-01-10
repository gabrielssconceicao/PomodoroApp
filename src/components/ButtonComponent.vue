<script setup lang="ts">
import { defineProps } from 'vue';

const props = defineProps({
  text: {
    type: String,
    required: true
  },
  onClick: {
    type: Function,
    required: true
  }
})
</script>
<template>
  <button @click="props.onClick">
    {{ props.text }}
  </button>
</template>
<style scoped>
button {
  background-color: var(--resting-color);
  border: none;
  cursor: pointer;
  padding: 10px 25px;
  color: #111;
  transition: background-color 300ms ease-in-out;
  margin: 20px auto;
}

.working button {
  background-color: var(--working-color);
  color: #fff;

}
</style>
