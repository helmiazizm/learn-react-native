import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerView}>
      <Text style={styles.header}>My To Do List</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    alignItems: 'center',
  },
  header: {
    fontSize: 30,
    fontWeight: '600',
    fontFamily: 'sans-serif-light',
    color: '#000000',
  },
});

export default Header;
