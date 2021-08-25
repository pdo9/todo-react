import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sidebar from './SidebarContent';
import { Home } from '../pages/home';
import { Login } from '../pages/login';
import { Logout } from '../pages/logout';
import AuthExample from '../pages/AuthExample';
import PrivateRoute from '../auth/PrivateRoute';
import ProvideAuth from '../auth/ProvideAuth';

export default function BodyContent() {
  return (
    <main style={{ display: 'flex' }}>
      <div>
        <Sidebar />
      </div>

      <div>
        <ProvideAuth>
          <BrowserRouter>
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
