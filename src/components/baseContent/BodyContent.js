import React from 'react';
import Sidebar from './SidebarContent';
//import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from '../pages/home';
//import { LoginPage } from '../pages/login';
import { Login } from '../pages/login';
import { Logout } from '../pages/logout';
import AuthExample from '../pages/AuthExample';

import PrivateRoute from '../auth/PrivateRoute';
import ProvideAuth from '../auth/ProvideAuth';

//import authContext from '../auth/authContext';

import {
  BrowserRouter,
  Switch,
  Route,
  //Link,
  // Redirect,
  // useHistory,
  // useLocation,
} from 'react-router-dom';

export default function BodyContent() {
  return (
    <main style={{ display: 'flex' }}>
      <div>
        <Sidebar />
      </div>

      <div>
        <ProvideAuth>
          <BrowserRouter>
            {/*<AuthButton />*/}
            <Switch>
              <PrivateRoute path='/' exact>
                <Home />
              </PrivateRoute>

              <Route path='/login' exact>
                <Login />
              </Route>

              <Route path='/logout' exact>
                <Logout />
              </Route>

              <Route path='/auth' exact>
                <AuthExample />
              </Route>
            </Switch>
          </BrowserRouter>
        </ProvideAuth>
      </div>
    </main>
  );
}
