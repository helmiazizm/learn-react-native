import React from 'react';
import {Text, TouchableOpacity, View, StyleSheet} from 'react-native';

const SubmitButton = () => (
  <View style={styles.buttonContainer}>
    <View style={styles.buttonFlex}>
      <TouchableOpacity underlayColor="#efefef" style={styles.button}>
        <Text style={styles.submit}>Submit</Text>
      </TouchableOpacity>
      <TouchableOpacity underlayColor="#efefef" style={styles.buttonCancel}>
        <Text style={styles.cancel}>Cancel</Text>
      </TouchableOpacity>
    </View>
  </View>
);
const styles = StyleSheet.create({
  buttonContainer: {
    alignItems: 'center',
  },
  buttonFlex: {
    flexDirection: 'row',
  },
  button: {
    // height: '25%',
    marginLeft: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'grey',
    // width: '30%',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.1)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonCancel: {
    // height: '25%',
    marginLeft: 10,
    paddingVertical: 10,
    paddingHorizontal: 15,
    backgroundColor: 'whitesmoke',
    // width: '30%',
    borderWidth: 1,
    borderColor: 'rgba(0,0,0,.1)',
    borderRadius: 10,
    justifyContent: 'center',
    alignItems: 'center',
  },
  submit: {
    color: 'white',
    fontWeight: 'bold',
  },
  cancel: {
    color: 'black',
    fontWeight: 'bold',
  },
});
export default SubmitButton;
