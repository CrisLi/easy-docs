import React from 'react';
import { Route, Redirect } from 'react-router-dom';

const render = auth => component => (
  (props) => {
    if (auth.token) {
      return React.createElement(component, props);
    }
    return <Redirect to={{ pathname: '/login', state: { from: props.location } }} />;
  }
);

const PrivateRoute = ({ component, ...rest }) => (
  <Route {...rest} render={render(rest.auth)(component)} />
);

export default PrivateRoute;
