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
import ForgotContainer from './container';
import styles from './styles.module.css';

class Forgot extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
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
    const { forgot } = this.props;
    const { email } = this.state;
    await forgot({ email });
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
                  <InputGroupText>@</InputGroupText>
                </InputGroupAddon>
                <Input
                  name="email"
                  id="email"
                  placeholder="Email"
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

Forgot.propTypes = {
  forgot: PropTypes.func.isRequired,
  loggedIn: PropTypes.bool,
};

Forgot.defaultProps = {
  loggedIn: false,
};

export default ForgotContainer(Forgot);
