import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ToDoButton from '../components/ToDoButtons';

const ToDo = ({text, index, done, handleDone, handleDelete}) => {
  return (
    <View style={styles.todoContainer}>
      <Text
        style={[
          styles.todoText,
          {textDecorationLine: done[text] ? 'line-through' : null},
        ]}>
        {text}
      </Text>
      <View style={styles.buttons}>
        <ToDoButton
          buttonConfig={{color: 'green'}}
          command={done[text] ? 'Undo' : 'Done'}
          index={index}
          text={text}
          handleDone={handleDone}
        />
        <ToDoButton
          buttonConfig={{color: 'red'}}
          command="Delete"
          index={index}
          text={text}
          handleDelete={handleDelete}
        />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    marginBottom: 15,
    backgroundColor: '#ffffff',
    borderWidth: 1,
    paddingHorizontal: 16,
    borderColor: '#000000',
    borderRadius: 10,
    paddingVertical: 7,
    elevation: 3,
    flexDirection: 'row',
    alignItems: 'center',
  },
  todoText: {
    fontSize: 16,
    width: '65%',
    color: 'black',
  },^\s*$^\s*$
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default ToDo;
