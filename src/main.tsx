import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { initAnalytics, trackPageview } from './initAnalytics.ts';
import { initServiceWorker } from './registerSW';

initAnalytics();
trackPageview(window.location.pathname);
initServiceWorker();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
