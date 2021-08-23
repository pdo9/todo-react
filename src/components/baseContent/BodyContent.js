import React from 'react';
import Sidebar from './SidebarContent';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Home } from '../pages/home';
import { Login } from '../pages/login';
import { Logout } from '../pages/logout';
import AuthExample from '../pages/AuthExample';

export default function BodyContent() {
  return (
    <main style={{ display: 'flex' }}>
      <div>
        <Sidebar />
      </div>

      <div>
        <BrowserRouter>
          <Switch>
            <Route path='/' exact>
              <Home />
            </Route>

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
      </div>
    </main>
  );
}
