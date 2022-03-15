import {combineReducers, createStore} from 'redux';
import LoginReducer from './login/LoginReducer';
import ToDoReducer from './todo/ToDoReducer';
import AppReducer from './app/AppReducer';

const rootReducer = combineReducers({AppReducer, ToDoReducer, LoginReducer});

const configureStore = () => {
  return createStore(rootReducer);
};

export default configureStore;
