import './App.css';
import { LanguageProvider } from './context/LanguageContext.tsx';
import {
  BrowserRouter,
  Navigate,
  Route,
  Routes,
  useLocation,
} from 'react-router-dom';
// import Home from './pages/home/Home_v2.tsx';
import NotFound from './pages/not_found/NotFound.tsx';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.tsx';
import Triple from './pages/personal/oferte/triple/Triple.tsx';
import { routesConfig } from './routesConfig.tsx';
import ScrollToTop from './components/scroll_to_top/ScrollToTop.tsx';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import ConsentBanner from './components/consent_banner/ConsentBanner.tsx';
import { useEffect } from 'react';
import { initAnalytics, trackPageview } from './initAnalytics.ts';

function AnalyticsListener() {
  const location = useLocation();
  useEffect(() => {
    // Trimite page_view la fiecare schimbare de URL
    trackPageview(location.pathname + location.search);
  }, [location]);
  return null;
}

function App() {
  useEffect(() => {
    initAnalytics();
  }, []);

  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <LanguageProvider>
          <AnalyticsListener />
          <ScrollToTop />
          <Routes>
            <Route path="/" element={<Navigate to="/ro" replace />} />
            <Route path="/" element={<NotFound />} />
            <Route path="/:lang/" element={<NotFound />} />
            <Route path="/:lang/triple" element={<Triple />} />
            <Route path="*" element={<NotFound />} />

            {routesConfig.map((route, index) => (
              <Route key={index} path={route.path} element={route.element} />
            ))}
          </Routes>
          <ConsentBanner visible={true} />
        </LanguageProvider>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
