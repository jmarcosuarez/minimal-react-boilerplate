import * as types from '../actions/actionTypes';
import initialState from './initialState';

function setData(state, action) {
  const { friends } = action;
  return { ...state, ...friends };
}

export default function fetchData(state = initialState.data, action) {
  switch (action.type) {
    case types.FETCH_FRIENDS:
      return setData(state, action);
    default:
      return state;
  }
}
