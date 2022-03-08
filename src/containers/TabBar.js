import React from 'react';
import {View, StyleSheet} from 'react-native';
import TabBarItem from '../components/TabBarItem';

const TabBar = () => (
  <View style={styles.container}>
    <TabBarItem text="All" />
    <TabBarItem text="Finished" />
    <TabBarItem text="Unfinished" />
  </View>
);
const styles = StyleSheet.create({
  container: {
    height: 50,
    flexDirection: 'row',
    borderTopWidth: 1,
    borderTopLeftRadius: 10,
    borderTopRightRadius: 10,
    borderTopColor: '#dddddd',
  },
});
export default TabBar;
