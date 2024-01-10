// useInterval.ts
import { ref, onBeforeUnmount } from 'vue';

export function useInterval<C extends () => void>(
  callback: C,
  delay: number | null,
): void {
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

  setupInterval();

  // Limpa o intervalo ao desmontar o componente
  onBeforeUnmount(() => {
    clearInterval(intervalId.value!);
  });
}
