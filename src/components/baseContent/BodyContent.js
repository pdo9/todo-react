import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Sidebar from './SidebarContent';
//import { Home } from '../pages/home';
import Home from '../pages/home';
import { Login } from '../pages/login';
import { Logout } from '../pages/logout';
import AuthExample from '../pages/AuthExample';
//import PrivateRoute from '../auth/PrivateRoute';
import ProvideAuth from '../auth/ProvideAuth';
import TestContent from '../../components_test/TestContent';

export default function BodyContent() {
  return (
    <ProvideAuth>
      <BrowserRouter>
        <div className='main'>
          <div className='sidebar'>
            <Sidebar />
          </div>

          <div className='main-content'>
            <Switch>
              {/* <PrivateRoute path='/' exact>
  <Home />
</PrivateRoute> */}
              <Route path='/' exact>
                <Home />
                <TestContent />
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
          </div>
        </div>
      </BrowserRouter>
    </ProvideAuth>
  );
}
