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
    <TouchableOpacity style={styles.button} onPress={handleLogout}>
      <Text style={{fontSize: 16, fontWeight: 'bold'}}>Logout</Text>
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
});

export default Logout;
