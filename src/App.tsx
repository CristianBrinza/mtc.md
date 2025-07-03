import './App.css';
import { LanguageProvider } from './context/LanguageContext.tsx';
import { BrowserRouter, Navigate, Route, Routes } from 'react-router-dom';
import Home from './pages/home/Home_v2.tsx';
import NotFound from './pages/not_found/NotFound.tsx';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n.tsx';
import Triple from './pages/personal/oferte/triple/Triple.tsx';
import { routesConfig } from './routesConfig.tsx';
import ScrollToTop from './components/scroll_to_top/ScrollToTop.tsx';

function App() {
  return (
    <I18nextProvider i18n={i18n}>
      <BrowserRouter>
        <LanguageProvider>
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
        </LanguageProvider>
      </BrowserRouter>
    </I18nextProvider>
  );
}

export default App;
