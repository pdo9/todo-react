import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import { privateRoutes, publicRoutes } from './routes';
import { AuthContext } from '../context';

const AppRouter = () => {
  const { isAuth, setIsAuth } = React.useContext(AuthContext);
  console.log('isAuth:', isAuth);

  if (isAuth) {
    return (
      <div>
        <Switch>
          {privateRoutes.map((route) => (
            <Route
              key={route.path}
              component={route.component}
              path={route.path}
              exact={route.exact}
            />
          ))}
          <Redirect to='/' />
        </Switch>
      </div>
    );
  }

  return (
    <div>
      <Switch>
        {publicRoutes.map((route) => (
          <Route
            key={route.path}
            component={route.component}
            path={route.path}
            exact={route.exact}
          />
        ))}
        <Redirect to='/login' />
      </Switch>
    </div>
  );
};

export default AppRouter;
