<script setup lang="ts">
import { computed, defineProps } from 'vue';
import { secondsToTime } from '@/utils/seconds-to-time';
const props = defineProps({
  mainTime: {
    type: Number,
    required: true
  }
})


const timeFormatted = computed(() => secondsToTime(props.mainTime))
</script>
<template>
  <div class="timer">{{ timeFormatted }}</div>
</template>
<style scoped>
.timer {
  font-size: 6rem;
  text-align: center;
}
</style>
