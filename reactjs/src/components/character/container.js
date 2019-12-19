import { connect } from 'react-redux';
import {
  fetchSheet,
  updateSheet,
  deleteSheet,
} from '../../store/sheets/actions';

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

  return { sheet };
}

// set the actions we need in this component
const mapDispatchToProps = { fetchSheet, updateSheet, deleteSheet };

export default connect(mapStateToProps, mapDispatchToProps);
