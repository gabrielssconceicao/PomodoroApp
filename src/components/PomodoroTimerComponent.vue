<script setup lang="ts">
import { useInterval } from '@/hooks/use-interval';
import { ref } from 'vue';
const props = defineProps({
  mainTime: {
    type: Number,
    required: true
  }
})
const time = ref(props.mainTime)
useInterval(() => time.value -= 1, 1000)
</script>
<template>
  <div>{{ time }}</div>
</template>
<style scoped></style>
