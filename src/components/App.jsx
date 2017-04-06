import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import PrivateRoute from './PrivateRoute';
import Home from './Home';
import About from './About';
import Login from './Login';
import { app } from '../actions';
import logo from './logo.png';
import './spinner.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.toggleSpinner = this.toggleSpinner.bind(this);
  }

  toggleSpinner() {
    this.props.actions.toggleSpinner();
  }

  render() {
    return (
      <div>
        <div style={{ textAlign: 'center', paddingTop: 100 }}>
          App page!!!
          <p>
            <img src={logo} alt="logo" width="100" height="100" />
          </p>
          <button onClick={this.toggleSpinner}>Toggle Spinner</button>
        </div>
        {
          this.props.showSpinner &&
          <div className="loader">Loading...</div>
        }
        <Router>
          <div>
            <ul>
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About</Link></li>
              {
                this.props.auth.token ?
                  (<li><Link to="/login">Logout</Link></li>) :
                  (<li><Link to="/login">Login</Link></li>)
              }
            </ul>
            <hr />
            <PrivateRoute exact path="/" component={Home} auth={this.props.auth} />
            <Route path="/about" component={About} />
            <Route path="/login" component={Login} />
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  ...state.app,
  auth: state.auth
});

export default connect(mapStateToProps, app)(App);
