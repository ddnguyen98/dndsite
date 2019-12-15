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
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
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
                    <div>
                      {/* HP */}
                      <div>
                        <h2>Hit Points</h2>
                        <FormGroup>
                          <Label for="input">Input</Label>
                          <Input
                            name="email"
                            id="input"
                            placeholder="with a placeholder"
                          />
                        </FormGroup>
                        /
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
                      </div>
                      {/* Resistances */}
                      <div>
                        <FormGroup>
                          <Label for="input">Input</Label>
                          <Input
                            type="textarea"
                            name="email"
                            id="input"
                            placeholder="with a placeholder"
                          />
                        </FormGroup>
                      </div>
                      {/* Sped + inititive */}
                      <div>
                        <FormGroup>
                          <Label for="input">Input</Label>
                          <Input
                            name="email"
                            id="input"
                            placeholder="with a placeholder"
                          />
                        </FormGroup>
                        <div>
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
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div>
                      {/* Armor */}
                      <div>
                        <div>
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
                          <div>
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
                          </div>
                        </div>
                      </div>
                      {/* Saving Throws */}
                      <div>
                        <h2>Saving Throws</h2>
                        <div>
                          <FormGroup>
                            <Label for="input">Input</Label>
                            <Input
                              name="email"
                              id="input"
                              placeholder="with a placeholder"
                            />
                          </FormGroup>
                          <div>
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
                          </div>
                        </div>
                        <FormGroup>
                          <Label for="input">Input</Label>
                          <Input
                            name="email"
                            id="input"
                            placeholder="with a placeholder"
                          />
                        </FormGroup>
                        <div>
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
                        </div>
                        <FormGroup>
                          <Label for="input">Input</Label>
                          <Input
                            name="email"
                            id="input"
                            placeholder="with a placeholder"
                          />
                        </FormGroup>
                        <div>
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
                        </div>
                      </div>
                    </div>
                  </Col>
                  <Col>
                    <div>
                      {/* Attack Bonus */}
                      <div>Content</div>
                      {/* weight */}
                      <div>Content</div>
                    </div>
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
