import { connect } from 'react-redux';
import { fetchSheets, createSheet } from '../../store/sheets/actions';

function mapStateToProps(state) {
  const {
    sheets: { byId, allIds },
  } = state;
  // turn the array of ids into an array of objects
  return { sheets: allIds.map(id => byId[id].data) };
}

// set the actions we need in this component
const mapDispatchToProps = { fetchSheets, createSheet };

export default connect(mapStateToProps, mapDispatchToProps);
