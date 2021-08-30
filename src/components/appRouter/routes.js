//import React from 'react';
import Home from '../pages/Home';
import About from '../pages/About';
import Login from '../pages/Login';
import Logout from '../pages/Logout';
import AuthExample from '../pages/AuthExample';
import PostIdPage from '../../components_test/PostIdPage';

export const privateRoutes = [
  { path: '/', component: Home, exact: true },
  { path: '/about', component: About, exact: true },
  // { path: '/login', component: Login, exact: true },
  { path: '/logout', component: Logout, exact: true },
  { path: '/auth', component: AuthExample, exact: true },
  { path: '/posts/:id', component: PostIdPage, exact: true },
];

export const publicRoutes = [
  { path: '/about', component: About, exact: true },
  { path: '/login', component: Login, exact: true },
  { path: '/auth', component: AuthExample, exact: true },
];
