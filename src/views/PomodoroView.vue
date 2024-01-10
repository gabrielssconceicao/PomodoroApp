<script setup lang="ts">
import TimerComponent from '@/components/TimerComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import { defineProps } from 'vue'
const props = defineProps({
  mainTime: {
    type: Number,
    required: true
  },
  shortRestTime: {
    type: Number,
    required: true,
  },
  longRestTime: {
    type: Number,
    required: true
  },
  cycles: {
    type: Number,
    required: true
  }
})

const setWorking = () => {
  const body = document.querySelector('body') as HTMLBodyElement
  body.classList.add('working')
}

const setResting = () => {
  const body = document.querySelector('body') as HTMLBodyElement
  body.classList.remove('working')
}

</script>

<template>
  <div class="pomodoro">
    <h2>You are: working</h2>
    <TimerComponent :main-time="props.mainTime" />
    <div class="controls">
      <ButtonComponent :text="'Set Working'" :on-click="setWorking" />
      <ButtonComponent :text="'Set Rest'" :on-click="setResting" />
      <ButtonComponent :text="'teste'" :on-click="() => { }" />
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
