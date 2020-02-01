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
import ResetContainer from './container';
import styles from './styles.module.css';

class Reset extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newPassword: '',
      verifyPassword: '',
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
    const urlParams = new URLSearchParams(window.location.search);
    const token = urlParams.get('token');
    const { reset } = this.props;
    const { newPassword, verifyPassword } = this.state;
    await reset({ newPassword, verifyPassword, token });
  };

  render() {
    const { loggedIn } = this.props;
    if (loggedIn) return <Redirect to="/" />;
    return (
      <div className={styles.wrapper}>
        <Container className={styles.login}>
          <h2>Forgot</h2>
          <Form className={styles.form} onSubmit={this.save}>
            <FormGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>NP</InputGroupText>
                </InputGroupAddon>
                <Input
                  name="newPassword"
                  id="newPassword"
                  placeholder="new Password"
                  onChange={this.handleInputChange}
                />
              </InputGroup>
            </FormGroup>
            <FormGroup>
              <InputGroup>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>VP</InputGroupText>
                </InputGroupAddon>
                <Input
                  name="verifyPassword"
                  id="verifyPassword"
                  placeholder="verify Password"
                  onChange={this.handleInputChange}
                />
              </InputGroup>
            </FormGroup>
            <Button name="submit" className={styles.button}>
              Submit
            </Button>
          </Form>
        </Container>
      </div>
    );
  }
}

Reset.propTypes = {
  reset: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool,
};

Reset.defaultProps = {
  loggedIn: false,
};

export default ResetContainer(Reset);
