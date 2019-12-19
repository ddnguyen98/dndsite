import { connect } from 'react-redux';
import {
  fetchSheet,
  updateSheet,
  deleteSheet,
} from '../../store/sheets/actions';
import { fetchSkills, createSkill } from '../../store/skills/actions';

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
  } = state;
  // turn the array of ids into an array of objects

  return { sheet, skills: allIds.map(id1 => byId[id1].data) };
}

// set the actions we need in this component
const mapDispatchToProps = {
  fetchSheet,
  updateSheet,
  deleteSheet,
  fetchSkills,
  createSkill,
};

export default connect(mapStateToProps, mapDispatchToProps);
