import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, withRouter } from 'react-router-dom';

const PrivateRoute = ({ component, ...rest }) => {
  if (rest.isAuthenticated) {
    return <Route {...rest} component={component} />;
  }
  return <Redirect to={{ pathname: '/login', state: { from: rest.location } }} />;
};

export default withRouter(connect(state => (state.auth))(PrivateRoute));
