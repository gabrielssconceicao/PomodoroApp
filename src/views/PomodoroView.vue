<script setup lang="ts">
import TimerComponent from '@/components/TimerComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import { defineProps } from 'vue'
const props = defineProps({
  mainTime: {
    type: Number,
    required: true
  }
})
</script>
<template>
  <div class="pomodoro">
    <h2>You are: working</h2>
    <TimerComponent :main-time="props.mainTime" />
    <ButtonComponent :text="'teste'" :on-click="() => console.log('teste')" />
  </div>
</template>
<style scoped></style>
