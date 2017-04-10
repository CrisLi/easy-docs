import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import PrivateRoute from './PrivateRoute';
import Protected from './protected/Protected';
import Login from './public/Login';
import './app.css';

const App = ({ isAuthenticated }) => (
  <Router>
    <div>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/" component={Protected} isAuthenticated={isAuthenticated} />
    </div>
  </Router>
);

export default connect(state => (state.auth))(App);
