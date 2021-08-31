import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import Logout from '../pages/Logout';

// interface IRoute {
//   path: string;
//   component: React.FC;
//   isExact: boolean;
//   isPrivate?: boolean;
// }

type TRoute = {
  path: string;
  component: React.FC;
  isExact: boolean;
  isPrivate: boolean;
};

export const privateRoutes: TRoute[] = [
  { path: '/', component: Home, isExact: true, isPrivate: true },
  { path: '/about', component: About, isExact: true, isPrivate: true },
  // { path: '/login', component: Login, isExact: true, isPrivate: true },
  { path: '/logout', component: Logout, isExact: true, isPrivate: true },
];

export const publicRoutes: TRoute[] = [
  { path: '/about', component: About, isExact: true, isPrivate: false },
  { path: '/login', component: Login, isExact: true, isPrivate: false },
];

// import Home from '../pages/Home';
// import About from '../pages/About';
// import Login from '../pages/Login';
// import Logout from '../pages/Logout';
// import AuthExample from '../pages/AuthExample';

// export const privateRoutes = [
//   { path: '/', component: Home, exact: true },
//   { path: '/about', component: About, exact: true },
//   // { path: '/login', component: Login, exact: true },
//   { path: '/logout', component: Logout, exact: true },
//   { path: '/auth', component: AuthExample, exact: true },
// ];

// export const publicRoutes = [
//   { path: '/about', component: About, exact: true },
//   { path: '/login', component: Login, exact: true },
//   { path: '/auth', component: AuthExample, exact: true },
// ];
