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
<style scoped></style>
