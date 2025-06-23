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
import HomeTemplink from './pages/home/Home_templink.tsx';
import Home from './pages/home/Home.tsx';
import OneNumber from './pages/personal/oferte/one_number/OneNumber.tsx';
// import { TestPage } from './pages/test/Test.tsx';

export interface RouteConfig {
  path: string;
  i18nKey: string;
  element: React.ReactNode;
}

export const routesConfig: RouteConfig[] = [
  // { path: '/', i18nKey: 'home.title', element: React.createElement(Home) },
  // {
  //   path: '/:lang/',
  //   i18nKey: 'home.title',
  //   element: React.createElement(Home),
  // },
  {
    path: '',
    i18nKey: 'home.title',
    // element: React.createElement(Home),
    element: React.createElement(HomeTemplink),
  },
  {
    path: '/:lang',
    i18nKey: 'home.title',
    // element: React.createElement(Home),
    element: React.createElement(HomeTemplink),
  },
  {
    path: '/:lang/home',
    i18nKey: 'home.title',
    element: React.createElement(Home),
  },
  {
    path: '/:lang/newsite',
    i18nKey: 'navbar.internet_tv',
    element: React.createElement(Triple),
  },
  {
    path: '/:lang/triple',
    i18nKey: 'navbar.internet_tv',
    element: React.createElement(Triple),
  },

  {
    path: '/:lang/mobile',
    i18nKey: 'navbar.internet_tv',
    element: React.createElement(Mobile),
  },
  // {
  //   path: '/:lang/test',
  //   i18nKey: 'navbar.internet_tv',
  //   element: React.createElement(TestPage),
  // },
  {
    path: '/:lang/magazine',
    i18nKey: 'navbar.internet_tv',
    element: React.createElement(Magazine),
  },
  {
    path: '/:lang/wifi-plus',
    i18nKey: 'navbar.internet_tv',
    element: React.createElement(WifiPlus),
  },
  //technical
  {
    path: '/:lang/icons',
    i18nKey: 'navbar.internet_tv',
    element: React.createElement(IconShowcase),
  },
  {
    path: '/:lang/mobile-options',
    i18nKey: 'not_found.title',
    element: React.createElement(OptionsandServices),
  },
  {
    path: '/:lang/weekend-cu-beneficii',
    i18nKey: 'not_found.title',
    element: React.createElement(PromoRazuieste),
  },
  {
    path: '/:lang/one-number',
    i18nKey: 'not_found.title',
    element: React.createElement(OneNumber),
  },
  {
    path: '*',
    i18nKey: 'not_found.title',
    element: React.createElement(NotFound),
  },
];
