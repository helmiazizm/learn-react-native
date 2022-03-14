import React from 'react';
import {
  SafeAreaView,
  View,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
} from 'react-native';

const LoginScreen = ({login}) => {
  const {handleSubmit, setFieldValue, errors, touched} = login();

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.form}>
        <View style={styles.labelPlacement}>
          <Text style={styles.title}>Email</Text>
          <Text style={styles.warning}>
            {errors.email && touched.email ? errors.email : null}
          </Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={e => setFieldValue('email', e)}
        />

        <View style={styles.labelPlacement}>
          <Text style={styles.title}>Password</Text>
          <Text style={styles.warning}>
            {errors.password && touched.password ? errors.password : null}
          </Text>
        </View>
        <TextInput
          style={styles.input}
          onChangeText={e => setFieldValue('password', e)}
          secureTextEntry={true}
        />
        <View style={styles.buttonPosition}>
          <TouchableOpacity
            style={styles.button}
            onPress={() => handleSubmit()}>
            <Text style={{fontSize: 16, fontWeight: 'bold', color: 'black'}}>
              Login
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#D77FA1',
    justifyContent: 'center',
  },
  labelPlacement: {
    flexDirection: 'row',
    justifyContent: 'space-between',
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
    backgroundColor: '#FCBF49',
    alignItems: 'center',
    width: 100,
    margin: 12,
    padding: 12,
  },
  input: {
    height: 40,
    margin: 12,
    borderWidth: 1,
    borderRadius: 5,
    borderColor: '#EEEEEE',
    color: 'black',
    padding: 10,
    backgroundColor: '#E2DEA9',
  },
  warning: {
    color: 'red',
    fontSize: 12,
    fontWeight: 'bold',
    marginRight: 12,
    alignSelf: 'flex-end',
  },
});

export default LoginScreen;
