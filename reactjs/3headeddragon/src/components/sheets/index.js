import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { Container, Row, Col, Card, CardImg, CardText, CardBody, CardTitle, CardSubtitle, Button, CardGroup } from 'reactstrap';
import { FaTrash } from 'react-icons/fa';
import styles from './styles.module.css';

class Sheets extends Component {
    render() {
        return (
            <div className={styles.sheets}>
                <Container>
                    <div className={styles.heading}>
                        <h2>Characters</h2>
                        <Button>Add</Button>
                    </div>
                    <Row xs="3" className={styles.container}>
                        <Col>
                            <Card className={styles.card}>
                                <FaTrash className={styles.icon}/>
                                <CardImg top src="henry.jpg" alt="Character Image" height="280px"/>
                                <CardBody>
                                <h2><CardTitle>Sir Henry</CardTitle></h2>
                                <CardSubtitle>Dungeons Of Dread</CardSubtitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card className={styles.card}>
                                <FaTrash className={styles.icon}/>
                                <CardImg top src="henry.jpg" alt="Character Image" height="280px"/>
                                <CardBody>
                                <h2><CardTitle>Sir Henry</CardTitle></h2>
                                <CardSubtitle>Dungeons Of Dread</CardSubtitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card className={styles.card}>
                                <FaTrash className={styles.icon}/>
                                <CardImg top src="henry.jpg" alt="Character Image" height="280px"/>
                                <CardBody>
                                <h2><CardTitle>Sir Henry</CardTitle></h2>
                                <CardSubtitle>Dungeons Of Dread</CardSubtitle>
                                </CardBody>
                            </Card>
                        </Col>
                        <Col>
                            <Card className={styles.card}>
                                <FaTrash className={styles.icon}/>
                                <CardImg top src="henry.jpg" alt="Character Image" height="280px"/>
                                <CardBody>
                                <h2><CardTitle>Sir Henry</CardTitle></h2>
                                <CardSubtitle>Dungeons Of Dread</CardSubtitle>
                                </CardBody>
                            </Card>
                        </Col>
                    </Row>
                </Container>
            </div>
        );
    }
}

export default Sheets;