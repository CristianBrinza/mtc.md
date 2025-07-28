// routesConfig.tsx
import React from 'react';
import Triple from './pages/personal/oferte/triple/Triple';
import NotFound from './pages/not_found/NotFound';
import Mobile from './pages/personal/oferte/mobile/Mobile.tsx';
import Magazine from './pages/personal/magazine/Magazine.tsx';
import IconShowcase from './pages/technical/IconShowcase.tsx';
import WifiPlus from './pages/personal/oferte/wifiplus/WifiPlus.tsx';
import OptionsandServices from './pages/personal/oferte/optionsandservices/OptionsandServices.tsx';
import PromoRazuieste from './pages/personal/oferte/promo_razuieste/PromoRazuieste.tsx';
import SearchPage from './pages/search/Search.tsx';

import Home from './pages/home/Home_v2.tsx';
import OneNumber from './pages/personal/oferte/one_number/OneNumber.tsx';
import Contacts from './pages/personal/contacts/Contacts.tsx';
import FormTestPage from './pages/test/Test.tsx';
import Roaming from './pages/personal/oferte/roaming/Roaming.tsx';
import M2M from './pages/business/m2m/M2M.tsx';
import GpsTrack from './pages/business/gps_track/GpsTrack.tsx';
import AppRedirect from './components/app/AppRedirect.tsx';
import SmsServices from './pages/personal/oferte/sms_services/SmsServices.tsx';
import MobileOld from './pages/personal/oferte/mobile/Mobile_old.tsx';
import FiveGbps from './pages/personal/oferte/5gbps/FiveGbps.tsx';
import Fibra from './pages/business/fibra/Fibra.tsx';
import Double from './pages/personal/oferte/double/Double.tsx';

export interface RouteConfig {
  path: string;
  i18nKey?: string;
  element: React.ReactNode;
}

export const routesConfig: RouteConfig[] = [
  { path: '/', element: React.createElement(NotFound) },
  {
    path: '/:lang/',
    // i18nKey: 'home.title',
    element: React.createElement(NotFound),
  },
  {
    path: '/:lang/newsite',

    element: React.createElement(Triple),
  },
  {
    path: '/:lang/home',

    element: React.createElement(Home),
  },
  {
    path: '/:lang/triple',
    element: React.createElement(Triple),
  },

  {
    path: '/:lang/mobile',
    element: React.createElement(Mobile),
  },
  {
    path: '/:lang/mobile_old',
    element: React.createElement(MobileOld),
  },
  // {
  //   path: '/:lang/test',
  //   i18nKey: 'navbar.internet_tv',
  //   element: React.createElement(TestPage),
  // },
  {
    path: '/:lang/magazine',
    element: React.createElement(Magazine),
  },
  {
    path: '/:lang/wifi-plus',
    element: React.createElement(WifiPlus),
  },
  //technical
  {
    path: '/:lang/icons',
    element: React.createElement(IconShowcase),
  },
  {
    path: '/:lang/mymtc',
    element: React.createElement(AppRedirect),
  },
  {
    path: '/mymtc',
    element: React.createElement(AppRedirect),
  },
  //landings
  {
    path: '/:lang/mobile-options',
    element: React.createElement(OptionsandServices),
  },
  {
    path: '/:lang/sms-service',
    element: React.createElement(SmsServices),
  },

  {
    path: '/:lang/weekend-cu-beneficii',
    element: React.createElement(PromoRazuieste),
  },
  {
    path: '/:lang/one-number',
    element: React.createElement(OneNumber),
  },
  {
    path: '/:lang/search',
    element: React.createElement(SearchPage),
  },
  {
    path: '/:lang/contacts',
    element: React.createElement(Contacts),
  },
  {
    path: '/:lang/roaming',
    element: React.createElement(Roaming),
  },
  {
    path: '/:lang/5gbps',
    element: React.createElement(FiveGbps),
  },
  {
    path: '/:lang/interent+tv',
    element: React.createElement(Double),
  },
  {
    path: '/:lang/form-test',
    element: React.createElement(FormTestPage),
  },
  {
    path: '/:lang/business/roaming',
    element: React.createElement(Roaming),
  },
  {
    path: '/:lang/business/m2m',
    element: React.createElement(M2M),
  },
  {
    path: '/:lang/business/gps-track',
    element: React.createElement(GpsTrack),
  },
  {
    path: '/:lang/business/fibra',
    element: React.createElement(Fibra),
  },
  {
    path: '*',
    element: React.createElement(NotFound),
  },
];
