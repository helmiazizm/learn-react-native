import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';
import {Login} from './Login';

const LoginScreen = ({login}) => {
  const {changeEmail, changePassword, handleSubmit} = login();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <Text style={styles.title}>Email</Text>
        <TextInput style={styles.input} onChange={changeEmail} />
        <Text style={styles.title}>Password</Text>
        <TextInput
          style={styles.input}
          onChange={changePassword}
          secureTextEntry={true}
        />
        <View style={styles.buttonPosition}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleSubmit()}>
            <Text style={{fontSize: 16, fontWeight: 'bold'}}>Login</Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D18CE0',
    justifyContent: 'center',
  },
  form: {
    flex: 1,
    marginVertical: 12,
    marginHorizontal: 6,
    justifyContent: 'center',
  },
  title: {
    marginLeft: 12,
    fontSize: 16,
    color: '#EEEEEE',
    fontWeight: 'bold',
  },
  buttonPosition: {
    flexDirection: 'row',
    justifyContent: 'flex-end',
  },
  button: {
    backgroundColor: '#ECA6A6',
    alignItems: 'center',
    width: 100,
    margin: 12,
    padding: 12,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderColor: '#EEEEEE',
    color: 'black',
    padding: 10,
    backgroundColor: '#E2DEA9',
  },
});

export default LoginScreen;
