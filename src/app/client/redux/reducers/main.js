import * as types from '../actions/actionTypes';
import initialState from './initialState';

function friendsGetAll(state) {
  return { ...state, isFetching: true, error: null, friends: [] };
}
function friendsGetAllSuccess(state, action) {
  const { friends } = action.friends;
  return { ...state, isFetching: false, error: null, ...friends };
}

function friendsGetAllError(state, action) {
  const { error } = action;
  return { ...state, isFetching: false, error: error.message };
}

export default function fetchData(state = initialState.data, action) {
  switch (action.type) {
    case types.FRIENDS_GET_ALL:
      return friendsGetAll(state);
    case types.FRIENDS_GET_ALL_SUCCESS:
      return friendsGetAllSuccess(state, action);
    case types.FRIENDS_GET_ALL_ERROR:
      return friendsGetAllError(state, action);
    default:
      return state;
  }
}
