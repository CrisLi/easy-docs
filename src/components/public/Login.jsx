import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { auth } from '../../actions';

class Login extends Component {

  constructor(props) {
    super(props);
    this.login = this.login.bind(this);
    this.onChange = this.onChange.bind(this);
    this.state = {
      username: '',
      password: ''
    };
  }

  componentDidMount() {
    const { isAuthenticated, actions: { logout } } = this.props;
    if (isAuthenticated) {
      logout();
    }
  }

  onChange({ target: { name, value } }) {
    this.setState({
      [name]: value
    });
  }

  login(e) {
    e.preventDefault();
    this.props.actions.login(this.state.username, this.state.password);
  }

  render() {
    if (this.props.isAuthenticated) {
      return (
        <Redirect to="/" />
      );
    }

    return (
      <div>
        <form onSubmit={this.login}>
          <input
            name="username"
            type="text"
            placeholder="Username"
            value={this.state.username}
            onChange={this.onChange}
          />
          <br />
          <input
            name="password"
            type="password"
            placeholder="Password"
            value={this.state.password}
            onChange={this.onChange}
          />
          <br />
          <button type="submit">Login</button>
        </form>
      </div>
    );
  }
}

const mapStateToProps = state => (state.auth);

export default connect(mapStateToProps, auth)(Login);
