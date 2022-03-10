import React from 'react';
import {SafeAreaView, ScrollView, StyleSheet, View} from 'react-native';
import Form from '../containers/Form';
import Header from '../components/Header';
import ToDoList from '../containers/ToDoList';
import TabBar from '../containers/TabBar';
import LinearGradient from 'react-native-linear-gradient';

const HomeScreen = () => {
  return (
    <LinearGradient colors={['pink', 'purple']} style={styles.sectionContainer}>
      <View style={styles.container}>
        <Header />
        <Form />
        <SafeAreaView style={styles.sectionContainer}>
          <ToDoList />
        </SafeAreaView>
      </View>
      <TabBar />
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  sectionContainer: {
    flex: 1,
  },
  container: {
    flex: 1,
    marginTop: 32,
    paddingHorizontal: 24,
  },
});

export default HomeScreen;