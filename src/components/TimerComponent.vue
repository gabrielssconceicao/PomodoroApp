<script setup lang="ts">
import { computed, defineProps, watch } from 'vue';
import { useInterval } from '@/hooks/use-interval';
import { secondsToTime } from '@/utils/seconds-to-time';
import { ref } from 'vue';
const props = defineProps({
  mainTime: {
    type: Number,
    required: true
  }
})

const time = ref(props.mainTime)
const timeFormatted = computed(() => secondsToTime(time.value))
useInterval(() => time.value -= 1, 1000)
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
