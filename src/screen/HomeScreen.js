import React, {useState} from 'react';
import {ScrollView, StyleSheet, View} from 'react-native';
import Form from '../containers/Form';
import Header from '../components/Header';
import ToDoList from '../containers/ToDoList';
import TabBar from '../containers/TabBar';
import Storage from '../store/Storage';

const HomeScreen = () => {
  const [list, setList] = useState(0);
  const {allActivity, allFinished, setAllActivity, setAllFinished} = Storage();

  return (
    <View style={styles.sectionContainer}>
      <View style={styles.container}>
        <Header />
        <Form allActivity={allActivity} setAllActivity={setAllActivity} />
        <ScrollView>
          <ToDoList
            list={list}
            allActivity={allActivity}
            allFinished={allFinished}
            setAllActivity={setAllActivity}
            setAllFinished={setAllFinished}
          />
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
