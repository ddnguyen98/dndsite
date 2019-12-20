import { connect } from 'react-redux';

import { fetchProjects } from '../../store/projects/actions';

const mapStateToProps = state => {
  return {};
};

const mapDispatchToProps = {
  fetchProjects,
};

export default connect(mapStateToProps, mapDispatchToProps);
