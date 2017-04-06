import React from 'react';
import { Route, NavLink } from 'react-router-dom';
import { Container, Menu, Icon } from 'semantic-ui-react';
import Home from './Home';
import Document from './Document';
import About from './About';
// import logo from './logo.png';

const Header = () => (
  <Menu inverted fixed="top">
    <Container>
      <Menu.Item as={NavLink} to="/" exact>
        <Icon name="home" />
      </Menu.Item>
      <Menu.Item as={NavLink} to="/document">Document</Menu.Item>
      <Menu.Item as={NavLink} to="/about">About</Menu.Item>
    </Container>
  </Menu>
);

const Protected = () => (
  <div>
    <Header />
    <Container className="main">
      <Route exact path="/" component={Home} />
      <Route path="/document" component={Document} />
      <Route path="/about" component={About} />
    </Container>
  </div>
);

export default Protected;
