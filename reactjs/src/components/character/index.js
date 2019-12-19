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
import PropTypes from 'prop-types';
import { FaTrash } from 'react-icons/fa';

import container from './container';

import styles from './styles.module.css';

class Character extends Component {
  componentDidMount() {
    this.loadData();
    console.log(this.props);
  }

  loadData = async () => {
    const { match: { params: { id } }, fetchSheet } = this.props;
    if (!id) return;
    await fetchSheet(id);
    const { sheet } = this.props;
    this.setState({ ...sheet });
  };

  render() {
    const {
      skills,
      feats,
      items,
      characterSpells,
      weapons,
    } = this.props;

    const { sheet } = this.props;

    return (
      <div>
        <Container className={styles.form}>
          <Form>
            {/* Header for saving */}
            <div className={styles.heading}>
              <Button>Save</Button>
            </div>
            <Row>
              {/* Character Image + Basic User Details */}
              <Col xs="3" className={styles.inputBasic}>
                <img
                  src={`../${sheet.image}`}
                  alt="character"
                  width="100%"
                  height="250"
                />
                <FormGroup>
                  <Input name="name" id="name" value={sheet.name} />
                  <Label for="name">Name</Label>
                </FormGroup>
                <FormGroup>
                  <Input
                    name="level"
                    id="level"
                    value={sheet.level}
                  />
                  <Label for="input">Level</Label>
                </FormGroup>
                <FormGroup>
                  <Input
                    name="class"
                    id="class"
                    value={sheet.class}
                  />
                  <Label for="class">Class</Label>
                </FormGroup>
                <FormGroup>
                  <Input name="race" id="race" value={sheet.race} />
                  <Label for="race">Race</Label>
                </FormGroup>
                <FormGroup>
                  <Input
                    name="alignment"
                    id="alignment"
                    value={sheet.alignment}
                  />
                  <Label for="alignment">Alignment</Label>
                </FormGroup>
                <FormGroup>
                  <Input name="size" id="size" value={sheet.size} />
                  <Label for="size">Size</Label>
                </FormGroup>
                <FormGroup>
                  <Input
                    name="campaign"
                    id="campaign"
                    value={sheet.campaign}
                  />
                  <Label for="campaign">Campaign</Label>
                </FormGroup>
                <FormGroup>
                  <Input
                    name="player"
                    id="player"
                    value={sheet.player}
                  />
                  <Label for="player">Player</Label>
                </FormGroup>
              </Col>
              {/* User Stats */}
              <Col>
                <Row xs="7" className={styles.stats}>
                  <Col>
                    <FormGroup>
                      <Label for="strength">Strength</Label>
                      <Input
                        name="strength"
                        id="strength"
                        value={sheet.stat[0]}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        name="strengthMod"
                        id="strengthMod"
                        value={sheet.statMod[0]}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="dexterity">Dexterity</Label>
                      <Input
                        name="dexterity"
                        id="dexterity"
                        value={sheet.stat[1]}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        name="dexterityMod"
                        id="dexterityMod"
                        value={sheet.statMod[1]}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="constitution">Constitution</Label>
                      <Input
                        name="constitution"
                        id="constitution"
                        value={sheet.stat[2]}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        name="constitutionMod"
                        id="constitutionMod"
                        value={sheet.statMod[2]}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="intelligence">Intelligence</Label>
                      <Input
                        name="intelligence"
                        id="intelligence"
                        value={sheet.stat[3]}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        name="intelligenceMod"
                        id="intelligenceMod"
                        value={sheet.statMod[3]}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="wisdom">Wisdom</Label>
                      <Input
                        name="wisdom"
                        id="wisdom"
                        value={sheet.stat[4]}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        name="wisdomMod"
                        id="wisdomMod"
                        value={sheet.statMod[4]}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="charisma">Charisma</Label>
                      <Input
                        name="charisma"
                        id="charisma"
                        value={sheet.stat[5]}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        name="charismaMod"
                        id="charismaMod"
                        value={sheet.statMod[5]}
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
                          <Label for="hpWounds">Current</Label>
                          <Input
                            name="hpWounds"
                            id="hpWounds"
                            value={sheet.hpWounds}
                          />
                        </FormGroup>
                        /
                        <FormGroup>
                          <Label for="hp">Max</Label>
                          <Input name="hp" id="hp" value={sheet.hp} />
                        </FormGroup>
                        <FormGroup>
                          <Label for="hpDice">Hie Dice</Label>
                          <Input
                            name="hpDice"
                            id="hpDice"
                            value={sheet.hpDice}
                          />
                        </FormGroup>
                      </div>
                      {/* Resistances */}
                      <div>
                        <FormGroup>
                          <Label for="dmgReduction">Resistances</Label>
                          <Input
                            type="textarea"
                            name="dmgReduction"
                            id="inpdmgReductionut"
                            value={sheet.dmgReduction}
                          />
                        </FormGroup>
                      </div>
                      {/* Sped + inititive */}
                      <div>
                        <FormGroup>
                          <Label for="speed">Speed</Label>
                          <Input
                            name="speed"
                            id="speed"
                            value={sheet.speed}
                          />
                        </FormGroup>
                        <div>
                          <FormGroup>
                            <Label for="init">Inititive</Label>
                            <Input
                              name="init"
                              id="init"
                              value={sheet.init}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="initDex">Base</Label>
                            <Input
                              name="initDex"
                              id="initDex"
                              value={sheet.initDex}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="initMisc">Misc</Label>
                            <Input
                              name="initMisc"
                              id="initMisc"
                              value={sheet.initMisc}
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
                            <Label for="acTouch">Touch</Label>
                            <Input
                              name="acTouch"
                              id="acTouch"
                              value={sheet.acTouch}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="armor">Total</Label>
                            <Input
                              name="armor"
                              id="armor"
                              value={sheet.ac}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="acFlat">Flat</Label>
                            <Input
                              name="acFlat"
                              id="acFlat"
                              value={sheet.acFlat}
                            />
                          </FormGroup>
                          <div>
                            <h3>Base: 10</h3>
                            <FormGroup>
                              <Label for="acArmor">Armor</Label>
                              <Input
                                name="acArmor"
                                id="acArmor"
                                value={sheet.acArmor}
                              />
                            </FormGroup>
                            <FormGroup>
                              <Label for="acShield">Shield</Label>
                              <Input
                                name="acShield"
                                id="acShield"
                                value={sheet.acShield}
                              />
                            </FormGroup>
                            <FormGroup>
                              <Label for="acDex">Dex</Label>
                              <Input
                                name="acDex"
                                id="acDex"
                                value={sheet.acDex}
                              />
                            </FormGroup>
                            <FormGroup>
                              <Label for="acNatural">Natural</Label>
                              <Input
                                name="acNatural"
                                id="acNatural"
                                value={sheet.acNatural}
                              />
                            </FormGroup>
                            <FormGroup>
                              <Label for="acMisc">Misc</Label>
                              <Input
                                name="acMisc"
                                id="acMisc"
                                value={sheet.acMisc}
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
                            <Label for="fortitude">Fortitude</Label>
                            <Input
                              name="fortitude"
                              id="fortitude"
                              value={sheet.savingThrow[0]}
                            />
                          </FormGroup>
                          <div>
                            <FormGroup>
                              <Label for="fortitudeBase">Base</Label>
                              <Input
                                name="fortitudeBase"
                                id="fortitudeBase"
                                value={sheet.savingThrowBase[0]}
                              />
                            </FormGroup>
                            <FormGroup>
                              <Label for="fortitudeMod">Mod</Label>
                              <Input
                                name="fortitudeMod"
                                id="fortitudeMod"
                                value={sheet.savingThrowMod[0]}
                              />
                            </FormGroup>
                          </div>
                        </div>
                        <div>
                          <FormGroup>
                            <Label for="reflex">Reflex</Label>
                            <Input
                              name="reflex"
                              id="reflex"
                              value={sheet.savingThrow[1]}
                            />
                          </FormGroup>
                          <div>
                            <FormGroup>
                              <Label for="reflexBase">Base</Label>
                              <Input
                                name="reflexBase"
                                id="reflexBase"
                                value={sheet.savingThrowBase[1]}
                              />
                            </FormGroup>
                            <FormGroup>
                              <Label for="reflexMod">Mod</Label>
                              <Input
                                name="reflexMod"
                                id="reflexMod"
                                value={sheet.savingThrowMod[1]}
                              />
                            </FormGroup>
                          </div>
                        </div>
                        <div>
                          <FormGroup>
                            <Label for="will">Will</Label>
                            <Input
                              name="will"
                              id="will"
                              value={sheet.savingThrow[3]}
                            />
                          </FormGroup>
                          <div>
                            <FormGroup>
                              <Label for="willBase">Base</Label>
                              <Input
                                name="willBase"
                                id="willBase"
                                value={sheet.savingThrowBase[3]}
                              />
                            </FormGroup>
                            <FormGroup>
                              <Label for="willMod">Mod</Label>
                              <Input
                                name="willMod"
                                id="willMod"
                                value={sheet.savingThrowMod[3]}
                              />
                            </FormGroup>
                          </div>
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
                              <Label for="attackTotalM">Melee</Label>
                              <Input
                                name="attackTotalM"
                                id="attackTotalM"
                                value={sheet.attackTotal[0]}
                              />
                            </FormGroup>
                            <div>
                              <FormGroup>
                                <Label for="attackBaseM">Base</Label>
                                <Input
                                  name="attackBaseM"
                                  id="attackBaseM"
                                  value={sheet.attackBase[0]}
                                />
                              </FormGroup>
                              <FormGroup>
                                <Label for="attackModM">Mod</Label>
                                <Input
                                  name="attackModM"
                                  id="attackModM"
                                  value={sheet.attackMod[0]}
                                />
                              </FormGroup>
                              <FormGroup>
                                <Label for="attackMiscM">Misc</Label>
                                <Input
                                  name="attackMiscM"
                                  id="attackMiscM"
                                  value={sheet.attackMisc[0]}
                                />
                              </FormGroup>
                            </div>
                          </div>
                          <div>
                            <FormGroup>
                              <Label for="attackTotalR">Ranged</Label>
                              <Input
                                name="attackTotalR"
                                id="attackTotalR"
                                value={sheet.attackTotal[1]}
                              />
                            </FormGroup>
                            <div>
                              <FormGroup>
                                <Label for="attackBaseR">Base</Label>
                                <Input
                                  name="attackBaseR"
                                  id="attackBaseR"
                                  value={sheet.attackBase[1]}
                                />
                              </FormGroup>
                              <FormGroup>
                                <Label for="attackBaseR">Mod</Label>
                                <Input
                                  name="attackModR"
                                  id="attackModR"
                                  value={sheet.attackMod[1]}
                                />
                              </FormGroup>
                              <FormGroup>
                                <Label for="attackBaseR">Misc</Label>
                                <Input
                                  name="attackMiscR"
                                  id="attackMiscR"
                                  value={sheet.attackMisc[1]}
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
                            <Label for="weightLight">Light</Label>
                            <Input
                              name="weightLight"
                              id="weightLight"
                              value={sheet.weight[0]}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="weightMedium">Medium</Label>
                            <Input
                              name="weightMedium"
                              id="weightMedium"
                              value={sheet.weight[1]}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="weightHeavy">Heavy</Label>
                            <Input
                              name="weightHeavy"
                              id="weightHeavy"
                              value={sheet.weight[2]}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="weightPull">Pull</Label>
                            <Input
                              name="weightPull"
                              id="weightPull"
                              value={sheet.weight[3]}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="weightTotal">Total</Label>
                            <Input
                              name="weightTotal"
                              id="weightTotal"
                              value={sheet.weight[4]}
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
                    <h2>Skills</h2>
                    <Button>Add</Button>
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
                        {skills.map(skill => (
                          <tr>
                            <td>
                              <Input
                                name="skillName"
                                id="skillName"
                                value={skill.skillName}
                              />
                            </td>
                            <td>
                              <Input
                                name="skillModType"
                                id="skillModType"
                                value={skill.skillModType}
                              />
                            </td>
                            <td>
                              <Input
                                name="skillTotal"
                                id="skillTotal"
                                value={skill.skillTotal}
                              />
                            </td>
                            <td>
                              <Input
                                name="skillAbilityMod"
                                id="skillAbilityMod"
                                value={skill.skillAbilityMod}
                              />
                            </td>
                            <td>
                              <Input
                                name="skillRank"
                                id="skillRank"
                                value={skill.skillRank}
                              />
                            </td>
                            <FaTrash />
                          </tr>
                        ))}
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
                                <Label for="input">Height</Label>
                                <Input
                                  name="height"
                                  id="height"
                                  value={sheet.height}
                                />
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <Label for="age">Age</Label>
                                <Input
                                  name="age"
                                  id="age"
                                  value={sheet.age}
                                />
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <Label for="eyes">Eyes</Label>
                                <Input
                                  name="eyes"
                                  id="eyes"
                                  value={sheet.eyes}
                                />
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <Label for="hair">Hair</Label>
                                <Input
                                  name="hair"
                                  id="hair"
                                  value={sheet.hair}
                                />
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <Label for="weight">Weight</Label>
                                <Input
                                  name="weight"
                                  id="weight"
                                  value={sheet.weight}
                                />
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <Label for="diety">Diety</Label>
                                <Input
                                  name="diety"
                                  id="diety"
                                  value={sheet.diety}
                                />
                              </FormGroup>
                            </Col>
                          </Row>
                          <Row xs="1">
                            <Col>
                              <Label for="notes">Notes</Label>
                              <Input
                                type="textarea"
                                name="notes"
                                id="notes"
                                value={sheet.notes}
                              />
                            </Col>
                          </Row>
                        </Col>
                        <Col>
                          <Row xs="2">
                            <Col>
                              <Label for="currency">Currency</Label>
                              <Input
                                type="textarea"
                                name="currency"
                                id="currency"
                                value={sheet.currency}
                              />
                            </Col>
                            <Col>
                              <Label for="languages">Languages</Label>
                              <Input
                                type="textarea"
                                name="languages"
                                id="languages"
                                value={sheet.languages}
                              />
                            </Col>
                            <Col>
                              <Label for="description">Description</Label>
                              <Input
                                type="textarea"
                                name="description"
                                id="description"
                                value={sheet.description}
                              />
                            </Col>
                            <Col>
                              <Label for="personality">Personality</Label>
                              <Input
                                type="textarea"
                                name="personality"
                                id="personality"
                                value={sheet.personality}
                              />
                            </Col>
                            <Col>
                              <Label for="traits">Traits</Label>
                              <Input
                                type="textarea"
                                name="traits"
                                id="traits"
                                value={sheet.traits}
                              />
                            </Col>
                            <Col>
                              <Label for="flaws">Flaws</Label>
                              <Input
                                type="textarea"
                                name="flaws"
                                id="flaws"
                                value={sheet.flaws}
                              />
                            </Col>
                            <Col>
                              <Label for="contacts">Contacts</Label>
                              <Input
                                type="textarea"
                                name="contacts"
                                id="contacts"
                                value={sheet.contacts}
                              />
                            </Col>
                            <Col>
                              <Label for="enemies">Enemies</Label>
                              <Input
                                type="textarea"
                                name="enemies"
                                id="enemies"
                                value={sheet.enemies}
                              />
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
                        {feats.map(feat => (
                          <Col>
                            <Card>
                              <CardBody>
                                <FaTrash />
                                <FormGroup>
                                  <Label for="featName">Name</Label>
                                  <Input
                                    name="featName"
                                    id="featName"
                                    value={feat.featName}
                                  />
                                </FormGroup>
                                <FormGroup>
                                  <Label for="featDescription">
                                    Description
                                  </Label>
                                  <Input
                                    name="featDescription"
                                    id="featDescription"
                                    value={feat.featDescription}
                                  />
                                </FormGroup>
                              </CardBody>
                            </Card>
                          </Col>
                        ))}
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
                          {items.map(item => (
                            <tr>
                              <td>
                                <Input
                                  name="itemName"
                                  id="itemName"
                                  value={item.itemName}
                                />
                              </td>
                              <td>
                                <Input
                                  name="itemDescription"
                                  id="itemDescription"
                                  value={item.itemDescription}
                                />
                              </td>
                              <td>
                                <Input
                                  name="itemWeight"
                                  id="itemWeight"
                                  value={item.itemWeight}
                                />
                              </td>
                              <FaTrash />
                            </tr>
                          ))}
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
                      <Row xs="2">
                        <Col>
                          <h2>Spells Known</h2>
                          <div>
                            <Row xs="2">
                              <Col>
                                <FormGroup>
                                  <Label for="spellsKnown0">0</Label>
                                  <Input
                                    name="spellsKnown0"
                                    id="spellsKnown0"
                                    value={sheet.spellsKnown[0]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsKnown1">1st</Label>
                                  <Input
                                    name="spellsKnown1"
                                    id="spellsKnown1"
                                    value={sheet.spellsKnown[1]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsKnown2">2nd</Label>
                                  <Input
                                    name="spellsKnown2"
                                    id="spellsKnown2"
                                    value={sheet.spellsKnown[2]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsKnown3">3rd</Label>
                                  <Input
                                    name="spellsKnown3"
                                    id="spellsKnown3"
                                    value={sheet.spellsKnown[3]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsKnown4">4th</Label>
                                  <Input
                                    name="spellsKnown4"
                                    id="spellsKnown4"
                                    value={sheet.spellsKnown[4]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsKnown5">5th</Label>
                                  <Input
                                    name="spellsKnown5"
                                    id="spellsKnown5"
                                    value={sheet.spellsKnown[5]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsKnown6">6th</Label>
                                  <Input
                                    name="spellsKnown6"
                                    id="spellsKnown6"
                                    value={sheet.spellsKnown[6]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsKnown7">7th</Label>
                                  <Input
                                    name="spellsKnown7"
                                    id="spellsKnown7"
                                    value={sheet.spellsKnown[7]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsKnown8">8th</Label>
                                  <Input
                                    name="spellsKnown8"
                                    id="spellsKnown8"
                                    value={sheet.spellsKnown[8]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsKnown9">9th</Label>
                                  <Input
                                    name="spellsKnown9"
                                    id="spellsKnown9"
                                    value={sheet.spellsKnown[9]}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </div>
                          <h2>Spell Saves</h2>
                          <div>
                            <Row xs="2">
                              <Col>
                                <FormGroup>
                                  <Label for="spellDC0">0</Label>
                                  <Input
                                    name="spellDC0"
                                    id="spellDC0"
                                    value={sheet.spellDC[0]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellDC1">1st</Label>
                                  <Input
                                    name="spellDC1"
                                    id="spellDC1"
                                    value={sheet.spellDC[1]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellDC2">2nd</Label>
                                  <Input
                                    name="spellDC2"
                                    id="spellDC2"
                                    value={sheet.spellDC[2]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellDC3">3rd</Label>
                                  <Input
                                    name="spellDC3"
                                    id="spellDC3"
                                    value={sheet.spellDC[3]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellDC4">4th</Label>
                                  <Input
                                    name="spellDC4"
                                    id="spellDC4"
                                    value={sheet.spellDC[4]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellDC5">5th</Label>
                                  <Input
                                    name="spellDC5"
                                    id="spellDC5"
                                    value={sheet.spellDC[5]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellDC6">6th</Label>
                                  <Input
                                    name="spellDC6"
                                    id="spellDC6"
                                    value={sheet.spellDC[6]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellDC7">7th</Label>
                                  <Input
                                    name="spellDC7"
                                    id="spellDC7"
                                    value={sheet.spellDC[7]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellDC8">8th</Label>
                                  <Input
                                    name="spellDC8"
                                    id="spellDC8"
                                    value={sheet.spellDC[8]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellDC9">9th</Label>
                                  <Input
                                    name="spellDC9"
                                    id="spellDC9"
                                    value={sheet.spellDC[9]}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </div>
                          <h2>Spells Per Day</h2>
                          <div>
                            <Row xs="2">
                              <Col>
                                <FormGroup>
                                  <Label for="spellsPerDay0">0</Label>
                                  <Input
                                    name="spellsPerDay0"
                                    id="spellsPerDay0"
                                    value={sheet.spellsPerDay[0]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsPerDay1">1st</Label>
                                  <Input
                                    name="spellsPerDay1"
                                    id="spellsPerDay1"
                                    value={sheet.spellsPerDay[1]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsPerDay2">2nd</Label>
                                  <Input
                                    name="spellsPerDay2"
                                    id="spellsPerDay2"
                                    value={sheet.spellsPerDay[2]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsPerDay3">3rd</Label>
                                  <Input
                                    name="spellsPerDay3"
                                    id="spellsPerDay3"
                                    value={sheet.spellsPerDay[3]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsPerDay4">4th</Label>
                                  <Input
                                    name="spellsPerDay4"
                                    id="spellsPerDay4"
                                    value={sheet.spellsPerDay[4]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsPerDay5">5th</Label>
                                  <Input
                                    name="spellsPerDay5"
                                    id="spellsPerDay5"
                                    value={sheet.spellsPerDay[5]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsPerDay6">6th</Label>
                                  <Input
                                    name="spellsPerDay6"
                                    id="spellsPerDay6"
                                    value={sheet.spellsPerDay[6]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsPerDay7">7th</Label>
                                  <Input
                                    name="spellsPerDay7"
                                    id="spellsPerDay7"
                                    value={sheet.spellsPerDay[7]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsPerDay8">8th</Label>
                                  <Input
                                    name="spellsPerDay8"
                                    id="spellsPerDay8"
                                    value={sheet.spellsPerDay[8]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsPerDay9">9th</Label>
                                  <Input
                                    name="spellsPerDay9"
                                    id="spellsPerDay9"
                                    value={sheet.spellsPerDay[9]}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                        <Col>
                          <Row xs="3">
                            {characterSpells.map(spell => (
                              <Col>
                                <Card>
                                  <CardBody>
                                    <FaTrash />
                                    <FormGroup>
                                      <Label for="spellName">Name</Label>
                                      <Input
                                        name="spellName"
                                        id="spellName"
                                        value={spell.spellName}
                                      />
                                    </FormGroup>
                                    <div>
                                      <FormGroup>
                                        <Label for="spellComponents">
                                          Components
                                        </Label>
                                        <Input
                                          name="spellComponents"
                                          id="spellComponents"
                                          value={spell.spellComponents}
                                        />
                                      </FormGroup>
                                      <FormGroup>
                                        <Label for="spellCastingTime">
                                          Casting Time
                                        </Label>
                                        <Input
                                          name="spellCastingTime"
                                          id="spellCastingTime"
                                          value={spell.spellCastingTime}
                                        />
                                      </FormGroup>
                                      <FormGroup>
                                        <Label for="spellRange">Range</Label>
                                        <Input
                                          name="spellRange"
                                          id="spellRange"
                                          value={spell.spellRange}
                                        />
                                      </FormGroup>
                                      <FormGroup>
                                        <Label for="spellTarget">Target</Label>
                                        <Input
                                          name="spellTarget"
                                          id="spellTarget"
                                          value={spell.spellTarget}
                                        />
                                      </FormGroup>
                                      <FormGroup>
                                        <Label for="spellDuration">
                                          Duration
                                        </Label>
                                        <Input
                                          name="spellDuration"
                                          id="spellDuration"
                                          value={spell.spellDuration}
                                        />
                                      </FormGroup>
                                      <FormGroup>
                                        <Label for="spellSavingThrow">
                                          Saving Throw
                                        </Label>
                                        <Input
                                          name="spellSavingThrow"
                                          id="spellSavingThrow"
                                          value={spell.spellSavingThrow}
                                        />
                                      </FormGroup>
                                      <FormGroup>
                                        <Label for="input">Description</Label>
                                        <Input
                                          type="textarea"
                                          name="description"
                                          id="description"
                                          value={spell.spellDescription}
                                        />
                                      </FormGroup>
                                    </div>
                                  </CardBody>
                                </Card>
                              </Col>
                            ))}
                          </Row>
                        </Col>
                      </Row>
                    </div>
                  </TabPanel>
                  {/* Weapons */}
                  <TabPanel>
                    <div>
                      <div>
                        <Button>Add</Button>
                      </div>
                      <Row xs="1">
                        {weapons.map(weapon => (
                          <Col>
                            <Row xs="6">
                              <Col>
                                <FormGroup>
                                  <Label for="weaponName">Name</Label>
                                  <Input
                                    name="weaponName"
                                    id="weaponName"
                                    value={weapon.weaponName}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="weaponsheet">
                                    Attack Bonus
                                  </Label>
                                  <Input
                                    name="weaponsheet"
                                    id="weaponsheet"
                                    value={weapon.weaponsheet}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="weaponDamage"> Damage </Label>
                                  <Input
                                    name="weaponDamage"
                                    id="weaponDamage"
                                    value={weapon.weaponDamage}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="weaponCritical">Critical</Label>
                                  <Input
                                    name="weaponCritical"
                                    id="weaponCritical"
                                    value={weapon.weaponCritical}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="weaponRange">Range</Label>
                                  <Input
                                    name="weaponRange"
                                    id="weaponRange"
                                    value={weapon.weaponRange}
                                  />
                                </FormGroup>
                              </Col>
                              <FaTrash />
                            </Row>
                            <Row xs="3">
                              <FormGroup>
                                <Label for="weaponSpecial">
                                  Special Properties
                                </Label>
                                <Input
                                  type="textarea"
                                  name="weaponSpecial"
                                  id="weaponSpecial"
                                  value={weapon.weaponSpecial}
                                />
                              </FormGroup>
                              <FormGroup>
                                <Label for="weaponAmmunition">Ammunition</Label>
                                <Input
                                  type="textarea"
                                  name="weaponAmmunition"
                                  id="weaponAmmunition"
                                  value={weapon.weaponAmmunition}
                                />
                              </FormGroup>
                              <Row xs="1">
                                <Col>
                                  <FormGroup>
                                    <Label for="weaponWeight">Weight</Label>
                                    <Input
                                      name="weaponWeight"
                                      id="weaponWeight"
                                      value={weapon.weaponWeight}
                                    />
                                  </FormGroup>
                                </Col>
                                <Col>
                                  <FormGroup>
                                    <Label for="weaponSize">Size</Label>
                                    <Input
                                      name="weaponSize"
                                      id="weaponSize"
                                      value={weapon.weaponSize}
                                    />
                                  </FormGroup>
                                </Col>
                                <Col>
                                  <FormGroup>
                                    <Label for="weaponType">Type</Label>
                                    <Input
                                      name="weaponType"
                                      id="weaponType"
                                      value={weapon.weaponType}
                                    />
                                  </FormGroup>
                                </Col>
                              </Row>
                            </Row>
                          </Col>
                        ))}
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

Character.propTypes = {
  fetchSheet: PropTypes.func.isRequired,
};

Character.defaultProps = {
  sheet: {},

  feats: [
    {
      featName: 'ageelity',
      featDescription: 'Woww jaksdjaskldjaskldaj',
    },
    {
      featName: 'Amazing Saw',
      featDescription: 'Woww jaksdjaskldjaskldaj',
    },
    {
      featName: 'One Punch',
      featDescription: 'Woww jaksdjaskldjaskldaj',
    },
    {
      featName: 'Die',
      featDescription: 'Woww jaksdjaskldjaskldaj',
    },
  ],

  items: [
    {
      itemName: 'ageelity',
      itemDescription: 'Woww jaksdjaskldjaskldaj',
      itemWeight: 12,
    },
    {
      itemName: 'Amazing Saw',
      itemDescription: 'Woww jaksdjaskldjaskldaj',
      itemWeight: 12,
    },
    {
      itemName: 'One Punch',
      itemDescription: 'Woww jaksdjaskldjaskldaj',
      itemWeight: 12,
    },
    {
      itemName: 'Die',
      itemDescription: 'Woww jaksdjaskldjaskldaj',
      itemWeight: 12,
    },
  ],

  skills: [
    {
      skillName: 'Riding',
      skillModType: 'Dex',
      skillTotal: 6,
      skillAbilityMod: 3,
      skillRank: 3,
    }
  ],

  characterSpells: [
    {
      spellName: 'Ackavar',
      spellComponents: 'VS, CH',
      spellCastingTime: 'Instant',
      spellRange: '3ft',
      spellTarget: '1 person',
      spellDuration: 'instantaneous',
      spellSavingThrow: 'Dex',
      spellDescription: 'Ackavar',
    },
    {
      spellName: 'asddadasda',
      spellComponents: 'VS, CH',
      spellCastingTime: 'Instant',
      spellRange: '3ft',
      spellTarget: '1 person',
      spellDuration: 'instantaneous',
      spellSavingThrow: 'Dex',
      spellDescription: 'Ackavar',
    },
    {
      spellName: '3321312ff',
      spellComponents: 'VS, CH',
      spellCastingTime: 'Instant',
      spellRange: '3ft',
      spellTarget: '1 person',
      spellDuration: 'instantaneous',
      spellSavingThrow: 'Dex',
      spellDescription: 'Ackavar',
    },
  ],
  weapons: [
    {
      weaponName: 'arbok',
      weaponsheet: 1,
      weaponDamage: '3d12',
      weaponCritical: '15-20',
      weaponRange: '5ft',
      weaponSpecial: 'Can be used as a butter knife',
      weaponAmmunition: 'None',
      weaponWeight: 5,
      weaponSize: 'medium',
      weaponType: 'slashing',
    },
    {
      weaponName: 'Jamer',
      weaponsheet: 1,
      weaponDamage: '3d12',
      weaponCritical: '15-20',
      weaponRange: '5ft',
      weaponSpecial: 'Can be used as a butter knife',
      weaponAmmunition: 'None',
      weaponWeight: 5,
      weaponSize: 'medium',
      weaponType: 'slashing',
    },
    {
      weaponName: 'Broink',
      weaponsheet: 1,
      weaponDamage: '3d12',
      weaponCritical: '15-20',
      weaponRange: '5ft',
      weaponSpecial: 'Can be used as a butter knife',
      weaponAmmunition: 'None',
      weaponWeight: 5,
      weaponSize: 'medium',
      weaponType: 'slashing',
    },
  ],
};

export default container(Character);
