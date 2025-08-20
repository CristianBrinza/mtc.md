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
import { LanguageProvider } from './context/LanguageContext';
import Gaming from './pages/personal/oferte/gaming/Gaming.tsx';
import OnlyNet from './pages/personal/oferte/only_net/OnlyNet.tsx';
// import Mobile from './pages/personal/oferte/mobile/Mobile.tsx';
import MobileSchool from './pages/personal/oferte/mobile/MobileSchool.tsx';
// import Portare from './pages/personal/oferte/portare/Portare.tsx';
import PortareSchool from './pages/personal/oferte/portare/PortareSchool.tsx';
import Magazine from './pages/personal/magazine/Magazine.tsx';
import SecuritateDigitala from './pages/personal/SecuritrateDigitala/SecuritateDigitala.tsx';
import Contacts from './pages/personal/contacts/Contacts.tsx';
import WifiPlus from './pages/personal/oferte/wifiplus/WifiPlus.tsx';
import IconShowcase from './pages/technical/IconShowcase.tsx';
import AppRedirect from './components/app/AppRedirect.tsx';
import OptionsandServices from './pages/personal/oferte/optionsandservices/OptionsandServices.tsx';
import SmsServices from './pages/personal/oferte/sms_services/SmsServices.tsx';
import PromoRazuieste from './pages/personal/oferte/promo_razuieste/PromoRazuieste.tsx';
import OneNumber from './pages/personal/oferte/one_number/OneNumber.tsx';
import SearchPage from './pages/search/Search.tsx';
import Roaming from './pages/personal/oferte/roaming/Roaming.tsx';
import FiveGbps from './pages/personal/oferte/5gbps/FiveGbps.tsx';
import Double from './pages/personal/oferte/double/Double.tsx';
import Triple from './pages/personal/oferte/triple/Triple.tsx';
import M2M from './pages/business/m2m/M2M.tsx';
import GpsTrack from './pages/business/gps_track/GpsTrack.tsx';
import Fibra from './pages/business/fibra/Fibra.tsx';
import PoliticaRoaming from './pages/costume/PoliticaRoaming/PoliticaRoaming.tsx';
import Promo1536965 from './pages/eshop/promo_b2s/Promo1536965.tsx';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
// import Home from './pages/home/Home_v3.tsx';

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
        <Route path="/" element={<NotFound />} />
        <Route path="/:lang/" element={<NotFound />} />
        {/*<Route path="/" element={<Home />} />*/}
        {/*<Route path="/:lang/" element={<Home />} />*/}
        {/*<Route path="/" element={<HomeNew />} />*/}
        {/*<Route path="/:lang/" element={<HomeTemplink />} />*/}

        {/*personal promo*/}
        <Route path="/:lang/gaming" element={<Gaming />} />
        <Route path="/:lang/internet" element={<OnlyNet />} />
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
        <Route path="/:lang/internet+tv+mobil" element={<Triple />} />
        {/*<Route path="/:lang/form-test" element={<FormTestPage />} />*/}
        <Route
          path="/:lang/politica-de-utilizare-rezonabila-a-serviciului-roaming-europa"
          element={<PoliticaRoaming />}
        />
        <Route path="/:lang/eshop/back-2-school" element={<Promo1536965 />} />

        {/*business*/}
        <Route path="/:lang/business/roaming" element={<Roaming />} />
        <Route path="/:lang/business/m2m" element={<M2M />} />
        <Route path="/:lang/business/gps-track" element={<GpsTrack />} />
        <Route path="/:lang/business/fibra" element={<Fibra />} />

        <Route path="*" element={<NotFound />} />
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
