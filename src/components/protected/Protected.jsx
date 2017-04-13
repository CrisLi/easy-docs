import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Route, NavLink } from 'react-router-dom';
import { Container, Grid, Menu, Icon, Sidebar, Segment, Dropdown } from 'semantic-ui-react';
import Home from './Home';
import Projects from './projects/Projects';
import Document from './Document';
import About from './About';
import { auth } from '../../actions';

const Header = ({ toggleSidebar, logout }) => (
  <Menu fixed="top" inverted>
    <Container fluid>
      <Menu.Item name="content" onClick={toggleSidebar}>
        <Icon name="content" />
      </Menu.Item>
      <Menu.Menu position="right">
        <Menu inverted>
          <Dropdown item text="Admin">
            <Dropdown.Menu>
              <Dropdown.Item>About</Dropdown.Item>
              <Dropdown.Item onClick={logout}>Logout</Dropdown.Item>
            </Dropdown.Menu>
          </Dropdown>
        </Menu>
      </Menu.Menu>
    </Container>
  </Menu>
);

class Protected extends Component {

  constructor(props) {
    super(props);
    this.toggleSidebar = this.toggleSidebar.bind(this);
    this.state = {
      showSidebar: true
    };
  }

  toggleSidebar() {
    this.setState({
      showSidebar: !this.state.showSidebar
    });
  }

  render() {
    const { showSidebar: show } = this.state;
    const { logout } = this.props.actions;
    return (
      <div>
        <Header toggleSidebar={this.toggleSidebar} logout={logout} />
        <Sidebar.Pushable>
          <Sidebar as={Menu} inverted animation="push" width="thin" visible={show} vertical>
            <Menu.Item as={NavLink} to="/" exact>Home</Menu.Item>
            <Menu.Item as={NavLink} to="/projects">Projects</Menu.Item>
            <Menu.Item as={NavLink} to="/document">Document</Menu.Item>
            <Menu.Item as={NavLink} to="/about">About</Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Main showSidebar={show} />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }

}

const Main = ({ showSidebar }) => (
  <div>
    <Container fluid>
      <Grid>
        <Grid.Column computer={showSidebar ? 14 : 16} mobile={16}>
          <Route exact path="/" component={Home} />
          <Route path="/projects" component={Projects} />
          <Route path="/document" component={Document} />
          <Route path="/about" component={About} />
        </Grid.Column>
      </Grid>
    </Container>
  </div>
);

const mapStateToProps = state => (state.auth);

export default connect(mapStateToProps, auth)(Protected);
