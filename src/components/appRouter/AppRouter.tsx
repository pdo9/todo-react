import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import AuthStore, { IAuthCredential } from '../stores/AuthStore';
import { observer } from 'mobx-react-lite';

/**
 * Маршрутизация
 */
const AppRouter: React.FC = () => {
  const authState: IAuthCredential = AuthStore.authState;

  return authState.isAccessAllowed ? (
    <div>
      <Switch>
        {privateRoutes.map((route) => (
          <Route
            key={route.path}
            component={route.component}
            path={route.path}
            exact={route.isExact}
          />
        ))}
        <Redirect to='/' />
      </Switch>
    </div>
  ) : (
    <div>
      <Switch>
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            component={route.component}
            path={route.path}
            exact={route.isExact}
          />
        ))}
        <Redirect to='/login' />
      </Switch>
    </div>
  );
};

export default observer(AppRouter);
