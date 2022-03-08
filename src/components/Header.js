import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const Header = () => {
  return (
    <View style={styles.headerView}>
      <Text style={styles.header}>Todos</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  headerView: {
    alignItems: 'center',
  },
  header: {
    fontSize: 40,
    fontWeight: '600',
    fontFamily: 'sans-serif-light',
    color: '#000000',
  },
});

export default Header;
