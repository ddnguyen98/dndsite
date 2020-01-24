import React, { Component } from 'react';
import { Alert } from 'reactstrap';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import container from './container';

class AlertItem extends Component {
  constructor(props) {
    super(props);
    this.timeout = setTimeout(this.clear, 7000);
  }

  clear = () => {
    if (this.timeout) clearTimeout(this.timeout);
    const { clearAlert, alert } = this.props;
    clearAlert(alert.id);
  };

  render() {
    const { alert } = this.props;
    return (
      <Alert color={alert.type} toggle={this.clear} className={styles.alert}>
        {alert.text}
      </Alert>
    );
  }
}

AlertItem.propTypes = {
  alert: PropTypes.shape({
    type: PropTypes.string,
    id: PropTypes.number,
    text: PropTypes.string,
  }),
  clearAlert: PropTypes.func.isRequired,
};

AlertItem.defaultProps = {
  alert: {},
};

const Alerts = ({ alerts, clearAlert }) => {
  return (
    <div className={styles.alerts}>
      {alerts.map(alert => {
        return (
          <AlertItem alert={alert} key={alert.id} clearAlert={clearAlert} />
        );
      })}
    </div>
  );
};

Alerts.propTypes = {
  alerts: PropTypes.arrayOf(PropTypes.object),
  clearAlert: PropTypes.func.isRequired,
};

Alerts.defaultProps = {
  alerts: [],
};

export default container(Alerts);
