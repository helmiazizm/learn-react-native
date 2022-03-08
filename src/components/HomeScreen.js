import React from 'react';
import {View} from 'react-native';
import Content from './Content';
import Header from './Header';
import ToDoList from './ToDoList';

const HomeScreen = ({styles}) => {
  return (
    <View style={styles.sectionContainer}>
      <View style={styles.container}>
        <Header styles={styles} />
        <Content styles={styles} />
        <ToDoList />
      </View>
    </View>
  );
};

export default HomeScreen;
