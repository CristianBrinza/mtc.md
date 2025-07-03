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

// import Home from './pages/home/Home_v2.tsx';
import OneNumber from './pages/personal/oferte/one_number/OneNumber.tsx';
import Contacts from './pages/personal/contacts/Contacts.tsx';
import FormTestPage from './pages/test/Test.tsx';
import Roaming from './pages/personal/oferte/roaming/Roaming.tsx';
import M2M from './pages/business/m2m/M2M.tsx';

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
    path: '/:lang/triple',
    element: React.createElement(Triple),
  },

  {
    path: '/:lang/mobile',
    element: React.createElement(Mobile),
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
    path: '/:lang/mobile-options',
    element: React.createElement(OptionsandServices),
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
    path: '/:lang/form-test',
    element: React.createElement(FormTestPage),
  },
  {
    path: '/:lang/business/m2m',
    element: React.createElement(M2M),
  },
  {
    path: '*',
    element: React.createElement(NotFound),
  },
];
