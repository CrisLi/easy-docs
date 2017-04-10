import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const render = isAuthenticated => component => (
  (props) => {
    if (isAuthenticated) {
      return React.createElement(component, props);
    }
    return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
  }
);

const PrivateRoute = ({ component, ...rest }) => (
  <Route {...rest} render={render(rest.isAuthenticated)(component)} />
);

export default PrivateRoute;
