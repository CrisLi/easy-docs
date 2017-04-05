import React, { Component } from 'react';
import { connect } from 'react-redux';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Home from './Home';
import About from './About';
import { app } from '../actions';
import logo from './logo.png';
import './spinner.css';

class App extends Component {

  constructor(props) {
    super(props);
    this.toggleSpinner = this.toggleSpinner.bind(this);
  }

  componentDidMount() {
    console.log(this.props);
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
            </ul>
            <hr />
            <Route exact path="/" component={Home} />
            <Route path="/about" component={About} />
          </div>
        </Router>
      </div>
    );
  }
}

const mapStateToProps = state => (state.app);

export default connect(mapStateToProps, app)(App);
