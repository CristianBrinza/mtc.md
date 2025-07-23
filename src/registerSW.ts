import { registerSW } from 'virtual:pwa-register';

export function initServiceWorker() {
  const updateSW = registerSW({
    immediate: true,
    onNeedRefresh() {
      updateSW(true);
    },
  });
}
