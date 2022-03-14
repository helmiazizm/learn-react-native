import {ActionType} from '../globalActionType';

const actionState = {
  allActivity: [
    'Mencuci baju',
    'Mengeluarkan sedekah',
    'Menanam ubi',
    'Menamatkan Final Fantasy',
    'Menjemur bantal',
    'Membuat coklat panas',
    'Merapikan kamar',
    'Mandi pagi',
  ],
  allFinished: [],
};

export const actionReducer = (state = actionState, action) => {
  switch (action.type) {
    case ActionType.ADD:
      return {
        ...state,
        allActivity: [...state.allActivity, action.text],
      };
    case ActionType.DELETE:
      return {
        ...state,
        allActivity: state.allActivity.filter(value => value !== action.text),
        allFinished: state.allFinished.filter(value => value !== action.text),
      };
    case ActionType.DONE:
      if (action.done) {
        return {
          ...state,
          allFinished: state.allFinished.filter(value => value !== action.text),
        };
      } else {
        return {
          ...state,
          allFinished: [...state.allFinished, action.text],
        };
      }
    default:
      return state;
  }
};
