import {StyleSheet, Text, TouchableOpacity} from 'react-native';
import {goToScreen} from '../navigation/NavigationHelper';
import {WELCOME_PATH} from '../navigation/NavigationPath';
import React from 'react';
import LoginService from '../services/LoginService';

const Logout = () => {
  const {callLogoutService} = LoginService();

  const handleLogout = async () => {
    try {
      const res = await callLogoutService();
      console.log('response', res);
      goToScreen(WELCOME_PATH, true);
    } catch (error) {
      console.log(error);
      throw error;
    }
  };

  return (
    <TouchableOpacity style={[styles.item]} onPress={handleLogout}>
      <Text style={styles.itemText}>Logout</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  button: {
    backgroundColor: '#ECA6A6',
    alignItems: 'center',
    width: 100,
    margin: 12,
    padding: 12,
  },
  item: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#ECA6A6',
  },
  itemText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

export default Logout;
