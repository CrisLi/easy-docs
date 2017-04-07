import React, { Component } from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Container, Menu, Icon, Sidebar, Segment, Dropdown } from 'semantic-ui-react';
import Home from './Home';
import Document from './Document';
import About from './About';

const Header = ({ toggleSidebar }) => (
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
              <Dropdown.Item>Logout</Dropdown.Item>
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
    return (
      <div>
        <Header toggleSidebar={this.toggleSidebar} />
        <Sidebar.Pushable>
          <Sidebar as={Menu} inverted animation="push" width="thin" visible={show} icon vertical>
            <Menu.Item>
              <Icon name="content" />
            </Menu.Item>
            <Menu.Item as={NavLink} to="/document">Document</Menu.Item>
            <Menu.Item as={NavLink} to="/about">About</Menu.Item>
          </Sidebar>
          <Sidebar.Pusher>
            <Segment basic>
              <Main />
            </Segment>
          </Sidebar.Pusher>
        </Sidebar.Pushable>
      </div>
    );
  }

}

const Main = () => (
  <div>
    <Container fluid>
      <Route exact path="/" component={Home} />
      <Route path="/document" component={Document} />
      <Route path="/about" component={About} />
    </Container>
  </div>
);

export default Protected;
