// src/App.tsx
import './App.css';
import { useEffect } from 'react';
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate,
  useLocation,
} from 'react-router-dom';
import './App.css';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { grantConsent, trackPageview } from './initAnalytics';
import ConsentBanner from './components/consent_banner/ConsentBanner';
import ScrollToTop from './components/scroll_to_top/ScrollToTop';
import NotFound from './pages/not_found/NotFound';
import { routesConfig } from './routesConfig';
import { LanguageProvider } from './context/LanguageContext';

function AnalyticsListener() {
  const { pathname, search } = useLocation();
  useEffect(() => {
    if (localStorage.getItem('userConsent') === 'granted') {
      trackPageview(pathname + search, document.title);
    }
  }, [pathname, search]);
  return null;
}

function AppContent() {
  useEffect(() => {
    if (localStorage.getItem('userConsent') === 'granted') {
      grantConsent();
    }
  }, []);

  return (
    <>
      <AnalyticsListener />
      <ConsentBanner
        visible={true}
        onAccept={() => grantConsent()}
        onDecline={() => {}}
      />
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<Navigate to="/ro" replace />} />
        <Route path="/" element={<NotFound />} />
        <Route path="/:lang/" element={<NotFound />} />
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
