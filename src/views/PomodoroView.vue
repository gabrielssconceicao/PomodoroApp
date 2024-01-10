<script setup lang="ts">
import { onMounted, onBeforeUnmount, computed } from 'vue';
import TimerComponent from '@/components/TimerComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import { useInterval } from '@/hooks/use-interval';
import { defineProps, ref, watch } from 'vue';

const props = defineProps({
  mainTime: {
    type: Number,
    required: true,
  },
  shortRestTime: {
    type: Number,
    required: true,
  },
  longRestTime: {
    type: Number,
    required: true,
  },
  cycles: {
    type: Number,
    required: true,
  },
});


</script>

<template>
  <div class="pomodoro">
    <h2>You are: working {{ }}</h2>
    <TimerComponent :main-time="mainTime" />
    <div class="controls">
      <ButtonComponent :text="'Work'" :on-click="() => { }" />
      <ButtonComponent :text="'teste'" :on-click="() => { }" />
      <ButtonComponent :text="'Pause'" :on-click="() => { }" />
    </div>

    <div class="details">
      <p>Testando Lorem ipsum dolor sit ame</p>
      <p>Testando Lorem ipsum dolor sit ame</p>
      <p>Testando Lorem ipsum dolor sit ame</p>
      <p>Testando Lorem ipsum dolor sit ame</p>
    </div>

  </div>
</template>
<style scoped>
.pomodoro {
  background-color: #eee;
  margin: 50px 20px;
  padding: 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.5);
}

.pomodoro h2 {
  font-size: 24px;
  text-align: center;
}

.pomodoro .controls {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.pomodoro .details {
  margin: 20px 0;
}
</style>
