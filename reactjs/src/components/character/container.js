import { connect } from 'react-redux';
import {
  fetchSheet,
  updateSheet,
  deleteSheet,
} from '../../store/sheets/actions';
import { fetchSkills, createSkill } from '../../store/skills/actions';
import { fetchFeats, createFeat } from '../../store/feats/actions';

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
  } = state;

  console.log(state);
  return {
    sheet,
    skills: allIds.map(id1 => byId[id1].data),
    feats: allIds1.map(id2 => byId1[id2].data),
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
};

export default connect(mapStateToProps, mapDispatchToProps);
