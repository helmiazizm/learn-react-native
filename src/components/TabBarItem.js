import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const TabBarItem = ({text}) => (
  <TouchableOpacity style={[styles.item, styles.border]}>
    <Text style={[styles.itemText]}>{text}</Text>
  </TouchableOpacity>
);
const styles = StyleSheet.create({
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'whitesmoke',
  },
  border: {
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#dddddd',
  },
  itemText: {
    color: 'black',
    fontSize: 16,
  },
  selected: {
    backgroundColor: 'whitesmoke',
  },
  bold: {
    fontWeight: 'bold',
  },
});
export default TabBarItem;
