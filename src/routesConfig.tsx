// routesConfig.tsx
import React from 'react';
import Home from './pages/home/Home';
import Triple from './pages/personal/oferte/triple/Triple';
import NotFound from './pages/not_found/NotFound';
import Mobile from './pages/personal/oferte/mobile/Mobile.tsx';
import Magazine from './pages/personal/magazine/Magazine.tsx';
import IconShowcase from './pages/technical/IconShowcase.tsx';
import { TestPage } from './pages/test/Test.tsx';

export interface RouteConfig {
  path: string;
  i18nKey: string;
  element: React.ReactNode;
}

export const routesConfig: RouteConfig[] = [
  { path: '/', i18nKey: 'home.title', element: React.createElement(Home) },
  {
    path: '/:lang/',
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
  {
    path: '/:lang/test',
    i18nKey: 'navbar.internet_tv',
    element: React.createElement(TestPage),
  },
  {
    path: '/:lang/magazine',
    i18nKey: 'navbar.internet_tv',
    element: React.createElement(Magazine),
  },
  //technical
  {
    path: '/:lang/icons',
    i18nKey: 'navbar.internet_tv',
    element: React.createElement(IconShowcase),
  },

  {
    path: '*',
    i18nKey: 'not_found.title',
    element: React.createElement(NotFound),
  },
];
