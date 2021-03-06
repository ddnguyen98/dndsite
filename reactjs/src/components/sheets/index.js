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

  addSheet = event => {
    event.preventDefault();
    const { createSheet } = this.props;
    createSheet();
  };

  delete = id => {
    const { deleteSheet } = this.props;
    deleteSheet(id);
  };

  render() {
    const { sheets } = this.props;
    return (
      <div className={styles.sheets}>
        <Container>
          <div className={styles.heading}>
            <h2>Characters</h2>
            <Button onClick={this.addSheet}>Add</Button>
          </div>
          <Row xs="3" className={styles.container}>
            {sheets.map(sheet => (
              <Col key={sheet.id}>
                <Card className={styles.card}>
                  <FaTrash
                    className={styles.icon}
                    onClick={() => {
                      this.delete(sheet.id);
                    }}
                  />
                  <Link to={`/character/${sheet.id}`}>
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
  createSheet: PropTypes.func.isRequired,
  deleteSheet: PropTypes.func.isRequired,
};

Sheets.defaultProps = {
  sheets: [],
};

export default container(Sheets);
