// useInterval.ts
import { ref } from 'vue';

export function useInterval<C extends () => void>(
  callback: C,
  delay: number | null,
): { setupInterval: () => void; cleanInterval: () => void } {
  const savedCallback = ref<C>(callback);

  // Configura o intervalo
  const intervalId = ref<number | null>(null);

  const tick = () => {
    savedCallback.value!();
  };

  const setupInterval = () => {
    if (delay !== null) {
      intervalId.value = setInterval(tick, delay);
    }
  };

  // Limpa o intervalo ao desmontar o componente
  const cleanInterval = () => {
    clearInterval(intervalId.value!);
  };
  return { setupInterval, cleanInterval };
}
