import { connect } from 'react-redux';
import {
  fetchSheets,
  createSheet,
  deleteSheet,
} from '../../store/sheets/actions';

function mapStateToProps(state) {
  const {
    sheets: { byId, allIds, isLoading },
  } = state;
  const {
    auth: { loggedIn },
  } = state;
  // turn the array of ids into an array of objects
  return { sheets: allIds.map(id => byId[id].data), isLoading, loggedIn };
}

// set the actions we need in this component
const mapDispatchToProps = { fetchSheets, createSheet, deleteSheet };

export default connect(mapStateToProps, mapDispatchToProps);
