import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import Storage from '../store/Storage';
import ToDo from './ToDo';

const ToDoList = ({list}) => {
  const {allActivity, allFinished, setAllActivity, setAllFinished} = Storage();
  const [done, setDone] = useState({});

  const handleDone = index => {
    setDone({
      ...done,
      [index]: !done[index],
    });
  };

  const handleDelete = text => {
    setAllActivity(allActivity.filter(value => value !== text));
    setAllFinished(allFinished.filter(value => value !== text));
  };

  let viewPage;

  switch (list) {
    case 0:
      viewPage = allActivity.map((act, index) => {
        return (
          <ToDo
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
      viewPage = allActivity.map((act, index) => {
        if (allFinished.includes(act) === true) {
          return (
            <ToDo
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
      viewPage = allActivity.map((act, index) => {
        if (allFinished.includes(act) === false) {
          return (
            <ToDo
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
