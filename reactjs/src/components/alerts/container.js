import { connect } from 'react-redux';
import { clearAlert } from '../../store/alerts/actions';

function mapStateToProps(state) {
  const { alerts } = state;
  return { alerts };
}

const mapDispatchToProps = { clearAlert };

export default connect(mapStateToProps, mapDispatchToProps);
