import React, {useState} from 'react';
import {StyleSheet, View} from 'react-native';
import ToDo from './ToDo';

const ToDoList = ({
  list,
  allActivity,
  allFinished,
  setAllActivity,
  setAllFinished,
}) => {
  const [done, setDone] = useState({});

  const handleDone = text => {
    setDone({
      ...done,
      [text]: !done[text],
    });
    if (done[text]) {
      setAllFinished(allFinished.filter(value => value !== text));
    } else {
      setAllFinished([...allFinished, text]);
    }
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
      viewPage = allActivity.map((act, index) => {
        if (allFinished.includes(act) === true) {
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
      viewPage = allActivity.map((act, index) => {
        if (allFinished.includes(act) === false) {
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
