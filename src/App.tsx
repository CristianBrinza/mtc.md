// src/App.tsx
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import './App.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { grantConsent } from './initAnalytics';
import ConsentBanner from './components/consent_banner/ConsentBanner';
import ScrollToTop from './components/scroll_to_top/ScrollToTop';
import NotFound from './pages/not_found/NotFound';
import { routesConfig } from './routesConfig';
import { LanguageProvider } from './context/LanguageContext';
import HomeTemplink from './pages/home/Home_templink.tsx';

function AppContent() {
  return (
    <>
      <ConsentBanner
        visible={true}
        onAccept={() => grantConsent()}
        onDecline={() => {}}
      />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/ro" replace />} />
        {/*<Route path="/" element={<NotFound />} />*/}
        {/*<Route path="/:lang/" element={<NotFound />} />*/}
        <Route path="/" element={<HomeTemplink />} />
        <Route path="/:lang/" element={<HomeTemplink />} />
        <Route path="*" element={<NotFound />} />
        {routesConfig.map((route, index) => (
          <Route key={index} path={route.path} element={route.element} />
        ))}
      </Routes>
    </>
  );
}

export default function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <LanguageProvider>
          <AppContent />
        </LanguageProvider>
      </BrowserRouter>
    </I18nextProvider>
  );
}
