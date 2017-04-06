import React from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route } from 'react-router-dom';
// import PrivateRoute from './PrivateRoute';
import 'semantic-ui-css/semantic.min.css';
import Protected from './protected/Protected';
import Login from './public/Login';
import './app.css';

const App = ({ auth }) => (
  <Router>
    <div>
      <Route path="/login" component={Login} />
      <Route path="/" component={Protected} auth={auth} />
    </div>
  </Router>
);

const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(mapStateToProps)(App);
