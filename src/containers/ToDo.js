import React from 'react';
import {StyleSheet, Text, View} from 'react-native';
import ToDoButton from '../components/ToDoButtons';

const ToDo = ({text}) => {
  return (
    <View style={styles.todoContainer}>
      <Text style={styles.todoText}>{text}</Text>
      <View style={styles.buttons}>
        <ToDoButton buttonConfig={{color: 'green'}} text="Done" />
        <ToDoButton buttonConfig={{color: 'red'}} text="Delete" />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  todoContainer: {
    marginVertical: 8,
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
  },
  buttons: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'flex-end',
    alignItems: 'center',
  },
});

export default ToDo;
