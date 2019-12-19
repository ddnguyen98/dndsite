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
  }

  loadData = async () => {
    const { match: { params: { id } }, fetchSheet } = this.props;
    if (!id) return;
    await fetchSheet(id);
    const { sheet } = this.props;
    this.setState({ ...sheet });
    console.log(state);
  };

  render() {
    const {
      characterDetails,
      characterStats,
      attackBonus,
      weightAmmount,
      savingThrows,
      skills,
      feats,
      items,
      spells,
      characterSpells,
      weapons,
    } = this.props;
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
                  src={`../${characterDetails.image}`}
                  alt="character"
                  width="100%"
                  height="250"
                />
                <FormGroup>
                  <Input name="name" id="name" value={characterDetails.name} />
                  <Label for="name">Name</Label>
                </FormGroup>
                <FormGroup>
                  <Input
                    name="level"
                    id="level"
                    value={characterDetails.level}
                  />
                  <Label for="input">Level</Label>
                </FormGroup>
                <FormGroup>
                  <Input
                    name="class"
                    id="class"
                    value={characterDetails.class}
                  />
                  <Label for="class">Class</Label>
                </FormGroup>
                <FormGroup>
                  <Input name="race" id="race" value={characterDetails.race} />
                  <Label for="race">Race</Label>
                </FormGroup>
                <FormGroup>
                  <Input
                    name="alignment"
                    id="alignment"
                    value={characterDetails.alignment}
                  />
                  <Label for="alignment">Alignment</Label>
                </FormGroup>
                <FormGroup>
                  <Input name="size" id="size" value={characterDetails.size} />
                  <Label for="size">Size</Label>
                </FormGroup>
                <FormGroup>
                  <Input
                    name="campaign"
                    id="campaign"
                    value={characterDetails.campaign}
                  />
                  <Label for="campaign">Campaign</Label>
                </FormGroup>
                <FormGroup>
                  <Input
                    name="player"
                    id="player"
                    value={characterDetails.player}
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
                        value={characterStats.stat[0]}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        name="strengthMod"
                        id="strengthMod"
                        value={characterStats.statMod[0]}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="dexterity">Dexterity</Label>
                      <Input
                        name="dexterity"
                        id="dexterity"
                        value={characterStats.stat[1]}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        name="dexterityMod"
                        id="dexterityMod"
                        value={characterStats.statMod[1]}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="constitution">Constitution</Label>
                      <Input
                        name="constitution"
                        id="constitution"
                        value={characterStats.stat[2]}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        name="constitutionMod"
                        id="constitutionMod"
                        value={characterStats.statMod[2]}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="intelligence">Intelligence</Label>
                      <Input
                        name="intelligence"
                        id="intelligence"
                        value={characterStats.stat[3]}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        name="intelligenceMod"
                        id="intelligenceMod"
                        value={characterStats.statMod[3]}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="wisdom">Wisdom</Label>
                      <Input
                        name="wisdom"
                        id="wisdom"
                        value={characterStats.stat[4]}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        name="wisdomMod"
                        id="wisdomMod"
                        value={characterStats.statMod[4]}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="charisma">Charisma</Label>
                      <Input
                        name="charisma"
                        id="charisma"
                        value={characterStats.stat[5]}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        name="charismaMod"
                        id="charismaMod"
                        value={characterStats.statMod[5]}
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
                            value={characterStats.hpWounds}
                          />
                        </FormGroup>
                        /
                        <FormGroup>
                          <Label for="hp">Max</Label>
                          <Input name="hp" id="hp" value={characterStats.hp} />
                        </FormGroup>
                        <FormGroup>
                          <Label for="hpDice">Hie Dice</Label>
                          <Input
                            name="hpDice"
                            id="hpDice"
                            value={characterStats.hpDice}
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
                            value={characterStats.dmgReduction}
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
                            value={characterStats.speed}
                          />
                        </FormGroup>
                        <div>
                          <FormGroup>
                            <Label for="init">Inititive</Label>
                            <Input
                              name="init"
                              id="init"
                              value={characterStats.init}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="initDex">Base</Label>
                            <Input
                              name="initDex"
                              id="initDex"
                              value={characterStats.initDex}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="initMisc">Misc</Label>
                            <Input
                              name="initMisc"
                              id="initMisc"
                              value={characterStats.initMisc}
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
                              value={characterStats.acTouch}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="armor">Total</Label>
                            <Input
                              name="armor"
                              id="armor"
                              value={characterStats.ac}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="acFlat">Flat</Label>
                            <Input
                              name="acFlat"
                              id="acFlat"
                              value={characterStats.acFlat}
                            />
                          </FormGroup>
                          <div>
                            <h3>Base: 10</h3>
                            <FormGroup>
                              <Label for="acArmor">Armor</Label>
                              <Input
                                name="acArmor"
                                id="acArmor"
                                value={characterStats.acArmor}
                              />
                            </FormGroup>
                            <FormGroup>
                              <Label for="acShield">Shield</Label>
                              <Input
                                name="acShield"
                                id="acShield"
                                value={characterStats.acShield}
                              />
                            </FormGroup>
                            <FormGroup>
                              <Label for="acDex">Dex</Label>
                              <Input
                                name="acDex"
                                id="acDex"
                                value={characterStats.acDex}
                              />
                            </FormGroup>
                            <FormGroup>
                              <Label for="acNatural">Natural</Label>
                              <Input
                                name="acNatural"
                                id="acNatural"
                                value={characterStats.acNatural}
                              />
                            </FormGroup>
                            <FormGroup>
                              <Label for="acMisc">Misc</Label>
                              <Input
                                name="acMisc"
                                id="acMisc"
                                value={characterStats.acMisc}
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
                              value={savingThrows.savingThrow[0]}
                            />
                          </FormGroup>
                          <div>
                            <FormGroup>
                              <Label for="fortitudeBase">Base</Label>
                              <Input
                                name="fortitudeBase"
                                id="fortitudeBase"
                                value={savingThrows.savingThrowBase[0]}
                              />
                            </FormGroup>
                            <FormGroup>
                              <Label for="fortitudeMod">Mod</Label>
                              <Input
                                name="fortitudeMod"
                                id="fortitudeMod"
                                value={savingThrows.savingThrowMod[0]}
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
                              value={savingThrows.savingThrow[1]}
                            />
                          </FormGroup>
                          <div>
                            <FormGroup>
                              <Label for="reflexBase">Base</Label>
                              <Input
                                name="reflexBase"
                                id="reflexBase"
                                value={savingThrows.savingThrowBase[1]}
                              />
                            </FormGroup>
                            <FormGroup>
                              <Label for="reflexMod">Mod</Label>
                              <Input
                                name="reflexMod"
                                id="reflexMod"
                                value={savingThrows.savingThrowMod[1]}
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
                              value={savingThrows.savingThrow[3]}
                            />
                          </FormGroup>
                          <div>
                            <FormGroup>
                              <Label for="willBase">Base</Label>
                              <Input
                                name="willBase"
                                id="willBase"
                                value={savingThrows.savingThrowBase[3]}
                              />
                            </FormGroup>
                            <FormGroup>
                              <Label for="willMod">Mod</Label>
                              <Input
                                name="willMod"
                                id="willMod"
                                value={savingThrows.savingThrowMod[3]}
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
                                value={attackBonus.attackTotal[0]}
                              />
                            </FormGroup>
                            <div>
                              <FormGroup>
                                <Label for="attackBaseM">Base</Label>
                                <Input
                                  name="attackBaseM"
                                  id="attackBaseM"
                                  value={attackBonus.attackBase[0]}
                                />
                              </FormGroup>
                              <FormGroup>
                                <Label for="attackModM">Mod</Label>
                                <Input
                                  name="attackModM"
                                  id="attackModM"
                                  value={attackBonus.attackMod[0]}
                                />
                              </FormGroup>
                              <FormGroup>
                                <Label for="attackMiscM">Misc</Label>
                                <Input
                                  name="attackMiscM"
                                  id="attackMiscM"
                                  value={attackBonus.attackMisc[0]}
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
                                value={attackBonus.attackTotal[1]}
                              />
                            </FormGroup>
                            <div>
                              <FormGroup>
                                <Label for="attackBaseR">Base</Label>
                                <Input
                                  name="attackBaseR"
                                  id="attackBaseR"
                                  value={attackBonus.attackBase[1]}
                                />
                              </FormGroup>
                              <FormGroup>
                                <Label for="attackBaseR">Mod</Label>
                                <Input
                                  name="attackModR"
                                  id="attackModR"
                                  value={attackBonus.attackMod[1]}
                                />
                              </FormGroup>
                              <FormGroup>
                                <Label for="attackBaseR">Misc</Label>
                                <Input
                                  name="attackMiscR"
                                  id="attackMiscR"
                                  value={attackBonus.attackMisc[1]}
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
                              value={weightAmmount.weight[0]}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="weightMedium">Medium</Label>
                            <Input
                              name="weightMedium"
                              id="weightMedium"
                              value={weightAmmount.weight[1]}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="weightHeavy">Heavy</Label>
                            <Input
                              name="weightHeavy"
                              id="weightHeavy"
                              value={weightAmmount.weight[2]}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="weightPull">Pull</Label>
                            <Input
                              name="weightPull"
                              id="weightPull"
                              value={weightAmmount.weight[3]}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="weightTotal">Total</Label>
                            <Input
                              name="weightTotal"
                              id="weightTotal"
                              value={weightAmmount.weight[4]}
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
                                  value={characterDetails.height}
                                />
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <Label for="age">Age</Label>
                                <Input
                                  name="age"
                                  id="age"
                                  value={characterDetails.age}
                                />
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <Label for="eyes">Eyes</Label>
                                <Input
                                  name="eyes"
                                  id="eyes"
                                  value={characterDetails.eyes}
                                />
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <Label for="hair">Hair</Label>
                                <Input
                                  name="hair"
                                  id="hair"
                                  value={characterDetails.hair}
                                />
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <Label for="weight">Weight</Label>
                                <Input
                                  name="weight"
                                  id="weight"
                                  value={characterDetails.weight}
                                />
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <Label for="diety">Diety</Label>
                                <Input
                                  name="diety"
                                  id="diety"
                                  value={characterDetails.diety}
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
                                value={characterDetails.notes}
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
                                value={characterDetails.currency}
                              />
                            </Col>
                            <Col>
                              <Label for="languages">Languages</Label>
                              <Input
                                type="textarea"
                                name="languages"
                                id="languages"
                                value={characterDetails.languages}
                              />
                            </Col>
                            <Col>
                              <Label for="description">Description</Label>
                              <Input
                                type="textarea"
                                name="description"
                                id="description"
                                value={characterDetails.description}
                              />
                            </Col>
                            <Col>
                              <Label for="personality">Personality</Label>
                              <Input
                                type="textarea"
                                name="personality"
                                id="personality"
                                value={characterDetails.personality}
                              />
                            </Col>
                            <Col>
                              <Label for="traits">Traits</Label>
                              <Input
                                type="textarea"
                                name="traits"
                                id="traits"
                                value={characterDetails.traits}
                              />
                            </Col>
                            <Col>
                              <Label for="flaws">Flaws</Label>
                              <Input
                                type="textarea"
                                name="flaws"
                                id="flaws"
                                value={characterDetails.flaws}
                              />
                            </Col>
                            <Col>
                              <Label for="contacts">Contacts</Label>
                              <Input
                                type="textarea"
                                name="contacts"
                                id="contacts"
                                value={characterDetails.contacts}
                              />
                            </Col>
                            <Col>
                              <Label for="enemies">Enemies</Label>
                              <Input
                                type="textarea"
                                name="enemies"
                                id="enemies"
                                value={characterDetails.enemies}
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
                                    value={spells.spellsKnown[0]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsKnown1">1st</Label>
                                  <Input
                                    name="spellsKnown1"
                                    id="spellsKnown1"
                                    value={spells.spellsKnown[1]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsKnown2">2nd</Label>
                                  <Input
                                    name="spellsKnown2"
                                    id="spellsKnown2"
                                    value={spells.spellsKnown[2]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsKnown3">3rd</Label>
                                  <Input
                                    name="spellsKnown3"
                                    id="spellsKnown3"
                                    value={spells.spellsKnown[3]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsKnown4">4th</Label>
                                  <Input
                                    name="spellsKnown4"
                                    id="spellsKnown4"
                                    value={spells.spellsKnown[4]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsKnown5">5th</Label>
                                  <Input
                                    name="spellsKnown5"
                                    id="spellsKnown5"
                                    value={spells.spellsKnown[5]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsKnown6">6th</Label>
                                  <Input
                                    name="spellsKnown6"
                                    id="spellsKnown6"
                                    value={spells.spellsKnown[6]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsKnown7">7th</Label>
                                  <Input
                                    name="spellsKnown7"
                                    id="spellsKnown7"
                                    value={spells.spellsKnown[7]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsKnown8">8th</Label>
                                  <Input
                                    name="spellsKnown8"
                                    id="spellsKnown8"
                                    value={spells.spellsKnown[8]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsKnown9">9th</Label>
                                  <Input
                                    name="spellsKnown9"
                                    id="spellsKnown9"
                                    value={spells.spellsKnown[9]}
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
                                    value={spells.spellDC[0]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellDC1">1st</Label>
                                  <Input
                                    name="spellDC1"
                                    id="spellDC1"
                                    value={spells.spellDC[1]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellDC2">2nd</Label>
                                  <Input
                                    name="spellDC2"
                                    id="spellDC2"
                                    value={spells.spellDC[2]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellDC3">3rd</Label>
                                  <Input
                                    name="spellDC3"
                                    id="spellDC3"
                                    value={spells.spellDC[3]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellDC4">4th</Label>
                                  <Input
                                    name="spellDC4"
                                    id="spellDC4"
                                    value={spells.spellDC[4]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellDC5">5th</Label>
                                  <Input
                                    name="spellDC5"
                                    id="spellDC5"
                                    value={spells.spellDC[5]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellDC6">6th</Label>
                                  <Input
                                    name="spellDC6"
                                    id="spellDC6"
                                    value={spells.spellDC[6]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellDC7">7th</Label>
                                  <Input
                                    name="spellDC7"
                                    id="spellDC7"
                                    value={spells.spellDC[7]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellDC8">8th</Label>
                                  <Input
                                    name="spellDC8"
                                    id="spellDC8"
                                    value={spells.spellDC[8]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellDC9">9th</Label>
                                  <Input
                                    name="spellDC9"
                                    id="spellDC9"
                                    value={spells.spellDC[9]}
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
                                    value={spells.spellsPerDay[0]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsPerDay1">1st</Label>
                                  <Input
                                    name="spellsPerDay1"
                                    id="spellsPerDay1"
                                    value={spells.spellsPerDay[1]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsPerDay2">2nd</Label>
                                  <Input
                                    name="spellsPerDay2"
                                    id="spellsPerDay2"
                                    value={spells.spellsPerDay[2]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsPerDay3">3rd</Label>
                                  <Input
                                    name="spellsPerDay3"
                                    id="spellsPerDay3"
                                    value={spells.spellsPerDay[3]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsPerDay4">4th</Label>
                                  <Input
                                    name="spellsPerDay4"
                                    id="spellsPerDay4"
                                    value={spells.spellsPerDay[4]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsPerDay5">5th</Label>
                                  <Input
                                    name="spellsPerDay5"
                                    id="spellsPerDay5"
                                    value={spells.spellsPerDay[5]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsPerDay6">6th</Label>
                                  <Input
                                    name="spellsPerDay6"
                                    id="spellsPerDay6"
                                    value={spells.spellsPerDay[6]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsPerDay7">7th</Label>
                                  <Input
                                    name="spellsPerDay7"
                                    id="spellsPerDay7"
                                    value={spells.spellsPerDay[7]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsPerDay8">8th</Label>
                                  <Input
                                    name="spellsPerDay8"
                                    id="spellsPerDay8"
                                    value={spells.spellsPerDay[8]}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsPerDay9">9th</Label>
                                  <Input
                                    name="spellsPerDay9"
                                    id="spellsPerDay9"
                                    value={spells.spellsPerDay[9]}
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
                                  <Label for="weaponAttackBonus">
                                    Attack Bonus
                                  </Label>
                                  <Input
                                    name="weaponAttackBonus"
                                    id="weaponAttackBonus"
                                    value={weapon.weaponAttackBonus}
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
  characterDetails: {
    name: 'Sir Henry',
    level: 6,
    class: 'figter',
    race: 'dog',
    alignment: 'Chaotic Good',
    gender: 'Male',
    size: 'medium',
    campaign: 'Barrel Of Doom',
    player: 'Dominic Nguyen',
    height: "3'11",
    weight: 300,
    eyes: 'Brown',
    hair: 'Dark Brown',
    diety: 'Korn',
    age: 12,
    notes: 'Wowzdsadas asdsadjaslkda jklasjdkasld',
    currency: '3gp 4sp 11c',
    languages: 'English, Common, Dog',
    description: 'Tall cool dog that dances',
    personality: 'Friendly',
    traits: 'Likes to be pet',
    flaws: 'Real stinky',
    contacts: 'Sir dog line',
    enemies: 'cats',
    image: 'henry.jpg',
  },

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

  characterStats: {
    stat: [11, 12, 13, 14, 15, 16],
    statMod: [2, 3, 4, 5, 6, 7],
    hp: 123,
    hpWounds: 100,
    hpDice: '3d12',
    dmgReduction: 'Blunt, Fire',
    speed: '30ft',
    init: 6,
    initDex: 3,
    initMisc: 3,
    ac: 17,
    acArmor: 2,
    acShield: 5,
    acDex: 0,
    acNatural: 0,
    acMisc: 0,
    acTouch: 10,
    acFlat: 17,
  },

  attackBonus: {
    attackTotal: [11, 12],
    attackBase: [3, 4],
    attackMod: [8, 9],
    attackMisc: [0, 0],
  },

  weightAmmount: {
    weight: [20, 40, 80, 80, 30],
  },

  savingThrows: {
    savingThrow: [6, 6, 6],
    savingThrowBase: [3, 3, 3],
    savingThrowMod: [3, 3, 3],
  },

  skills: [
    {
      skillName: 'Riding',
      skillModType: 'Dex',
      skillTotal: 6,
      skillAbilityMod: 3,
      skillRank: 3,
    },
    {
      skillName: 'Climbing',
      skillModType: 'Dex',
      skillTotal: 6,
      skillAbilityMod: 3,
      skillRank: 3,
    },
    {
      skillName: 'Sleeping',
      skillModType: 'Dex',
      skillTotal: 6,
      skillAbilityMod: 3,
      skillRank: 3,
    },
  ],

  spells: {
    spellsKnown: [5, 5, 5, 5, 5, 5, 5, 5, 5, 5],
    spellDC: [6, 6, 6, 6, 6, 6, 6, 6, 6, 6],
    spellsPerDay: [7, 7, 7, 7, 7, 7, 7, 7, 7, 7],
  },

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
      weaponAttackBonus: 1,
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
      weaponAttackBonus: 1,
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
      weaponAttackBonus: 1,
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
