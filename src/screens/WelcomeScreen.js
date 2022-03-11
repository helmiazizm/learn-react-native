import React from 'react';
import {
  Image,
  SafeAreaView,
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
} from 'react-native';
import {goToScreen} from '../navigation/NavigationHelper';
import {LOGIN_PATH} from '../navigation/NavigationPath';

const WelcomeScreen = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.texts}>Hello</Text>
      <Image
        source={require('../assets/Images/undraw_People_re_8spw.png')}
        style={{height: 256, width: 288}}
      />
      <View style={styles.buttonView}>
        <TouchableOpacity
          style={styles.button}
          onPress={() => goToScreen(LOGIN_PATH, false)}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

// const onNavigateLogin = onNavigate => onNavigate.navigate(LOGIN_PATH);

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  texts: {
    fontSize: 36,
    fontFamily: 'RobotoCondensed-Bold',
  },
  buttonView: {
    alignSelf: 'stretch',
  },
  button: {
    backgroundColor: '#D77FA1',
    alignItems: 'center',
    borderRadius: 10,
    margin: 20,
    padding: 12,
  },
  buttonText: {
    color: '#D6E5FA',
    fontWeight: 'bold',
    fontFamily: 'RobotoCondensed-Regular',
    fontSize: 16,
  },
});
// /home/user/FirstProject/src/assets/Images/undraw_People_re_8spw.png
export default WelcomeScreen;
