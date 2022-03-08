import React from 'react';
import {Image, SafeAreaView, StyleSheet, Text} from 'react-native';

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.texts}>Hello</Text>
      <Image
        source={require('../assets/Images/undraw_People_re_8spw.png')}
        style={{height: 256, width: 256}}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  texts: {
    fontSize: 36,
    fontFamily: 'RobotoCondensed-Bold',
  },
});
// /home/user/FirstProject/src/assets/Images/undraw_People_re_8spw.png
export default WelcomeScreen;
