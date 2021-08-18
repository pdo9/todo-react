import React from 'react';
import Sidebar from './SidebarContent';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import { Login } from '../pages/login';
import { Home } from '../pages/home';

export default function BodyContent() {
  return (
    <main style={{ display: 'flex' }}>
      <div>
        <Sidebar />
      </div>

      <div>
        <BrowserRouter>
          <Switch>
            <Route path='/login'>
              <Login />
            </Route>

            <Route path='/'>
              <Home />
            </Route>
          </Switch>
        </BrowserRouter>
      </div>
    </main>
  );
}
