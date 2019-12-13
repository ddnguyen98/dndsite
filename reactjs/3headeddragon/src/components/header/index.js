import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
  Container,
} from 'reactstrap';
import { Link } from 'react-router-dom';
import styles from './styles.module.css';

class Header extends Component {
  render() {
    return (
      <div>
        <Navbar className={styles.nav__navbar1} expand="md">
          <Container>
            <NavbarBrand className={styles.nav__heading} href="/">
              <div className={styles.nav__logo} />
              Three Headed Dragon
            </NavbarBrand>
            <NavbarText className={styles.nav__loggedIn}>
              User Logged In
            </NavbarText>
          </Container>
        </Navbar>
        <Navbar className={styles.nav__navbar2} expand="md">
          <Container>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to="/">Home</Link>
              </NavItem>
              <NavItem>
                <Link to="/sheets">Sheets</Link>
              </NavItem>
            </Nav>
            <Link to="/register">
              <NavbarText>Register</NavbarText>
            </Link>
            <Link to="/login">
              <NavbarText>Login</NavbarText>
            </Link>
          </Container>
        </Navbar>
      </div>
    );
  }
}

export default Header;
