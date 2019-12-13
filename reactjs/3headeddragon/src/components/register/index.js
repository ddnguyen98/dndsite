import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Button, Form, FormGroup, Input, Container, InputGroup, InputGroupAddon, InputGroupText } from 'reactstrap';
import styles from './styles.module.css';

class Register extends Component {
    render() {
        return (
            <div className={styles.wrapper}>
                <Container className={styles.login}>
                    <div>
                        <h2>Register</h2>
                        <p>If you already have an account with us, <Link to="/login">click here</Link> to be redirected to our login page</p>
                    </div>

                    <Form className={styles.form}>
                        <FormGroup>
                            <InputGroup>
                                <InputGroupAddon addonType="prepend">
                                    <InputGroupText>@</InputGroupText>
                                </InputGroupAddon>
                                <Input type="email" name="email" id="email" placeholder="Email" />
                            </InputGroup>
                        </FormGroup>
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
                                <Input type="password" name="password" id="password" placeholder="Password" />
                            </InputGroup>
                        </FormGroup>
                        <Button className={styles.button}>Register</Button>
                    </Form>  
                </Container>
            </div>
        );
    }
}

export default Register;