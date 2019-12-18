import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import {
  Container,
  Row,
  Col,
  Card,
  CardImg,
  CardBody,
  CardTitle,
  CardSubtitle,
  Button,
} from 'reactstrap';
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';
import container from './container';

import styles from './styles.module.css';

class Sheets extends Component {
  componentDidMount() {
    const { fetchSheets } = this.props;
    fetchSheets();
  }

  render() {
    const { sheets } = this.props;
    return (
      <div className={styles.sheets}>
        <Container>
          <div className={styles.heading}>
            <h2>Characters</h2>
            <Button>Add</Button>
          </div>
          <Row xs="3" className={styles.container}>
            {sheets.map(sheet => (
              <Col>
                <Card className={styles.card}>
                  <Link to={`/character/${sheet.id}`}>
                    <FaTrash className={styles.icon} />
                    <CardImg
                      top
                      src={sheet.image}
                      alt="Character Image"
                      height="280px"
                    />
                    <CardBody>
                      <h2>
                        <CardTitle>{sheet.name}</CardTitle>
                      </h2>
                      <CardSubtitle>{sheet.campaign}</CardSubtitle>
                    </CardBody>
                  </Link>
                </Card>
              </Col>
            ))}
          </Row>
        </Container>
      </div>
    );
  }
}

Sheets.propTypes = {
  sheets: PropTypes.arrayOf(PropTypes.object),
  fetchSheets: PropTypes.func.isRequired,
};

Sheets.defaultProps = {
  sheets: [],
};

export default container(Sheets);
