import React, { Component } from 'react';
import {
  Navbar,
  NavbarBrand,
  Nav,
  NavItem,
  NavbarText,
  Container,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import styles from './styles.module.css';

class Header extends Component {
  render() {
    const { loggedIn } = this.props;
    return (
      <div>
        <Navbar className={styles.nav__navbar1} expand="md">
          <Container>
            <NavbarBrand className={styles.nav__heading} href="/">
              <div className={styles.nav__logo} />
              Three Headed Dragon
            </NavbarBrand>
            {loggedIn && (
              <>
                <NavbarText className={styles.nav__loggedIn}>
                  Chadster
                </NavbarText>
              </>
            )}
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
            {loggedIn && (
              <>
                <Link to="/">
                  <NavbarText>Logout</NavbarText>
                </Link>
              </>
            )}
            {!loggedIn && (
              <>
                <Link to="/register">
                  <NavbarText>Register</NavbarText>
                </Link>
                <Link to="/login">
                  <NavbarText>Login</NavbarText>
                </Link>
              </>
            )}
          </Container>
        </Navbar>
      </div>
    );
  }
}

Header.propTypes = {
  loggedIn: PropTypes.bool,
};

Header.defaultProps = {
  loggedIn: true,
};

export default Header;
