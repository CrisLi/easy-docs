import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { Grid, Segment, Header, Form, Button, Message } from 'semantic-ui-react';
import { auth } from '../../actions';

const LoginForm = ({ onSubmit, isSubmitting, fields: { username, password }, error }) => (
  <Grid centered verticalAlign="middle" className="login-grid">
    <Grid.Column computer={5} mobile={12}>
      <Segment stacked>
        <Header textAlign="center" as="h2">App Login</Header>
        <Form onSubmit={onSubmit} size="large" loading={isSubmitting}>
          <Form.Input iconPosition="left" type="text" placeholder="username" {...username} />
          <Form.Input iconPosition="left" type="password" placeholder="password" {...password} />
          { error && <Message negative>{error.message}</Message> }
          <Button disabled={isSubmitting} type="submit" fluid color="green">Login</Button>
        </Form>
      </Segment>
    </Grid.Column>
  </Grid>
);

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
    const { isAuthenticated, isProcessing, error } = this.props;

    if (isAuthenticated) {
      return (
        <Redirect to="/" />
      );
    }

    const fields = {
      username: {
        name: 'username',
        icon: 'user',
        onChange: this.onChange,
        value: this.state.value
      },
      password: {
        name: 'password',
        icon: 'lock',
        onChange: this.onChange,
        value: this.state.value
      }
    };

    return (
      <LoginForm onSubmit={this.login} fields={fields} isSubmitting={isProcessing} error={error} />
    );
  }
}

const mapStateToProps = state => (state.auth);

export default connect(mapStateToProps, auth)(Login);
