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
  constructor(props) {
    super(props);
    this.state = {
      inputs: {
        stat: [],
        statMod: [],
        attackTotal: [],
        attackBase: [],
        attackMod: [],
        attackMisc: [],
        spellsKnown: [],
        spellsPerDay: [],
        spellDC: [],
        savingThrow: [],
        savingThrowBase: [],
        savingThrowMod: [],
        weight: [],
      },
    };
  }

  componentDidMount() {
    const { fetchSkills, fetchFeats, fetchItems, fetchSpells, fetchWeapons } = this.props;
    this.loadData();
    fetchSkills();
    fetchFeats();
    fetchItems();
    fetchSpells();
    fetchWeapons();

  }

  handleInputChange = event => {
    const {
      target: { value, name },
    } = event;
    const { inputs } = this.state;

    switch (name) {
      case 'strength': {
        const array = inputs.stat;
        array[0] = value;
        this.setState({ inputs: { ...inputs, stat: array } });
        break;
      }
      case 'dexterity': {
        const array = inputs.stat;
        array[1] = value;
        this.setState({ inputs: { ...inputs, stat: array } });
        break;
      }
      case 'constitution': {
        const array = inputs.stat;
        array[2] = value;
        this.setState({ inputs: { ...inputs, stat: array } });
        break;
      }
      case 'intelligence': {
        const array = inputs.stat;
        array[3] = value;
        this.setState({ inputs: { ...inputs, stat: array } });
        break;
      }
      case 'wisdom': {
        const array = inputs.stat;
        array[4] = value;
        this.setState({ inputs: { ...inputs, stat: array } });
        break;
      }
      case 'charisma': {
        const array = inputs.stat;
        array[5] = value;
        this.setState({ inputs: { ...inputs, stat: array } });
        break;
      }
      case 'strengthMod': {
        const array = inputs.statMod;
        array[0] = value;
        this.setState({ inputs: { ...inputs, statMod: array } });
        break;
      }
      case 'dexterityMod': {
        const array = inputs.statMod;
        array[1] = value;
        this.setState({ inputs: { ...inputs, statMod: array } });
        break;
      }
      case 'constitutionMod': {
        const array = inputs.statMod;
        array[2] = value;
        this.setState({ inputs: { ...inputs, statMod: array } });
        break;
      }
      case 'intelligenceMod': {
        const array = inputs.statMod;
        array[3] = value;
        this.setState({ inputs: { ...inputs, statMod: array } });
        break;
      }
      case 'wisdomMod': {
        const array = inputs.statMod;
        array[4] = value;
        this.setState({ inputs: { ...inputs, statMod: array } });
        break;
      }
      case 'charismaMod': {
        const array = inputs.statMod;
        array[5] = value;
        this.setState({ inputs: { ...inputs, statMod: array } });
        break;
      }
      case 'fortitude': {
        const array = inputs.savingThrow;
        array[0] = value;
        this.setState({ inputs: { ...inputs, savingThrow: array } });
        break;
      }
      case 'fortitudeBase': {
        const array = inputs.savingThrowBase;
        array[0] = value;
        this.setState({ inputs: { ...inputs, savingThrowBase: array } });
        break;
      }
      case 'fortitudeMod': {
        const array = inputs.savingThrowMod;
        array[0] = value;
        this.setState({ inputs: { ...inputs, savingThrowMod: array } });
        break;
      }
      case 'reflex': {
        const array = inputs.savingThrow;
        array[1] = value;
        this.setState({ inputs: { ...inputs, savingThrow: array } });
        break;
      }
      case 'reflexBase': {
        const array = inputs.savingThrowBase;
        array[1] = value;
        this.setState({ inputs: { ...inputs, savingThrowBase: array } });
        break;
      }
      case 'reflexMod': {
        const array = inputs.savingThrowMod;
        array[1] = value;
        this.setState({ inputs: { ...inputs, savingThrowMod: array } });
        break;
      }
      case 'will': {
        const array = inputs.savingThrow;
        array[2] = value;
        this.setState({ inputs: { ...inputs, savingThrow: array } });
        break;
      }
      case 'willBase': {
        const array = inputs.savingThrowBase;
        array[2] = value;
        this.setState({ inputs: { ...inputs, savingThrowBase: array } });
        break;
      }
      case 'willMod': {
        const array = inputs.savingThrowMod;
        array[2] = value;
        this.setState({ inputs: { ...inputs, savingThrowMod: array } });
        break;
      }
      case 'attackTotalM': {
        const array = inputs.attackTotal;
        array[0] = value;
        this.setState({ inputs: { ...inputs, attackTotal: array } });
        break;
      }
      case 'attackBaseM': {
        const array = inputs.attackBase;
        array[0] = value;
        this.setState({ inputs: { ...inputs, attackBase: array } });
        break;
      }
      case 'attackModM': {
        const array = inputs.attackMod;
        array[0] = value;
        this.setState({ inputs: { ...inputs, attackMod: array } });
        break;
      }
      case 'attackMiscM': {
        const array = inputs.attackMisc;
        array[0] = value;
        this.setState({ inputs: { ...inputs, attackMisc: array } });
        break;
      }
      case 'attackTotalR': {
        const array = inputs.attackTotal;
        array[1] = value;
        this.setState({ inputs: { ...inputs, attackTotal: array } });
        break;
      }
      case 'attackBaseR': {
        const array = inputs.attackBase;
        array[1] = value;
        this.setState({ inputs: { ...inputs, attackBase: array } });
        break;
      }
      case 'attackModR': {
        const array = inputs.attackMod;
        array[1] = value;
        this.setState({ inputs: { ...inputs, attackMod: array } });
        break;
      }
      case 'attackMiscR': {
        const array = inputs.attackMisc;
        array[1] = value;
        this.setState({ inputs: { ...inputs, attackMisc: array } });
        break;
      }
      case 'weightLight': {
        const array = inputs.weight;
        array[0] = value;
        this.setState({ inputs: { ...inputs, weight: array } });
        break;
      }
      case 'weightMedium': {
        const array = inputs.weight;
        array[1] = value;
        this.setState({ inputs: { ...inputs, weight: array } });
        break;
      }
      case 'weightHeavy': {
        const array = inputs.weight;
        array[2] = value;
        this.setState({ inputs: { ...inputs, weight: array } });
        break;
      }
      case 'weightPull': {
        const array = inputs.weight;
        array[3] = value;
        this.setState({ inputs: { ...inputs, weight: array } });
        break;
      }
      case 'weightTotal': {
        const array = inputs.weight;
        array[4] = value;
        this.setState({ inputs: { ...inputs, weight: array } });
        break;
      }
      case 'spellsKnown0': {
        const array = inputs.spellsKnown;
        array[0] = value;
        this.setState({ inputs: { ...inputs, spellsKnown: array } });
        break;
      }
      case 'spellDC0': {
        const array = inputs.spellDC;
        array[0] = value;
        this.setState({ inputs: { ...inputs, spellDC: array } });
        break;
      }
      case 'spellsPerDay0': {
        const array = inputs.spellsPerDay;
        array[0] = value;
        this.setState({ inputs: { ...inputs, spellsPerDay: array } });
        break;
      }
      case 'spellsKnown1': {
        const array = inputs.spellsKnown;
        array[1] = value;
        this.setState({ inputs: { ...inputs, spellsKnown: array } });
        break;
      }
      case 'spellDC1': {
        const array = inputs.spellDC;
        array[1] = value;
        this.setState({ inputs: { ...inputs, spellDC: array } });
        break;
      }
      case 'spellsPerDay1': {
        const array = inputs.spellsPerDay;
        array[1] = value;
        this.setState({ inputs: { ...inputs, spellsPerDay: array } });
        break;
      }
      case 'spellsKnown2': {
        const array = inputs.spellsKnown;
        array[2] = value;
        this.setState({ inputs: { ...inputs, spellsKnown: array } });
        break;
      }
      case 'spellDC2': {
        const array = inputs.spellDC;
        array[2] = value;
        this.setState({ inputs: { ...inputs, spellDC: array } });
        break;
      }
      case 'spellsPerDay2': {
        const array = inputs.spellsPerDay;
        array[2] = value;
        this.setState({ inputs: { ...inputs, spellsPerDay: array } });
        break;
      }
      case 'spellsKnown3': {
        const array = inputs.spellsKnown;
        array[3] = value;
        this.setState({ inputs: { ...inputs, spellsKnown: array } });
        break;
      }
      case 'spellDC3': {
        const array = inputs.spellDC;
        array[3] = value;
        this.setState({ inputs: { ...inputs, spellDC: array } });
        break;
      }
      case 'spellsPerDay3': {
        const array = inputs.spellsPerDay;
        array[3] = value;
        this.setState({ inputs: { ...inputs, spellsPerDay: array } });
        break;
      }
      case 'spellsKnown4': {
        const array = inputs.spellsKnown;
        array[4] = value;
        this.setState({ inputs: { ...inputs, spellsKnown: array } });
        break;
      }
      case 'spellDC4': {
        const array = inputs.spellDC;
        array[4] = value;
        this.setState({ inputs: { ...inputs, spellDC: array } });
        break;
      }
      case 'spellsPerDay4': {
        const array = inputs.spellsPerDay;
        array[4] = value;
        this.setState({ inputs: { ...inputs, spellsPerDay: array } });
        break;
      }
      case 'spellsKnown5': {
        const array = inputs.spellsKnown;
        array[5] = value;
        this.setState({ inputs: { ...inputs, spellsKnown: array } });
        break;
      }
      case 'spellDC5': {
        const array = inputs.spellDC;
        array[5] = value;
        this.setState({ inputs: { ...inputs, spellDC: array } });
        break;
      }
      case 'spellsPerDay5': {
        const array = inputs.spellsPerDay;
        array[5] = value;
        this.setState({ inputs: { ...inputs, spellsPerDay: array } });
        break;
      }
      case 'spellsKnown6': {
        const array = inputs.spellsKnown;
        array[6] = value;
        this.setState({ inputs: { ...inputs, spellsKnown: array } });
        break;
      }
      case 'spellDC6': {
        const array = inputs.spellDC;
        array[6] = value;
        this.setState({ inputs: { ...inputs, spellDC: array } });
        break;
      }
      case 'spellsPerDay6': {
        const array = inputs.spellsPerDay;
        array[6] = value;
        this.setState({ inputs: { ...inputs, spellsPerDay: array } });
        break;
      }
      case 'spellsKnown7': {
        const array = inputs.spellsKnown;
        array[7] = value;
        this.setState({ inputs: { ...inputs, spellsKnown: array } });
        break;
      }
      case 'spellDC7': {
        const array = inputs.spellDC;
        array[7] = value;
        this.setState({ inputs: { ...inputs, spellDC: array } });
        break;
      }
      case 'spellsPerDay7': {
        const array = inputs.spellsPerDay;
        array[7] = value;
        this.setState({ inputs: { ...inputs, spellsPerDay: array } });
        break;
      }
      case 'spellsKnown8': {
        const array = inputs.spellsKnown;
        array[8] = value;
        this.setState({ inputs: { ...inputs, spellsKnown: array } });
        break;
      }
      case 'spellDC8': {
        const array = inputs.spellDC;
        array[8] = value;
        this.setState({ inputs: { ...inputs, spellDC: array } });
        break;
      }
      case 'spellsPerDay8': {
        const array = inputs.spellsPerDay;
        array[8] = value;
        this.setState({ inputs: { ...inputs, spellsPerDay: array } });
        break;
      }
      case 'spellsKnown9': {
        const array = inputs.spellsKnown;
        array[9] = value;
        this.setState({ inputs: { ...inputs, spellsKnown: array } });
        break;
      }
      case 'spellDC9': {
        const array = inputs.spellDC;
        array[9] = value;
        this.setState({ inputs: { ...inputs, spellDC: array } });
        break;
      }
      case 'spellsPerDay9': {
        const array = inputs.spellsPerDay;
        array[9] = value;
        this.setState({ inputs: { ...inputs, spellsPerDay: array } });
        break;
      }
      default: {
        this.setState({ inputs: { ...inputs, [name]: value } });
      }
    }
  };

  loadData = async () => {
    const {
      match: {
        params: { id },
      },
      fetchSheet,
    } = this.props;
    if (!id) return;
    await fetchSheet(id);
    const { sheet } = this.props;
    this.setState({ inputs: { ...sheet } });
  };

  save = event => {
    // make sure the form doesn't submit with the browser
    event.preventDefault();
    const { updateSheet, match: { params: { id } }  } = this.props;
    const { inputs } = this.state;
    updateSheet({ id, inputs });
  };

  addSkill = event => {
    event.preventDefault();
    const { createSkill } = this.props;
    createSkill();
  };

  addFeat = event => {
    event.preventDefault();
    const { createFeat } = this.props;
    createFeat();
  };

  addItem = event => {
    event.preventDefault();
    const { createItem } = this.props;
    createItem();
  };

  addSpell = event => {
    event.preventDefault();
    const { createSpell } = this.props;
    createSpell();
  };

  addWeapon = event => {
    event.preventDefault();
    const { createWeapon } = this.props;
    createWeapon();
  };

  render() {
    const { skills, feats, items, spells, weapons } = this.props;

    const { inputs } = this.state;

    return (
      <div>
        <Container className={styles.form}>
          <Form>
            {/* Header for saving */}
            <div className={styles.heading}>
              <Button type="submit">Save</Button>
            </div>
            <Row>
              {/* Character Image + Basic User Details */}
              <Col xs="3" className={styles.inputBasic}>
                <img
                  src={`../${inputs.image}`}
                  alt="character"
                  width="100%"
                  height="250"
                />
                <FormGroup>
                  <Input
                    name="name"
                    id="name"
                    value={inputs.name}
                    onChange={this.handleInputChange}
                  />
                  <Label for="name">Name</Label>
                </FormGroup>
                <FormGroup>
                  <Input
                    name="level"
                    id="level"
                    onChange={this.handleInputChange}
                    value={inputs.level}
                  />
                  <Label for="input">Level</Label>
                </FormGroup>
                <FormGroup>
                  <Input
                    name="class"
                    id="class"
                    onChange={this.handleInputChange}
                    value={inputs.class}
                  />
                  <Label for="class">Class</Label>
                </FormGroup>
                <FormGroup>
                  <Input
                    name="race"
                    id="race"
                    onChange={this.handleInputChange}
                    value={inputs.race}
                  />
                  <Label for="race">Race</Label>
                </FormGroup>
                <FormGroup>
                  <Input
                    name="alignment"
                    id="alignment"
                    value={inputs.alignment}
                    onChange={this.handleInputChange}
                  />
                  <Label for="alignment">Alignment</Label>
                </FormGroup>
                <FormGroup>
                  <Input
                    name="size"
                    id="size"
                    value={inputs.size}
                    onChange={this.handleInputChange}
                  />
                  <Label for="size">Size</Label>
                </FormGroup>
                <FormGroup>
                  <Input
                    name="campaign"
                    id="campaign"
                    value={inputs.campaign}
                    onChange={this.handleInputChange}
                  />
                  <Label for="campaign">Campaign</Label>
                </FormGroup>
                <FormGroup>
                  <Input
                    name="player"
                    id="player"
                    value={inputs.player}
                    onChange={this.handleInputChange}
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
                        value={inputs.stat[0]}
                        onChange={this.handleInputChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        name="strengthMod"
                        id="strengthMod"
                        value={inputs.statMod[0]}
                        onChange={this.handleInputChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="dexterity">Dexterity</Label>
                      <Input
                        name="dexterity"
                        id="dexterity"
                        value={inputs.stat[1]}
                        onChange={this.handleInputChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        name="dexterityMod"
                        id="dexterityMod"
                        value={inputs.statMod[1]}
                        onChange={this.handleInputChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="constitution">Constitution</Label>
                      <Input
                        name="constitution"
                        id="constitution"
                        value={inputs.stat[2]}
                        onChange={this.handleInputChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        name="constitutionMod"
                        id="constitutionMod"
                        value={inputs.statMod[2]}
                        onChange={this.handleInputChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="intelligence">Intelligence</Label>
                      <Input
                        name="intelligence"
                        id="intelligence"
                        value={inputs.stat[3]}
                        onChange={this.handleInputChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        name="intelligenceMod"
                        id="intelligenceMod"
                        value={inputs.statMod[3]}
                        onChange={this.handleInputChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="wisdom">Wisdom</Label>
                      <Input name="wisdom" id="wisdom" value={inputs.stat[4]} />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        name="wisdomMod"
                        id="wisdomMod"
                        value={inputs.statMod[4]}
                        onChange={this.handleInputChange}
                      />
                    </FormGroup>
                  </Col>
                  <Col>
                    <FormGroup>
                      <Label for="charisma">Charisma</Label>
                      <Input
                        name="charisma"
                        id="charisma"
                        value={inputs.stat[5]}
                        onChange={this.handleInputChange}
                      />
                    </FormGroup>
                    <FormGroup>
                      <Input
                        name="charismaMod"
                        id="charismaMod"
                        value={inputs.statMod[5]}
                        onChange={this.handleInputChange}
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
                            value={inputs.hpWounds}
                            onChange={this.handleInputChange}
                          />
                        </FormGroup>
                        /
                        <FormGroup>
                          <Label for="hp">Max</Label>
                          <Input name="hp" id="hp" value={inputs.hp} />
                        </FormGroup>
                        <FormGroup>
                          <Label for="hpDice">Hie Dice</Label>
                          <Input
                            name="hpDice"
                            id="hpDice"
                            value={inputs.hpDice}
                            onChange={this.handleInputChange}
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
                            value={inputs.dmgReduction}
                            onChange={this.handleInputChange}
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
                            value={inputs.speed}
                            onChange={this.handleInputChange}
                          />
                        </FormGroup>
                        <div>
                          <FormGroup>
                            <Label for="init">Inititive</Label>
                            <Input
                              name="init"
                              id="init"
                              value={inputs.init}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="initDex">Base</Label>
                            <Input
                              name="initDex"
                              id="initDex"
                              value={inputs.initDex}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="initMisc">Misc</Label>
                            <Input
                              name="initMisc"
                              id="initMisc"
                              value={inputs.initMisc}
                              onChange={this.handleInputChange}
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
                              value={inputs.acTouch}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="armor">Total</Label>
                            <Input
                              name="armor"
                              id="armor"
                              value={inputs.ac}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="acFlat">Flat</Label>
                            <Input
                              name="acFlat"
                              id="acFlat"
                              value={inputs.acFlat}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                          <div>
                            <h3>Base: 10</h3>
                            <FormGroup>
                              <Label for="acArmor">Armor</Label>
                              <Input
                                name="acArmor"
                                id="acArmor"
                                value={inputs.acArmor}
                                onChange={this.handleInputChange}
                              />
                            </FormGroup>
                            <FormGroup>
                              <Label for="acShield">Shield</Label>
                              <Input
                                name="acShield"
                                id="acShield"
                                value={inputs.acShield}
                                onChange={this.handleInputChange}
                              />
                            </FormGroup>
                            <FormGroup>
                              <Label for="acDex">Dex</Label>
                              <Input
                                name="acDex"
                                id="acDex"
                                value={inputs.acDex}
                                onChange={this.handleInputChange}
                              />
                            </FormGroup>
                            <FormGroup>
                              <Label for="acNatural">Natural</Label>
                              <Input
                                name="acNatural"
                                id="acNatural"
                                value={inputs.acNatural}
                                onChange={this.handleInputChange}
                              />
                            </FormGroup>
                            <FormGroup>
                              <Label for="acMisc">Misc</Label>
                              <Input
                                name="acMisc"
                                id="acMisc"
                                value={inputs.acMisc}
                                onChange={this.handleInputChange}
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
                              value={inputs.savingThrow[0]}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                          <div>
                            <FormGroup>
                              <Label for="fortitudeBase">Base</Label>
                              <Input
                                name="fortitudeBase"
                                id="fortitudeBase"
                                value={inputs.savingThrowBase[0]}
                                onChange={this.handleInputChange}
                              />
                            </FormGroup>
                            <FormGroup>
                              <Label for="fortitudeMod">Mod</Label>
                              <Input
                                name="fortitudeMod"
                                id="fortitudeMod"
                                value={inputs.savingThrowMod[0]}
                                onChange={this.handleInputChange}
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
                              value={inputs.savingThrow[1]}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                          <div>
                            <FormGroup>
                              <Label for="reflexBase">Base</Label>
                              <Input
                                name="reflexBase"
                                id="reflexBase"
                                value={inputs.savingThrowBase[1]}
                                onChange={this.handleInputChange}
                              />
                            </FormGroup>
                            <FormGroup>
                              <Label for="reflexMod">Mod</Label>
                              <Input
                                name="reflexMod"
                                id="reflexMod"
                                value={inputs.savingThrowMod[1]}
                                onChange={this.handleInputChange}
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
                              value={inputs.savingThrow[2]}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                          <div>
                            <FormGroup>
                              <Label for="willBase">Base</Label>
                              <Input
                                name="willBase"
                                id="willBase"
                                value={inputs.savingThrowBase[2]}
                                onChange={this.handleInputChange}
                              />
                            </FormGroup>
                            <FormGroup>
                              <Label for="willMod">Mod</Label>
                              <Input
                                name="willMod"
                                id="willMod"
                                value={inputs.savingThrowMod[2]}
                                onChange={this.handleInputChange}
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
                                value={inputs.attackTotal[0]}
                                onChange={this.handleInputChange}
                              />
                            </FormGroup>
                            <div>
                              <FormGroup>
                                <Label for="attackBaseM">Base</Label>
                                <Input
                                  name="attackBaseM"
                                  id="attackBaseM"
                                  value={inputs.attackBase[0]}
                                  onChange={this.handleInputChange}
                                />
                              </FormGroup>
                              <FormGroup>
                                <Label for="attackModM">Mod</Label>
                                <Input
                                  name="attackModM"
                                  id="attackModM"
                                  value={inputs.attackMod[0]}
                                  onChange={this.handleInputChange}
                                />
                              </FormGroup>
                              <FormGroup>
                                <Label for="attackMiscM">Misc</Label>
                                <Input
                                  name="attackMiscM"
                                  id="attackMiscM"
                                  value={inputs.attackMisc[0]}
                                  onChange={this.handleInputChange}
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
                                value={inputs.attackTotal[1]}
                                onChange={this.handleInputChange}
                              />
                            </FormGroup>
                            <div>
                              <FormGroup>
                                <Label for="attackBaseR">Base</Label>
                                <Input
                                  name="attackBaseR"
                                  id="attackBaseR"
                                  value={inputs.attackBase[1]}
                                  onChange={this.handleInputChange}
                                />
                              </FormGroup>
                              <FormGroup>
                                <Label for="attackBaseR">Mod</Label>
                                <Input
                                  name="attackModR"
                                  id="attackModR"
                                  value={inputs.attackMod[1]}
                                  onChange={this.handleInputChange}
                                />
                              </FormGroup>
                              <FormGroup>
                                <Label for="attackBaseR">Misc</Label>
                                <Input
                                  name="attackMiscR"
                                  id="attackMiscR"
                                  value={inputs.attackMisc[1]}
                                  onChange={this.handleInputChange}
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
                              value={inputs.weight[0]}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="weightMedium">Medium</Label>
                            <Input
                              name="weightMedium"
                              id="weightMedium"
                              value={inputs.weight[1]}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="weightHeavy">Heavy</Label>
                            <Input
                              name="weightHeavy"
                              id="weightHeavy"
                              value={inputs.weight[2]}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="weightPull">Pull</Label>
                            <Input
                              name="weightPull"
                              id="weightPull"
                              value={inputs.weight[3]}
                              onChange={this.handleInputChange}
                            />
                          </FormGroup>
                          <FormGroup>
                            <Label for="weightTotal">Total</Label>
                            <Input
                              name="weightTotal"
                              id="weightTotal"
                              value={inputs.weight[4]}
                              onChange={this.handleInputChange}
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
                    <Button onClick={this.addSkill}>Add</Button>
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
                          <tr id={skill.id}>
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
                                  value={inputs.height}
                                  onChange={this.handleInputChange}
                                />
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <Label for="age">Age</Label>
                                <Input
                                  name="age"
                                  id="age"
                                  value={inputs.age}
                                  onChange={this.handleInputChange}
                                />
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <Label for="eyes">Eyes</Label>
                                <Input
                                  name="eyes"
                                  id="eyes"
                                  value={inputs.eyes}
                                  onChange={this.handleInputChange}
                                />
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <Label for="hair">Hair</Label>
                                <Input
                                  name="hair"
                                  id="hair"
                                  value={inputs.hair}
                                  onChange={this.handleInputChange}
                                />
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <Label for="characterWeight">Weight</Label>
                                <Input
                                  name="characterWeight"
                                  id="characterWeight"
                                  value={inputs.characterWeight}
                                  onChange={this.handleInputChange}
                                />
                              </FormGroup>
                            </Col>
                            <Col>
                              <FormGroup>
                                <Label for="diety">Diety</Label>
                                <Input
                                  name="diety"
                                  id="diety"
                                  value={inputs.diety}
                                  onChange={this.handleInputChange}
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
                                value={inputs.notes}
                                onChange={this.handleInputChange}
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
                                value={inputs.currency}
                                onChange={this.handleInputChange}
                              />
                            </Col>
                            <Col>
                              <Label for="languages">Languages</Label>
                              <Input
                                type="textarea"
                                name="languages"
                                id="languages"
                                value={inputs.languages}
                                onChange={this.handleInputChange}
                              />
                            </Col>
                            <Col>
                              <Label for="description">Description</Label>
                              <Input
                                type="textarea"
                                name="description"
                                id="description"
                                value={inputs.description}
                                onChange={this.handleInputChange}
                              />
                            </Col>
                            <Col>
                              <Label for="personality">Personality</Label>
                              <Input
                                type="textarea"
                                name="personality"
                                id="personality"
                                value={inputs.personality}
                                onChange={this.handleInputChange}
                              />
                            </Col>
                            <Col>
                              <Label for="traits">Traits</Label>
                              <Input
                                type="textarea"
                                name="traits"
                                id="traits"
                                value={inputs.traits}
                                onChange={this.handleInputChange}
                              />
                            </Col>
                            <Col>
                              <Label for="flaws">Flaws</Label>
                              <Input
                                type="textarea"
                                name="flaws"
                                id="flaws"
                                value={inputs.flaws}
                                onChange={this.handleInputChange}
                              />
                            </Col>
                            <Col>
                              <Label for="contacts">Contacts</Label>
                              <Input
                                type="textarea"
                                name="contacts"
                                id="contacts"
                                value={inputs.contacts}
                                onChange={this.handleInputChange}
                              />
                            </Col>
                            <Col>
                              <Label for="enemies">Enemies</Label>
                              <Input
                                type="textarea"
                                name="enemies"
                                id="enemies"
                                value={inputs.enemies}
                                onChange={this.handleInputChange}
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
                        <Button onClick={this.addFeat}>Add</Button>
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
                      <Button onClick={this.addItem}>Add</Button>
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
                            <tr id={item.id}>
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
                        <Button onClick={this.addSpell}>Add</Button>
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
                                    value={inputs.spellsKnown[0]}
                                    onChange={this.handleInputChange}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsKnown1">1st</Label>
                                  <Input
                                    name="spellsKnown1"
                                    id="spellsKnown1"
                                    value={inputs.spellsKnown[1]}
                                    onChange={this.handleInputChange}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsKnown2">2nd</Label>
                                  <Input
                                    name="spellsKnown2"
                                    id="spellsKnown2"
                                    value={inputs.spellsKnown[2]}
                                    onChange={this.handleInputChange}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsKnown3">3rd</Label>
                                  <Input
                                    name="spellsKnown3"
                                    id="spellsKnown3"
                                    value={inputs.spellsKnown[3]}
                                    onChange={this.handleInputChange}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsKnown4">4th</Label>
                                  <Input
                                    name="spellsKnown4"
                                    id="spellsKnown4"
                                    value={inputs.spellsKnown[4]}
                                    onChange={this.handleInputChange}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsKnown5">5th</Label>
                                  <Input
                                    name="spellsKnown5"
                                    id="spellsKnown5"
                                    value={inputs.spellsKnown[5]}
                                    onChange={this.handleInputChange}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsKnown6">6th</Label>
                                  <Input
                                    name="spellsKnown6"
                                    id="spellsKnown6"
                                    value={inputs.spellsKnown[6]}
                                    onChange={this.handleInputChange}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsKnown7">7th</Label>
                                  <Input
                                    name="spellsKnown7"
                                    id="spellsKnown7"
                                    value={inputs.spellsKnown[7]}
                                    onChange={this.handleInputChange}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsKnown8">8th</Label>
                                  <Input
                                    name="spellsKnown8"
                                    id="spellsKnown8"
                                    value={inputs.spellsKnown[8]}
                                    onChange={this.handleInputChange}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsKnown9">9th</Label>
                                  <Input
                                    name="spellsKnown9"
                                    id="spellsKnown9"
                                    value={inputs.spellsKnown[9]}
                                    onChange={this.handleInputChange}
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
                                    value={inputs.spellDC[0]}
                                    onChange={this.handleInputChange}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellDC1">1st</Label>
                                  <Input
                                    name="spellDC1"
                                    id="spellDC1"
                                    value={inputs.spellDC[1]}
                                    onChange={this.handleInputChange}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellDC2">2nd</Label>
                                  <Input
                                    name="spellDC2"
                                    id="spellDC2"
                                    value={inputs.spellDC[2]}
                                    onChange={this.handleInputChange}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellDC3">3rd</Label>
                                  <Input
                                    name="spellDC3"
                                    id="spellDC3"
                                    value={inputs.spellDC[3]}
                                    onChange={this.handleInputChange}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellDC4">4th</Label>
                                  <Input
                                    name="spellDC4"
                                    id="spellDC4"
                                    value={inputs.spellDC[4]}
                                    onChange={this.handleInputChange}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellDC5">5th</Label>
                                  <Input
                                    name="spellDC5"
                                    id="spellDC5"
                                    value={inputs.spellDC[5]}
                                    onChange={this.handleInputChange}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellDC6">6th</Label>
                                  <Input
                                    name="spellDC6"
                                    id="spellDC6"
                                    value={inputs.spellDC[6]}
                                    onChange={this.handleInputChange}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellDC7">7th</Label>
                                  <Input
                                    name="spellDC7"
                                    id="spellDC7"
                                    value={inputs.spellDC[7]}
                                    onChange={this.handleInputChange}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellDC8">8th</Label>
                                  <Input
                                    name="spellDC8"
                                    id="spellDC8"
                                    value={inputs.spellDC[8]}
                                    onChange={this.handleInputChange}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellDC9">9th</Label>
                                  <Input
                                    name="spellDC9"
                                    id="spellDC9"
                                    value={inputs.spellDC[9]}
                                    onChange={this.handleInputChange}
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
                                    value={inputs.spellsPerDay[0]}
                                    onChange={this.handleInputChange}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsPerDay1">1st</Label>
                                  <Input
                                    name="spellsPerDay1"
                                    id="spellsPerDay1"
                                    value={inputs.spellsPerDay[1]}
                                    onChange={this.handleInputChange}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsPerDay2">2nd</Label>
                                  <Input
                                    name="spellsPerDay2"
                                    id="spellsPerDay2"
                                    value={inputs.spellsPerDay[2]}
                                    onChange={this.handleInputChange}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsPerDay3">3rd</Label>
                                  <Input
                                    name="spellsPerDay3"
                                    id="spellsPerDay3"
                                    value={inputs.spellsPerDay[3]}
                                    onChange={this.handleInputChange}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsPerDay4">4th</Label>
                                  <Input
                                    name="spellsPerDay4"
                                    id="spellsPerDay4"
                                    value={inputs.spellsPerDay[4]}
                                    onChange={this.handleInputChange}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsPerDay5">5th</Label>
                                  <Input
                                    name="spellsPerDay5"
                                    id="spellsPerDay5"
                                    value={inputs.spellsPerDay[5]}
                                    onChange={this.handleInputChange}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsPerDay6">6th</Label>
                                  <Input
                                    name="spellsPerDay6"
                                    id="spellsPerDay6"
                                    value={inputs.spellsPerDay[6]}
                                    onChange={this.handleInputChange}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsPerDay7">7th</Label>
                                  <Input
                                    name="spellsPerDay7"
                                    id="spellsPerDay7"
                                    value={inputs.spellsPerDay[7]}
                                    onChange={this.handleInputChange}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsPerDay8">8th</Label>
                                  <Input
                                    name="spellsPerDay8"
                                    id="spellsPerDay8"
                                    value={inputs.spellsPerDay[8]}
                                    onChange={this.handleInputChange}
                                  />
                                </FormGroup>
                              </Col>
                              <Col>
                                <FormGroup>
                                  <Label for="spellsPerDay9">9th</Label>
                                  <Input
                                    name="spellsPerDay9"
                                    id="spellsPerDay9"
                                    value={inputs.spellsPerDay[9]}
                                    onChange={this.handleInputChange}
                                  />
                                </FormGroup>
                              </Col>
                            </Row>
                          </div>
                        </Col>
                        <Col>
                          <Row xs="3">
                            {spells.map(spell => (
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
                        <Button onClick={this.addWeapon}>Add</Button>
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
                                  <Label for="weaponAttackBonus">Attack Bonus</Label>
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
  updateSheet: PropTypes.func.isRequired,
  fetchSkills: PropTypes.func.isRequired,
  createSkill: PropTypes.func.isRequired,
  fetchFeats: PropTypes.func.isRequired,
  createFeat: PropTypes.func.isRequired,
  fetchItems: PropTypes.func.isRequired,
  createItem: PropTypes.func.isRequired,
  fetchSpells: PropTypes.func.isRequired,
  createSpell: PropTypes.func.isRequired,
  fetchWeapons: PropTypes.func.isRequired,
  createWeapon: PropTypes.func.isRequired,
};

Character.defaultProps = {
  sheet: {},

  skills: [],

  feats: [
  ],

  items: [
  ],

  spells: [
  ],
  weapons: [
  ],
};

export default container(Character);
