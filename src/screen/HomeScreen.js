import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Input from '../components/Input';
import Form from '../containers/Form';
import Header from '../components/Header';
import SubmitButton from '../components/SubmitButton';
import ToDoList from '../containers/ToDoList';
import TabBar from '../containers/TabBar';
// import ToDoList from './ToDoListFilling';

const HomeScreen = () => {
  const [list, setList] = useState(0);

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.container}>
        <Header />
        <Form />
        <ScrollView>
          <ToDoList list={list} />
        </ScrollView>
      </View>
      <TabBar setList={setList} />
    </View>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
    backgroundColor: '#c0c0c0',
  },
  container: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default HomeScreen;
