import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import Logout from '../pages/Logout';

/**
 * Описание маршрута
 */
type TRoute = {
  path: string;
  component: React.FC;
  isExact: boolean;
  isPrivate: boolean;
};

/**
 * Приватные маршруты
 */
export const privateRoutes: TRoute[] = [
  { path: '/', component: Home, isExact: true, isPrivate: true },
  { path: '/about', component: About, isExact: true, isPrivate: true },
  { path: '/logout', component: Logout, isExact: true, isPrivate: true },
];

/**
 * Общедоступные маршруты
 */
export const publicRoutes: TRoute[] = [
  { path: '/about', component: About, isExact: true, isPrivate: false },
  { path: '/login', component: Login, isExact: true, isPrivate: false },
];
