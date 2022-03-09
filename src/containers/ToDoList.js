import React, {useState} from 'react';
import {StyleSheet, View, FlatList} from 'react-native';
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

  const renderItem = ({item, index}) => (
    <ToDo
      text={item}
      index={index}
      done={done}
      handleDone={handleDone}
      handleDelete={handleDelete}
    />
  );

  const filterItem = (act, bool) => {
    if (activity.allFinished.includes(act) === bool) {
      return act;
    }
  };

  let viewPage;

  switch (screen.list) {
    case 0:
      viewPage = (
        <FlatList
          data={activity.allActivity}
          renderItem={renderItem}
          keyExtractor={(item, index) => `todo0${index}`}
        />
      );
      break;
    case 1:
      viewPage = (
        <FlatList
          data={activity.allActivity.map(act => filterItem(act, true))}
          renderItem={renderItem}
          keyExtractor={(item, index) => `todo0${index}`}
        />
      );
      break;
    case 2:
      viewPage = (
        <FlatList
          data={activity.allActivity.map(act => filterItem(act, false))}
          renderItem={renderItem}
          keyExtractor={(item, index) => `todo0${index}`}
        />
      );
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
