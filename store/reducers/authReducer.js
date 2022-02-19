import { SET_USER_AUTH } from '../types'

const initialState = {
  userAuth: false
}
export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_USER_AUTH:
      return {
        ...state,
        userAuth: action.data,
      }
    default:
      return state;
  }
}