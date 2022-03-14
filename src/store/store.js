import {combineReducers} from 'redux';
import {actionReducer} from './reducer/actionReducer';

const rootReducer = combineReducers({
  action: actionReducer,
});

export default rootReducer;
