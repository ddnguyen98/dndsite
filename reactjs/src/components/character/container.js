import { connect } from 'react-redux';
import {
  fetchSheet,
  updateSheet,
  deleteSheet,
} from '../../store/sheets/actions';
import {
  fetchSkills,
  updateSkill,
  createSkill,
  deleteSkill,
} from '../../store/skills/actions';
import {
  fetchFeats,
  createFeat,
  deleteFeat,
  updateFeat,
} from '../../store/feats/actions';
import {
  fetchItems,
  createItem,
  deleteItem,
  updateItem,
} from '../../store/items/actions';
import {
  fetchSpells,
  createSpell,
  deleteSpell,
  updateSpell,
} from '../../store/spells/actions';
import {
  fetchWeapons,
  createWeapon,
  deleteWeapon,
  updateWeapon,
} from '../../store/weapons/actions';

function mapStateToProps(state, props) {
  const {
    match: {
      params: { id },
    },
  } = props;
  const {
    sheets: {
      byId: { [id]: sheet },
      isLoading: isLoading1,
    },
  } = state;

  const {
    skills: { byId, allIds, isLoading: isLoading2 },
    feats: { byId: byId1, allIds: allIds1, isLoading: isLoading3 },
    items: { byId: byId2, allIds: allIds2, isLoading: isLoading4 },
    spells: { byId: byId3, allIds: allIds3, isLoading: isLoading5 },
    weapons: { byId: byId4, allIds: allIds4, isLoading: isLoading6 },
  } = state;

  return {
    sheet,
    skills: allIds.map(id0 => byId[id0].data),
    feats: allIds1.map(id1 => byId1[id1].data),
    items: allIds2.map(id2 => byId2[id2].data),
    spells: allIds3.map(id3 => byId3[id3].data),
    weapons: allIds4.map(id4 => byId4[id4].data),
    isLoading: {
      loading: [
        isLoading1,
        isLoading2,
        isLoading3,
        isLoading4,
        isLoading5,
        isLoading6,
      ],
    },
  };
}

// set the actions we need in this component
const mapDispatchToProps = {
  fetchSheet,
  updateSheet,
  deleteSheet,
  fetchSkills,
  createSkill,
  updateSkill,
  deleteSkill,
  fetchFeats,
  createFeat,
  deleteFeat,
  updateFeat,
  fetchItems,
  createItem,
  deleteItem,
  updateItem,
  fetchSpells,
  createSpell,
  deleteSpell,
  updateSpell,
  fetchWeapons,
  createWeapon,
  deleteWeapon,
  updateWeapon,
};

export default connect(mapStateToProps, mapDispatchToProps);
