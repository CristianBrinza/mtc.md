import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App.tsx';
import { initAnalytics } from './initAnalytics.ts';
import { initServiceWorker } from './registerSW';

void initAnalytics();
initServiceWorker();

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);
