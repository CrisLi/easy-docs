import React, { Component } from 'react';
import { connect } from 'react-redux';
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
      </div>
    );
  }
}

const mapStateToProps = state => (state.app);

export default connect(mapStateToProps, app)(App);
