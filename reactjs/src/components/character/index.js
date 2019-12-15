import React, { Component } from 'react';
import {
  Container,
  Button,
  Form,
  FormGroup,
  Label,
  Input,
  Col,
  Row,
} from 'reactstrap';
import { FaEye } from 'react-icons/fa';
import styles from './styles.module.css';

class index extends Component {
  render() {
    return (
      <div>
        <Container className={styles.form}>
          <Form>
            {/* Header for saving */}
            <div>
              <Button>Save</Button>
              <FaEye />
            </div>
            <Row>
              {/* Character Image + Basic User Details */}
              <Col xs="3">
                <img
                  src="henry.jpg"
                  alt="character"
                  width="100%"
                  height="250"
                />
                <FormGroup>
                  <Label for="input">Input</Label>
                  <Input
                    name="email"
                    id="input"
                    placeholder="with a placeholder"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="input">Input</Label>
                  <Input
                    name="email"
                    id="input"
                    placeholder="with a placeholder"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="input">Input</Label>
                  <Input
                    name="email"
                    id="input"
                    placeholder="with a placeholder"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="input">Input</Label>
                  <Input
                    name="email"
                    id="input"
                    placeholder="with a placeholder"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="input">Input</Label>
                  <Input
                    name="email"
                    id="input"
                    placeholder="with a placeholder"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="input">Input</Label>
                  <Input
                    name="email"
                    id="input"
                    placeholder="with a placeholder"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="input">Input</Label>
                  <Input
                    name="email"
                    id="input"
                    placeholder="with a placeholder"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="input">Input</Label>
                  <Input
                    name="email"
                    id="input"
                    placeholder="with a placeholder"
                  />
                </FormGroup>
                <FormGroup>
                  <Label for="input">Input</Label>
                  <Input
                    name="email"
                    id="input"
                    placeholder="with a placeholder"
                  />
                </FormGroup>
              </Col>
              {/* User Stats */}
              <Col>
                <Row xs="6">
                  <Col>
                    <FormGroup>
                      <Label for="input">Input</Label>
                      <Input
                        name="email"
                        id="input"
                        placeholder="with a placeholder"
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="input">Input</Label>
                      <Input
                        name="email"
                        id="input"
                        placeholder="with a placeholder"
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="input">Input</Label>
                      <Input
                        name="email"
                        id="input"
                        placeholder="with a placeholder"
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="input">Input</Label>
                      <Input
                        name="email"
                        id="input"
                        placeholder="with a placeholder"
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="input">Input</Label>
                      <Input
                        name="email"
                        id="input"
                        placeholder="with a placeholder"
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="input">Input</Label>
                      <Input
                        name="email"
                        id="input"
                        placeholder="with a placeholder"
                      />
                    </FormGroup>
                  </Col>
                </Row>
                <Row xs="3">
                  <Col>
                    <div>Content</div>
                  </Col>
                  <Col>
                    <div>Content</div>
                  </Col>
                  <Col>
                    <div>Content</div>
                  </Col>
                </Row>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    );
  }
}

export default index;
