import { User } from '../models/User';
import { USER_ACTION_CONSTANTS, UpdateUserActionType } from '../actions/UserActions';
import {newState} from "../NewState";

export const userReducer = (state = new User(), action) => {
  if (
    action.type === USER_ACTION_CONSTANTS.UPDATE_USER_ID_ACTION_TYPE ||
    action.type === USER_ACTION_CONSTANTS.UPDATE_USER_DATA_ACTION_TYPE ||
    action.type === USER_ACTION_CONSTANTS.RESET_USER_ACTION_TYPE
  ) {
    return newState(state, action.user);
  } else {
    return state;
  }
};
