// routesConfig.tsx
import React from 'react';
import Home from './pages/home/Home';
import Triple from './pages/oferte/triple/Triple';
import NotFound from './pages/not_found/NotFound';
import Mobile from './pages/oferte/mobile/Mobile.tsx';

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
    path: '*',
    i18nKey: 'not_found.title',
    element: React.createElement(NotFound),
  },
];
