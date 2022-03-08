import React from 'react';
import {StyleSheet, View} from 'react-native';
import ToDo from './ToDo';

const ToDoList = () => {
  const activity = [
    'Mencuci baju',
    'Mengeluarkan sedekah',
    'Menanam ubi',
    'Menamatkan Final Fantasy',
    'Menjemur bantal',
    'Membuat coklat panas',
    'Merapikan kamar',
    'Mandi pagi',
  ];

  return (
    <View style={styles.list}>
      {activity.map((act, index) => {
        return <ToDo text={act} />;
      })}
    </View>
  );
};

const styles = StyleSheet.create({
  list: {
    marginVertical: 20,
  },
});

export default ToDoList;
