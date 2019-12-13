import React, { Component } from 'react';
import { Container, Jumbotron } from 'reactstrap';
import { Link } from 'react-router-dom';
import { Card, CardImg, CardText, CardBody, CardTitle, Button, CardGroup } from 'reactstrap';
import styles from './styles.module.css';

class Home extends Component {
    render() {
        return (
            <div>
                <Jumbotron className={styles.home__banner} fluid>
                    <Container>
                    <h1 className="display-3">Welcome To Three Headed Dragons</h1>
                    <p className="lead">Here you can create a character sheet for 3.5e! Modernized for your viewing pleasure, if you haven't already, go and register for an account today to begin customizing your own characters.</p>
                    </Container>
                </Jumbotron>  
                <Container>
                    <CardGroup className={styles.home__cards}>
                        <Card className={styles.home__card}>
                            <CardImg top src="register.jpg" alt="Card image cap" height="280px"/>
                            <CardBody>
                            <h2><CardTitle>Register</CardTitle></h2>
                            <CardText>If you haven't made and account yet, the button to take yourself to the sign up page!</CardText>
                            <Link to="/register"><Button className={styles.home__button}>Register</Button></Link>
                            </CardBody>
                        </Card>
                        <Card className={styles.home__card}>
                            <CardImg top src="create.jpg" alt="Card image cap" height="280px"/>
                            <CardBody>
                            <h2><CardTitle>Character Creator</CardTitle></h2>
                            <CardText>Once you made an account and want to make a character, the button to be redirected to your character list view.</CardText>
                            <Link to="/sheets"><Button className={styles.home__button}>Create</Button></Link>
                            </CardBody>
                        </Card> 
                    </CardGroup>                  
                </Container>             
            </div>
        );
    }
}

export default Home;