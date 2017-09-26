import fetch from 'isomorphic-fetch';
import * as actionTypes from '../actions/actionTypes';

export function setfriends(friends) {
  return {
    type: actionTypes.FETCH_FRIENDS,
    friends,
  };
}

export function fetchFriends() {
  return (dispatch, getState) => {
    if (getState().main.friends) {
      return; // No need to fetch
    }
    /* eslint-disable consistent-return */
    return fetch('http://localhost:3001/api')
      .then(response => response.json())
      .then(friends => dispatch(setfriends(friends)));
  };
}
