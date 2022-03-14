import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {goToScreen} from '../navigation/NavigationHelper';
import {WELCOME_PATH} from '../navigation/NavigationPath';
import React from 'react';

const Logout = () => (
  <TouchableOpacity
    style={styles.button}
    onPress={() => goToScreen(WELCOME_PATH, true)}>
    <Text style={{fontSize: 16, fontWeight: 'bold'}}>Logout</Text>
  </TouchableOpacity>
);

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ECA6A6',
    alignItems: 'center',
    width: 100,
    margin: 12,
    padding: 12,
  },
});

export default Logout;