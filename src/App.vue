<script setup lang="ts">
import PomodoroView from './views/PomodoroView.vue';

</script>

<template>
  <div class="container">
    <PomodoroView :main-time="1500" :short-rest-time="300" :long-rest-time="900" :cycles="4" />
  </div>
</template>

<style>
body {
  font-family: sans-serif;
  background-color: var(--resting-color);
  transform: background-color 300ms ease-in-out;
  line-height: 1.5;
}

.container {
  max-width: 640px;
  margin: 0 auto;
}

.working {
  background-color: var(--working-color);
}

.hidden {
  display: none;
}
</style>
