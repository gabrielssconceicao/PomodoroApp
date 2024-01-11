<script setup lang="ts">
import { onBeforeUnmount, computed } from 'vue';
import TimerComponent from '@/components/TimerComponent.vue';
import ButtonComponent from '@/components/ButtonComponent.vue';
import { useInterval } from '@/hooks/use-interval';
import { ref, watch } from 'vue';
import startAudio from '@/assets/sounds/bell-start.mp3';
import finishAudio from '@/assets/sounds/bell-finish.mp3';


const audioStartWorking = new Audio(startAudio)
const audioFinishWorking = new Audio(finishAudio)
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

const mainTime = ref(props.mainTime);
const setMainTime = () => mainTime.value -= 1;

const timeCounting = ref(false);
const working = ref(false);
const resting = ref(false);

const configureWork = () => {
  timeCounting.value = true;
  working.value = true;
  resting.value = false;
  mainTime.value = props.mainTime;
  audioStartWorking.play();
}
const configurePause = () => {
  timeCounting.value = !timeCounting.value;
}

const configureRest = (long: boolean) => {
  timeCounting.value = true;
  resting.value = true;
  working.value = false;

  if (long) {
    mainTime.value = props.longRestTime
  } else {
    mainTime.value = props.shortRestTime
  }
  audioFinishWorking.play()
}

const pausedText = computed(() => timeCounting.value ? 'Pause' : 'Play')
const pauseClass = computed(() => !working.value && !resting.value ? 'hidden' : '')
const { cleanInterval, setupInterval } = useInterval(setMainTime, 1000)

watch(timeCounting, (newValue: boolean) => {
  if (newValue) {
    setupInterval();
    return
  }
  cleanInterval();
})

watch([working, resting], ([newWorking, newResting]: [boolean, boolean]) => {

  if (newWorking) document.body.classList.add('working');
  if (newResting) document.body.classList.remove('working');
})

onBeforeUnmount(() => {
  cleanInterval()
})
</script>

<template>
  <div class="pomodoro">
    <h2>You are: working {{ }}</h2>
    <TimerComponent :main-time="mainTime" />
    <div class="controls">
      <ButtonComponent :text="'Work'" :on-click="configureWork" />
      <ButtonComponent :text="pausedText" :on-click="configurePause" :class="pauseClass" />
      <ButtonComponent :text="'Rest'" :on-click="() => configureRest(false)" />
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
