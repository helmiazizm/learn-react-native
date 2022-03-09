import React from 'react';
import {Text, TouchableOpacity, StyleSheet} from 'react-native';

const TabBarItem = ({list, text, index, setList}) => {
  const handlePress = i => {
    setList(i);
  };

  return (
    <TouchableOpacity
      style={[styles.item, styles.border]}
      onPress={() => handlePress(index)}>
      <Text
        style={[
          styles.itemText,
          {fontFamily: list === index ? 'Roboto-Black' : 'Roboto'},
        ]}>
        {text}
      </Text>
    </TouchableOpacity>
  );
};
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
});
export default TabBarItem;
