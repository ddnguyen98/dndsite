import React, { Component } from 'react';
import {
  Button,
  Form,
  FormGroup,
  Input,
  Container,
  InputGroup,
  InputGroupAddon,
  InputGroupText,
} from 'reactstrap';
import { Redirect } from 'react-router-dom';
import PropTypes from 'prop-types';
import LoginContainer from './container';
import styles from './styles.module.css';

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: '',
      password: '',
    };
  }

  handleInputChange = event => {
    // pull the name of the input and value of input out of the event object
    const {
      target: { name, value },
    } = event;
    // update the state to a key of the name of the input and value of the value of the input
    // ex: type: 'private'
    this.setState({
      [name]: value,
    });
  };

  save = async event => {
    // don't actually submit the form through the browser
    event.preventDefault();
    const { loginAccount, history } = this.props;
    const { username, password } = this.state;
    await loginAccount({ username, password });
  };

  render() {
    const { loggedIn } = this.props;
    if (loggedIn) return <Redirect to="/" />;
    return (
      <div className={styles.wrapper}>
        <Container className={styles.login}>
          <h2>Login</h2>
          <Form className={styles.form} onSubmit={this.save}>
            <FormGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>U</InputGroupText>
                </InputGroupAddon>
                <Input
                  name="username"
                  id="username"
                  placeholder="Username"
                  onChange={this.handleInputChange}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>P</InputGroupText>
                </InputGroupAddon>
                <Input
                  type="password"
                  name="password"
                  id="password"
                  placeholder="Password"
                  onChange={this.handleInputChange}
                />
              </InputGroup>
            </FormGroup>
            <Button name="submit" className={styles.button}>
              Login
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

Login.propTypes = {
  loginAccount: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool,
};

Login.defaultProps = {
  loggedIn: false,
};

export default LoginContainer(Login);
