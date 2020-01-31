import React, { Component } from 'react';
import PropTypes from 'prop-types';
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

class Emailer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      message: '',
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
    const { emailer } = this.props;
    const { email, message, emailf } = this.state;
    if (emailf.length === 0) {
      await emailer({ email, message });
    }
  };

  render() {
    return (
      <div className={styles.wrapper}>
        <Container className={styles.login}>
          <div>
            <h2>Send Message</h2>
            <p>Submit here to send the creator of the site a message</p>
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
              <InputGroup className={styles.message}>
                <InputGroupAddon addonType="prepend">
                  <InputGroupText>M</InputGroupText>
                </InputGroupAddon>
                <Input
                  type="textarea"
                  name="message"
                  id="message"
                  placeholder="Message"
                  onChange={this.handleInputChange}
                />
              </InputGroup>
            </FormGroup>
            <Button className={styles.button}>Send Message</Button>
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

Emailer.propTypes = {
  emailer: PropTypes.func.isRequired,
};

export default container(Emailer);
