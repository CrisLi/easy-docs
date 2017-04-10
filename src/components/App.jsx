import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import 'semantic-ui-css/semantic.min.css';
import PrivateRoute from './PrivateRoute';
import Protected from './protected/Protected';
import Login from './public/Login';
import './app.css';

const App = () => (
  <Router>
    <div>
      <Route path="/login" component={Login} />
      <PrivateRoute path="/" component={Protected} />
    </div>
  </Router>
);

export default App;
