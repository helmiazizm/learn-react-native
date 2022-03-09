import {combineReducers} from 'redux';
import {actionReducer} from './reducer/actionReducer';
import {screenReducer} from './reducer/screenReducer';

const rootReducer = combineReducers({
  action: actionReducer,
  screen: screenReducer,
});

export default rootReducer;
