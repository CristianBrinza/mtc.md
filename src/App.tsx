// src/App.tsx
import './App.css';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { Suspense, lazy } from 'react';
import { I18nextProvider } from 'react-i18next';
import i18n from './i18n';
import { grantConsent } from './initAnalytics';
import ConsentBanner from './components/consent_banner/ConsentBanner';
import ScrollToTop from './components/scroll_to_top/ScrollToTop';
import { LanguageProvider } from './context/LanguageContext';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const NotFound = lazy(() => import('./pages/not_found/NotFound'));
const Gaming = lazy(
  () => import('./pages/personal/oferte/gaming/Gaming.tsx'),
);
const OnlyNet = lazy(
  () => import('./pages/personal/oferte/only_net/OnlyNet.tsx'),
);
// const Mobile = lazy(() => import('./pages/personal/oferte/mobile/Mobile.tsx'));
const MobileSchool = lazy(
  () => import('./pages/personal/oferte/mobile/MobileSchool.tsx'),
);
// const Portare = lazy(() => import('./pages/personal/oferte/portare/Portare.tsx'));
const PortareSchool = lazy(
  () => import('./pages/personal/oferte/portare/PortareSchool.tsx'),
);
const Magazine = lazy(
  () => import('./pages/personal/magazine/Magazine.tsx'),
);
const SecuritateDigitala = lazy(
  () =>
    import(
      './pages/personal/SecuritrateDigitala/SecuritateDigitala.tsx'
    ),
);
const Contacts = lazy(
  () => import('./pages/personal/contacts/Contacts.tsx'),
);
const WifiPlus = lazy(
  () => import('./pages/personal/oferte/wifiplus/WifiPlus.tsx'),
);
const IconShowcase = lazy(
  () => import('./pages/technical/IconShowcase.tsx'),
);
const AppRedirect = lazy(
  () => import('./components/app/AppRedirect.tsx'),
);
const OptionsandServices = lazy(
  () =>
    import(
      './pages/personal/oferte/optionsandservices/OptionsandServices.tsx'
    ),
);
const SmsServices = lazy(
  () => import('./pages/personal/oferte/sms_services/SmsServices.tsx'),
);
const PromoRazuieste = lazy(
  () =>
    import('./pages/personal/oferte/promo_razuieste/PromoRazuieste.tsx'),
);
const OneNumber = lazy(
  () => import('./pages/personal/oferte/one_number/OneNumber.tsx'),
);
const SearchPage = lazy(
  () => import('./pages/search/Search.tsx'),
);
const Roaming = lazy(
  () => import('./pages/personal/oferte/roaming/Roaming.tsx'),
);
const FiveGbps = lazy(
  () => import('./pages/personal/oferte/5gbps/FiveGbps.tsx'),
);
const Double = lazy(
  () => import('./pages/personal/oferte/double/Double.tsx'),
);
const Triple = lazy(
  () => import('./pages/personal/oferte/triple/Triple.tsx'),
);
const M2M = lazy(() => import('./pages/business/m2m/M2M.tsx'));
const GpsTrack = lazy(
  () => import('./pages/business/gps_track/GpsTrack.tsx'),
);
const Fibra = lazy(
  () => import('./pages/business/fibra/Fibra.tsx'),
);
const PoliticaRoaming = lazy(
  () =>
    import('./pages/costume/PoliticaRoaming/PoliticaRoaming.tsx'),
);
const Promo1536965 = lazy(
  () => import('./pages/eshop/promo_b2s/Promo1536965.tsx'),
);
const PromoTM = lazy(() => import('./pages/costume/promo_tm/PromoTM.tsx'));
// const Home = lazy(() => import('./pages/home/Home_v3.tsx'));

function AppContent() {
  return (
    <>
      <ConsentBanner
        visible={true}
        onAccept={() => grantConsent()}
        onDecline={() => {}}
      />
      <ScrollToTop />
      <Suspense fallback={<div>Loading...</div>}>
        <Routes>
        <Route path="/" element={<Navigate to="/ro" replace />} />
        <Route path="/" element={<NotFound />} />
        <Route path="/:lang/" element={<NotFound />} />
        {/*<Route path="/" element={<Home />} />*/}
        {/*<Route path="/:lang/" element={<Home />} />*/}
        {/*<Route path="/" element={<HomeNew />} />*/}
        {/*<Route path="/:lang/" element={<HomeTemplink />} />*/}
        {/*personal promo*/}
        <Route path="/:lang/gaming" element={<Gaming />} />
        <Route path="/:lang/internet" element={<OnlyNet />} />
        <Route path="/:lang/interent" element={<OnlyNet />} />
        {/*wrong DNS special*/}
        <Route path="/:lang/mobile" element={<MobileSchool />} />
        <Route path="/:lang/mobile189347654" element={<MobileSchool />} />
        <Route path="/:lang/portare" element={<PortareSchool />} />
        <Route path="/:lang/portare189347654" element={<PortareSchool />} />
        <Route path="/:lang/magazine" element={<Magazine />} />
        <Route
          path="/:lang/securitate-digitala"
          element={<SecuritateDigitala />}
        />
        <Route
          path="/:lang/securitatea-digitala"
          element={<SecuritateDigitala />}
        />
        <Route path="/:lang/contacte" element={<Contacts />} />
        <Route path="/:lang/contacts" element={<Contacts />} />
        <Route path="/:lang/wifi-plus" element={<WifiPlus />} />
        {/*tehincal*/}
        <Route path="/:lang/icons" element={<IconShowcase />} />
        {/*App redirect*/}
        <Route path="/:lang/mymtc" element={<AppRedirect />} />
        <Route path="/mymtc" element={<AppRedirect />} />
        <Route path="/:lang/mobile-options" element={<OptionsandServices />} />
        <Route path="/:lang/sms-service" element={<SmsServices />} />
        <Route
          path="/:lang/weekend-cu-beneficii"
          element={<PromoRazuieste />}
        />
        <Route path="/:lang/one-number" element={<OneNumber />} />
        <Route path="/:lang/search" element={<SearchPage />} />
        <Route path="/:lang/roaming" element={<Roaming />} />
        <Route path="/:lang/5gbps" element={<FiveGbps />} />
        <Route path="/:lang/internet+tv" element={<Double />} />
        <Route path="/:lang/interent+tv" element={<Double />} />
        {/*wrong DNS special*/}
        <Route path="/:lang/internet+tv+mobil" element={<Triple />} />
        <Route path="/:lang/interent+tv+mobil" element={<Triple />} />{' '}
        {/*wrong DNS special*/}
        {/*<Route path="/:lang/form-test" element={<FormTestPage />} />*/}
        <Route
          path="/:lang/politica-de-utilizare-rezonabila-a-serviciului-roaming-europa"
          element={<PoliticaRoaming />}
        />
        <Route path="/:lang/promo-mobile/:url_link" element={<PromoTM />} />
        <Route path="/:lang/eshop/back-2-school" element={<Promo1536965 />} />
        {/*business*/}
        <Route path="/:lang/business/roaming" element={<Roaming />} />
        <Route path="/:lang/business/m2m" element={<M2M />} />
        <Route path="/:lang/business/gps-track" element={<GpsTrack />} />
        <Route path="/:lang/business/fibra" element={<Fibra />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
      </Suspense>
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
