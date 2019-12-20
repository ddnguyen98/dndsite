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
import styles from './styles.module.css';

class Login extends Component {
  render() {
    return (
      <div className={styles.wrapper}>
        <Container className={styles.login}>
          <h2>Login</h2>
          <Form className={styles.form}>
            <FormGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>U</InputGroupText>
                </InputGroupAddon>
                <Input name="username" id="username" placeholder="Username" />
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
                />
              </InputGroup>
            </FormGroup>
            <Button className={styles.button}>Login</Button>
          </Form>
        </Container>
      </div>
    );
  }
}

export default Login;
