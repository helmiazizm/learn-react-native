import {ActionType} from '../globalActionType';

const actionState = {
  modalValue: 0,
};

export const actionReducer = (state = actionState, action) => {
  switch (action.type) {
    case ActionType.SCREEN:
      return {
        ...state,
        modalValue: action.value,
      };
    default:
      return state;
  }
};
