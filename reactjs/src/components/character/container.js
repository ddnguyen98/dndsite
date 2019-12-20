import { connect } from 'react-redux';
import {
  fetchSheet,
  updateSheet,
  deleteSheet,
} from '../../store/sheets/actions';
import { fetchSkills, createSkill } from '../../store/skills/actions';
import { fetchFeats, createFeat } from '../../store/feats/actions';
import { fetchItems, createItem } from '../../store/items/actions';
import { fetchSpells, createSpell } from '../../store/spells/actions';
import { fetchWeapons, createWeapon } from '../../store/weapons/actions';

function mapStateToProps(state, props) {
  const {
    match: {
      params: { id },
    },
  } = props;

  const {
    sheets: {
      byId: {
        [id]: { data: sheet },
      },
    },
  } = state;

  const {
    skills: { byId, allIds },
    feats: { byId: byId1, allIds: allIds1 },
    items: { byId: byId2, allIds: allIds2 },
    spells: { byId: byId3, allIds: allIds3 },
    weapons: { byId: byId4, allIds: allIds4 },
  } = state;

  return {
    sheet,
    skills: allIds.map(id0 => byId[id0].data),
    feats: allIds1.map(id1 => byId1[id1].data),
    items: allIds2.map(id2 => byId2[id2].data),
    spells: allIds3.map(id3 => byId3[id3].data),
    weapons: allIds4.map(id4 => byId4[id4].data),
  };
}

// set the actions we need in this component
const mapDispatchToProps = {
  fetchSheet,
  updateSheet,
  deleteSheet,
  fetchSkills,
  createSkill,
  fetchFeats,
  createFeat,
  fetchItems,
  createItem,
  fetchSpells,
  createSpell,
  fetchWeapons,
  createWeapon,
};

export default connect(mapStateToProps, mapDispatchToProps);
