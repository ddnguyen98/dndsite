import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Link, Redirect } from 'react-router-dom';
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
import styles from './styles.module.css';
import container from './container';

class Register extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      username: '',
      password: '',
      emailf: '',
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
    const { saveUser } = this.props;
    const { email, username, password, emailf } = this.state;
    if (emailf.length === 0) {
      await saveUser({ email, username, password });
    }
  };

  render() {
    const { loggedIn } = this.props;
    if (loggedIn) return <Redirect to="/" />;
    return (
      <div className={styles.wrapper}>
        <Container className={styles.login}>
          <div>
            <h2>Register</h2>
            <p>
              {' '}
              If you already have an account with us,
              <Link to="/login">click here</Link> to be redirected to our login
              page{' '}
            </p>
          </div>
          <Form className={styles.form} onSubmit={this.save}>
            <FormGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>@</InputGroupText>
                </InputGroupAddon>
                <Input
                  type="email"
                  name="email"
                  id="email"
                  placeholder="Email"
                  onChange={this.handleInputChange}
                />
              </InputGroup>
            </FormGroup>
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
            <Button className={styles.button}>Register</Button>
            <input
              className={styles.emailf}
              name="emailf"
              id="emailf"
              onChange={this.handleInputChange}
            />
          </Form>
        </Container>
      </div>
    );
  }
}

Register.propTypes = {
  saveUser: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool,
};

Register.defaultProps = {
  loggedIn: false,
};

export default container(Register);
