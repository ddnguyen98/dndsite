import { ADD_ALERT, REMOVE_ALERT } from '../actionTypes';

const initialState = [];

let id = 0;

const addAlert = (state, alert) => {
  if (!alert.text) return state;
  id += 1;
  return [...state, { id, text: alert.text, type: alert.type || 'warning' }];
};

const removeAlert = (state, alertId) => {
  return state.filter(alert => alert.id !== alertId);
};

export default function reducer(state = initialState, action) {
  if (action.type.includes('_ERROR')) {
    return addAlert(state, {
      text: action.err.response.data.message,
      type: 'danger',
    });
  }

  if (action.type.includes('REQ_LOGGEDIN_SUCCESS')) {
    return addAlert(state, {
      text: 'Signed in successfully',
      type: 'success',
    });
  }

  if (action.type.includes('REQ_REGISTER_SUCCESS')) {
    return addAlert(state, {
      text: 'Created account successfully',
      type: 'success',
    });
  }

  if (action.type.includes('REQ_SIGNOUT_SUCCESS')) {
    return addAlert(state, {
      text: 'Signed out successfully',
      type: 'success',
    });
  }

  if (action.type.includes('UPDATE_SHEETS_SUCCESS')) {
    return addAlert(state, {
      text: 'Character sheet updated sucessfully',
      type: 'success',
    });
  }

  if (action.type.includes('ADD') && action.type.includes('SUCCESS')) {
    return addAlert(state, {
      text: 'Added successfully',
      type: 'success',
    });
  }

  if (action.type === ADD_ALERT) {
    return addAlert(state, action.payload);
  }

  if (action.type === REMOVE_ALERT) {
    return removeAlert(state, action.payload);
  }

  return state;
}