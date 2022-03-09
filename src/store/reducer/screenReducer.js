import {ActionType} from '../globalActionType';

const screenState = {
  list: 0,
};

export const screenReducer = (state = screenState, action) => {
  switch (action.type) {
    case ActionType.SCREEN.ALL:
      return {
        ...state,
        list: 0,
      };
      break;
    case ActionType.SCREEN.FINISHED:
      return {
        ...state,
        list: 1,
      };
      break;
    case ActionType.SCREEN.UNFINISHED:
      return {
        ...state,
        list: 2,
      };
      break;
    default:
      break;
  }
};
