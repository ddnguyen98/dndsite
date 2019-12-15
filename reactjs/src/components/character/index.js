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
  Table,
  Nav,
  NavLink,
  Card,
  CardBody,
} from 'reactstrap';
import { Tab, Tabs, TabPanel } from 'react-tabs';

import { FaEye, FaTrash } from 'react-icons/fa';
import styles from './styles.module.css';

class Character extends Component {
  render() {
    return (
      <div>
        <Container className={styles.form}>
          <Form>
            {/* Header for saving */}
            <div className={styles.heading}>
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
                  <Col className={styles.collum}>
                    <div className={styles.borders}>
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
                  <Col className={styles.collum}>
                    <div className={styles.borders}>
                      {/* Armor */}
                      <div>
                        <h2>Armor</h2>
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
                  <Col className={styles.collum}>
                    <div className={styles.borders}>
                      {/* Attack Bonus */}
                      <div>
                        <h2>Attack Bonuses</h2>
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
                      </div>
                      {/* Weight */}
                      <div>
                        <h2>Weight</h2>
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
                  </Col>
                </Row>
                {/* Skills */}
                <Row xs="1">
                  <div>
                    <div>Skills</div>
                    <Table striped>
                      <thead>
                        <tr>
                          <th>Name</th>
                          <th>Key Atribute</th>
                          <th>Total</th>
                          <th>Ability Mod</th>
                          <th>Rank</th>
                        </tr>
                      </thead>
                      <tbody>
                        <tr>
                          <td>
                            <Input
                              name="email"
                              id="input"
                              placeholder="with a placeholder"
                            />
                          </td>
                          <td>
                            <Input
                              name="email"
                              id="input"
                              placeholder="with a placeholder"
                            />
                          </td>
                          <td>
                            <Input
                              name="email"
                              id="input"
                              placeholder="with a placeholder"
                            />
                          </td>
                          <td>
                            <Input
                              name="email"
                              id="input"
                              placeholder="with a placeholder"
                            />
                          </td>
                          <td>
                            <Input
                              name="email"
                              id="input"
                              placeholder="with a placeholder"
                            />
                          </td>
                        </tr>
                      </tbody>
                    </Table>
                  </div>
                </Row>
              </Col>
            </Row>
            {/* Tabs */}
            <Row>
              <Col>
                <Tabs>
                  <Nav tabs>
                    <Tab>
                      <NavLink href="#">Character Details</NavLink>
                    </Tab>
                    <Tab>
                      <NavLink href="#">Feats/Abilities</NavLink>
                    </Tab>
                    <Tab>
                      <NavLink href="#">Items</NavLink>
                    </Tab>
                    <Tab>
                      <NavLink href="#">Spells</NavLink>
                    </Tab>
                    <Tab>
                      <NavLink href="#">Weapons</NavLink>
                    </Tab>
                  </Nav>
                  {/* Character Details */}
                  <TabPanel>
                    <div>
                      <Row xs="2">
                        <Col>
                          <Row xs="2">
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
                          <Row xs="1">
                            <Col>
                              <Input
                                type="textarea"
                                name="email"
                                id="input"
                                placeholder="with a placeholder"
                              />
                            </Col>
                          </Row>
                        </Col>
                        <Col>
                          <Row xs="2">
                            <Col>
                              <FormGroup>
                                <Label for="input">Input</Label>
                                <Input
                                  type="textarea"
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
                                  type="textarea"
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
                                  type="textarea"
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
                                  type="textarea"
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
                                  type="textarea"
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
                                  type="textarea"
                                  name="email"
                                  id="input"
                                  placeholder="with a placeholder"
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  </TabPanel>
                  {/* Feats/Abilities */}
                  <TabPanel>
                    <div>
                      <div>
                        <Button>Add</Button>
                      </div>
                      <Row xs="3">
                        <Col>
                          <Card>
                            <FaTrash />
                            <FormGroup>
                              <Label for="input">Input</Label>
                              <Input
                                name="email"
                                id="input"
                                placeholder="with a placeholder"
                              />
                            </FormGroup>
                            <CardBody>
                              <FormGroup>
                                <Label for="input">Input</Label>
                                <Input
                                  type="textarea"
                                  name="email"
                                  id="input"
                                  placeholder="with a placeholder"
                                />
                              </FormGroup>
                            </CardBody>
                          </Card>
                        </Col>
                      </Row>
                    </div>
                  </TabPanel>
                  {/* Items */}
                  <TabPanel>
                    <div>
                      <Button>Add</Button>
                    </div>
                    <div>
                      <Table striped>
                        <thead>
                          <tr>
                            <th>Name</th>
                            <th>Description</th>
                            <th>Weight</th>
                          </tr>
                        </thead>
                        <tbody>
                          <tr>
                            <td>
                              <Input
                                name="email"
                                id="input"
                                placeholder="with a placeholder"
                              />
                            </td>
                            <td>
                              <Input
                                name="email"
                                id="input"
                                placeholder="with a placeholder"
                              />
                            </td>
                            <td>
                              <Input
                                name="email"
                                id="input"
                                placeholder="with a placeholder"
                              />
                            </td>
                            <FaTrash />
                          </tr>
                        </tbody>
                      </Table>
                    </div>
                  </TabPanel>
                  {/* Spells */}
                  <TabPanel>
                    <div>
                      <div>
                        <Button>Add</Button>
                      </div>
                      <Row xs="3">
                        <Col>
                          <Card>
                            <CardBody>
                              <FaTrash />
                              <FormGroup>
                                <Label for="input">Input</Label>
                                <Input
                                  name="email"
                                  id="input"
                                  placeholder="with a placeholder"
                                />
                              </FormGroup>
                              <FormGroup>
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
                                <Label for="input">Input</Label>
                                <Input
                                  type="textarea"
                                  name="email"
                                  id="input"
                                  placeholder="with a placeholder"
                                />
                              </FormGroup>
                            </CardBody>
                          </Card>
                        </Col>
                      </Row>
                    </div>{' '}
                  </TabPanel>
                  {/* Weapons */}
                  <TabPanel>
                    <div>
                      <div>
                        <Button>Add</Button>
                      </div>
                      <Row xs="1">
                        <Col>
                          <div>
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
                              <FaTrash />
                            </Row>
                            <Row xs="3">
                              <FormGroup>
                                <Label for="input">Input</Label>
                                <Input
                                  type="textarea"
                                  name="email"
                                  id="input"
                                  placeholder="with a placeholder"
                                />
                              </FormGroup>
                              <FormGroup>
                                <Label for="input">Input</Label>
                                <Input
                                  type="textarea"
                                  name="email"
                                  id="input"
                                  placeholder="with a placeholder"
                                />
                              </FormGroup>
                              <Row xs="1">
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
                            </Row>
                          </div>
                        </Col>
                      </Row>
                    </div>
                  </TabPanel>
                </Tabs>
              </Col>
            </Row>
          </Form>
        </Container>
      </div>
    );
  }
}

export default Character;
