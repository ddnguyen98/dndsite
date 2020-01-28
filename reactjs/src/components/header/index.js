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
import HeaderContainer from './container';

import styles from './styles.module.css';

class Header extends Component {
  logUserOut = () => {
    const { logout, history } = this.props;
    logout();
    history.push('/');
  };

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
          </Container>
        </Navbar>
        <Navbar className={styles.nav__navbar2} expand="md">
          <Container>
            <Nav className="mr-auto" navbar>
              <NavItem>
                <Link to="/">Home</Link>
              </NavItem>
              {loggedIn && (
                <>
                  <NavItem>
                    <Link to="/sheets">Sheets</Link>
                  </NavItem>
                </>
              )}
            </Nav>
            {loggedIn && (
              <>
                <Link name="logout" to="/">
                  <NavbarText onClick={this.logUserOut}>Logout</NavbarText>
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
  logout: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool,
};

Header.defaultProps = {
  loggedIn: false,
};

export default HeaderContainer(Header);
