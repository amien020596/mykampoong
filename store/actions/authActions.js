import { SET_USER_AUTH } from '../types';

export const setUserAuth = (data) => dispatch => {
  dispatch({
    type: SET_USER_AUTH,
    data
  })
}