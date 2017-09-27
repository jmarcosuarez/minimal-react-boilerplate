import fetch from 'isomorphic-fetch';
import * as actionTypes from '../actions/actionTypes';

function getFriends() {
  return {
    type: actionTypes.FRIENDS_GET_ALL,
  };
}

function getFriendsSuccess(friends) {
  return {
    type: actionTypes.FRIENDS_GET_ALL_SUCCESS,
    friends,
  };
}

function getFriendsError(error) {
  return {
    type: actionTypes.FRIENDS_GET_ALL_ERROR,
    error,
  };
}

export function sendGetFriendsRequest() {
  return (dispatch, getState) => {
    if (getState().main.friends) {
      return; // No need to fetch
    }
    dispatch(getFriends());
    /* eslint-disable consistent-return */
    return fetch('http://localhost:3001/api')
      .then(response => response.json())
      .then(friends => dispatch(getFriendsSuccess(friends)))
      .catch(error => dispatch(getFriendsError(error)));
  };
}
