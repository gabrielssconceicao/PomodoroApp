<script setup lang="ts">
import { computed } from 'vue';
import { secondsToMinutes } from '@/utils/seconds-to-minutes';
const props = defineProps({
  mainTime: {
    type: Number,
    required: true
  }
})

const mainTime = computed(() => secondsToMinutes(props.mainTime))
</script>
<template>
  <div class="timer">{{ mainTime }}</div>
</template>
<style scoped>
.timer {
  font-size: 6rem;
  text-align: center;
}
</style>
@/utils/seconds-to-minutes
