import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { isAuthenticated } from '../lib/auth';

const render = component => (
  (props) => {
    if (isAuthenticated()) {
      return React.createElement(component, props);
    }
    return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
  }
);

const PrivateRoute = ({ component, ...rest }) => (
  <Route {...rest} render={render(component)} />
);

export default PrivateRoute;
