import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {ActionType} from '../store/globalActionType';
import ToDo from './ToDo';

const ToDoList = () => {
  const [done, setDone] = useState({});
  const dispatch = useDispatch();
  const setActivityDone = (doneAct, text) => {
    dispatch({type: ActionType.DONE, done: doneAct, text: text});
  };
  const setActivityDelete = text => {
    dispatch({type: ActionType.DELETE, text: text});
  };
  const activity = useSelector(state => state.action);
  const screen = useSelector(state => state.screen);

  const handleDone = text => {
    setDone({
      ...done,
      [text]: !done[text],
    });
    setActivityDone(done[text], text);
  };

  const handleDelete = text => {
    setActivityDelete(text);
  };

  let viewPage;

  switch (screen.list) {
    case 0:
      viewPage = activity.allActivity.map((act, index) => {
        return (
          <ToDo
            key={`todo0${index}`}
            text={act}
            index={index}
            done={done}
            handleDone={handleDone}
            handleDelete={handleDelete}
          />
        );
      });
      break;
    case 1:
      viewPage = activity.allActivity.map((act, index) => {
        if (activity.allFinished.includes(act) === true) {
          return (
            <ToDo
              key={`todo1${index}`}
              text={act}
              index={index}
              done={done}
              handleDone={handleDone}
              handleDelete={handleDelete}
            />
          );
        }
      });
      break;
    case 2:
      viewPage = activity.allActivity.map((act, index) => {
        if (activity.allFinished.includes(act) === false) {
          return (
            <ToDo
              key={`todo2${index}`}
              text={act}
              index={index}
              done={done}
              handleDone={handleDone}
              handleDelete={handleDelete}
            />
          );
        }
      });
      break;
    default:
      break;
  }

  return <View style={styles.list}>{viewPage}</View>;
};

const styles = StyleSheet.create({
  list: {
    marginVertical: 20,
  },
});

export default ToDoList;
