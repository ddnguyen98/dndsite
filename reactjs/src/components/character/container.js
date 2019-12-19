import { connect } from 'react-redux';
import {
  fetchSheet,
  updateSheet,
  deleteSheet,
} from '../../store/sheets/actions';
import { fetchSkills, createSkill } from '../../store/skills/actions';
import { fetchFeats, createFeat } from '../../store/feats/actions';
import { fetchItems, createItem } from '../../store/items/actions';

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
  } = state;

  return {
    sheet,
    skills: allIds.map(id0 => byId[id0].data),
    feats: allIds1.map(id1 => byId1[id1].data),
    items: allIds2.map(id2 => byId2[id2].data),
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
};

export default connect(mapStateToProps, mapDispatchToProps);
